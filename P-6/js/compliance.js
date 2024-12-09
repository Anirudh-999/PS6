// Compliance report functionality
document.addEventListener('DOMContentLoaded', () => {
    const downloadPdf = document.getElementById('downloadPdf');
    const exportCsv = document.getElementById('exportCsv');
    const shareReport = document.getElementById('shareReport');

    // Handle PDF download
    downloadPdf?.addEventListener('click', () => {
        console.log('Downloading PDF...');
        simulateDownload('PDF');
    });

    // Handle CSV export
    exportCsv?.addEventListener('click', () => {
        console.log('Exporting CSV...');
        simulateDownload('CSV');
    });

    // Handle report sharing
    shareReport?.addEventListener('click', () => {
        console.log('Sharing report...');
        const shareDialog = {
            title: 'Share Compliance Report',
            text: 'Report URL: https://example.com/report/123',
            url: 'https://example.com/report/123'
        };

        if (navigator.share) {
            navigator.share(shareDialog)
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.log('Error sharing:', error));
        } else {
            alert('Share URL copied to clipboard!');
        }
    });

    // Simulate file download
    function simulateDownload(type) {
        const button = type === 'PDF' ? downloadPdf : exportCsv;
        const originalText = button.textContent;
        
        button.disabled = true;
        button.textContent = `Preparing ${type}...`;

        setTimeout(() => {
            button.disabled = false;
            button.textContent = originalText;
            alert(`${type} downloaded successfully!`);
        }, 1500);
    }

    // Handle finding details buttons
    const findingButtons = document.querySelectorAll('.finding-item button');
    findingButtons.forEach(button => {
        button.addEventListener('click', () => {
            const finding = button.closest('.finding-item');
            const title = finding.querySelector('h3').textContent;
            alert(`Detailed view for: ${title}`);
        });
    });
});