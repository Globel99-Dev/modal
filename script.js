'use strict';

// Select element needed to make function the project
const modal = document.querySelector('.modal');
const btns = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const closeModal = function () {
  //This way is better...
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  //...Than this one.
  //modal.style.display = 'none';
  //overlay.style.display = 'none';
};

const openModal = function () {
  //Again, that way or...
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  //This way.
  //modal.style.display = 'block';
  //overlay.style.display = 'block';
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', openModal);
}

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Togliere overlay and modal only with key [Escape].
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    document.querySelector('.overlay').style.display = 'none';
  }
});
