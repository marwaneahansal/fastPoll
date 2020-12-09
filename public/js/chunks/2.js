(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poll.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/poll.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      poll: null,
      error: false,
      option: null,
      showPoll: true,
      colors: ['#409eff', '#581b98', '#f3558e', '#482ff7', '#21e6c1', '#faee1c', '#fc5185', '#ff5959', '#0e153a']
    };
  },
  watch: {
    showPoll: function showPoll() {
      if (this.showPoll === false) {
        console.log(this.poll);
        JSON.parse(this.poll.pollOptions).sort(function (a, b) {
          return a.votes > b.votes ? 1 : -1;
        });
        console.log(JSON.parse(this.poll.pollOptions));
      }
    }
  },
  computed: {
    pollOptions: function pollOptions() {
      return JSON.parse(this.poll.pollOptions);
    }
  },
  methods: {
    fetchPollDetails: function fetchPollDetails() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/poll/".concat(this.$route.params.uri)).then(function (res) {
        if (res.data.poll) {
          _this.poll = res.data.poll;
        } else {
          _this.error = true;
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    submitPoll: function submitPoll() {
      var _this2 = this;

      var selectedOption = this.pollOptions.find(function (option) {
        return _this2.option === option.id;
      });
      selectedOption.votes += 1;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/polls/".concat(this.poll.id), {
        pollOptions: this.pollOptions
      }).then(function (res) {
        _this2.$vs.notification({
          title: 'Vote saved successfully',
          text: "".concat(res.data.message),
          color: 'success'
        });
      })["catch"](function (err) {
        console.log(err.response);

        _this2.$vs.notification({
          title: 'Error',
          text: "".concat(err),
          color: 'danger'
        });
      });
    },
    getVotesPercent: function getVotesPercent(votes, totalVotes) {
      return parseFloat((votes / totalVotes * 100).toFixed(1));
    },
    compare: function compare(pollOptionsA, pollOptionsB) {
      if (pollOptionsA.votes < pollOptionsB.votes) {
        return -1;
      }

      if (pollOptionsA.votes > pollOptionsB.votes) {
        return 1;
      }

      return 0;
    }
  },
  created: function created() {
    this.fetchPollDetails();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poll.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/poll.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs-card {\n  cursor: auto !important;\n  max-width: 100% !important;\n}\n.pollOption {\n  transition: transform 1s ease-out;\n}\n.pollOption:hover {\n  transform: translateY(-5px);\n  /* box-shadow: 0px 1px 2px 0px rgba(0,0,0,.25); */\n}\n.vs-radio-content {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poll.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/poll.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./poll.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poll.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poll.vue?vue&type=template&id=07f61bbe&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/poll.vue?vue&type=template&id=07f61bbe& ***!
  \**************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "w-full" },
    [
      _vm.error
        ? _c(
            "vs-alert",
            {
              attrs: { color: "danger" },
              scopedSlots: _vm._u(
                [
                  {
                    key: "title",
                    fn: function() {
                      return [_vm._v("\n            Poll Not Found\n        ")]
                    },
                    proxy: true
                  }
                ],
                null,
                false,
                213299713
              )
            },
            [
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Poll you requested not found, Please check again your poll url."
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.poll
        ? _c("div", { staticClass: "mx-auto w-1/2 mb-12" }, [
            _c("div", { staticClass: "vs-card py-4 px-6" }, [
              _c("h2", { staticClass: "text-2xl font-semibold" }, [
                _vm._v(_vm._s(_vm.poll.poll_question) + "?")
              ]),
              _vm._v(" "),
              _vm.showPoll
                ? _c("div", [
                    _c(
                      "div",
                      { staticClass: "mt-5" },
                      _vm._l(_vm.pollOptions, function(pollOption) {
                        return _c(
                          "vs-radio",
                          {
                            key: pollOption.id,
                            staticClass: "mt-2",
                            attrs: { val: pollOption.id },
                            model: {
                              value: _vm.option,
                              callback: function($$v) {
                                _vm.option = $$v
                              },
                              expression: "option"
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(pollOption.option) +
                                "\n                    "
                            )
                          ]
                        )
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex items-center justify-between mt-6" },
                      [
                        _c(
                          "vs-button",
                          {
                            attrs: {
                              primary: "",
                              icon: "",
                              disabled: !_vm.option
                            },
                            on: { click: _vm.submitPoll }
                          },
                          [
                            _vm._v(
                              "\n                        Submit\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            attrs: { shadow: "", primary: "" },
                            on: {
                              click: function($event) {
                                _vm.showPoll = false
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        Jump to result\n                    "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                : _c("div", [
                    _c(
                      "div",
                      { staticClass: "mt-5" },
                      [
                        _vm._l(_vm.pollOptions, function(pollOption, index) {
                          return _c(
                            "div",
                            {
                              key: pollOption.id,
                              staticClass: "pollOption vs-card py-4 px-6 mb-3"
                            },
                            [
                              _c(
                                "h3",
                                { staticClass: "text-xl mb-4 font-semibold" },
                                [_vm._v(_vm._s(pollOption.option))]
                              ),
                              _vm._v(" "),
                              _c("k-progress", {
                                attrs: {
                                  color: _vm.colors[index],
                                  percent: _vm.getVotesPercent(
                                    pollOption.votes,
                                    _vm.poll.totalVotes
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "mt-4 text-sm text-black" },
                                [_vm._v(_vm._s(pollOption.votes) + " Votes")]
                              )
                            ],
                            1
                          )
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "flex justify-end mt-6" },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: { shadow: "", primary: "" },
                                on: {
                                  click: function($event) {
                                    _vm.showPoll = true
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            Back to vote\n                        "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      2
                    )
                  ]),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "text-sm mt-4 text-gray-900 text-opacity-50" },
                [_vm._v("asked by " + _vm._s(_vm.poll.created_by))]
              )
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/poll.vue":
/*!*************************************!*\
  !*** ./resources/js/views/poll.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _poll_vue_vue_type_template_id_07f61bbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poll.vue?vue&type=template&id=07f61bbe& */ "./resources/js/views/poll.vue?vue&type=template&id=07f61bbe&");
/* harmony import */ var _poll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poll.vue?vue&type=script&lang=js& */ "./resources/js/views/poll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _poll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poll.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/poll.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _poll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _poll_vue_vue_type_template_id_07f61bbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _poll_vue_vue_type_template_id_07f61bbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/poll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/poll.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/poll.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_poll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./poll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_poll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/poll.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/poll.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_poll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./poll.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poll.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_poll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_poll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_poll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_poll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/poll.vue?vue&type=template&id=07f61bbe&":
/*!********************************************************************!*\
  !*** ./resources/js/views/poll.vue?vue&type=template&id=07f61bbe& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_poll_vue_vue_type_template_id_07f61bbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./poll.vue?vue&type=template&id=07f61bbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poll.vue?vue&type=template&id=07f61bbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_poll_vue_vue_type_template_id_07f61bbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_poll_vue_vue_type_template_id_07f61bbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);