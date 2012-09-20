(function($) {
    Tagit = {};
    $.get('/double-taggit/json', function(data) {
      Tagit.data = data;
         $(".taggit").tagit({
            availableTags: Tagit.data,
            caseSensitive: false
         });
    });
})(jQuery);


