document.addEventListener('DOMContentLoaded', function() {
    initializeContent();
});

function initializeContent() {
    const imageData = [
        { src: "2231/A.jpg", alt: "Image A", modalId: "imageModal1A" },
        { src: "2231/B.jpg", alt: "Image B", modalId: "imageModal1B" },
        { src: "2231/C.jpg", alt: "Image C", modalId: "imageModal1C" },
        { src: "2231/D.jpg", alt: "Image D", modalId: "imageModal1D" },
        { src: "2231/E.jpg", alt: "Image E", modalId: "imageModal1E" },
        { src: "2231/F.jpg", alt: "Image F", modalId: "imageModal1F" },
        { src: "2231/G.jpg", alt: "Image G", modalId: "imageModal1G" },
        { src: "2231/H.jpg", alt: "Image H", modalId: "imageModal1H" },
        { src: "2231/I.jpg", alt: "Image I", modalId: "imageModal1I" },
        { src: "2231/J.jpg", alt: "Image J", modalId: "imageModal1J" },
        { src: "2231/K.jpg", alt: "Image K", modalId: "imageModal1K" },
        { src: "2231/L.jpg", alt: "Image L", modalId: "imageModal1L" },
        { src: "2231/M.jpg", alt: "Image M", modalId: "imageModal1M" },
        { src: "2231/N.jpg", alt: "Image N", modalId: "imageModal1N" },
        { src: "2231/O.jpg", alt: "Image O", modalId: "imageModal1O" },
        { src: "2231/P.jpg", alt: "Image P", modalId: "imageModal1P" },
        { src: "2231/Q.jpg", alt: "Image Q", modalId: "imageModal1Q" },
        { src: "2231/R.jpg", alt: "Image R", modalId: "imageModal1R" },
    ];

    const container = document.getElementById('imageCardsContainer');
    imageData.forEach(item => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4 mb-4';
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.className = 'card-img-top';
        img.setAttribute('data-bs-toggle', 'modal');
        img.setAttribute('data-bs-target', `#${item.modalId}`);
        cardDiv.appendChild(img);
        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);
    });
}
