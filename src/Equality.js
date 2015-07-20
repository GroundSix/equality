
function Equality(query, options) {
  "use strict";
  this.query = query;
  this.options = extend({
    byWidth: false,
    byHeight: true,
    resetCSS: true,
    container: true,
    children: ':scope > *'
  }, options);

  function each(obj, iteree) {
    var i;
    for (i = 0; i < obj.length; i += 1) {
      iteree(obj[i]);
    }
  }

  function max(obj, iteree) {
    var result = 0;
    var ob;
    each(obj, function(el) {
      var _result = iteree(el);
      if (result < _result) {
        result = _result;
        ob = el;
      }
    });
    return ob;
  }

  function extend(obj1, obj2) {
    var ob = {};

    Object.keys(obj1).forEach(function(key) {
      ob[key] = obj1[key];
    });

    if (obj2 !== null && obj2 !== undefined) {
      Object.keys(obj2).forEach(function(key) {
        ob[key] = ob[key];
      });
    }
    return ob;
  }

  function doRender(options, elements) {
    var width = 0;
    var height = 0;
    if (options.resetCSS) {
      each(elements, function(element) {
        if (options.byWidth) {
          element.style.width = null;
        }
        if (options.byHeight) {
          element.style.height = null;
        }
      });
    }
    if (options.byWidth) {
      width = max(elements, function(element) {
        return element.offsetWidth;
      }).offsetWidth;
    }
    if (options.byHeight) {
      height = max(elements, function(element) {
        return element.offsetHeight;
      }).offsetHeight;
    }

    each(elements, function(element) {
      if (options.byWidth) {
        element.style.width = width + 'px';
      }
      if (options.byHeight) {
        element.style.height = height + 'px';
      }
    });
  }
  this.render = function(options) {
    options = extend(this.options, options);
    var elements = document.querySelectorAll(this.query);
    if (options.container) {
      each(elements, function(element) {
        if (element.dataset.hasOwnProperty('equalityWidth')) {
          options.byWidth = true;
          options.byHeight = false;
        }
        if (element.dataset.hasOwnProperty('equalityHeight')) {
          options.byHeight = true;
        }
        if (element.dataset.hasOwnProperty('equalityChildren')) {
          options.children = ':scope > ' + element.dataset.equalityChildren;
        }
        elements = element.querySelectorAll(options.children);
        doRender(options, elements);
      });
    } else {
      doRender(options, elements);
    }
  };
  this.render(this.options);
}
