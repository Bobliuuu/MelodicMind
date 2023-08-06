import streamlit as st
import requests
from transformers import pipeline
from audiocraft.models import musicgen
from audiocraft.utils.notebook import display_audio
import torch
from audiocraft.data.audio import audio_write

sent_pipeline = pipeline("text-classification")
SECOND = 4000
model = musicgen.MusicGen.get_pretrained('medium', device='cuda')
model.set_generation_params(duration=8)

# Function to get sentiment colors based on sentiment percentages
def getColor(dt):
    if dt['LABEL'] == 'POSITIVE':
        pos_percentage = dt['score']
        neg_percentage = 1 - dt['score']
    else:
        neg_percentage = dt['score']
        pos_percentage = 1 - dt['score']

    blue = randint(0, 80)
    red = neg_percentage * 254
    green = pos_percentage * 254

    return f"#{int(red):02x}{int(green):02x}{int(blue):02x}"

def get_audio_file_path(journal_entry): 
    res = model.generate([journal_entry], progress=True)
    audio_write('sounds/test', res.cpu()[0][0], model.sample_rate, strategy="loudness", loudness_compressor=True)

# Create the "Add a Journal Entry" page
def add_journal_entry_page():
    st.title('MelodicMind - Add a Journal Entry')
    st.write('Write about your day or an experience you want to journal. Talk about how you\'re feeling')

    # Get user input text
    journal_entry = st.text_area("Enter your journal entry here...", "")

    if st.button("Save Entry"):
        st.info("Saving your journal entry...")
        # Here, you can save the journal_entry to your database or any other storage.

        dt = sent_pipeline('I love sentiment analysis!')
        get_color(dt)

        # Get sentiment color based on sentiment percentages
        sentiment_color = getColor(journal_entry)
        st.success("Journal entry saved successfully!")

        # Display the sentiment color
        st.write("Sentiment Color:")
        st.image([[sentiment_color]], use_column_width=True, caption=sentiment_color)

        # Display the audio file
        audio_file_path = get_audio_file_path(journal_entry)
        st.write("Audio file:")
        st.audio(audio_file_path)
        
        # Get sentiment
        st.write('Sentiment:', dt['LABEL'], '\n', 'Score:', dt['score'])
        

# Call the function to render the "Add a Journal Entry" page
add_journal_entry_page()