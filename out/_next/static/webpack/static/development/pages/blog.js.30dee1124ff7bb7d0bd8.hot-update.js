webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/p/".concat(props.id),
    href: "/post?title=".concat(props.title)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, props.title)));
};

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "paper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "paperHead"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Coming Soon!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
    id: "hello-nextjs",
    title: "Hello Next.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
    id: "learn-nextjs",
    title: "Learn Next.js is awesome"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
    id: "deploy-nextjs",
    title: "Deploy apps with Zeit"
  })))));
}

/***/ })

})
//# sourceMappingURL=blog.js.30dee1124ff7bb7d0bd8.hot-update.js.map