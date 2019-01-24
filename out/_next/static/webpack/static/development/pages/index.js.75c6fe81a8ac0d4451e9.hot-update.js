webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





function getPosts() {
  return [{
    id: "hello-nextjs",
    title: "Hello Next.js"
  }, {
    id: "learn-nextjs",
    title: "Learn Next.js is awesome"
  }, {
    id: "deploy-nextjs",
    title: "Deploy apps with ZEIT"
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: "/p/".concat(post.id),
    href: "/post?title=".concat(post.title)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, post.title)));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4028648676"
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-4028648676"
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post.id,
      className: "jsx-4028648676"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: "/p/".concat(post.id),
      href: "/post?title=".concat(post.title)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-4028648676"
    }, post.title)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4028648676",
    css: "h1.jsx-4028648676,a.jsx-4028648676{font-family:\"Arial\";}ul.jsx-4028648676{padding:0;}li.jsx-4028648676{list-style:none;margin:5px 0;}a.jsx-4028648676{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-4028648676:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsa3ViYWxhL1Byb2plY3RzL3BvcnRmb2xpbzMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JnQixBQUk2QixBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9wYXVsa3ViYWxhL1Byb2plY3RzL3BvcnRmb2xpbzMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICByZXR1cm4gW1xuICAgIHsgaWQ6IFwiaGVsbG8tbmV4dGpzXCIsIHRpdGxlOiBcIkhlbGxvIE5leHQuanNcIiB9LFxuICAgIHsgaWQ6IFwibGVhcm4tbmV4dGpzXCIsIHRpdGxlOiBcIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiIH0sXG4gICAgeyBpZDogXCJkZXBsb3ktbmV4dGpzXCIsIHRpdGxlOiBcIkRlcGxveSBhcHBzIHdpdGggWkVJVFwiIH1cbiAgXTtcbn1cblxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgPGxpPlxuICAgIDxMaW5rIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XG4gICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICA8L2xpPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5NeSBCbG9nPC9oMT5cbiAgICA8dWw+XG4gICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XG4gICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSxcbiAgICAgIGEge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/paulkubala/Projects/portfolio3/pages/index.js */"
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.75c6fe81a8ac0d4451e9.hot-update.js.map