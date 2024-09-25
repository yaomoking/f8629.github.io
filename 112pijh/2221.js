function initializeContent() {
    const pdfData = [
        { src: "https://drive.google.com/file/d/1-qDw5j0_3AZAB8h2IcIC0HdZy6VvSWxO/preview", title: "英文語領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/10Mya8nxq953bZDxJhQJ0iU0pC39i2vBN/preview", title: "自然領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/1Cjy2-TIO4Dg8DLzbaRwpEGCuKRPxYiI9/preview", title: "國文領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/1rBUDzyFt9ejjVrR47dJPA_C7muOtBczo/preview", title: "數學領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/1LwrIOuHcRIQoobSdQOMKKC4hLi4e6FCX/preview", title: "社會領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/1toIxdNypU0ybGRCzeaUkuM1s3BccNY59/preview", title: "藝術領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/1GZUNdma4viE3zMu_6qkHkC9g3Zqm41I6/preview", title: "健體領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/1eeQkACredbZ59lsXuzGOWKtYOWY_STpb/preview", title: "綜合領域", type: "pdf" },
        { src: "https://drive.google.com/file/d/1SIHEu5ytonYqlpl8OEAbMcj8aOpNXL_3/preview", title: "科技領域", type: "pdf" }
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
