import $ from '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/@fortawesome/fontawesome-free/js/all.min.js'

$( `[data-collapse-whoweare]` ).on( "click", function( event) {
  setTimeout(function(){ $("#timeLine").removeClass("fadeIn"); }, 1000);
});
$( `[data-collapse-joinourteam]` ).on( "click", function( event) {
  $('#joinOurTeam').toggleClass('expand');
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

// mocked data
let profilesArray = [
  { id: 1, src: "https://picsum.photos/id/4/300/300" },
  { id: 2, src: "https://picsum.photos/id/5/300/300" }
];

$(function () {
  // ajax call

  //response success:
  populateProfilePictures(profilesArray);
});

function populateProfilePictures(data) {
  for(let i in data) {
    let div = document.createElement("div");
    let span = document.createElement("span");
    div.classList.add("profile-pic");
    div.style.backgroundImage = "url(" + data[i].src + ")";
    $( "#profilePicContainer" ).append( div );
  }
};