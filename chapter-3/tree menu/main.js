 // i changed the text into <span> because it changes the place of the text
    
    for (let li of tree.querySelectorAll('li')) {
        let span = document.createElement('span');
        li.prepend(span);
        span.append(span.nextSibling); // move the text node into span
      }
  
      // the clicks of the tree
      tree.onclick = function(event) {
  
        if (event.target.tagName != 'SPAN') {
          return;
        }
  
        let childrenContainer = event.target.parentNode.querySelector('ul');
        if (!childrenContainer) return; 
  
        childrenContainer.hidden = !childrenContainer.hidden;
      }