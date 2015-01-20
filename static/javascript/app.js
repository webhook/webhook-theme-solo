$(document).ready(function() {

  // Swipebox triggers
  $( '.swipe a:has(img), article p a:has(img), figure a:has(img), .video-open' ).swipebox({hideBarsDelay:999999});
  $('.circle').click(function(){
    $(this).toggleClass('open');
  });
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  // Sticky header
  var el = $('header');

  if(!el.length) return true;

  var wScrollCurrent = 0;
  var wScrollBefore = 0;
  var wScrollDiff = 0;

  $(window).on('scroll', function() {
    wScrollCurrent = $(window).scrollTop();
    wScrollDiff = wScrollBefore - wScrollCurrent;

    // default state at top
    if(wScrollCurrent <= 0)
      el.removeClass('hide')

    // scroll up
    else if(wScrollDiff > 0)
      el.removeClass('hide')
    // scroll down
    else if(wScrollDiff < 0)
      el.addClass('hide')

    wScrollBefore = wScrollCurrent;
  });

});





