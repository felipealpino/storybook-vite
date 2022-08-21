import React from "react";
import { AvatarContainer } from "./styles";
var Avatar = function (_a) {
    var image = _a.image, _b = _a.width, width = _b === void 0 ? 50 : _b, _c = _a.height, height = _c === void 0 ? 50 : _c, className = _a.className;
    return (React.createElement(AvatarContainer, { className: "avatar-container ".concat(className ? className : ""), width: width, height: height },
        React.createElement("img", { src: image, alt: "avatar" })));
};
export { Avatar };
//# sourceMappingURL=index.js.map