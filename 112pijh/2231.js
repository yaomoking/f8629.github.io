document.addEventListener('DOMContentLoaded', function() {
    initializeContent();
});

function initializeContent() {
    const imageData = [
    
        { src: "221/3/1/1.jpg", alt: "Image A", modalId: "imageModal1A" },
        { src: "221/3/1/2.jpg", alt: "Image B", modalId: "imageModal1B" },
        { src: "221/3/1/3.jpg", alt: "Image C", modalId: "imageModal1C" },
        { src: "221/3/1/4.jpg", alt: "Image D", modalId: "imageModal1D" },
        { src: "221/3/1/5.jpg", alt: "Image E", modalId: "imageModal1E" },
        { src: "221/3/1/6.jpg", alt: "Image F", modalId: "imageModal1F" },
        { src: "221/3/1/7.jpg", alt: "Image G", modalId: "imageModal1G" },
        { src: "221/3/1/8.jpg", alt: "Image H", modalId: "imageModal1H" },
        { src: "221/3/1/9.jpg", alt: "Image I", modalId: "imageModal1I" },
        { src: "221/3/1/10.jpg", alt: "Image J", modalId: "imageModal1J" },
        { src: "221/3/1/11.jpg", alt: "Image K", modalId: "imageModal1K" },
        { src: "221/3/1/12.jpg", alt: "Image L", modalId: "imageModal1L" },
        { src: "221/3/1/13.jpg", alt: "Image M", modalId: "imageModal1M" },
        { src: "221/3/1/14.jpg", alt: "Image N", modalId: "imageModal1N" },
        { src: "221/3/1/15.jpg", alt: "Image O", modalId: "imageModal1O" },
        { src: "221/3/1/16.jpg", alt: "Image P", modalId: "imageModal1P" },
        { src: "221/3/1/17.jpg", alt: "Image Q", modalId: "imageModal1Q" },
        { src: "221/3/1/18.jpg", alt: "Image R", modalId: "imageModal1R" },
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
