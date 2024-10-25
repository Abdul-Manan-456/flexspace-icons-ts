'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var _path;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgDeleteIcon = function SvgDeleteIcon(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 13,
    height: 18,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#B8BFCC",
    d: "M.414 4.45v11.877c0 .611.5 1.11 1.115 1.11h10.353c.615 0 1.114-.499 1.114-1.114V4.451zm11 11.933H1.994a.523.523 0 0 1-.524-.524V5.505h10.47V15.86a.525.525 0 0 1-.524.524m1.055-13.62h-2.292v-.801a1.4 1.4 0 0 0-1.4-1.4H4.63c-.773 0-1.402.63-1.402 1.403v.798H.94a.53.53 0 0 0-.527.528c0 .288.236.527.527.527H12.47a.53.53 0 0 0 .527-.527.53.53 0 0 0-.527-.528m-8.18-.826c0-.274.22-.496.495-.496H8.63c.274 0 .496.222.496.496v.826H4.288z"
  })));
};

var _g, _defs;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgEditIcon = function SvgEditIcon(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 15,
    height: 16,
    fill: "none"
  }, props), _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#edit_icon_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#B8BFCC",
    d: "M10.498 3.194c.085-.135-.543-.722-1.412-1.32-.866-.6-1.644-.977-1.74-.85l-6.32 9.713-.312.46c.156.834 1.8 2.156 3.14 2.084l.348-.49zM8.636 1.916c.016-.025.156.043.316.153.156.109.271.215.256.24s-.16-.043-.316-.153c-.16-.112-.272-.219-.256-.24M14.414 15H4.495l1.54-2.25h8.38zM.477 11.628l-.063 3.363 3.203-1.279c-.462-.106-1.26-.243-1.925-.696C1.08 12.6.727 11.987.477 11.628"
  }))), _defs || (_defs = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "edit_icon_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M.414 0h14v16h-14z"
  })))));
};

// src/icons/index.ts

var Icons = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DeleteIcon: SvgDeleteIcon,
    EditIcon: SvgEditIcon
});

var Icon = function (_a) {
    var name = _a.name, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.style, style = _e === void 0 ? {} : _e, props = __rest(_a, ["name", "size", "color", "className", "style"]);
    var iconName = "".concat(name.charAt(0).toUpperCase()).concat(name.slice(1), "Icon");
    var IconComponent = Icons[iconName];
    if (!IconComponent) {
        console.warn("Icon \"".concat(name, "\" not found"));
        return null;
    }
    return (React.createElement("span", __assign({ className: "my-svg-icon icon-".concat(name, " ").concat(className), style: __assign({ display: 'inline-flex', width: typeof size === 'number' ? "".concat(size, "px") : size, height: typeof size === 'number' ? "".concat(size, "px") : size, color: color }, style) }, props),
        React.createElement(IconComponent, { width: "100%", height: "100%" })));
};

exports.DeleteIcon = SvgDeleteIcon;
exports.EditIcon = SvgEditIcon;
exports.Icon = Icon;
