document.querySelector('.help-container img').addEventListener('click', openModal);

  function openModal(e) {
    let body = document.querySelector('body');
    let modal = document.createElement('div');
    let modalImg = document.createElement('img');
  
    if (window.innerWidth > 420) {
      body.style.overflow = 'hidden';
      modal.classList.add('modal');
      modal.style.top = `${window.scrollY}px`;
      modal.addEventListener('click', closeModal);
      modalImg.src = `${e.target.getAttribute('src')}`;
  
      modal.appendChild(modalImg);
      body.appendChild(modal);
    }
  }
  
  function closeModal(e) {
    if (e.target.nodeName == 'DIV' && window.innerWidth > 420) {
      document.querySelector('.modal').remove();
      document.querySelector('body').style.overflow = '';
    }
  }