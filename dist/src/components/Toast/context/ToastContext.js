var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, useCallback, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
export var ToastContext = React.createContext({});
var ToastProvider = function (_a) {
    var children = _a.children;
    var _b = useState([]), toastListCurrent = _b[0], setToastListCurrent = _b[1];
    var removeToastCard = useCallback(function (cardId) {
        setToastListCurrent(function (oldState) {
            return oldState.filter(function (toast) { return toast.id !== cardId; });
        });
    }, []);
    var addToast = useCallback(function (options) {
        var newToastId = uuidv4();
        var newToast = {
            id: newToastId,
            handleOnClick: removeToastCard,
            duration: options.duration,
            position: options.position,
            title: options.title,
            subtitle: options.subtitle,
            status: options.status
        };
        setToastListCurrent(function (oldState) {
            var filteredPositions = oldState.filter(function (toast) { return toast.position === newToast.position; });
            return __spreadArray([newToast], filteredPositions, true);
        });
    }, [removeToastCard]);
    return React.createElement(ToastContext.Provider, { value: { addToast: addToast, toastListCurrent: toastListCurrent } }, children);
};
function useToast() {
    var context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}
export { useToast, ToastProvider };
//# sourceMappingURL=ToastContext.js.map