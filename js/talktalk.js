// talktalk.listVideo
;(function ( container, $, doc, undefined ) {

  function createModule()  {
    
    var contract = null,
        WRAPPER_ID = "#wrapper",
        HEADER_ID = "#header",
        
        init = function() {
          $(function() {
            addEvents();
          });
        }();

    function addEvents() {

    } // addEvents()
    
    contract = {
      addEvents: addEvents
    };

    // Public interface (properties and methods)
    return contract;

  } // end module

  // Public API (assigns to my namespace)
  container.listVideo = createModule();

})( this.tt || (this.tt = {}), this.Zepto || this.jQuery, document );
// end talktalk.listVideo

// talktalk.paginate

// @TODO: add animation timer, with play, pause and animation interval constant
;(function ( container, $, doc, undefined ) {

  function createModule()  {
    
    var contract = null,
        WRAPPER_ID = "#wrapper",
        HEADER_ID = "#header",
        MAIN_PROMO_ID = "#main-promo",
        CAROUSEL_ID = "#carousel",
        PAGINATION_CONTROL_ID = "#pagination-control",
        carousel,
        el,
        i,
        page,
        config = {
          showPagination: false,
          animtated: false,
          slides: [
            {
              html: '<div id="page1" class="page"></div>',
              description: 'stuff about page 1',
              background: 'img/hero-1.png',
              height: 280,
              width: 500
            },
            {
              html: '<div id="page2" class="page"></div>',
              description: 'more stuff about page 2',
              background: 'img/hero-2.png',
              height: 280,
              width: 500
            },
            {
              html: '<div id="page3" class="page"></div>',
              description: 'foo bar page 3',
              background: 'img/hero-2.png',
              height: 280,
              width: 500
            },
            {
              html: '<div id="page4" class="page"></div>',
              description: 'stuff about page 4',
              background: 'img/hero-1.png',
              height: 280,
              width: 500
            }
          ]
        }, // end config
        slidesLen = config.slides.length,
        timer = null,
        pageIndex = 0,

        init = function() {
        
          $(function() {
            if (config.showPagination) {
              createPaginationControl($(MAIN_PROMO_ID)[0]);
            }
            createCarousel();
            addEvents();
          });
        }(); // self invoking


    function createPaginationControl(elem) {
      var i = 0,
          selectedClass = '',
          paginationControlHtmlStart = [
            '<ul id="pagination-control">',
            '<li class="prev" ',
              chassis.event.ON_TOUCH_CLICK,
            '="tt.paginate.previous()">',
            '-</li>'
          ].join(""),
          paginationControlHtmlMiddle = '',
          paginationControlHtmlEnd = [
            '<li class="next" ',
            chassis.event.ON_TOUCH_CLICK,
            '="tt.paginate.next()">+</li></ul>'
          ].join(""),
          paginationControlHtml = '';

      for(i = 0; i < slidesLen; i++) {

        if (i === 0) {
          selectedClass = 'class="selected" ';
        } else {
          selectedClass = "";
        }

        paginationControlHtmlMiddle += [
          '<li ',
            selectedClass,
            chassis.event.ON_TOUCH_CLICK,
          '="tt.paginate.gotoPage(',
            (i),
          ')">',
            (i+1),
          '</li>'
        ].join("");
      }

      paginationControlHtml = [
        paginationControlHtmlStart,
        paginationControlHtmlMiddle,
        paginationControlHtmlEnd
      ].join("");

      $(elem).append(paginationControlHtml);
    }

    function addEvents() {
      
      $(MAIN_PROMO_ID + ' .next').on(chassis.event.TAP_CLICK, function() {
        tt.paginate.next();
      });
      $(MAIN_PROMO_ID + ' .prev').on(chassis.event.TAP_CLICK, function() {
        tt.paginate.previous();
      });
    }

    function createCarousel() {
      var el,
          elDesc;

      carousel = new SwipeView(CAROUSEL_ID, {
        numberOfPages: slidesLen
      });

      // Load initial data
      for (i=0; i<3; i++) {
        page = i===0 ? slidesLen-1 : i-1;

        //el = document.createElement('div');
        //el.innerHTML = slides[page].html;
        //el.width = 1024;
        //el.height = 768;
        $(carousel.masterPages[i]).append(
          config.slides[page].html
        ).css({
          "background":
          [
            'transparent url(',
              config.slides[page].background,
            ') 0 0 no-repeat;'
          ].join('')
        });
        //carousel.masterPages[i].appendChild(el);

        // details
        elDesc = document.createElement('span');
        elDesc.className = "carousel-description";
        elDesc.innerHTML = config.slides[page].description;
        carousel.masterPages[i].appendChild(elDesc);
      }

      carousel.onFlip(function () {
        var el,
            elDesc,
            upcoming,
            i;

        for (i=0; i<3; i++) {
          upcoming = carousel.masterPages[i].dataset.upcomingPageIndex;

          if (upcoming != carousel.masterPages[i].dataset.pageIndex) {
            // populate page
            el = $(carousel.masterPages[i]).find('div')[0];
            el.innerHTML = config.slides[upcoming].html;
            // populate description
            elDesc = $(carousel.masterPages[i]).find('span')[0];
            elDesc.innerHTML = config.slides[upcoming].description;
          }
        }
        // update pagination if available
        if (config.showPagination) updatePageIndex(carousel.pageIndex+1);

      }); // onFlip()

    } // createCarousel()

    function updatePageIndex(pageIndex) {
      // highlight pagination control
      $(PAGINATION_CONTROL_ID+" .selected").attr("class", "");
      $(PAGINATION_CONTROL_ID +" li")[pageIndex].className = 'selected';
    }

    function onMoveOut() {
      carousel.masterPages[carousel.currentMasterPage].className = carousel.masterPages[carousel.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, '');
    }

    function onMoveIn() {
      var className = carousel.masterPages[carousel.currentMasterPage].className;
      /(^|\s)swipeview-active(\s|$)/.test(className) || (carousel.masterPages[carousel.currentMasterPage].className = !className ? 'swipeview-active' : className + ' swipeview-active');
    }

    function next() {
      carousel.next();
    }

    function previous() {
      carousel.prev();
    }

    function gotoPage(index) {
      carousel.goToPage(index);
    }
    
    contract = {
      next: next,
      previous: previous,
      gotoPage: gotoPage,
      onMoveOut: onMoveOut,
      onMoveIn: onMoveIn,
      addEvents: addEvents
    };

    // Public interface (properties and methods)
    return contract;

  } // end module

  // Public API (assigns to my namespace)
  container.paginate = createModule();

})( this.tt || (this.tt = {}), this.Zepto || this.jQuery, document );
// end talktalk.paginate