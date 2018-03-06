webpackHotUpdate(0,{

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _authenticate = __webpack_require__(94);\n\nvar _authenticate2 = _interopRequireDefault(_authenticate);\n\n__webpack_require__(4);\n\nvar _index = __webpack_require__(75);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profile = function (_Component) {\n  _inherits(Profile, _Component);\n\n  function Profile(props) {\n    _classCallCheck(this, Profile);\n\n    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));\n\n    _this.state = {\n      renderActual: false\n    };\n    _this.mountedorNot = _this.mountedorNot.bind(_this);\n    return _this;\n  }\n\n  _createClass(Profile, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      var id = window.localStorage.getItem('userid');\n      fetch('/api/getuserdetail/' + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        if (json.hasOwnProperty('list')) {\n\n          var obj = { 'user': json.list[0] };\n          if (json.list[0].hasOwnProperty('userDetail')) {\n            obj.userDetail = json.list[0].userDetail;\n          }\n          _this2.setState(obj);\n        }\n      });\n    }\n  }, {\n    key: 'mountedorNot',\n    value: function mountedorNot() {\n\n      this.setState({ enderActual: true });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      console.log(this.state);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_authenticate2.default, { onComponentDidMount: this.mountedorNot }),\n        this.state.renderActual && _react2.default.createElement(_index2.default, { userdata: this.state })\n      );\n    }\n  }]);\n\n  return Profile;\n}(_react.Component);\n\nexports.default = Profile;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvcHJvZmlsZS5qcz80YTMwIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsInN0YXRlIiwicmVuZGVyQWN0dWFsIiwibW91bnRlZG9yTm90IiwiYmluZCIsImlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJsaXN0IiwidXNlckRldGFpbCIsInNldFN0YXRlIiwiZW5kZXJBY3R1YWwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7QUFFbEIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1ZDLG9CQUFhO0FBREgsS0FBYjtBQUdBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFMa0I7QUFNbkI7Ozs7eUNBR21CO0FBQUE7O0FBRXBCLFVBQUlDLEtBQUtDLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTZCLFFBQTdCLENBQVQ7QUFDRUMsb0NBQTZCSixFQUE3QixFQUFtQyxFQUFDSyxRQUFRLEtBQVQsRUFBZ0JDLFNBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBQXpCLEVBQW5DLEVBQ0VDLElBREYsQ0FDUTtBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BRFIsRUFFRUYsSUFGRixDQUVRLGdCQUFRO0FBQ2QsWUFBSUUsS0FBS0MsY0FBTCxDQUFxQixNQUFyQixDQUFKLEVBQWtDOztBQUVsQyxjQUFJQyxNQUFLLEVBQUMsUUFBUUYsS0FBS0csSUFBTCxDQUFVLENBQVYsQ0FBVCxFQUFUO0FBQ0UsY0FBR0gsS0FBS0csSUFBTCxDQUFVLENBQVYsRUFBYUYsY0FBYixDQUE0QixZQUE1QixDQUFILEVBQTZDO0FBQ3RDQyxnQkFBSUUsVUFBSixHQUFnQkosS0FBS0csSUFBTCxDQUFVLENBQVYsRUFBYUMsVUFBN0I7QUFDTDtBQUNELGlCQUFLQyxRQUFMLENBQWNILEdBQWQ7QUFDQTtBQUNGLE9BWEg7QUFZRDs7O21DQUVlOztBQUVaLFdBQUtHLFFBQUwsQ0FBYyxFQUFDQyxhQUFZLElBQWIsRUFBZDtBQUNEOzs7NkJBSVE7QUFDUEMsY0FBUUMsR0FBUixDQUFZLEtBQUtyQixLQUFqQjtBQUNFLGFBQ0k7QUFBQTtBQUFBO0FBQ0EsZ0VBQWlCLHFCQUFxQixLQUFLRSxZQUEzQyxHQURBO0FBRUUsYUFBS0YsS0FBTCxDQUFXQyxZQUFYLElBQTZCLGlEQUFXLFVBQVUsS0FBS0QsS0FBMUI7QUFGL0IsT0FESjtBQU9IOzs7Ozs7a0JBNUNnQkYsTyIsImZpbGUiOiI3NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRoZW50aWNhdGlvbiBmcm9tICcuL2F1dGhlbnRpY2F0ZSc7XHJcblxyXG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XHJcbmltcG9ydCBNeVByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9maWxlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlciAocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgIHJlbmRlckFjdHVhbDpmYWxzZVxyXG4gICAgfTtcclxuICAgIHRoaXMubW91bnRlZG9yTm90PSAgdGhpcy5tb3VudGVkb3JOb3QuYmluZCh0aGlzKTtcclxuICB9IFxyXG4gICBcclxuICAgIFxyXG4gY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICBcclxuICB2YXIgaWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCd1c2VyaWQnKTtcclxuICAgIGZldGNoIChgL2FwaS9nZXR1c2VyZGV0YWlsLyR7aWR9YCwge21ldGhvZDogJ2dldCcsIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX1cclxuICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpXHJcbiAgICApLnRoZW4gKGpzb24gPT4ge1xyXG4gICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eSAoJ2xpc3QnKSkge1xyXG4gICAgIFxyXG4gICAgICB2YXIgb2JqID17J3VzZXInOiBqc29uLmxpc3RbMF19XHJcbiAgICAgICAgaWYoanNvbi5saXN0WzBdLmhhc093blByb3BlcnR5KCd1c2VyRGV0YWlsJykpe1xyXG4gICAgICAgICAgICAgICBvYmoudXNlckRldGFpbD0ganNvbi5saXN0WzBdLnVzZXJEZXRhaWxcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLnNldFN0YXRlKG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgICBcclxuICAgIG1vdW50ZWRvck5vdCgpe1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5kZXJBY3R1YWw6dHJ1ZSB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEF1dGhlbnRpY2F0aW9uICBvbkNvbXBvbmVudERpZE1vdW50PXt0aGlzLm1vdW50ZWRvck5vdH0vPlxyXG4gICAgICAgICAgICB7IHRoaXMuc3RhdGUucmVuZGVyQWN0dWFsICYmICAgPE15UHJvZmlsZSB1c2VyZGF0YT17dGhpcy5zdGF0ZX0gLz4gIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9Db250YWluZXJzL3Byb2ZpbGUuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///74\n");

/***/ })

})