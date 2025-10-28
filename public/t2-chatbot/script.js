// DOM Elements
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

// Configuration - REPLACE 'YOUR_API_KEY_HERE' WITH YOUR ACTUAL GEMINI API KEY
const API_KEY = 'AIzaSyBMJtWjRnh-9zGZUH0vRy3lMKEBm79t2k8'; // User's Gemini API key

// Function to add a message to the chat
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    
    const timestamp = new Date();
    const timeString = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Format the content to preserve line breaks and spacing
    const formattedContent = formatMessageContent(content);
    
    messageDiv.innerHTML = `
        <div class="message-content">
            ${formattedContent}
        </div>
        <div class="message-timestamp">${timeString}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
}

// Function to format message content with proper HTML
function formatMessageContent(content) {
    // Convert line breaks to <br> tags
    let formattedContent = content.replace(/\n/g, '<br>');
    
    // Convert markdown-style bold to HTML bold
    formattedContent = formattedContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert markdown-style italic to HTML italic
    formattedContent = formattedContent.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convert markdown-style code blocks to HTML
    formattedContent = formattedContent.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // Convert inline code to HTML
    formattedContent = formattedContent.replace(/`(.*?)`/g, '<code>$1</code>');
    
    // Convert markdown-style headers to HTML headers
    formattedContent = formattedContent.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    formattedContent = formattedContent.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    formattedContent = formattedContent.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    
    // Convert markdown-style lists to HTML lists
    formattedContent = formattedContent.replace(/^\d+\. (.*$)/gm, '<li>$1</li>');
    formattedContent = formattedContent.replace(/<li>(.*?)(?=<li>|$)/gs, '<ol>$&</ol>');
    
    formattedContent = formattedContent.replace(/^\- (.*$)/gm, '<li>$1</li>');
    formattedContent = formattedContent.replace(/<li>(.*?)(?=<li>|$)/gs, '<ul>$&</ul>');
    
    // Wrap in paragraph if no block elements
    if (!formattedContent.match(/<(h[1-6]|p|div|pre|ul|ol|strong|em|li)/)) {
        formattedContent = `<p>${formattedContent}</p>`;
    }
    
    return formattedContent;
}

// Function to show typing indicator
function showTypingIndicator() {
    // Remove any existing typing indicator
    hideTypingIndicator();
    
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.classList.add('message', 'bot-message');
    typingDiv.innerHTML = `
        <div class="message-content">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

// Function to hide typing indicator
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Function to get response from Gemini API
async function getGeminiResponse(prompt) {
    // If no API key is provided, show an error
    if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
        return "Please add your Gemini API key to the script.js file. Replace 'YOUR_API_KEY_HERE' with your actual API key from Google AI Studio.";
    }
    
    try {
        // Using gemini-2.5-pro model as requested
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${API_KEY}`;
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API request failed: ${errorData.error?.message || response.statusText}`);
        }
        
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("API Error:", error);
        return `Sorry, I encountered an error: ${error.message}. Please check your API key and network connection.`;
    }
}

// Function to handle form submission
async function handleSubmit(event) {
    event.preventDefault();
    
    const message = userInput.value.trim();
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, true);
    
    // Clear input
    userInput.value = '';
    
    // Show typing indicator
    const typingIndicator = showTypingIndicator();
    
    try {
        // Get response from Gemini API
        const response = await getGeminiResponse(message);
        
        // Hide typing indicator
        hideTypingIndicator();
        
        // Add bot response with full formatting
        addMessage(response);
    } catch (error) {
        // Hide typing indicator
        hideTypingIndicator();
        
        // Show error message
        addMessage("Sorry, I encountered an error. Please check your API key and try again.");
        console.error("Error:", error);
    }
}

// Event listener for form submission
chatForm.addEventListener('submit', handleSubmit);

// Allow sending message with Enter key (without Shift)
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        chatForm.dispatchEvent(new Event('submit'));
    }
});

// Initial welcome message
document.addEventListener('DOMContentLoaded', function() {
    // Update the existing welcome message
    const welcomeMessage = document.querySelector('.message-content p');
    if (welcomeMessage) {
        welcomeMessage.textContent = "Hello! I'm your Pi Dot Assistant. How can I help you today?";
    }
});