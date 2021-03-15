function Slider(slider) {
    if (!(slider instanceof Element)) throw new Error('No slider passed in');
    // Create some variables for working with the slider
    let current, prev, next;
    // Select elements needed for the slide
    const slides = slider.querySelector('.slides'),
        prevButton = slider.querySelector('.goToPrev'),
        nextButton = slider.querySelector('.goToNext');

    // Function to Start the slider
    function startSlider() {
        current = slides.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log(current, prev, next);
    }

    // Add classes to elements
    function addClasses() {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    // Move classes
    function move(direction) {
        // Create array of classes to remove
        const classesToRemove = ['prev', 'current', 'next'],
            elementsWhereToRemove = [prev, current, next];

        elementsWhereToRemove.forEach(element => element.classList.remove(...classesToRemove));

        if (direction === 'back') {
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling || slides.nextElementChild];
        }

        addClasses();

    }
    startSlider();
    addClasses();

    // Event Listeners
    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', () => move('nacatamal'));
}

const mySlider = Slider(document.querySelector('.slider')),
    dogSlider = Slider(document.querySelector('.dog-slider'));