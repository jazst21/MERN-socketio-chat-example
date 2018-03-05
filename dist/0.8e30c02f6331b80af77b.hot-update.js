webpackHotUpdate(0,{

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _auth = __webpack_require__(60);\n\nvar _pubsubJs = __webpack_require__(8);\n\nvar _pubsubJs2 = _interopRequireDefault(_pubsubJs);\n\n__webpack_require__(62);\n\nvar _router = __webpack_require__(63);\n\nvar _router2 = _interopRequireDefault(_router);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*import DashBoard from './components/layout/Dashboard';\nimport Landing from './components/layout/Landing'; */\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      \"isLoggedIn\": window.localStorage.getItem('isLoggedIn')\n    };\n    _this.auth = new _auth.Auth();\n    _this.auth.validateToken(function () {\n      this.props.history.push(\"/login\");\n    });\n\n    _this.mySubscriber = _this.mySubscriber.bind(_this);\n    _pubsubJs2.default.subscribe('IS_LOGIN', _this.mySubscriber);\n\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'mySubscriber',\n    value: function mySubscriber(msg, data) {\n      if (data.status) {\n        window.localStorage.setItem('accessToken', data.token);\n        window.localStorage.setItem('userid', data.userid);\n        window.localStorage.setItem('isLoggedIn', true);\n      } else {\n        window.localStorage.removeItem('accessToken');\n        window.localStorage.removeItem('userid');\n        window.localStorage.removeItem('isLoggedIn');\n      }\n      this.isLoggedIn();\n    }\n  }, {\n    key: 'isLoggedIn',\n    value: function isLoggedIn() {\n      var boolFlag = window.localStorage.getItem('isLoggedIn');\n      this.setState({\n        isLoggedIn: boolFlag !== null && boolFlag !== '' ? JSON.parse(boolFlag) : false\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_router2.default, { islogin: this.state.isLoggedIn })\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0FwcC5qcz9hMGY1Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXV0aCIsInZhbGlkYXRlVG9rZW4iLCJoaXN0b3J5IiwicHVzaCIsIm15U3Vic2NyaWJlciIsImJpbmQiLCJzdWJzY3JpYmUiLCJtc2ciLCJkYXRhIiwic3RhdHVzIiwic2V0SXRlbSIsInRva2VuIiwidXNlcmlkIiwicmVtb3ZlSXRlbSIsImlzTG9nZ2VkSW4iLCJib29sRmxhZyIsInNldFN0YXRlIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7OztJQUdNQSxHOzs7QUFFSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1ZBLEtBRFU7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYLG9CQUFjQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixZQUE3QjtBQURILEtBQWI7QUFHQSxVQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxVQUFLQSxJQUFMLENBQVVDLGFBQVYsQ0FBeUIsWUFBWTtBQUNsQyxXQUFLTixLQUFMLENBQVdPLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLFFBQXhCO0FBQ0YsS0FGRDs7QUFJQyxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsdUJBQU9DLFNBQVAsQ0FBa0IsVUFBbEIsRUFBOEIsTUFBS0YsWUFBbkM7O0FBWmdCO0FBY2xCOzs7O2lDQUVZRyxHLEVBQUtDLEksRUFBTTtBQUN0QixVQUFJQSxLQUFLQyxNQUFULEVBQWlCO0FBQ2ZaLGVBQU9DLFlBQVAsQ0FBb0JZLE9BQXBCLENBQTZCLGFBQTdCLEVBQTRDRixLQUFLRyxLQUFqRDtBQUNBZCxlQUFPQyxZQUFQLENBQW9CWSxPQUFwQixDQUE2QixRQUE3QixFQUF1Q0YsS0FBS0ksTUFBNUM7QUFDQWYsZUFBT0MsWUFBUCxDQUFvQlksT0FBcEIsQ0FBNkIsWUFBN0IsRUFBMkMsSUFBM0M7QUFDRCxPQUpELE1BSU87QUFDTGIsZUFBT0MsWUFBUCxDQUFvQmUsVUFBcEIsQ0FBZ0MsYUFBaEM7QUFDQWhCLGVBQU9DLFlBQVAsQ0FBb0JlLFVBQXBCLENBQWdDLFFBQWhDO0FBQ0FoQixlQUFPQyxZQUFQLENBQW9CZSxVQUFwQixDQUFnQyxZQUFoQztBQUNEO0FBQ0EsV0FBS0MsVUFBTDtBQUNBOzs7aUNBRVk7QUFDYixVQUFJQyxXQUFXbEIsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsWUFBN0IsQ0FBZjtBQUNBLFdBQUtpQixRQUFMLENBQWU7QUFDYkYsb0JBQWFDLGFBQWEsSUFBYixJQUFxQkEsYUFBYSxFQUFuQyxHQUF5Q0UsS0FBS0MsS0FBTCxDQUFZSCxRQUFaLENBQXpDLEdBQWlFO0FBRGhFLE9BQWY7QUFHRDs7OzZCQUVVO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSwwREFBUyxTQUFTLEtBQUtuQixLQUFMLENBQVdrQixVQUE3QjtBQURGLE9BREY7QUFLSDs7Ozs7O2tCQUlZcEIsRyIsImZpbGUiOiI1OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBdXRofSBmcm9tICcuL2NvbW1vbi9hdXRoJztcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcbmltcG9ydCAnLi9zdHlsZS9jc3MvQXBwLnNjc3MnO1xuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi9yb3V0ZXIvcm91dGVyJztcbi8qaW1wb3J0IERhc2hCb2FyZCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0Rhc2hib2FyZCc7XG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0xhbmRpbmcnOyAqL1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICAgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIFwiaXNMb2dnZWRJblwiOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCdpc0xvZ2dlZEluJylcbiAgICB9O1xuICAgIHRoaXMuYXV0aCA9IG5ldyBBdXRoICgpO1xuICAgIHRoaXMuYXV0aC52YWxpZGF0ZVRva2VuIChmdW5jdGlvbiAoKSB7XG4gICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvbG9naW5cIik7XG4gICAgfSk7XG5cbiAgICAgdGhpcy5teVN1YnNjcmliZXIgPSB0aGlzLm15U3Vic2NyaWJlci5iaW5kICh0aGlzKTtcbiAgICAgUHViU3ViLnN1YnNjcmliZSAoJ0lTX0xPR0lOJywgdGhpcy5teVN1YnNjcmliZXIpO1xuICAgIFxuICB9XG4gIFxuICBteVN1YnNjcmliZXIobXNnLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc3RhdHVzKSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0gKCdhY2Nlc3NUb2tlbicsIGRhdGEudG9rZW4pO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtICgndXNlcmlkJywgZGF0YS51c2VyaWQpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtICgnaXNMb2dnZWRJbicsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0gKCdhY2Nlc3NUb2tlbicpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtICgndXNlcmlkJyk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0gKCdpc0xvZ2dlZEluJyk7XG4gICAgfVxuICAgICB0aGlzLmlzTG9nZ2VkSW4gKCk7XG4gICAgfVxuICAgXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICB2YXIgYm9vbEZsYWcgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCdpc0xvZ2dlZEluJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSAoe1xuICAgICAgaXNMb2dnZWRJbjogKGJvb2xGbGFnICE9PSBudWxsICYmIGJvb2xGbGFnICE9PSAnJykgPyBKU09OLnBhcnNlIChib29sRmxhZykgOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIDtcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKCBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Um91dGluZyBpc2xvZ2luPXt0aGlzLnN0YXRlLmlzTG9nZ2VkSW59IC8+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgICBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvQXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///59\n");

/***/ })

})