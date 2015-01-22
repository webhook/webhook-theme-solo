$(document).ready(function() {

  // Swipebox should only show or certain elements when not in mobile.
  if ($('nav .menu').css("display") !== "none" ){
    $( '.swipe a:has(img), article p a:has(img), figure a:has(img), .video-open' ).swipebox({hideBarsDelay:999999});
  }
  $('.ham').click(function(){
    $(this).toggleClass('open');
    $('header nav .menu').toggleClass('active');
  });
  $('.search-icon').click(function(){
    $('.search-form').toggleClass('active');
  });

  // Highlight anything in pre code
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
    else if((wScrollDiff < 0) && ($('nav .menu.active').length) == 0)
      el.addClass('hide')

    wScrollBefore = wScrollCurrent;
  });

  // Localize the tweet time
  if ($('#tweetTime').length) {
    var tweetTime = moment.utc($('#tweetTime').data('tweet-time'));
    tweetTime = tweetTime.local();
    tweetTime = moment(tweetTime).format('MMM Do, YYYY. h:mm a');
    $('#tweetTime').text(tweetTime);
  }
});
