document.querySelectorAll('.help-container img').forEach((img) => {
    img.style.height = `${document.querySelectorAll('.help-container img')[0].offsetHeight}px`;
  });
  
  document.querySelectorAll('.help-container img').forEach((el) => {
    el.addEventListener('click', openModal);
  });
  
  window.onresize = () => {
    document.querySelectorAll('.help-container img').forEach((img) => {
      img.style.display = 'none';
    });
  
    document.querySelectorAll('.help-container img').forEach((img) => {
      img.style.height = `${
        document.querySelectorAll('.help-container')[0].offsetHeight
      }px`;
      img.style.display = '';
    });
  };
  
  function openModal(e) {
    let body = document.querySelector('body');
    let modal = document.createElement('div');
    let modalImg = document.createElement('img');
  
    body.style.overflow = 'hidden';
    modal.classList.add('modal');
    modal.style.top = `${window.scrollY}px`;
    modal.addEventListener('click', closeModal);
    modalImg.src = `${e.target.getAttribute('src')}`;
  
    modal.appendChild(modalImg);
    body.appendChild(modal);
  }
  
  function closeModal(e) {
    if (e.target.nodeName == 'DIV') {
      document.querySelector('.modal').remove();
      document.querySelector('body').style.overflow = '';
    }
  }