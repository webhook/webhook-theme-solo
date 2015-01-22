$(document).ready(function() {
  var hasContainer = $('.js-paginate').length > 0;

  if(!hasContainer) {
    return;
  }

  var nextPage = $('.js-paginate').attr('data-next-page');
  var maxPage = $('.js-paginate').attr('data-max-page');
  var removeFirst = $('.js-paginate').attr('data-remove-first');

  if(maxPage === window.location.pathname) {
    return;
  }

  var finishedLoading = false;
  var loading = false;
  $(window).scroll( function() {
    if(loading || finishedLoading) {
      return;
    }

    var container = $('.js-paginate');
    var bottomOfContainer = container.position().top + container.outerHeight(true);
    var scrollBottom = $(window).scrollTop() + $(window).height();
    if(scrollBottom > bottomOfContainer)
    {
      loading = true;
      $('#load-more-spinner').show();

      $.ajax({
        url: nextPage,
        success: function(html)
        {
            if(html) {
                var targetHtml = $(html).find('.js-paginate');

                if(nextPage === maxPage) {
                  finishedLoading = true;
                }

                nextPage = targetHtml.attr('data-next-page');

                if(nextPage) {
                  if(removeFirst)
                    targetHtml.find('li').first().remove();

                  $(".js-paginate").append(targetHtml.html());
                } else {
                  finishedLoading = true;
                }

                $('#load-more-spinner').hide();
            } else {
                finishedLoading = true;
                $('#load-more-spinner').hide();
            }

            loading = false;
        }
      });
    }
  });
});