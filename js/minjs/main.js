//import $ from '../minjs/jquery.min.js';
import Glide from '../minjs/glide.min.js';

function setGliderElement() {
  if(window.innerWidth > 1200 ) {
    return 6
  }
  if(window.innerWidth > 992 ) {
    return 5
  }
  if(window.innerWidth < 500 ) {
    return 2
  }
  if(window.innerWidth < 768 ) {
    return 3
  }
  if(window.innerWidth < 992 ) {
    return 4
  }
}

var glideMulti1 = new Glide('.multi', {
  type: 'carousel',
  autoplay: 3500,
  perTouch: false,
  touchRatio: 2,
  perView: setGliderElement()
});

$( `[data-collapse-whoweare]` ).on( "click", function(event) {
  glideMulti1.mount();
  setTimeout(function(){ $("#timeLine").removeClass("fadeIn"); }, 1000);
});


(function($) {
  $.fn.visible = function(partial) {
    const $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})($);

var scrollFlag = true;

$(window).on( "scroll", function( event) {
    if ($("#timeLine").visible(true)) {
      setTimeout(function(){
        $("#timeLine").addClass("fadeIn");
      }, 500);
    }

    if ($("#counter").visible(true)) {
      if (scrollFlag) {
        setTimeout(function() {
          counterAnim("#count1", 0, getDataCount('count1'), 2000);
          counterAnim("#count2", 0, getDataCount('count2'), 2000);
          counterAnim("#count3", 0, getDataCount('count3'), 2000);
        }, 500);
        scrollFlag = false;
      }
    }
});

const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
   if (!startTimestamp) startTimestamp = timestamp;
   const progress = Math.min((timestamp - startTimestamp) / duration, 1);
   target.innerText = Math.floor(progress * (end - start) + start);
   if (progress < 1) {
    window.requestAnimationFrame(step);
   }
  };
  window.requestAnimationFrame(step);
 };


function getDataCount(id) {
  return document.getElementById(id).getAttribute('data-target');
}

$( `[data-send-form]` ).on( "click", function(event) {
  let emailInput = document.getElementById('emailInput').value;
  let firstNameInput = document.getElementById('firstNameInput').value;
  let lastNameInput = document.getElementById('lastNameInput').value;
  
  if(emailInput.length > 0) {
    $('.validation-message.missing-email').removeClass('show');
  } else {
    $('.validation-message.missing-email').addClass('show');
    return
  }

  if(emailInput.includes('@')) {
    $('.validation-message.wrong-email').removeClass('show');
  } else {
    $('.validation-message.wrong-email').addClass('show');
    return
  }

  if(firstNameInput.length > 0) {
    $('.validation-message.missing-first-name').removeClass('show');
  } else {
    $('.validation-message.missing-first-name').addClass('show');
    return
  }

  if(lastNameInput.length > 0) {
    $('.validation-message.missing-last-name').removeClass('show');
  } else {
    $('.validation-message.missing-last-name').addClass('show');
    return
  }

  if(document.getElementById("dataProtectionCheck").checked) {
    $('#dataProtectionCheckbox').removeClass('error');
  } else {
    $('#dataProtectionCheckbox').addClass('error');
    return
  }

  if(false) {
    $("#sendMessageModal").modal("hide");

    $('#successMessageToast').removeClass('hide');
    $('#successMessageToast').addClass('show');
    setTimeout(() => {
      $('#successMessageToast').removeClass('show');
      $('#successMessageToast').addClass('hide');
    }, 3000);
  } else {
    $("#sendMessageModal").modal("hide");

    $('#errorMessageToast').removeClass('hide');
    $('#errorMessageToast').addClass('show');
    setTimeout(() => {
      $('#errorMessageToast').removeClass('show');
      $('#errorMessageToast').addClass('hide');
    }, 3000);
  }
});