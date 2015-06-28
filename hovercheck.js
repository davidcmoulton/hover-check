(function (window, document, undefined) {
  "use strict";
  var timeoutOut = document.querySelector('#timeoutOut'),
    timeoutControl = document.querySelector('#timeoutControl'),
    timeoutVal = -1,
    hoverTestEl = document.querySelector('.hoverTestEl'),
    msgEl = document.querySelector('#msg'),
    hoverTracker = -1,

    updateTimeoutVal = function getTimeoutVal() {
      timeoutVal = window.parseInt(timeoutControl.value, 10);
      timeoutOut.innerHTML = timeoutVal;
    },
    
    handleMouseEnter = function () {
      if (hoverTracker > -1) {
        window.clearTimeout(hoverTracker);
      }
      hoverTracker = window.setTimeout(function () {
        // Log hover.
        msgEl.innerHTML += '<div class="transient">Hover significant</div>';
        hoverTracker = -1;
        hoverTestEl.classList.add('timedout');
      }, timeoutVal);
    },

    handleMouseLeave = function handleLeave() {
      var transientEl = msgEl.querySelector('.transient');
      if (!!transientEl) {
      msgEl.removeChild(transientEl);            
      }
      hoverTestEl.classList.remove('timedout');
      if (hoverTracker > -1) {
        window.clearTimeout(hoverTracker);
      }
    };
  
  document.querySelector('.main').classList.remove('hidden');
  hoverTestEl.addEventListener('mouseenter', handleMouseEnter, false);
  hoverTestEl.addEventListener('mouseleave', handleMouseLeave, false);
  timeoutControl.addEventListener('change', updateTimeoutVal, false);
  updateTimeoutVal();

}(window, window.document));