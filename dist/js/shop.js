(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Functions = require("./Functions.js");

function Cart() {
  // click on cart icon to popup cart section
  // catch cart icon
  var cartIcon = document.querySelector('.nav-header .user .cart'); // catch cart section

  var cartContainer = document.querySelector('.nav-header .user .cart .cart-container'); // add click event using addEvent function

  (0, _Functions.addEvent)(cartContainer, 'click', function (event) {
    event.stopPropagation();
  });
  (0, _Functions.addEvent)(cartIcon, 'click', function (event) {
    cartContainer.classList.toggle('hover-cart');
  }); // remove items form cart
  // catch close btn for each item

  var cartIconClose = document.querySelectorAll('.nav-header .user .cart .close-x');
  cartIconClose.forEach(function (close) {
    (0, _Functions.addEvent)(close, 'click', function (event) {
      event.target.parentElement.parentElement.remove();
    });
  }); // add more than one items
  // catch increment and decrement button

  var incrementBtn = document.querySelectorAll('.nav-header .user .cart .item i.fa-plus');
  var decrementBtn = document.querySelectorAll('.nav-header .user .cart .item i.fa-minus'); // add increment event

  incrementBtn.forEach(function (btn) {
    (0, _Functions.addEvent)(btn, 'click', function (event) {
      event.target.previousElementSibling.textContent++;
    });
  }); // add decrement event

  decrementBtn.forEach(function (btn) {
    (0, _Functions.addEvent)(btn, 'click', function (event) {
      if (event.target.nextElementSibling.textContent > 1) {
        event.target.nextElementSibling.textContent--;
      }
    });
  });
}

var _default = Cart;
exports["default"] = _default;

},{"./Functions.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEvent = addEvent;

function addEvent(el, ev, cb) {
  el.addEventListener(ev, cb);
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Functions = require("./Functions.js");

function MainScroll() {
  // add scroll event for body
  // catch navigation element
  var navigation = document.querySelector('.navigation'); // add scroll events using addEvent function

  (0, _Functions.addEvent)(window, 'scroll', function (event) {
    if (document.documentElement.scrollTop > 80) {
      navigation.classList.add('shad');
    } else {
      navigation.classList.remove('shad');
    }
  });
}

var _default = MainScroll;
exports["default"] = _default;

},{"./Functions.js":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Functions = require("./Functions.js");

function Nav() {
  // on focus increase width of search input
  // catch input 
  var searchInput = document.querySelector('.nav-header input');
  var searchClass = searchInput.parentElement;
  var windowSize; // calculate window size every time page loaded

  (0, _Functions.addEvent)(window, 'load', function (event) {
    windowSize = window.screen.width;
  }); // add focus event when window size larger that 768px 

  (0, _Functions.addEvent)(searchInput, 'focus', function (event) {
    if (windowSize > 768) {
      searchClass.style.minWidth = "440px";
    }
  }); // add blur event

  (0, _Functions.addEvent)(searchInput, 'blur', function (event) {
    if (windowSize > 768) {
      searchClass.style.minWidth = "240px";
    }
  }); // add click event to burger icon in navbar
  // catch burger icon

  var expandBtn = document.querySelector('.navbar-list .expand-icon'); // catch expan menu

  var expanMenu = document.querySelector('.navbar-list .expand-menu'); // catch fontawsome icon in expand button

  var iconBtn = document.querySelector('.navbar-list .expand-icon i'); // add click event to show expand menu

  (0, _Functions.addEvent)(expandBtn, 'click', function (event) {
    expanMenu.classList.toggle('show');
    iconBtn.classList.toggle('fa-bars');
    iconBtn.classList.toggle('fa-times');
  }); // close expand menu when click on any point in page except navigation section

  (0, _Functions.addEvent)(document.body, 'click', function (event) {
    if (!event.target.closest('.navigation') && expanMenu.classList.contains('show')) {
      expanMenu.classList.remove('show');
      iconBtn.classList.toggle('fa-bars');
      iconBtn.classList.toggle('fa-times');
    }
  }); // expand submenu 
  // catch submenu

  var subMenu = document.querySelector('.navbar-list .expand-menu .menu'); // catch pages list item

  var listPages = document.querySelector('.navbar-list .expand-menu .pages'); // expand submenu when click on page items

  (0, _Functions.addEvent)(listPages, 'click', function (event) {
    event.preventDefault();
    subMenu.classList.toggle('expand');
    event.target.classList.toggle('open');
  }); // catch collection list item

  var listCollect = document.querySelector('.navbar-list .expand-menu .collections'); // catch collections submenu

  var collectionSubMenu = document.querySelector('.navbar-list .expand-menu .menu-collections'); // expand submenu when click on collection item

  (0, _Functions.addEvent)(listCollect, 'click', function (event) {
    event.preventDefault();
    collectionSubMenu.classList.toggle('expand');
    event.target.classList.toggle('open');
    expanMenu.classList.toggle('scroll-y');
  }); // add click event on search icon to open search overlay
  // catch search icon element

  var searchIcon = document.querySelector('nav .user .seacrh-icon'); // catch search overlay layer

  var searchOverlay = document.querySelector('nav .user .search-overlay'); // add click event

  searchIcon.onclick = function (event) {
    searchOverlay.classList.add('face');
  };

  (0, _Functions.addEvent)(searchIcon, 'click', function (event) {
    searchOverlay.classList.add('face');
  }); // remove search overlay layer
  // catch close button 

  var closeBtn = document.querySelector('nav .user .search-overlay .close-x'); // add click event

  (0, _Functions.addEvent)(closeBtn, 'click', function (event) {
    searchOverlay.classList.remove('face');
  });
}

var _default = Nav;
exports["default"] = _default;

},{"./Functions.js":2}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Functions = require("./Functions");

// select elments
var pagesLinks = document.querySelectorAll('.pages .page-link.layouts');
var pagesItems = document.querySelectorAll('.pages .page-item');
var nextBtn = document.querySelector('.pages .page-link.next');
var previousBtn = document.querySelector('.pages .page-link.previous'); // const pagesContainer = document.querySelector('.pages .pagination');

var pagesLength = pagesLinks.length; // create nextToggle function

var nextToggle = function nextToggle(pages, length) {
  var order;
  pages.forEach(function (page, index) {
    if (page.classList.contains('active')) {
      order = index;
    }
  });
  order += 1;

  if (order < length) {
    pages.forEach(function (page) {
      page.classList.remove('active');
    });
    pages[order].classList.add('active');
  }
}; // create prevToggle function


var prevToggle = function prevToggle(pages, length) {
  var order;
  pages.forEach(function (page, index) {
    if (page.classList.contains('active')) {
      order = index;
    }
  });
  order -= 1;

  if (order >= 0) {
    pages.forEach(function (page) {
      page.classList.remove('active');
    });
    pages[order].classList.add('active');
  }
}; // create active function


var makeActive = function makeActive(element, pageElements) {
  pageElements.forEach(function (item, index) {
    item.classList.remove('active');
  });
  element.classList.add('active');
};

function Pagination() {
  pagesLinks.forEach(function (page) {
    (0, _Functions.addEvent)(page, 'click', function (event) {
      event.preventDefault();
      makeActive(event.target, pagesLinks);
    });
  });
  (0, _Functions.addEvent)(nextBtn, 'click', function (event) {
    event.preventDefault();
    nextToggle(pagesLinks, pagesLength);
  });
  (0, _Functions.addEvent)(previousBtn, 'click', function (event) {
    event.preventDefault();
    prevToggle(pagesLinks, pagesLength);
  });
}

var _default = Pagination;
exports["default"] = _default;

},{"./Functions":2}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Functions = require("./Functions.js");

function Scrollup() {
  // view scroll up button when scroll down
  // catch scrollup button
  var scrollBtn = document.querySelector('#scrollup'); // add scroll event using addEvent function

  (0, _Functions.addEvent)(window, 'scroll', function (event) {
    if (document.documentElement.scrollTop > 350 || document.body.scrollTop > 350) {
      scrollBtn.classList.add('view');
    } else {
      scrollBtn.classList.remove('view');
    }
  });
  var scroll = new SmoothScroll('#scrollup', {
    speed: 600
  });
}

var _default = Scrollup;
exports["default"] = _default;

},{"./Functions.js":2}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Functions = require("./Functions.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ShopSortBy() {
  // catch list span
  var listSpan = document.querySelector('.products .drop .menu .menu-head'); // catch sort by menu

  var sortMenu = document.querySelector('.products .drop .menu .menu-list'); // catch angle down menu

  var angleMenu = document.querySelector('.products .drop .menu .menu-head i'); // add click event to span list

  (0, _Functions.addEvent)(listSpan, 'click', function (event) {
    sortMenu.classList.toggle('face');
    angleMenu.classList.toggle('rotate');
  }); // catch sort by menu item

  var sortMenuItem = document.querySelectorAll('.products .drop .menu .menu-list .menu-item');
  sortMenuItem.forEach(function (item) {
    // add click event to open sort by menu and rotate angle menu
    (0, _Functions.addEvent)(item, 'click', function (event) {
      var elements = event.target.parentElement.children; // we use for of as HTMLCollection doesnot have forEach function but it has [symbol.iterator] key

      var _iterator = _createForOfIteratorHelper(elements),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var el = _step.value;
          el.classList.remove('active');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      event.target.classList.toggle('active');
      listSpan.children[0].textContent = event.target.textContent;
      sortMenu.classList.toggle('face');
      angleMenu.classList.toggle('rotate');
    });
  }); // 
}

var _default = ShopSortBy;
exports["default"] = _default;

},{"./Functions.js":2}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function Slider() {
  var slider = tns({
    container: '.slider-container',
    controls: false,
    nav: false,
    autoplay: true,
    rewind: true,
    mouseDrag: true,
    speed: 300,
    gutter: 20,
    responsive: {
      993: {
        items: 4
      },
      767: {
        items: 2
      },
      575: {
        items: 1
      }
    }
  });
}

var _default = Slider;
exports["default"] = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Functions = require("./Functions.js");

function Wish() {
  // click on widh icon to popup wish section
  // catch cart icon
  var wishIcon = document.querySelector('.nav-header .user .like'); // catch cart section

  var wishContainer = document.querySelector('.nav-header .user .like .wish-container'); // stop propagation of click event on wish container

  (0, _Functions.addEvent)(wishContainer, 'click', function (event) {
    event.stopPropagation();
  }); // add click event to wish icon 

  (0, _Functions.addEvent)(wishIcon, 'click', function (event) {
    wishContainer.classList.toggle('hover-wish');
  }); // remove items form wishlist
  // catch close btn for each item

  var wishIconClose = document.querySelectorAll('.nav-header .user .like .close-x');
  wishIconClose.forEach(function (close) {
    (0, _Functions.addEvent)(close, 'click', function (event) {
      event.target.parentElement.parentElement.remove();
    });
  });
}

var _default = Wish;
exports["default"] = _default;

},{"./Functions.js":2}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Functions = require("./Functions.js");

function WishCartSelect() {
  // click event on wishlist and add-to-cart button
  // catch wishlist element
  var wishElements = document.querySelectorAll('.card .wishlist i'); // add click event

  wishElements.forEach(function (btn) {
    (0, _Functions.addEvent)(btn, 'click', function (event) {
      event.target.parentElement.classList.toggle('selected');
    });
  }); // catch add-to-cart element

  var addToCarts = document.querySelectorAll('.card .add-card i'); // add click event

  addToCarts.forEach(function (btn) {
    (0, _Functions.addEvent)(btn, 'click', function (event) {
      event.target.parentElement.classList.toggle('selected');
    });
  });
}

var _default = WishCartSelect;
exports["default"] = _default;

},{"./Functions.js":2}],11:[function(require,module,exports){
"use strict";

var _Cart = _interopRequireDefault(require("./includes/Cart.js"));

var _MainScroll = _interopRequireDefault(require("./includes/MainScroll.js"));

var _Nav = _interopRequireDefault(require("./includes/Nav.js"));

var _Scrollup = _interopRequireDefault(require("./includes/Scrollup.js"));

var _Slider = _interopRequireDefault(require("./includes/Slider.js"));

var _WishCartSelect = _interopRequireDefault(require("./includes/WishCartSelect"));

var _Wish = _interopRequireDefault(require("./includes/Wish.js"));

var _ShopSortBy = _interopRequireDefault(require("./includes/ShopSortBy.js"));

var _Pagaination = _interopRequireDefault(require("./includes/Pagaination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _Cart["default"])();
(0, _MainScroll["default"])();
(0, _Nav["default"])();
(0, _Scrollup["default"])();
(0, _WishCartSelect["default"])();
(0, _Wish["default"])();
(0, _ShopSortBy["default"])();
(0, _Pagaination["default"])();

},{"./includes/Cart.js":1,"./includes/MainScroll.js":3,"./includes/Nav.js":4,"./includes/Pagaination":5,"./includes/Scrollup.js":6,"./includes/ShopSortBy.js":7,"./includes/Slider.js":8,"./includes/Wish.js":9,"./includes/WishCartSelect":10}]},{},[11]);
