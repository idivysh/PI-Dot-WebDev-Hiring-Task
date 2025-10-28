# Gemini Chatbot

A modern, responsive chatbot interface that integrates with Google's Gemini API to provide AI-powered conversations.

## Features

- Clean, modern UI with gradient backgrounds and glassmorphism design
- Responsive layout that works on mobile and desktop
- Real-time chat interface with typing indicators
- Smooth animations and transitions
- API integration with Google's Gemini Pro model
- Keyboard shortcuts for enhanced usability

## Setup Instructions

1. **Get a Gemini API Key:**
   - Go to [Google AI Studio](https://aistudio.google.com/)
   - Create an account or sign in
   - Navigate to "API Keys" and create a new key
   - Copy your API key

2. **Configure the Chatbot:**
   - Open `script.js` in a text editor
   - Find the line: `const API_KEY = 'YOUR_API_KEY_HERE';`
   - Replace `'YOUR_API_KEY_HERE'` with your actual API key
   - Save the file

3. **Run the Chatbot:**
   - Open `index.html` in a web browser
   - Start chatting with the Gemini AI!

## Usage

- Type your message in the input field at the bottom
- Press Enter or click the send button to submit
- Use Ctrl+Shift+K to clear the chat history
- Use Ctrl+Shift+L to check API key status

## Technical Details

- **Frontend:** HTML, CSS, JavaScript
- **API:** Google Gemini Pro via REST API
- **Styling:** Modern CSS with flexbox, gradients, and animations
- **Deployment:** Static files - can be hosted anywhere

## Customization

You can easily customize the chatbot by modifying:
- `styles.css` - Change colors, fonts, and layout
- `index.html` - Modify the structure or add new elements
- `script.js` - Adjust functionality or integrate with other APIs

## Troubleshooting

- If you see an API key error, double-check that you've correctly replaced `'YOUR_API_KEY_HERE'` with your actual key
- If the API doesn't respond, check your internet connection
- For CORS issues, consider hosting the files on a local server

## API Limitations

- The Gemini API has rate limits that may restrict usage
- Some content policies may prevent certain types of queries
- Responses are limited by the capabilities of the underlying model