(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewPoll.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewPoll.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pollQuestion: '',
      pollOptions: [{
        id: 1,
        option: '',
        votes: 0
      }, {
        id: 2,
        option: '',
        votes: 0
      }],
      isPollCreated: false,
      pollUrl: '',
      pollUri: ''
    };
  },
  methods: {
    createPoll: function createPoll() {
      var _this = this;

      var loading = this.$vs.loading({
        target: this.$refs.button,
        scale: '0.6',
        opacity: 1,
        color: '#000'
      }); //! filter pollOptions from null options

      var pollOptionsFiltered = this.pollOptions.filter(function (option) {
        return option.option !== '';
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/polls', {
        pollQuestion: this.pollQuestion,
        pollOptions: pollOptionsFiltered
      }).then(function (res) {
        loading.close();
        _this.pollUri = res.data.uri;
        _this.pollUrl = "localhost:8000/poll/".concat(_this.pollUri);
        _this.isPollCreated = true;
      })["catch"](function (err) {
        loading.close();

        _this.$vs.notification({
          title: 'Error',
          text: "".concat(err.response.data.message),
          color: 'danger'
        });
      });
    },
    checkPoll: function checkPoll() {
      this.isPollCreated = false;
      this.$router.push({
        name: 'poll',
        params: {
          uri: this.pollUri
        }
      });
    },
    addOption: function addOption() {
      this.pollOptions.push({
        id: this.pollOptions.length + 1,
        option: '',
        votes: 0
      });
    },
    copyUrl: function copyUrl() {
      var _this2 = this;

      navigator.clipboard.writeText(this.pollUrl).then(function () {
        _this2.$vs.notification({
          title: 'Text copied',
          text: 'Poll Url copied successfully',
          color: 'success'
        });
      }, function (err) {
        console.log('Poll Url not copied', err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewPoll.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewPoll.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs-input-content {\n  background-color: white !important;\n}\n.vs-input {\n  width: 100%;\n}\n.copy {\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewPoll.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewPoll.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NewPoll.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewPoll.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewPoll.vue?vue&type=template&id=f272bba0&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewPoll.vue?vue&type=template&id=f272bba0& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mt-12 w-1/2 mx-auto" }, [
    _c("p", { staticClass: "text-3xl font-semibold" }, [
      _vm._v("Create a poll")
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "mt-2 text-gray-900 text-opacity-50" }, [
      _vm._v("Complete the below fileds to create your poll")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "poll w-full mt-8 mb-12" }, [
      _c(
        "div",
        { staticClass: "pollQuestion w-full" },
        [
          _c("vs-input", {
            staticClass: "w-full mb-3",
            attrs: {
              shadow: "",
              primary: "",
              "label-placeholder": "Poll Question"
            },
            model: {
              value: _vm.pollQuestion,
              callback: function($$v) {
                _vm.pollQuestion = $$v
              },
              expression: "pollQuestion"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pollOptions" },
        [
          _vm._l(_vm.pollOptions, function(pollOption, index) {
            return _c(
              "div",
              { key: index, staticClass: "mb-3 relative" },
              [
                _c("vs-input", {
                  staticClass: "py-2",
                  attrs: {
                    color: "success",
                    shadow: "",
                    primary: "",
                    "label-placeholder": "Option " + (index + 1)
                  },
                  model: {
                    value: pollOption.option,
                    callback: function($$v) {
                      _vm.$set(pollOption, "option", $$v)
                    },
                    expression: "pollOption.option"
                  }
                })
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex" },
            [
              _c(
                "vs-button",
                {
                  attrs: {
                    size: "large",
                    disabled: _vm.pollOptions.length === 8
                  },
                  on: { click: _vm.addOption }
                },
                [_vm._v("Add another Option")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  ref: "button",
                  staticClass: "ml-4",
                  attrs: { size: "large", success: "", flat: "", shadow: "" },
                  on: { click: _vm.createPoll }
                },
                [_vm._v("Create your poll")]
              ),
              _vm._v(" "),
              _c(
                "vs-dialog",
                {
                  attrs: { width: "300px", "not-center": "" },
                  scopedSlots: _vm._u([
                    {
                      key: "header",
                      fn: function() {
                        return [
                          _c("h4", { staticClass: "not-margin" }, [
                            _vm._v(
                              "\n                            Your poll created successfully\n                        "
                            )
                          ])
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "footer",
                      fn: function() {
                        return [
                          _c(
                            "div",
                            {
                              staticClass:
                                "con-footer flex items-center justify-between"
                            },
                            [
                              _c(
                                "vs-button",
                                { on: { click: _vm.checkPoll } },
                                [
                                  _vm._v(
                                    "\n                            Check poll\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                {
                                  attrs: { dark: "", transparent: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.isPollCreated = false
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            Cancel\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      },
                      proxy: true
                    }
                  ]),
                  model: {
                    value: _vm.isPollCreated,
                    callback: function($$v) {
                      _vm.isPollCreated = $$v
                    },
                    expression: "isPollCreated"
                  }
                },
                [
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "con-content relative" },
                    [
                      _c("vs-input", {
                        ref: "urlInput",
                        attrs: { placeholder: "Poll Url" },
                        model: {
                          value: _vm.pollUrl,
                          callback: function($$v) {
                            _vm.pollUrl = $$v
                          },
                          expression: "pollUrl"
                        }
                      }),
                      _vm._v(" "),
                      _c("box-icon", {
                        staticClass: "cursor-pointer absolute copy",
                        attrs: { name: "copy" },
                        on: { click: _vm.copyUrl }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/NewPoll.vue":
/*!****************************************!*\
  !*** ./resources/js/views/NewPoll.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewPoll_vue_vue_type_template_id_f272bba0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPoll.vue?vue&type=template&id=f272bba0& */ "./resources/js/views/NewPoll.vue?vue&type=template&id=f272bba0&");
/* harmony import */ var _NewPoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPoll.vue?vue&type=script&lang=js& */ "./resources/js/views/NewPoll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NewPoll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewPoll.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/NewPoll.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewPoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewPoll_vue_vue_type_template_id_f272bba0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewPoll_vue_vue_type_template_id_f272bba0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/NewPoll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/NewPoll.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/NewPoll.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NewPoll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewPoll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/NewPoll.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/NewPoll.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPoll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NewPoll.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewPoll.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPoll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPoll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPoll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPoll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/NewPoll.vue?vue&type=template&id=f272bba0&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/NewPoll.vue?vue&type=template&id=f272bba0& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPoll_vue_vue_type_template_id_f272bba0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NewPoll.vue?vue&type=template&id=f272bba0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewPoll.vue?vue&type=template&id=f272bba0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPoll_vue_vue_type_template_id_f272bba0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPoll_vue_vue_type_template_id_f272bba0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);