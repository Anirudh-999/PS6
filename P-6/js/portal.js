// Portal integration functionality
document.addEventListener('DOMContentLoaded', () => {
    // Handle portal connections
    const connectButtons = document.querySelectorAll('.portal-item button');
    connectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const portalName = button.closest('.portal-item')
                .querySelector('h3').textContent;
            
            button.disabled = true;
            button.textContent = 'Connecting...';

            // Simulate connection process
            setTimeout(() => {
                button.disabled = false;
                button.textContent = 'Connected';
                button.classList.remove('btn-primary');
                button.classList.add('btn-secondary');
                alert(`Successfully connected to ${portalName}`);
            }, 1500);
        });
    });

    // Handle queue submissions
    const submitButtons = document.querySelectorAll('.queue-item button');
    submitButtons.forEach(button => {
        button.addEventListener('click', () => {
            const queueItem = button.closest('.queue-item');
            const fileName = queueItem.querySelector('h3').textContent;

            button.disabled = true;
            button.textContent = 'Submitting...';

            // Simulate submission process
            setTimeout(() => {
                queueItem.classList.add('processing');
                button.style.display = 'none';
                queueItem.innerHTML += `
                    <div class="progress-bar">
                        <div class="progress" style="width: 0%"></div>
                    </div>
                `;

                // Simulate progress
                let progress = 0;
                const progressBar = queueItem.querySelector('.progress');
                const interval = setInterval(() => {
                    progress += 10;
                    progressBar.style.width = `${progress}%`;

                    if (progress >= 100) {
                        clearInterval(interval);
                        alert(`${fileName} submitted successfully!`);
                        queueItem.remove();
                    }
                }, 500);
            }, 1000);
        });
    });

    // Handle history actions
    const historyButtons = document.querySelectorAll('.history-item button');
    historyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const historyItem = button.closest('.history-item');
            const fileName = historyItem.querySelector('h3').textContent;
            const action = button.textContent;

            if (action === 'View Details') {
                alert(`Viewing details for ${fileName}`);
            } else if (action === 'Retry') {
                button.disabled = true;
                button.textContent = 'Retrying...';

                setTimeout(() => {
                    button.disabled = false;
                    button.textContent = 'Retry';
                    alert(`Retrying submission for ${fileName}`);
                }, 1500);
            }
        });
    });
});