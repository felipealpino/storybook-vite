var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { SpinnerBall, SpinnerContainer } from './styles';
var Spinner = function (_a) {
    var _b = _a.fixed, fixed = _b === void 0 ? true : _b, _c = _a.size, size = _c === void 0 ? 30 : _c, props = __rest(_a, ["fixed", "size"]);
    return (React.createElement(SpinnerContainer, __assign({ className: "spinner-container ".concat(props.className || ''), fixed: fixed }, props),
        React.createElement(SpinnerBall, { className: "spinner-ball", status: props.status, size: size })));
};
export { Spinner };
//# sourceMappingURL=index.js.map