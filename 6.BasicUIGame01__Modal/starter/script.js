'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const showModalButtons = document.querySelectorAll('.show-modal');
// console.log(showModalButtons);

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < showModalButtons.length; i++) {
    showModalButtons[i].addEventListener('click', openModal);
}

closeModalButton.addEventListener('click', closeModal)
// clicking outside the window should also close the window
overlay.addEventListener('click', closeModal)

// Handling an "Esc" (Keypress) events
// Keyboard events are called global events because they donot happen
// on one specific event.
// "keydown", "keyup", "keypress" are the 3 events we'll have in global space.
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        // if the modal doesnot contain the 'hidden' class then close the modal.
        closeModal();
    }
})