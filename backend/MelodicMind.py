import streamlit as st

st.title('MelodicMind')
st.write('Welcome to MelodicMind, a platform to explore the power of music in enhancing your emotions, memories, and well-being.')

# Add a description about MelodicMind
st.write('MelodicMind allows you to engage with music in various ways to create and experience meaningful moments. '
         'You can add your memories, check the sentiment of your favorite songs, and write journal entries about '
         'how music impacts your life.')

# Display logo image
st.image('logo.jpg', caption='MelodicMind Logo', use_column_width=True)

# List of the three pages
st.write('## Pages:')
st.write('1. Add Memory')
st.write('2. Add Journal Entry')
st.write('3. Talk About It')