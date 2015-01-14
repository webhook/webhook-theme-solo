$(document).ready(function() {
  // $('.gallery a, figure a, article a').fluidbox();
  $( '.gallery a:has(img), article p a:has(img)' ).swipebox({hideBarsDelay:999999});
  $('.circle').click(function(){
    $(this).toggleClass('open');
  });
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
