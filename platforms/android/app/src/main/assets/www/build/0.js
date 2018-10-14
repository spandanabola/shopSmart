webpackJsonp([0],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignupPage */]
            ], providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(55);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name HTTP
 * @description
 * Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.
 *
 * Advantages over Javascript requests:
 * - Background threading - all requests are done in a background thread
 * - SSL Pinning
 *
 * @usage
 * ```typescript
 * import { HTTP } from '@ionic-native/http';
 *
 * constructor(private http: HTTP) {}
 *
 * ...
 *
 * this.http.get('http://ionic.io', {}, {})
 *   .then(data => {
 *
 *     console.log(data.status);
 *     console.log(data.data); // data received by server
 *     console.log(data.headers);
 *
 *   })
 *   .catch(error => {
 *
 *     console.log(error.status);
 *     console.log(error.error); // error message as string
 *     console.log(error.headers);
 *
 *   });
 *
 * ```
 * @interfaces
 * HTTPResponse
 */
var HTTP = (function (_super) {
    __extends(HTTP, _super);
    function HTTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This returns an object representing a basic HTTP Authorization header of the form.
     * @param username {string} Username
     * @param password {string} Password
     * @returns {Object} an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64EncodedUsernameAndPassword'}
     */
    /**
       * This returns an object representing a basic HTTP Authorization header of the form.
       * @param username {string} Username
       * @param password {string} Password
       * @returns {Object} an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64EncodedUsernameAndPassword'}
       */
    HTTP.prototype.getBasicAuthHeader = /**
       * This returns an object representing a basic HTTP Authorization header of the form.
       * @param username {string} Username
       * @param password {string} Password
       * @returns {Object} an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64EncodedUsernameAndPassword'}
       */
    function (username, password) {
        return;
    };
    /**
     * This sets up all future requests to use Basic HTTP authentication with the given username and password.
     * @param username {string} Username
     * @param password {string} Password
     */
    /**
       * This sets up all future requests to use Basic HTTP authentication with the given username and password.
       * @param username {string} Username
       * @param password {string} Password
       */
    HTTP.prototype.useBasicAuth = /**
       * This sets up all future requests to use Basic HTTP authentication with the given username and password.
       * @param username {string} Username
       * @param password {string} Password
       */
    function (username, password) { };
    /**
     * Get all headers defined for a given hostname.
     * @param host {string} The hostname
     * @returns {string} return all headers defined for the hostname
     */
    /**
       * Get all headers defined for a given hostname.
       * @param host {string} The hostname
       * @returns {string} return all headers defined for the hostname
       */
    HTTP.prototype.getHeaders = /**
       * Get all headers defined for a given hostname.
       * @param host {string} The hostname
       * @returns {string} return all headers defined for the hostname
       */
    function (host) {
        return;
    };
    /**
     * Set a header for all future requests. Takes a hostname, a header and a value.
     * @param host {string} The hostname to be used for scoping this header
     * @param header {string} The name of the header
     * @param value {string} The value of the header
     */
    /**
       * Set a header for all future requests. Takes a hostname, a header and a value.
       * @param host {string} The hostname to be used for scoping this header
       * @param header {string} The name of the header
       * @param value {string} The value of the header
       */
    HTTP.prototype.setHeader = /**
       * Set a header for all future requests. Takes a hostname, a header and a value.
       * @param host {string} The hostname to be used for scoping this header
       * @param header {string} The name of the header
       * @param value {string} The value of the header
       */
    function (host, header, value) { };
    /**
     * Get the name of the data serializer which will be used for all future POST and PUT requests.
     * @returns {string} returns the name of the configured data serializer
     */
    /**
       * Get the name of the data serializer which will be used for all future POST and PUT requests.
       * @returns {string} returns the name of the configured data serializer
       */
    HTTP.prototype.getDataSerializer = /**
       * Get the name of the data serializer which will be used for all future POST and PUT requests.
       * @returns {string} returns the name of the configured data serializer
       */
    function () {
        return;
    };
    /**
     * Set the data serializer which will be used for all future POST and PUT requests. Takes a string representing the name of the serializer.
     * @param serializer {string} The name of the serializer. Can be urlencoded, utf8 or json
     */
    /**
       * Set the data serializer which will be used for all future POST and PUT requests. Takes a string representing the name of the serializer.
       * @param serializer {string} The name of the serializer. Can be urlencoded, utf8 or json
       */
    HTTP.prototype.setDataSerializer = /**
       * Set the data serializer which will be used for all future POST and PUT requests. Takes a string representing the name of the serializer.
       * @param serializer {string} The name of the serializer. Can be urlencoded, utf8 or json
       */
    function (serializer) { };
    /**
     * Add a custom cookie.
     * @param url {string} Scope of the cookie
     * @param cookie {string} RFC compliant cookie string
     */
    /**
       * Add a custom cookie.
       * @param url {string} Scope of the cookie
       * @param cookie {string} RFC compliant cookie string
       */
    HTTP.prototype.setCookie = /**
       * Add a custom cookie.
       * @param url {string} Scope of the cookie
       * @param cookie {string} RFC compliant cookie string
       */
    function (url, cookie) { };
    /**
     * Clear all cookies.
     */
    /**
       * Clear all cookies.
       */
    HTTP.prototype.clearCookies = /**
       * Clear all cookies.
       */
    function () { };
    /**
     * Remove cookies for given URL.
     * @param url {string}
     * @param cb
     */
    /**
       * Remove cookies for given URL.
       * @param url {string}
       * @param cb
       */
    HTTP.prototype.removeCookies = /**
       * Remove cookies for given URL.
       * @param url {string}
       * @param cb
       */
    function (url, cb) { };
    /**
     * Resolve cookie string for given URL.
     * @param url {string}
     */
    /**
       * Resolve cookie string for given URL.
       * @param url {string}
       */
    HTTP.prototype.getCookieString = /**
       * Resolve cookie string for given URL.
       * @param url {string}
       */
    function (url) {
        return;
    };
    /**
     * Get global request timeout value in seconds.
     * @returns {number} returns the global request timeout value
     */
    /**
       * Get global request timeout value in seconds.
       * @returns {number} returns the global request timeout value
       */
    HTTP.prototype.getRequestTimeout = /**
       * Get global request timeout value in seconds.
       * @returns {number} returns the global request timeout value
       */
    function () {
        return;
    };
    /**
     * Set global request timeout value in seconds.
     * @param timeout {number} The timeout in seconds. Default 60
     */
    /**
       * Set global request timeout value in seconds.
       * @param timeout {number} The timeout in seconds. Default 60
       */
    HTTP.prototype.setRequestTimeout = /**
       * Set global request timeout value in seconds.
       * @param timeout {number} The timeout in seconds. Default 60
       */
    function (timeout) { };
    /**
     * Set SSL Cert handling mode, being one of the following values
     * default: default SSL cert handling using system's CA certs
     * nocheck: disable SSL cert checking, trusting all certs (meant to be used only for testing purposes)
     * pinned: trust only provided certs
     * @see https://github.com/silkimen/cordova-plugin-advanced-http#setsslcertmode
     * @param {'default' | 'nocheck' | 'pinned'} mode SSL Cert handling mode
     */
    /**
       * Set SSL Cert handling mode, being one of the following values
       * default: default SSL cert handling using system's CA certs
       * nocheck: disable SSL cert checking, trusting all certs (meant to be used only for testing purposes)
       * pinned: trust only provided certs
       * @see https://github.com/silkimen/cordova-plugin-advanced-http#setsslcertmode
       * @param {'default' | 'nocheck' | 'pinned'} mode SSL Cert handling mode
       */
    HTTP.prototype.setSSLCertMode = /**
       * Set SSL Cert handling mode, being one of the following values
       * default: default SSL cert handling using system's CA certs
       * nocheck: disable SSL cert checking, trusting all certs (meant to be used only for testing purposes)
       * pinned: trust only provided certs
       * @see https://github.com/silkimen/cordova-plugin-advanced-http#setsslcertmode
       * @param {'default' | 'nocheck' | 'pinned'} mode SSL Cert handling mode
       */
    function (mode) {
        return;
    };
    /**
     * Disable following redirects automatically.
     * @param disable {boolean} Set to true to disable following redirects automatically
     * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
     */
    /**
       * Disable following redirects automatically.
       * @param disable {boolean} Set to true to disable following redirects automatically
       * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
       */
    HTTP.prototype.disableRedirect = /**
       * Disable following redirects automatically.
       * @param disable {boolean} Set to true to disable following redirects automatically
       * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
       */
    function (disable) {
        return;
    };
    /**
     * Make a POST request
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    /**
       * Make a POST request
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    HTTP.prototype.post = /**
       * Make a POST request
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    function (url, body, headers) {
        return;
    };
    /**
     * Make a GET request
     * @param url {string} The url to send the request to
     * @param parameters {Object} Parameters to send with the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    /**
       * Make a GET request
       * @param url {string} The url to send the request to
       * @param parameters {Object} Parameters to send with the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    HTTP.prototype.get = /**
       * Make a GET request
       * @param url {string} The url to send the request to
       * @param parameters {Object} Parameters to send with the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    function (url, parameters, headers) {
        return;
    };
    /**
     * Make a PUT request
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    /**
       * Make a PUT request
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    HTTP.prototype.put = /**
       * Make a PUT request
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    function (url, body, headers) {
        return;
    };
    /**
     * Make a PATCH request
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    /**
       * Make a PATCH request
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    HTTP.prototype.patch = /**
       * Make a PATCH request
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    function (url, body, headers) {
        return;
    };
    /**
     * Make a DELETE request
     * @param url {string} The url to send the request to
     * @param parameters {Object} Parameters to send with the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    /**
       * Make a DELETE request
       * @param url {string} The url to send the request to
       * @param parameters {Object} Parameters to send with the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    HTTP.prototype.delete = /**
       * Make a DELETE request
       * @param url {string} The url to send the request to
       * @param parameters {Object} Parameters to send with the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    function (url, parameters, headers) {
        return;
    };
    /**
     * Make a HEAD request
     * @param url {string} The url to send the request to
     * @param parameters {Object} Parameters to send with the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    /**
       * Make a HEAD request
       * @param url {string} The url to send the request to
       * @param parameters {Object} Parameters to send with the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    HTTP.prototype.head = /**
       * Make a HEAD request
       * @param url {string} The url to send the request to
       * @param parameters {Object} Parameters to send with the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    function (url, parameters, headers) {
        return;
    };
    /**
     *
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @param filePath {string} The local path of the file to upload
     * @param name {string} The name of the parameter to pass the file along as
     * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
     */
    /**
       *
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @param filePath {string} The local path of the file to upload
       * @param name {string} The name of the parameter to pass the file along as
       * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
       */
    HTTP.prototype.uploadFile = /**
       *
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @param filePath {string} The local path of the file to upload
       * @param name {string} The name of the parameter to pass the file along as
       * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
       */
    function (url, body, headers, filePath, name) {
        return;
    };
    /**
     *
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @param filePath {string} The path to download the file to, including the file name.
     * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
     */
    /**
       *
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @param filePath {string} The path to download the file to, including the file name.
       * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
       */
    HTTP.prototype.downloadFile = /**
       *
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @param filePath {string} The path to download the file to, including the file name.
       * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
       */
    function (url, body, headers, filePath) {
        return;
    };
    HTTP.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Object)
    ], HTTP.prototype, "getBasicAuthHeader", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "useBasicAuth", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], HTTP.prototype, "getHeaders", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "setHeader", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], HTTP.prototype, "getDataSerializer", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "setDataSerializer", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "setCookie", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "clearCookies", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Function]),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "removeCookies", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], HTTP.prototype, "getCookieString", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], HTTP.prototype, "getRequestTimeout", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "setRequestTimeout", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "setSSLCertMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "disableRedirect", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "post", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "get", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "put", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "patch", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "delete", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "head", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object, String, String]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "uploadFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object, String]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "downloadFile", null);
    /**
     * @name HTTP
     * @description
     * Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.
     *
     * Advantages over Javascript requests:
     * - Background threading - all requests are done in a background thread
     * - SSL Pinning
     *
     * @usage
     * ```typescript
     * import { HTTP } from '@ionic-native/http';
     *
     * constructor(private http: HTTP) {}
     *
     * ...
     *
     * this.http.get('http://ionic.io', {}, {})
     *   .then(data => {
     *
     *     console.log(data.status);
     *     console.log(data.data); // data received by server
     *     console.log(data.headers);
     *
     *   })
     *   .catch(error => {
     *
     *     console.log(error.status);
     *     console.log(error.error); // error message as string
     *     console.log(error.headers);
     *
     *   });
     *
     * ```
     * @interfaces
     * HTTPResponse
     */
    HTTP = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'HTTP',
            plugin: 'cordova-plugin-advanced-http',
            pluginRef: 'cordova.plugin.http',
            repo: 'https://github.com/silkimen/cordova-plugin-advanced-http',
            platforms: ['Android', 'iOS']
        })
    ], HTTP);
    return HTTP;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = "3.209.92.60:9999";
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService, http) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.http = http;
    }
    SignupPage.prototype.doSignup = function () {
        console.log('Do sign');
        if (this.password == this.cpassword) {
            var dataPay = {
                "user_firstName": this.firstname,
                "user_lastName": this.lastname,
                "user_password": this.password,
                "user_email": this.email,
                "user_contact": this.contact
            };
            this.http.get(URL + '/addUsers', dataPay, {})
                .then(function (data) {
                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
        }
        /*  // Attempt to login in through our User service
        this.user.signup(this.account).subscribe((resp) => {
          this.navCtrl.push(MainPage);
        }, (err) => {
     
          this.navCtrl.push(MainPage);
     
          // Unable to sign up
          let toast = this.toastCtrl.create({
            message: this.signupErrorString,
            duration: 3000,
            position: 'top'
          });
          toast.present();
        });*/
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\manomuth\Desktop\Notes\TCG Documents\ionic\cart\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <form >\n    <ion-list>\n      <!--Fist name-->\n      <ion-item>\n        <ion-label floating>First name</ion-label>\n        <ion-input type="text" [(ngModel)]="firstname" name="firstname"></ion-input>\n      </ion-item>\n      <!--Last name-->\n      <ion-item>\n        <ion-label floating>Last name</ion-label>\n        <ion-input type="text" [(ngModel)]="lastname" name="lastname"></ion-input>\n      </ion-item>\n      <!--Password-->\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n      </ion-item>\n      <!--Confirm Password-->\n      <ion-item>\n        <ion-label floating>Re-Enter Password</ion-label>\n        <ion-input type="password" [(ngModel)]="cpassword" name="cpassword"></ion-input>\n      </ion-item>\n      <!--Email-->\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="email" name="email"></ion-input>\n      </ion-item>\n      <!--Contact-->\n      <ion-item>\n        <ion-label floating>Contact</ion-label>\n        <ion-input type="number" [(ngModel)]="contact" name="contact"></ion-input>\n      </ion-item> \n   \n      <div padding>\n        <button ion-button color="primary" (click)="doSignup()" block>Sign up</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\manomuth\Desktop\Notes\TCG Documents\ionic\cart\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map