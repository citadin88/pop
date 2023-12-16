
    function simulateDelayedClick(x, y) {
      var clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
      });
      var element = document.elementFromPoint(x, y);
      if (element) {
        element.dispatchEvent(clickEvent);
      }
    }

    function simulateMouseClick(x, y) {
      var mouseDownEvent = new MouseEvent('mousedown', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
      });

      var mouseUpEvent = new MouseEvent('mouseup', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
      });

      var body = document.body;
      body.dispatchEvent(mouseDownEvent);

      setTimeout(function() {
        body.dispatchEvent(mouseUpEvent);
        setTimeout(function() {
          simulateDelayedClick(x, y);
        }, 50); // Adjust the delay for better results
      }, 50); // Adjust the delay for better results
    }

    // Function to trigger the interval
    function startInterval() {
      setInterval(function() {
        var randomX = Math.random() * window.innerWidth;
        var randomY = Math.random() * window.innerHeight;
        simulateMouseClick(randomX, randomY);
      }, 2000); // 2000 milliseconds = 2 seconds
    }

    // Delayed start of the interval
    setTimeout(startInterval, 2000); // Start after 2 seconds
  
