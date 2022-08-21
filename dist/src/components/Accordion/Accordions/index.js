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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useMemo, useState, useCallback } from "react";
import { AccordionsContainer } from "../../../components/Accordion/Accordions/styles";
var Accordions = function (_a) {
    var _b = _a.gap, gap = _b === void 0 ? 0 : _b, children = _a.children;
    var _c = useState(0), accordionCurent = _c[0], setAccrodionCurrent = _c[1];
    var handleSetCurrent = useCallback(function (index) {
        setAccrodionCurrent(index);
    }, []);
    var getChildren = useMemo(function () {
        var accordions = children;
        var newAccordions;
        if (accordions.length <= 1) {
            newAccordions = __spreadArray([], accordions, true);
            return newAccordions;
        }
        newAccordions = accordions.map(function (accordion, index) {
            return __assign(__assign({}, accordion), { props: __assign({ index: index, handleSetCurrent: handleSetCurrent, accordionCurent: accordionCurent }, accordion.props) });
        });
        return newAccordions;
    }, [accordionCurent, handleSetCurrent, children]);
    return (React.createElement(AccordionsContainer, { gap: gap, className: "accordions-list" }, getChildren));
};
export { Accordions };
//# sourceMappingURL=index.js.map