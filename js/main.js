import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/@fortawesome/fontawesome-free/js/all.min.js'

$( "#expandWhoWeAre" ).on( "click", function( event) {
  $( "#whoWeAre" ).toggleClass("expand");
  $( "#whoWeAreCollapse" ).toggleClass("expand");
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
})(jQuery);


$(window).on( "scroll", function( event) {
    if ($("#timeLine").visible(true)) {
      $("#timeLine").addClass("fadeIn");
    }
});

// mocked data
let profilesArray = [
  { id: 1, src: "https://picsum.photos/id/4/300/300" },
  { id: 2, src: "https://picsum.photos/id/5/300/300" },
  { id: 3, src: "https://picsum.photos/id/6/300/300" },
  { id: 4, src: "https://picsum.photos/id/7/300/300" },
  { id: 5, src: "https://picsum.photos/id/8/300/300" },
  { id: 6, src: "https://picsum.photos/id/9/300/300" },
  { id: 7, src: "https://picsum.photos/id/10/300/300" },
  { id: 8, src: "https://picsum.photos/id/11/300/300" },
  { id: 9, src: "https://picsum.photos/id/12/300/300" },
  { id: 10, src: "https://picsum.photos/id/13/300/300" },
  { id: 11, src: "https://picsum.photos/id/14/300/300" },
  { id: 12, src: "https://picsum.photos/id/15/300/300" },
  { id: 13, src: "https://picsum.photos/id/16/300/300" },
  { id: 14, src: "https://picsum.photos/id/17/300/300" },
  { id: 15, src: "https://picsum.photos/id/18/300/300" }
];

$(function () {
  // ajax call

  //response success:
  populateProfilePictures(profilesArray);
});

function populateProfilePictures(data) {
  for(let i in data) {
    let div = document.createElement("div");
    div.classList.add("profile-pic");
    div.style.backgroundImage = "url(" + data[i].src + ")";
    $( "#profilePicContainer" ).append( div );
  }
};
