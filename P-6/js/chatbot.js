// Chatbot functionality
document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');
    
    // Auto-resize textarea
    messageInput.addEventListener('input', () => {
        messageInput.style.height = 'auto';
        messageInput.style.height = messageInput.scrollHeight + 'px';
    });

    // Send message on Enter (Shift+Enter for new line)
    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    sendButton.addEventListener('click', sendMessage);

    function sendMessage() {
        const message = messageInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');

        // Clear input
        messageInput.value = '';
        messageInput.style.height = 'auto';

        // Simulate AI response
        simulateResponse(message);
    }

    function addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${content}</p>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function simulateResponse(userMessage) {
        // Simulate typing indicator
        const responses = [
            "I understand you're asking about trade documentation. Let me help you with that.",
            "Based on current regulations, here's what you need to know...",
            "Would you like me to provide more specific information about any particular aspect?",
        ];

        // Randomly select a response
        const response = responses[Math.floor(Math.random() * responses.length)];

        // Simulate typing delay
        setTimeout(() => {
            addMessage(response, 'assistant');
        }, 1000);
    }

    // Handle chat history
    const historyItems = document.querySelectorAll('.history-item');
    historyItems.forEach(item => {
        item.addEventListener('click', () => {
            historyItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});