var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click',
  function (event) {
    if (event.target.matches('.tab')) {
      for (let i = 0; i < $tabList.length; i++) {
        if (event.target === $tabList[i]) {
          $tabList[i].className = 'tab active';
        } else {
          $tabList[i].className = 'tab';
        }
      }
      var view = event.target.dataset.view;
      for (let i = 0; i < $viewList.length; i++) {
        if (view === $viewList[i].dataset.view) {
          $viewList[i].className = 'view';
        } else {
          $viewList[i].className = 'view hidden';
        }
      }
    }
  }
);
