const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatBox = document.getElementById('chatBox');
const deleteHistoryButton = document.getElementById('delete-btn');

// Function to send a message
function sendMessage() {
  const message = messageInput.value.trim();
  if (message !== '') {
    appendMessage('You', message);
    // Process user input and generate bot response
    const botResponse = getBotResponse(message);
    appendMessage('Chatbot', botResponse);
    // Clear the input after sending
    messageInput.value = '';
  }
}

// Function to get bot response based on user input
function getBotResponse(message) {
  // Convert user input to lowercase for easier comparison
  const lowerCaseMessage = message.toLowerCase();
  
  // Define responses based on keywords
  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
    return 'Hello! How can I assist you?';
  } else if (lowerCaseMessage.includes('help')) {
    return 'Sure, I can help you. What do you need assistance with?';
  } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
    return 'Goodbye! Have a great day!';
  } else {
    return "I'm sorry, I didn't understand that. Can you please rephrase?";
  }
}

// Function to append a message to the chat box
function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  // Automatically scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listener for send button click
sendButton.addEventListener('click', sendMessage);

// Event listener for Enter key press in the input field
messageInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// Event listener for delete history button click
deleteHistoryButton.addEventListener('click', function() {
  // Clear all messages from the chat box
  chatBox.innerHTML = '';
});

// Example: Start the chat with a welcome message
appendMessage('Chatbot', 'Welcome! How can I assist you?');
