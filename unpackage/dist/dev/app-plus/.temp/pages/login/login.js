require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _vue = __webpack_require__(20);var _vue2 = _interopRequireDefault(_vue);\nvar _login = __webpack_require__(217);var _login2 = _interopRequireDefault(_login);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;\nvar app = new _vue2.default(_login2.default);\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// G:/HBuilserXProjects/UniAppTest/pages/login/login.js\n// module id = 216\n// module chunks = 3\n\n//# sourceURL=uni-app:///pages/login/login.js?b7af");

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_runtime_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_uni_loader_js_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_login_vue__ = __webpack_require__(219);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_runtime_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_uni_loader_js_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_runtime_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_uni_loader_js_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_login_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_87803992_hasScoped_false_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_login_vue__ = __webpack_require__(221);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(218)\n}\nvar normalizeComponent = __webpack_require__(17)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_runtime_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_uni_loader_js_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_login_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_87803992_hasScoped_false_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_F_Program_Files_x86_HBuilderX_0_1_48_20180905_alpha_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_login_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"G:\\\\HBuilserXProjects\\\\UniAppTest\\\\pages\\\\login\\\\login.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-87803992\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-87803992\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// G:/HBuilserXProjects/UniAppTest/pages/login/login.vue\n// module id = 217\n// module chunks = 3\n\n");

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-87803992\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"F://Program Files (x86)//HBuilderX.0.1.48.20180905-alpha//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!G:/HBuilserXProjects/UniAppTest/pages/login/login.vue\n// module id = 218\n// module chunks = 3\n\n");

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _pageHead = __webpack_require__(30);var _pageHead2 = _interopRequireDefault(_pageHead);\nvar _request = __webpack_require__(220);\nvar _utils = __webpack_require__(109);var _utils2 = _interopRequireDefault(_utils);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: '登录页',\n\t\t\tshowPassword: true,\n\t\t\tusername: '',\n\t\t\tupaswrd: '',\n\t\t\tloading: true,\n\t\t\tchecked: true,\n\t\t\thaslogin: false,\n\t\t\tpositionTop: 0,\n\t\t\tproviderList: [],\n\t\t\thasProvider: false };\n\n\t},\n\tonLoad: function onLoad() {\n\t\tthis.initPosition();\n\t\tthis.initProvider();\n\t},\n\tonShow: function onShow() {var _this = this;\n\t\t// console.log('login page show');\n\t\tvar key = 'cc',\n\t\tdata = '';\n\t\tif (key.length === 0) {\n\t\t\tuni.showToast('读取数据失败 key 不能为空');\n\t\t} else {\n\t\t\tuni.getStorage({\n\t\t\t\tkey: key,\n\t\t\t\tsuccess: function success(res) {\n\t\t\t\t\tconsole.log(res.data[0].suLoginName);\n\t\t\t\t\t_this.username = res.data[0].suLoginName;\n\t\t\t\t\t_this.upaswrd = res.data[0].suPassword;\n\t\t\t\t\t_this.haslogin = true;\n\t\t\t\t},\n\t\t\t\tfail: function fail() {\n\t\t\t\t\tconsole.log('读取数据失败 找不到 key 对应的数据');\n\t\t\t\t} });\n\n\t\t}\n\t},\n\tmethods: {\n\t\tchangeCh: function changeCh() {\n\t\t\tthis.checked = !this.checked;\n\t\t},\n\t\tbindInput: function bindInput(e) {\n\t\t\tthis.username = e.target.value;\n\t\t},\n\t\tbindInput2: function bindInput2(e) {\n\t\t\tthis.upaswrd = e.target.value;\n\t\t},\n\t\tchangePassword: function changePassword(e) {\n\t\t\tthis.showPassword = !this.showPassword;\n\t\t},\n\t\ttologin: function tologin() {\n\t\t\tif (this.haslogin) {\n\t\t\t\tuni.redirectTo({\n\t\t\t\t\turl: '../swiper/swiper?mc=login success' });\n\n\t\t\t} else {\n\t\t\t\tvar dataJson = {\n\t\t\t\t\tsuLoginName: this.username,\n\t\t\t\t\tsuPassword: this.upaswrd,\n\t\t\t\t\tsuUserType: 'A' };\n\n\t\t\t\tvar mycheked = this.checked;\n\t\t\t\t(0, _request.login)(dataJson, function (res) {\n\t\t\t\t\tif (res != null) {\n\t\t\t\t\t\t// console.log(JSON.stringify(res));\n\t\t\t\t\t\tvar key = 'cc';\n\t\t\t\t\t\tvar data = res.data;\n\t\t\t\t\t\tif (key.length === 0) {\n\t\t\t\t\t\t\tuni.showModal({\n\t\t\t\t\t\t\t\ttitle: '保存数据失败',\n\t\t\t\t\t\t\t\tcontent: 'key 不能为空',\n\t\t\t\t\t\t\t\tshowCancel: false });\n\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tif (mycheked) {\n\t\t\t\t\t\t\t\tuni.setStorage({\n\t\t\t\t\t\t\t\t\tkey: key,\n\t\t\t\t\t\t\t\t\tdata: data,\n\t\t\t\t\t\t\t\t\tsuccess: function success(res) {\n\t\t\t\t\t\t\t\t\t\tuni.navigateTo({\n\t\t\t\t\t\t\t\t\t\t\turl: '../main/main?mc=login success' });\n\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\tfail: function fail() {\n\t\t\t\t\t\t\t\t\t\tuni.showToast('储存数据失败');\n\t\t\t\t\t\t\t\t\t} });\n\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t},\n\t\tinitPosition: function initPosition() {\n\t\t\t/**\n                                         * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。\n                                         * 反向使用 top 进行定位，可以避免此问题。\n                                         */\n\t\t\tthis.positionTop = uni.getSystemInfoSync().windowHeight;\n\t\t},\n\t\tinitProvider: function initProvider() {var _this2 = this;\n\t\t\tvar filters = ['weixin', 'qq', 'sinaweibo'];\n\t\t\tuni.getProvider({\n\t\t\t\tservice: 'oauth',\n\t\t\t\tsuccess: function success(res) {\n\t\t\t\t\tif (res.provider && res.provider.length) {\n\t\t\t\t\t\tfor (var i = 0; i < res.provider.length; i++) {\n\t\t\t\t\t\t\tif (~filters.indexOf(res.provider[i])) {\n\t\t\t\t\t\t\t\t_this2.providerList.push({\n\t\t\t\t\t\t\t\t\tvalue: res.provider[i],\n\t\t\t\t\t\t\t\t\timage: '../../static/imgs/login/' + res.provider[i] + '.png' });\n\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t_this2.hasProvider = true;\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tfail: function fail(err) {\n\t\t\t\t\tconsole.error('获取服务供应商失败：' + JSON.stringify(err));\n\t\t\t\t} });\n\n\t\t},\n\t\toauth: function oauth(value) {var _this3 = this;\n\t\t\tuni.login({\n\t\t\t\tprovider: value,\n\t\t\t\tsuccess: function success(res) {\n\t\t\t\t\tuni.getUserInfo({\n\t\t\t\t\t\tprovider: value,\n\t\t\t\t\t\tsuccess: function success(infoRes) {\n\t\t\t\t\t\t\tconsole.log(JSON.stringify(infoRes));\n\t\t\t\t\t\t\t/**\n                                             * 实际开发中，获取用户信息后，需要将信息上报至服务端。\n                                             * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。\n                                             */\n\t\t\t\t\t\t\t_this3.toMain(infoRes.userInfo.nickName);\n\t\t\t\t\t\t} });\n\n\t\t\t\t},\n\t\t\t\tfail: function fail(err) {\n\t\t\t\t\tconsole.error('授权登录失败：' + JSON.stringify(err));\n\t\t\t\t} });\n\n\t\t},\n\t\ttoMain: function toMain(userName) {\n\t\t\tif (mycheked) {\n\t\t\t\tuni.setStorage({\n\t\t\t\t\tkey: key,\n\t\t\t\t\tdata: data,\n\t\t\t\t\tsuccess: function success(res) {\n\t\t\t\t\t\tconsole.log('存储用户信息成功!');\n\t\t\t\t\t},\n\t\t\t\t\tfail: function fail() {\n\t\t\t\t\t\tuni.showToast('储存数据失败');\n\t\t\t\t\t} });\n\n\t\t\t}\n\t\t\t/**\n      * 强制登录时使用reLaunch方式跳转过来\n     * 返回首页也使用reLaunch方式\n      */\n\t\t\tif (this.forcedLogin) {\n\t\t\t\tuni.reLaunch({\n\t\t\t\t\turl: '../main/main' });\n\n\t\t\t} else {\n\t\t\t\tuni.navigateBack();\n\t\t\t}\n\t\t} },\n\n\tcomponents: {\n\t\tpageHead: _pageHead2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"F://Program Files (x86)//HBuilderX.0.1.48.20180905-alpha//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"F://Program Files (x86)//HBuilderX.0.1.48.20180905-alpha//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"F://Program Files (x86)//HBuilderX.0.1.48.20180905-alpha//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"F://Program Files (x86)//HBuilderX.0.1.48.20180905-alpha//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"F://Program Files (x86)//HBuilderX.0.1.48.20180905-alpha//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/uni-loader.js!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!G:/HBuilserXProjects/UniAppTest/pages/login/login.vue\n// module id = 219\n// module chunks = 3\n\n//# sourceURL=uni-app:///pages/login/login.vue?81dc");

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var uni = __webpack_require__(0).default;var baseUrl = 'http://weixin.piesat.cn/jms/';\nfunction login(dataJson, callback) {\n\tcallback = callback || $.noop;\n\tuni.showLoading();\n\tuni.request({\n\t\turl: baseUrl + 'Login/selectLoginResponseList',\n\t\tdata: dataJson,\n\t\tsuccess: function success(res) {\n\t\t\tuni.hideLoading();\n\t\t\t// console.log('request success'+JSON.stringify(res.data));\n\t\t\treturn callback(res.data);\n\t\t},\n\t\tfail: function fail(err) {\n\t\t\tuni.hideLoading();\n\t\t\tconsole.log('request fail', err);\n\t\t\tuni.showModal({\n\t\t\t\tcontent: '登录失败，请稍后重试！',\n\t\t\t\tshowCancel: false });\n\n\t\t},\n\t\tcomplete: function complete() {\n\t\t\tuni.hideLoading();\n\t\t} });\n\n}exports.\n\n\nlogin = login;\n\n//////////////////\n// WEBPACK FOOTER\n// G:/HBuilserXProjects/UniAppTest/common/request.js\n// module id = 220\n// module chunks = 3\n\n//# sourceURL=uni-app:///common/request.js?7874");

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', [_vm._m(0), _vm._v(\" \"), _c('view', {\n    staticStyle: {\n      \"display\": \"none\"\n    }\n  }, [_c('page-head', {\n    attrs: {\n      \"title\": _vm.title,\n      \"mpcomid\": '0'\n    }\n  })], 1), _vm._v(\" \"), _c('view', {\n    staticClass: \"page-body\"\n  }, [_vm._m(1), _vm._v(\" \"), _c('view', {\n    staticClass: \"uni-list\",\n    staticStyle: {\n      \"margin\": \"80px 20px\",\n      \"width\": \"700px\"\n    }\n  }, [_c('view', {\n    staticClass: \"uni-list-cell\"\n  }, [_c('image', {\n    attrs: {\n      \"src\": \"../../static/imgs/login/icon_user.png\"\n    }\n  }), _vm._v(\" \"), _c('input', {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: (_vm.username),\n      expression: \"username\"\n    }],\n    staticClass: \"uni-input\",\n    attrs: {\n      \"type\": \"text\",\n      \"placeholder\": \"请输入用户名\",\n      \"eventid\": '0'\n    },\n    domProps: {\n      \"value\": (_vm.username)\n    },\n    on: {\n      \"input\": [function($event) {\n        if ($event.target.composing) { return; }\n        _vm.username = $event.target.value\n      }, _vm.bindInput]\n    }\n  })]), _vm._v(\" \"), _c('view', {\n    staticClass: \"uni-list-cell\"\n  }, [_c('image', {\n    attrs: {\n      \"src\": \"../../static/imgs/login/icon_password.png\"\n    }\n  }), _vm._v(\" \"), _c('input', {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: (_vm.upaswrd),\n      expression: \"upaswrd\"\n    }],\n    staticClass: \"uni-input\",\n    attrs: {\n      \"placeholder\": \"请输入密码\",\n      \"password\": _vm.showPassword,\n      \"eventid\": '1'\n    },\n    domProps: {\n      \"value\": (_vm.upaswrd)\n    },\n    on: {\n      \"input\": [function($event) {\n        if ($event.target.composing) { return; }\n        _vm.upaswrd = $event.target.value\n      }, _vm.bindInput2]\n    }\n  }), _vm._v(\" \"), _c('view', {\n    staticClass: \"uni-icon uni-icon-eye\",\n    class: [!_vm.showPassword ? 'uni-active' : ''],\n    attrs: {\n      \"eventid\": '2'\n    },\n    on: {\n      \"click\": _vm.changePassword\n    }\n  })])]), _vm._v(\" \"), _c('view', [_c('label', {\n    staticStyle: {\n      \"float\": \"right\",\n      \"margin-right\": \"20px\",\n      \"font-size\": \"30px\"\n    }\n  }, [_c('checkbox', {\n    attrs: {\n      \"value\": 1,\n      \"checked\": _vm.checked,\n      \"eventid\": '3'\n    },\n    on: {\n      \"click\": _vm.changeCh\n    }\n  }), _vm._v(\" \"), _c('text', [_vm._v(\"记住密码\")])], 1)], 1), _vm._v(\" \"), _c('view', {\n    staticClass: \"button-sp-area\",\n    staticStyle: {\n      \"margin-top\": \"40px\"\n    }\n  }, [_c('button', {\n    staticClass: \"button\",\n    attrs: {\n      \"eventid\": '4'\n    },\n    on: {\n      \"click\": _vm.tologin\n    }\n  }, [_vm._v(\"登录\")])], 1), _vm._v(\" \"), (_vm.hasProvider) ? _c('view', {\n    staticClass: \"oauth-row\",\n    style: ({\n      top: _vm.positionTop + 'px'\n    })\n  }, _vm._l((_vm.providerList), function(provider, index) {\n    return _c('view', {\n      key: provider.value,\n      staticClass: \"oauth-image\"\n    }, [_c('image', {\n      attrs: {\n        \"src\": provider.image,\n        \"eventid\": '5-' + index\n      },\n      on: {\n        \"tap\": function($event) {\n          _vm.oauth(provider.value)\n        }\n      }\n    })])\n  })) : _vm._e()])])\n}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"status_bar\"\n  }, [_c('view', {\n    staticClass: \"top_view\"\n  })])\n},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"head-img\"\n  }, [_c('image', {\n    staticClass: \"img\",\n    attrs: {\n      \"src\": \"../../static/imgs/snowflake.png\"\n    }\n  })])\n}]\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-87803992\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-87803992\",\"hasScoped\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!G:/HBuilserXProjects/UniAppTest/pages/login/login.vue\n// module id = 221\n// module chunks = 3\n\n");

/***/ })

},[216]);