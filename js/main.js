import $ from '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/@fortawesome/fontawesome-free/js/all.min.js';
import Glide from '../node_modules/@glidejs/glide/dist/glide.js';

var glideMulti1 = new Glide('.multi', {
  type: 'carousel',
  autoplay: 3500,
  perView: 5
});

glideMulti1.mount();

$( `[data-collapse-whoweare]` ).on( "click", function( event) {
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


$(window).on( "scroll", function( event) {
    if ($("#timeLine").visible(true)) {
      setTimeout(function(){
        $("#timeLine").addClass("fadeIn");
      }, 500);
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
 
 document.addEventListener("DOMContentLoaded", () => {
  counterAnim("#count1", 0, getDataCount('count1'), 2000);
  counterAnim("#count2", 0, getDataCount('count2'), 2000);
  counterAnim("#count3", 0, getDataCount('count3'), 2000);
 });

function getDataCount(id) {
  return document.getElementById(id).getAttribute('data-target');
}

$( `[data-send-form]` ).on( "click", function(event) {
  if(document.getElementById('emailInput').value.length > 0) {
    $('.validation-message.email').removeClass('show');
  } else {
    $('.validation-message.email').addClass('show');
    return
  }

  if(document.getElementById("dataProtectionCheck").checked) {
    $('#dataProtectionCheckbox').removeClass('error');
  } else {
    $('#dataProtectionCheckbox').addClass('error');
    return
  }

  // send msg
});