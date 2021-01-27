const thumb = document.querySelector("thumb");
thumb.onmousedown = function(event) {
    // (1) prepare to moving: make absolute and on top by z-index
    thumb.style.position = 'absolute';
    thumb.style.zIndex = 1000;
  
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(thumb);
  
    // centers the thumb at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
      thumb.style.left = pageX - thumb.offsetWidth / 2 + 'px';
      thumb.style.top = pageY - thumb.offsetHeight / 2 + 'px';
    }
  
    // move our absolutely positioned thumb under the pointer
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) move the thumb on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) drop the thumb, remove unneeded handlers
    thumb.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      thumb.onmouseup = null;
    };
  
  };