'use strict';
const showBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

showBtn.forEach(btn => {
  btn.addEventListener('click', showModal);
});

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// global events in the all DOM tree(page content)
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
