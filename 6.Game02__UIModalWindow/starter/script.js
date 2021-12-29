'use strict';

const modal2 = document.querySelector('.modal');
const overlay2 = document.querySelector('.overlay');
const closeModalButton2 = document.querySelector('.close-modal');
const showModalButtons2 = document.querySelectorAll('.show-modal');
// console.log(showModalButtons);

const closeModal2 = function () {
    modal2.classList.add('hidden');
    overlay2.classList.add('hidden');
};
const openModal2 = function () {
    modal2.classList.remove('hidden');
    overlay2.classList.remove('hidden');
}

for (let i = 0; i < showModalButtons2.length; i++) {
    showModalButtons2[i].addEventListener('click', openModal2);
}

closeModalButton2.addEventListener('click', closeModal2)
// clicking outside the window should also close the window
overlay2.addEventListener('click', closeModal2)

// Handling an "Esc" (Keypress) events
// Keyboard events are called global events because they donot happen
// on one specific event.
// "keydown", "keyup", "keypress" are the 3 events we'll have in global space.
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal2.classList.contains('hidden')) {
        // if the modal doesnot contain the 'hidden' class then close the modal.
        closeModal2();
    }
})