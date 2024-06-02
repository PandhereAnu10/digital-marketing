// Form-Control

document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.querySelector('.btn_contact');
    const popupForm = document.getElementById('popup-form');
    const closeButton = document.querySelector('.close');

    contactButton.addEventListener('click', function () {
        popupForm.style.display = 'flex';
    });

    closeButton.addEventListener('click', function () {
        popupForm.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == popupForm) {
            popupForm.style.display = 'none';
        }
    });
});

// Image On-Click
function changeImage(imageSrc) {
    document.getElementById("mainImage").src = imageSrc;
}
document.addEventListener("DOMContentLoaded", function() {
    var projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Remove 'active' class from all cards
            projectCards.forEach(function(c) {
                c.classList.remove('active');
            });
            // Add 'active' class to the clicked card
            this.classList.add('active');
        });
    });


    // Slider
    const wrapperContainer = [...document.querySelectorAll('.wrapper')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    wrapperContainer.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        });

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        });
    });
});