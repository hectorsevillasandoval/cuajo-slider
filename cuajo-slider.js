function Slider(slider) {
    if (!(slider instanceof Element)) throw new Error('No slider passed in');


    // Select elements needed for the slide
    this.slider = slider;
    this.slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');


    this.startSlider();
    this.addClasses();

    // Event Listeners
    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', () => this.move('nacatamal'));
}

// Function to Start the slider
Slider.prototype.startSlider = function() {
    this.current = this.slides.querySelector('.current') || this.slides.firstElementChild;
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
    console.log(this.current, this.prev, this.next);
}

// Add classes to elements
Slider.prototype.addClasses = function() {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
}

// Move classes
Slider.prototype.move = function(direction) {
    // Create array of classes to remove
    const classesToRemove = ['prev', 'current', 'next'],
        elementsWhereToRemove = [this.prev, this.current, this.next];

    elementsWhereToRemove.forEach(element => element.classList.remove(...classesToRemove));

    if (direction === 'back') {
        [this.prev, this.current, this.next] = [this.prev.previousElementSibling || this.slides.lastElementChild, this.prev, this.current];
    } else {
        [this.prev, this.current, this.next] = [this.current, this.next, this.next.nextElementSibling || this.slides.firstElementChild];
    }

    this.addClasses();

}

const mySlider = new Slider(document.querySelector('.slider')),
    dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);