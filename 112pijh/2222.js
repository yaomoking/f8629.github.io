function initializeContent() {
    const pdfData = [
        { src: "2222/112學年度-生涯發展教育融入領域課程-本土語領域.pdf", title: "本土語領域教材", type: "pdf" },
        { src: "2222/112學年度-生涯發展教育融入領域課程-自然領域.pdf", title: "自然領域教材", type: "pdf" },
        { src: "2222/112學年度-生涯發展教育融入領域課程-社會領域.pdf", title: "社會領域", type: "pdf" },
        { src: "2222/112學年度-生涯發展教育融入領域課程-科技領域-資訊.pdf", title: "科技領域-資訊", type: "pdf" },
        { src: "2222/112學年度-生涯發展教育融入領域課程-國文領域.pdf", title: "國文領域", type: "pdf" },
        { src: "2222/112學年度-生涯發展教育融入領域課程-綜合領域.pdf", title: "綜合領域", type: "pdf" },
        { src: "2222/112學年度-生涯發展教育融入領域課程-數學領域.pdf", title: "數學領域", type: "pdf" },
        { src: "2222/112學年度-生涯發展教育融入領域課程-藝術領域.pdf", title: "藝術領域", type: "pdf" },
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
