function initializeContent() {
    const pdfData = [
        { src: "2221/英文領域研究會會議紀錄.pdf", title: "英文語領域", type: "pdf" },
        { src: "2221/自然領域研究會會議紀錄.pdf", title: "自然領域", type: "pdf" },
        { src: "2221/國文領域研究會會議紀錄.pdf", title: "國文領域", type: "pdf" },
        { src: "2221/數學領域研究會會議紀錄.pdf", title: "數學領域", type: "pdf" },
        { src: "2221/社會領域研究會會議紀錄.pdf", title: "社會領域", type: "pdf" },
        { src: "2221/藝術領域研究會會議紀錄.pdf", title: "藝術領域", type: "pdf" },
        { src: "2221/健體領域研究會會議紀錄.pdf", title: "健體領域", type: "pdf" },
        { src: "2221/綜合領域研究會會議紀錄.pdf", title: "綜合領域", type: "pdf" },
        { src: "2221/科技領域研究會會議紀錄.pdf", title: "科技領域", type: "pdf" }
    ];

    const container = document.getElementById('pdfCardsContainer');

    pdfData.forEach(item => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4 mb-4';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        const iframe = document.createElement('iframe');
        iframe.src = item.src;
        iframe.className = 'card-img-top';
        iframe.style.height = '380px';
        iframe.frameBorder = '0';
        cardDiv.appendChild(iframe);

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

// Call the function to initialize the content when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeContent();
});
