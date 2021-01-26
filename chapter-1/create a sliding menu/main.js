let menuElem = document.getElementById('all');
    let span = menuElem.querySelector('span');

    span.onclick = function() {
      menuElem.classList.toggle('open');
    };