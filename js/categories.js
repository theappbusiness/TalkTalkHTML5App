
;(function ( container, $, doc, undefined ) {

  function createModule()  {
    
    var contract = null,
        WRAPPER_ID = "#wrapper",
        HEADER_ID = "#header",
        MAIN_PROMO_ID = "#main-promo",
        CATEGORIES_ID = "#categories",
        VIDEOS_ID = "#videos",
        LIMIT = 50,
        FILTER = "trending",

        init = function() {
          //loadData();
          addEvents();
        }();

    function addEvents() {
      // add click event to categories
      $(
        [
          CATEGORIES_ID, ' a.home,',
          CATEGORIES_ID, ' a.televised,',
          CATEGORIES_ID, ' a.songs,',
          CATEGORIES_ID, ' a.popular,',
          CATEGORIES_ID, ' a.friends'
        ].join("")
      ).on(chassis.event.TAP_CLICK, function() {

        var category = $(this).attr("data-category");

        loadData();

      });

    }


    function loadData() {
      // add cache buster (JQ has one but not with these URLs)
      var date = new Date().getTime();
          dataUrl = 'js/data.stub.json' +
                '?page=2&limit=' + LIMIT + '&filt er=' + FILTER +'&' + date,
              data = null;

        $.ajax({
          url: dataUrl,
          data: data,
          type: 'GET',
          dataType: 'json',
          success: renderVideoList,
          error: function() { }
        });
    }

    function renderVideoList(data) {
      //console.log(data);
      var VIDEOS_ELEM = $(VIDEOS_ID);
          videoList = data.videos,
          videoListLen = data.videos.length,
          dataItem = null,
          videoListHtml = "",
          i = 0;

      // clear current list
      $(VIDEOS_ELEM).find("a").remove();
      for (i=0; dataItem = videoList[i]; i++) {

          videoListHtml += [
            '<a href="#" data-username="',
              dataItem.user_name,'" data-song="',
              dataItem.name,
              '" data-views="',
              dataItem.total_views,'" style="background: transparent url(',
              dataItem.poster,
              ') 0 0 no-repeat;-webkit-background-size: 235px 165px;"></a>'
          ].join("");
          // @TODO: add in song title and author

           console.log(videoListHtml);
      }
      // render list
      $(VIDEOS_ELEM).append(videoListHtml);
    }
    
    contract = {
      init: init
    };

    // Public interface (properties and methods)
    return contract;

  } // end module

  // Public API (assigns to my namespace)
  container.categories = createModule();

})( this.tt || (this.tt = {}), this.Zepto || this.jQuery, document );
// end tt.categories