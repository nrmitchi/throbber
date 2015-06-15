/*!
 * throbber.js v0.0.1
 *
 * Dynamic, configurable usage of: http://codepen.io/AlcidesRC/pen/gafno
 *
 */

/* 
 * Config is expected to be of the form:

 {
  "cookieName": String, // The name of the cookie that will store state
  "elements": [
    {
      "$el": jQuery Element,
      "title": String,
      "content": String,
      "beforeShow": Function
      "afterShow": Function
      "beforeExit": Function
      "afterExit": Function
    },
    ...
  ]
 }

 */
(function(root, undefined) {

  function hasClass(ele, cls) {
      return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  }

  function addClass(ele, cls) {
      if (!this.hasClass(ele,cls))
          ele.className += " "+ cls;
  }

  function removeClass(ele, cls) {
      if (hasClass(ele,cls)) 
      {
          var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
          
          ele.className = ele.className.replace(reg, ' ');
      }
  }

  var throbber = document.getElementById('marker-1');
  var tip = document.getElementById('tip-1');
  var close = document.getElementById('close-tip-1');

  throbber.addEventListener('click', function(){
    removeClass(tip, 'flipOutY');
    addClass(tip, 'flipInY');
  });

  close.addEventListener('click', function(){
    removeClass(tip, 'flipInY');
    addClass(tip, 'flipOutY');
  });

  lib.activate = function (config) {
    // Inject throbber elements on the last x element in the config, as 
    // long as the cookie doesn't have them as dismissed
  }

  /* --- Module Definition --- */

  // Export accounting for CommonJS. If being loaded as an AMD module, define it as such.
  // Otherwise, just add `accounting` to the global object
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = lib;
    }
    exports.throbber = lib;
  } else if (typeof define === 'function' && define.amd) {
    // Return the library as an AMD module:
    define([], function() {
      return lib;
    });
  } else {
    // Use throbber.noConflict to restore `throbber` back to its original value.
    // Returns a reference to the library's `throbber` object;
    // e.g. `var numbers = throbber.noConflict();`
    lib.noConflict = (function(oldThrobber) {
      return function() {
        // Reset the value of the root's `throbber` variable:
        root.throbber = oldThrobber;
        // Delete the noConflict method:
        lib.noConflict = undefined;
        // Return reference to the library to re-assign it:
        return lib;
      };
    })(root.throbber);

    // Declare `fx` on the root (global/window) object:
    root['throbber'] = lib;
  }

  // Root will be `window` in browser or `global` on the server:
}(this));