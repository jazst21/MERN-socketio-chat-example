webpackHotUpdate(0,{

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(8);\n\nvar _home = __webpack_require__(64);\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _posts = __webpack_require__(67);\n\nvar _posts2 = _interopRequireDefault(_posts);\n\nvar _profile = __webpack_require__(74);\n\nvar _profile2 = _interopRequireDefault(_profile);\n\nvar _list = __webpack_require__(84);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _login = __webpack_require__(89);\n\nvar _login2 = _interopRequireDefault(_login);\n\nvar _nav = __webpack_require__(93);\n\nvar _nav2 = _interopRequireDefault(_nav);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Routing = function (_Component) {\n    _inherits(Routing, _Component);\n\n    function Routing(props) {\n        _classCallCheck(this, Routing);\n\n        return _possibleConstructorReturn(this, (Routing.__proto__ || Object.getPrototypeOf(Routing)).call(this, props));\n    }\n\n    _createClass(Routing, [{\n        key: 'render',\n        value: function render() {\n\n            return _react2.default.createElement(\n                _reactRouterDom.BrowserRouter,\n                null,\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'container-full' },\n                        _react2.default.createElement(_nav2.default, { islogin: this.props.islogin })\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'container' },\n                        _react2.default.createElement(_reactRouterDom.Route, { path: '/home', excat: true, component: _home2.default }),\n                        _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _login2.default }),\n                        _react2.default.createElement(PrivateRoute, { authed: this.props.islogin, path: '/posts', component: _posts2.default }),\n                        _react2.default.createElement(PrivateRoute, { authed: this.props.islogin, path: '/list', component: _list2.default }),\n                        _react2.default.createElement(PrivateRoute, { authed: this.props.islogin, path: '/profile', component: _profile2.default })\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Routing;\n}(_react.Component);\n\nexports.default = Routing;\n;\n\nvar PrivateRoute = function PrivateRoute() {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JvdXRlci9yb3V0ZXIuanM/MjliMiJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicHJvcHMiLCJpc2xvZ2luIiwiUHJpdmF0ZVJvdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87OztBQUVqQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlIQUNSQSxLQURRO0FBR2xCOzs7O2lDQU1ROztBQUVMLG1CQUNJO0FBQUE7QUFBQTtBQUNHO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGdCQUFmO0FBQ00sdUVBQVMsU0FBUyxLQUFLQSxLQUFMLENBQVdDLE9BQTdCO0FBRE4scUJBREQ7QUFJRTtBQUFBO0FBQUEsMEJBQUssV0FBVSxXQUFmO0FBQ0csK0VBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQXBCLEVBQTBCLHlCQUExQixHQURIO0FBRUcsK0VBQU8sTUFBSyxRQUFaLEVBQXFCLDBCQUFyQixHQUZIO0FBR0csc0RBQUMsWUFBRCxJQUFjLFFBQVEsS0FBS0QsS0FBTCxDQUFXQyxPQUFqQyxFQUEyQyxNQUFLLFFBQWhELEVBQXlELDBCQUF6RCxHQUhIO0FBSUcsc0RBQUMsWUFBRCxJQUFjLFFBQVEsS0FBS0QsS0FBTCxDQUFXQyxPQUFqQyxFQUEwQyxNQUFLLE9BQS9DLEVBQXVELHlCQUF2RCxHQUpIO0FBS0csc0RBQUMsWUFBRCxJQUFjLFFBQVEsS0FBS0QsS0FBTCxDQUFXQyxPQUFqQyxFQUEyQyxNQUFLLFVBQWhELEVBQTJELDRCQUEzRDtBQUxIO0FBSkY7QUFESCxhQURKO0FBZ0JIOzs7Ozs7a0JBN0JnQkYsTztBQThCcEI7O0FBRUQsSUFBTUcsZUFBZSxTQUFmQSxZQUFlLEdBQUksQ0FHeEIsQ0FIRCIsImZpbGUiOiI2My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG4gXHJcbmltcG9ydCBIb21lIGZyb20gJy4uL0NvbnRhaW5lcnMvaG9tZSc7XHJcbmltcG9ydCBQb3N0cyBmcm9tICcuLi9Db250YWluZXJzL3Bvc3RzJztcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vQ29udGFpbmVycy9wcm9maWxlJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi4vQ29udGFpbmVycy9saXN0JztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL0NvbnRhaW5lcnMvbG9naW4nO1xyXG5pbXBvcnQgTmF2TWVudSBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyIChwcm9wcyk7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gIFxyXG4gICAgXHJcbiAgICBcclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Um91dGVyPlxyXG4gICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE5hdk1lbnUgaXNsb2dpbj17dGhpcy5wcm9wcy5pc2xvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ob21lXCIgZXhjYXQgY29tcG9uZW50PXtIb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpdmF0ZVJvdXRlIGF1dGhlZD17dGhpcy5wcm9wcy5pc2xvZ2lufSAgcGF0aD1cIi9wb3N0c1wiIGNvbXBvbmVudD17UG9zdHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBhdXRoZWQ9e3RoaXMucHJvcHMuaXNsb2dpbn0gcGF0aD1cIi9saXN0XCIgY29tcG9uZW50PXtMaXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcml2YXRlUm91dGUgYXV0aGVkPXt0aGlzLnByb3BzLmlzbG9naW59ICBwYXRoPVwiL3Byb2ZpbGVcIiBjb21wb25lbnQ9e1Byb2ZpbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PiAgICAgIFxyXG4gICAgICAgICAgICA8L1JvdXRlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBQcml2YXRlUm91dGU9ICgoKT0+e1xyXG4gIFxyXG4gIFxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL3JvdXRlci9yb3V0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///63\n");

/***/ })

})