import streamlit as st
import requests
import random
from PIL import Image, ImageDraw

"""
from transformers import pipeline
from audiocraft.models import musicgen
from audiocraft.utils.notebook import display_audio
import torch
from audiocraft.data.audio import audio_write
model = musicgen.MusicGen.get_pretrained('medium', device='cpu')
model.set_generation_params(duration=5)
"""

def getColor(dt):
    print(dt['score'])
    score = float(dt['score'])
    if dt['label'] == 'POSITIVE':
        pos_percentage = score
        neg_percentage = 1 - score
    else:
        neg_percentage = score
        pos_percentage = 1 - score

    blue = random.randint(0, 80)
    red = neg_percentage * 254
    green = pos_percentage * 254

    return f"#{int(red):02x}{int(green):02x}{int(blue):02x}"

def get_audio_file_path2(journal_entry): 
    res = model.generate([journal_entry], progress=True)
    audio_write('sounds/test', res.cpu()[0][0], model.sample_rate, strategy="loudness", loudness_compressor=True)

def get_audio_file_path(journal_entry):
    if 'excited' in journal_entry: 
        return 'sounds/happy.wav'
    return 'sounds/sad.wav'

def add_journal_entry_page():
    st.title('MelodicMind - Add a Journal Entry')
    st.write('Write about your day or an experience you want to journal. Talk about how you\'re feeling')

    journal_entry = st.text_area("Enter your journal entry here...", "")

    if st.button("Save Entry"):
        st.info("Saving your journal entry...")
        # Save entry to storage, along with extra info
        print(journal_entry)
        dt = {}
        sentiment_color = None #getColor(journal_entry)
        if 'excited' in journal_entry:
            #dt = sent_pipeline(prompt)
            dt = {'label': 'POSITIVE', 'score': '0.995864324'}
            sentiment_color = getColor(dt)
        else:
            dt = {'label': 'NEGATIVE', 'score': '0.785038509'}
            sentiment_color = getColor(dt)

        st.success("Journal entry saved successfully!")

        st.write("Sentiment Color:")
        rect = Image.new("RGB", (200, 200), sentiment_color)
        st.image(rect, use_column_width=True)

        audio_file_path = get_audio_file_path(journal_entry)
        st.write("Audio file:")
        st.audio(audio_file_path)

        if 'excited' in journal_entry:
            st.success('Sentiment: ' + dt['label'] + '\nScore:' + dt['score'])
        else:
            st.error('Sentiment:' + dt['label'] + '\nScore:' + dt['score'])
        

# Call the function to render the "Add a Journal Entry" page
add_journal_entry_page()