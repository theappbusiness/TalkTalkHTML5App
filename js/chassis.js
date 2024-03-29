/**
 *
 * CHASSIS 2.0
 *
 * Copyright 2011 Rozario Chivers
 *
 * Dual licensed under the MIT or GPL Version 2 licenses
 * http://en.wikipedia.org/wiki/MIT_License
 * http://en.wikipedia.org/wiki/GNU_General_Public_License
 *
 */

// chassis.event
;(function ( container, $, doc, undefined ) {

  function createModule() {
	
    /**
     * Publish and Subscribe event model for Chassis
     * Namespaced events can be published and listened to
     * @param customEvent {String} namespace for event
     * @param func {Function} callback function
     * @param data {Object} optional, (Array): Additional data to pass as arguments
     * (after the event object) to the event handler
     *
    */
    function publish(customEvent, data) {
      $(window).trigger(customEvent, data);
    }

    function subscribe(customEvent, func) {
        $(window).bind(customEvent, function(e) {
          e.data = Array.prototype.slice.call(arguments, 1);
          func(e);
          }
        );
     }

     function unSubscribe(customEvent) {
        $(window).unbind(customEvent);
     }

     function listEvents(elem) {
       // can be used to show which custom events are attached to a particular element
       var dEvents = $(elem).data('events');

       $.each(dEvents, function(name, handler) {
         var currElem = this;
         $.each(handler, function(i,handler){
           console.log(currElem, '\n' + i + ': [' + name + '] : ' + handler );
         });
       });
     } // end listEvents()
      
		// public methods
		var contract = {
        publish : publish,
        subscribe : subscribe,
        unSubscribe : unSubscribe,
        listEvents : listEvents
		};

		// Public interface (properties and methods)
		return contract;

	} // end module

	// Public API (assigns to my namespace)
	container.event = createModule();

})( this.chassis || (this.chassis = {}), this.Zepto || this.jQuery, document );
// end chassis.event

/**
   * Code example from Zach Leatherman's blog, based on the YUI namespacer
   * Returns the namespace specified and creates it if it doesn't exist
   *
   * Be careful when naming packages. Reserved words may work in some browsers
   * and not others. For instance, the following will fail in Safari:
   * <pre>
   * YAHOO.namespace("really.long.nested.namespace");
   * </pre>
   * This fails because "long" is a future reserved word in ECMAScript
   *
   * @method namespace
   * @static
   * @param  {String*} arguments 1-n namespaces to create
   * @return {Object}  A reference to the last namespace object created
*/
chassis.namespace = function namespace() {
	var a = arguments, o = null, i, j, d;
	for (i = 0; i < a.length; i = i + 1) {
		d = a[i].split(".");
		o = window;
		for (j = 0; j < d.length; j = j + 1) {
			o[d[j]] = o[d[j]] ||
			{};
			o = o[d[j]];
		}
	}
	return o;
};


// custom event XHR wrapper for jQuery

/**
 * chassis.customxhr
 * jQuery Ajax custom event wrapper
 * Generates custom events against jQuery XHR events
 *
 * @param $ {Object} JSON AJAX callback functions
 * @return nothing returned
 */

;(function( container, $, doc, undefined ) {

  chassis.customXhr = (function (config) {
    var ajaxBefore = config.beforeEvent || chassis.events.AJAX_BEFORE,
        ajaxSuccess = config.successEvent || chassis.events.AJAX_SUCCESS,
        ajaxComplete = config.complete || chassis.events.AJAX_COMPELTE,
        ajaxError = config.error || chassis.events.AJAX_ERROR;

    config.before = function () {
      if (config.beforeEvent) $.publish(ajaxBefore);
    };

    config.success = function (data) {
      if (config.successEvent) $.publish(ajaxSuccess, data);
    };

    config.complete = function () {
      if (config.completeEvent) $.publish(ajaxComplete);
    };

    config.error = function (xhr, strError) {
      if (config.errorEvent) $.publish(ajaxError, strError);
    };

    return $.ajax(config);
  }); // end chassis.customxhr

})( this.chassis || (this.chassis = {}), this.Zepto || this.jQuery, document );

/*******************************************************
 * Custom event static constants (add constants here)
 *******************************************************/

chassis.namespace("chassis.pageContext");

chassis.pageContext.update = function() {
  $(function() {
    // populate page context from body and #container classes
    chassis.pageContext.BODY_CLASS = $("body").attr("class").split(" ")[0] || $("body").attr("class");
    chassis.pageContext.contextClassStr = $("#container").attr("class");
    chassis.pageContext.contexts = chassis.pageContext.contextClassStr.split(" ");
    chassis.pageContext.SITE_NAME = chassis.pageContext.contexts[1];
    chassis.pageContext.PAGE_NAME = chassis.pageContext.contexts[3];
    chassis.pageContext.LANGUAGE = chassis.pageContext.contexts[0];
    chassis.pageContext.UI = chassis.pageContext.BODY_CLASS;
    chassis.CURRENT_URL = chassis.pageContext.CURRENT_URL;
    chassis.pageContext.LAYOUT = $("#main").attr("class").split(" ")[0] || $("#main").attr("class");
  });
};

chassis.event.TAP_CLICK = ("ontouchstart" in window) ? "tap" : "click";
chassis.event.ON_TOUCH_CLICK = ("ontouchstart" in window) ? "ontouchstart" : "onclick";
chassis.event.AJAX_BEFORE = "ajax.before";
chassis.event.AJAX_SUCCESS = "ajax.success";
chassis.event.AJAX_COMPLETE = "ajax.complete";
chassis.event.AJAX_ERROR = "ajax.error";
chassis.event.PAGE_CHANGED = "pagechanged";
chassis.event.CHECKOUT_BASKET_XHR_COMPLETE = "checkoutbasketxhrcomplete";

/*******************************************************
 * End custom event static constants
 *******************************************************/

