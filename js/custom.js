var myCarousel = document.querySelector('#carouselIESManacor')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false
})

console.log(carousel)

document.querySelector("#anterior").addEventListener('click', function() {
    carousel.prev()
})

document.querySelector("#seguent").addEventListener('click', function() {
    carousel.next()
})

//MODAL

var myModal = document.querySelector('#myModal');
var modal = new bootstrap.Modal(myModal)

document.querySelector("#open-modal").addEventListener('click', function() {
    modal.show();
})