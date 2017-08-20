init();
function init() {
  parents = document.getElementsByClassName('slideshow-container');
  for (j = 0; j < parents.length; j++) {
    var slides = parents[j].getElementsByClassName("slideshow-slide");
    var dots = parents[j].getElementsByClassName("slideshow-dot");
    slides[0].classList.add('slideshow-slide-active');
    dots[0].classList.add('slideshow-active');
  }
}

dots = document.getElementsByClassName('slideshow-dot');
for (i = 0; i < dots.length; i++) {
  dots[i].onclick = function() {
    slides = this.parentNode.parentNode.getElementsByClassName("slideshow-slide");
    for (j = 0; j < this.parentNode.children.length; j++) {
      this.parentNode.children[j].classList.remove('slideshow-active');
      slides[j].classList.remove('slideshow-slide-active');
      if (this.parentNode.children[j] == this) {
        index = j;
      }
    }
    this.classList.add('slideshow-active');
    slides[index].classList.add('slideshow-slide-active');
  }
}

links = document.querySelectorAll('.slideshow-container a');
for (i = 0; i < links.length; i++) {
  links[i].onclick = function() {
    current = this.parentNode;
    var slides = current.getElementsByClassName("slideshow-slide");
    var dots = current.getElementsByClassName("slideshow-dot");
    curr_slide = current.getElementsByClassName('slideshow-slide-active')[0];
    curr_dot = current.getElementsByClassName('slideshow-active')[0];
    curr_slide.classList.remove('slideshow-slide-active');
    curr_dot.classList.remove('slideshow-active');
    if (this.className == 'slideshow-next') {
      if (curr_slide.nextElementSibling.classList.contains('slideshow-slide')) {
        curr_slide.nextElementSibling.classList.add('slideshow-slide-active');
        curr_dot.nextElementSibling.classList.add('slideshow-active');
      } else {
        slides[0].classList.add('slideshow-slide-active');
        dots[0].classList.add('slideshow-active');
      }
    }
    if (this.className == 'slideshow-prev') {
      if (curr_slide.previousElementSibling) {
        curr_slide.previousElementSibling.classList.add('slideshow-slide-active');
        curr_dot.previousElementSibling.classList.add('slideshow-active');
      } else {
        slides[slides.length - 1].classList.add('slideshow-slide-active');
        dots[slides.length - 1].classList.add('slideshow-active');
      }
    }
  }
}
