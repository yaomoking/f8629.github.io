function initializeContent() {
    const pdfData = [
        { src: "https://drive.google.com/file/d/16IMVvVz6l_oxm6UJ2NNBzEN5XXc632Vb/preview", title: "生涯輔導手冊建置與管理實施計畫", type: "pdf" },
        { src: "https://drive.google.com/file/d/1hwaS-zi3L_kWOJRtvRrIfavpwhtWI8XW/preview", title: "生涯檔案、輔導手冊檢核辦法", type: "pdf" },
    ];

    const container = document.getElementById('imageCardsContainer');
    
    pdfData.forEach(item => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-6 mb-4';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        if (item.type === "pdf") {
            const iframe = document.createElement('iframe');
            iframe.src = item.src;
            iframe.className = 'card-iframe';
            cardDiv.appendChild(iframe);
        } else if (item.type === "img") {
            const img = document.createElement('img');
            img.src = item.src;
            img.className = 'card-img-top';
            img.alt = item.title;
            img.setAttribute('data-bs-toggle', 'modal');
            img.setAttribute('data-bs-target', `#${item.modalId}`);
            cardDiv.appendChild(img);
        }

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = item.title;
        cardBody.appendChild(cardTitle);

        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);
    });
}

// Initialize content when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeContent();
});
