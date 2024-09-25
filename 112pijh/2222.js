function initializeContent() {
    const pdfData = [
        { src: "https://drive.google.com/file/d/1Qq8I7RD-D85O_TdAIBgg8EqzpnvJePzy/preview", title: "本土語領域教材", type: "pdf" },
        { src: "https://drive.google.com/file/d/1q3dMfX4MlC1K1rT10cWgu6lUuAz1iI5B/preview", title: "自然領域教材", type: "pdf" },
        { src: "https://drive.google.com/file/d/1QTu5DveHBganIaXz9mnyryODcTHp4TOB/preview", title: "社會領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/1ItEKln-Lw6il5A5V__fsF8nk-V_KMu-D/preview", title: "科技領域-資訊", type: "pdf" },
        { src: "https://drive.google.com/file/d/1tMsPq-NlQWwqBNFRftPaKdFvo43yvXcM/preview", title: "國文領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/1w8bQXrMhEG1jAcd5Q5u1PLQsCAJ4BoZR/preview", title: "綜合領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/1Ue17UygrUBdfSmDJYTQR3F3Kk8z7YzJv/preview", title: "數學領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/1YstHMS1mLWofYT5JQJsPlEWJLPOAaRqm/preview", title: "藝術領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/10ja2y2nx9dpHIZf4iasoFhvcbLcqAgw3/preview", title: "體健領域", type: "pdf" },
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

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = item.title;
            cardBody.appendChild(cardTitle);

            cardDiv.appendChild(cardBody);
        }

        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);
    });
}

// Call the function to initialize the content when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeContent();
});
