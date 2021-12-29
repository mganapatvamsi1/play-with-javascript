'use strict';

const modal = document.querySelector('.modal');
const buttonCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const buttonsShowModal = document.querySelectorAll('.show-modal');
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < buttonsShowModal.length; i++) {
    buttonsShowModal[i].addEventListener('click', openModal);
}

buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event) {
    // console.log(`${event}`);
    // if (event.keyCode === 27) { // this 'keyCode' is deprecated but this would still work.
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');
    // }
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
        // if modal contains the hidden class then it means model is hidden and
        // in this case we don't want to do anything
            // as modal doens't contain the hidden class now we will close the modal.
});











