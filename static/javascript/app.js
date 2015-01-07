$(document).ready(function() {
  $('.gallery a, figure a, article a').fluidbox();
  $('.circle').click(function(){
    $(this).toggleClass('open');
  });
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
