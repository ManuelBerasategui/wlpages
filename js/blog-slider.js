(function () {
    if (window.matchMedia("(max-width: 768px)").matches) {
        var carouselInner = document.querySelector('.toAdd-carousel-inner');
        var carouselItems = document.querySelectorAll('.toAdd-carousel-item');
        var active = document.querySelector('.toAdd-active');

        carouselInner.classList.add('carousel-inner');
        carouselItems.forEach(function (item) {
            item.classList.add('carousel-item');
        });
        active.classList.add('active');

        document.querySelector('.blog-cards-container').classList.add('carousel-slide');

        // Initialize Bootstrap Carousel
        $('#carousel-example-controls').carousel();
    }
}());
