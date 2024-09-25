function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'text-center';
    footer.style.background = 'linear-gradient(90deg, #c0e6a5, #82c6e2)';
    footer.style.padding = '20px 0';

    const footerContainer = document.createElement('div');
    footerContainer.className = 'container';

    const row = document.createElement('div');
    row.className = 'row';

    // Left Column
    const colLeft = document.createElement('div');
    colLeft.className = 'col-md-6 text-start';
    colLeft.style.fontSize = '14.8px';  
    colLeft.innerHTML = `
   
        <span class="footer-text">新竹市東區培英國中</span><br>
        <span class="footer-text">30068 新竹市學府路4號 No. 4, Xuefu Rd., East Dist., Hsinchu City, Taiwan (R.O.C.)</span><br>
        <span class="footer-text">電話 03-5721301 傳真 03-5726578</span>
        <br />
    `;

    // Right Column
    const colRight = document.createElement('div');
    colRight.className = 'col-md-6 text-end';
    colRight.style.fontSize = '14.8px';  
    colRight.innerHTML = `
   
        <div style="display: inline-flex; gap: 10px; align-items: center;">
            <a href="mailto:pijh06@hc.edu.tw" class="footer-link">
                <img src="icon/email.png" alt="Email Icon" style="width: 24px; height: auto;">
            </a>
            <a href="#" class="footer-link">
                <img src="icon/line.png" alt="Line Icon" style="width: 24px; height: auto;">
            </a>
            <a href="#" class="footer-link">
                <img src="icon/facebook.png" alt="Facebook Icon" style="width: 24px; height: auto;">
            </a>
            <a href="https://www.pijh.hc.edu.tw/nss/p/index" class="footer-link">
                <img src="icon/link.png" alt="培英國中" style="width: 26px; height: auto;">
                新竹市立培英國中-首頁
            </a>
        </div>
        <br />
        <span class="footer-text">建議最佳瀏覽環境: Chrome 62 以上版本、Firefox 56 以上版本、Microsoft Edge</span><br>
        <span class="footer-text">Design by LO WEI JHIH</span>
        <br />
    `;

    // Appending columns to row
    row.appendChild(colLeft);
    row.appendChild(colRight);

    // Appending row to container
    footerContainer.appendChild(row);

    // Appending container to footer
    footer.appendChild(footerContainer);

    // Append styles for links and text shadow
    const style = document.createElement('style');
    style.innerHTML = `
        .footer-link {
            color: #000; /* Default text color */
            text-decoration: none; /* Remove underline */
            transition: color 0.3s ease, text-decoration 0.3s ease; /* Smooth transitions */
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); /* Text shadow for footer links */
        }

        .footer-link:hover {
            color: #007bff; /* Change color on hover */
            text-decoration: underline; /* Add underline on hover */
        }

        .footer-link img {
            vertical-align: middle; /* Align icons vertically with text */
        }

        .footer-text {
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); /* Text shadow for footer text */
        }
    `;
    document.head.appendChild(style);

    // Appending footer to body
    document.body.appendChild(footer);
}

// Call the function to create and insert the footer
createFooter();
