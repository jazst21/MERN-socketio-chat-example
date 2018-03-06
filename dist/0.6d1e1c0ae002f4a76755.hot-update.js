webpackHotUpdate(0,{

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(8);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Authentication = function (_Component) {\n  _inherits(Authentication, _Component);\n\n  function Authentication(props) {\n    _classCallCheck(this, Authentication);\n\n    var _this = _possibleConstructorReturn(this, (Authentication.__proto__ || Object.getPrototypeOf(Authentication)).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(Authentication, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      fetch('/api/authvalidate', {\n        method: 'post',\n        headers: {\n          'Content-Type': 'application/json',\n          'x-access-token': window.localStorage.getItem('accessToken')\n        },\n        body: JSON.stringify({})\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n\n        if (json.statuscode === 403) {\n          console.info(\"Invalid Token!!\");\n          _this2.props.history.push(\"/login\");\n        } else {\n          console.info(\"valid Token!!\");\n        }\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.onComponentDidMount && this.props.onComponentDidMount();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return '';\n    }\n  }]);\n\n  return Authentication;\n}(_react.Component);\n\nexports.default = (0, _reactRouterDom.withRouter)(Authentication);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvYXV0aGVudGljYXRlLmpzP2Y4NTIiXSwibmFtZXMiOlsiQXV0aGVudGljYXRpb24iLCJwcm9wcyIsInN0YXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJzdGF0dXNjb2RlIiwiY29uc29sZSIsImluZm8iLCJoaXN0b3J5IiwicHVzaCIsIm9uQ29tcG9uZW50RGlkTW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVPQSxjOzs7QUFFTCwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUdsQjs7Ozt5Q0FFb0I7QUFBQTs7QUFFbkJDLFlBQU8sbUJBQVAsRUFBNEI7QUFDMUJDLGdCQUFRLE1BRGtCO0FBRTFCQyxpQkFBUztBQUNQLDBCQUFnQixrQkFEVDtBQUVQLDRCQUFrQkMsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsYUFBN0I7QUFGWCxTQUZpQjtBQU0xQkMsY0FBTUMsS0FBS0MsU0FBTCxDQUFnQixFQUFoQjtBQU5vQixPQUE1QixFQVFFQyxJQVJGLENBUVE7QUFBQSxlQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxPQVJSLEVBUTRCRixJQVI1QixDQVFrQyxnQkFBUTs7QUFFeEMsWUFBSUUsS0FBS0MsVUFBTCxLQUFvQixHQUF4QixFQUE2QjtBQUMxQkMsa0JBQVFDLElBQVIsQ0FBYyxpQkFBZDtBQUNELGlCQUFLaEIsS0FBTCxDQUFXaUIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBeUIsUUFBekI7QUFDRCxTQUhELE1BR0s7QUFDQUgsa0JBQVFDLElBQVIsQ0FBYyxlQUFkO0FBQ0o7QUFDRixPQWhCRDtBQWlCRDs7O3dDQUVtQjtBQUNsQixXQUFLaEIsS0FBTCxDQUFXbUIsbUJBQVgsSUFBa0MsS0FBS25CLEtBQUwsQ0FBV21CLG1CQUFYLEVBQWxDO0FBQ0Q7Ozs2QkFHUTtBQUNQLGFBQVEsRUFBUjtBQUNEOzs7Ozs7a0JBRWMsZ0NBQVdwQixjQUFYLEMiLCJmaWxlIjoiOTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4gY2xhc3MgQXV0aGVudGljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIgKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fVxyXG4gIH1cclxuICA7XHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gXHJcbiAgICBmZXRjaCAoJy9hcGkvYXV0aHZhbGlkYXRlJywge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgnYWNjZXNzVG9rZW4nKVxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSAoe30pXHJcbiAgICB9XHJcbiAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSkudGhlbiAoanNvbiA9PiB7XHJcbiAgICAgXHJcbiAgICAgIGlmIChqc29uLnN0YXR1c2NvZGUgPT09IDQwMykge1xyXG4gICAgICAgICBjb25zb2xlLmluZm8gKFwiSW52YWxpZCBUb2tlbiEhXCIpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoIChcIi9sb2dpblwiKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgY29uc29sZS5pbmZvIChcInZhbGlkIFRva2VuISFcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCAmJiB0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQoKVxyXG4gIH1cclxuICBcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuICgnJyk7XHJcbiAgfVxyXG59XHJcbiAgZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBdXRoZW50aWNhdGlvbikgO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvQ29udGFpbmVycy9hdXRoZW50aWNhdGUuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///94\n");

/***/ })

})