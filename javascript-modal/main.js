var modalContainer = document.querySelector('.modal');
var openModalButton = document.getElementById('open-modal');
var closeModalButton = document.getElementById('close-modal');

openModalButton.addEventListener('click',
  function () {
    modalContainer.className = 'modal';
  }
);

closeModalButton.addEventListener('click',
  function () {
    modalContainer.className = 'modal hidden';
  }
);
