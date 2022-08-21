var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
export var ContainerUploader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"])));
export var FileUploaderContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  text-align: center;\n  position: relative;\n"], ["\n  height: ", ";\n  width: ", ";\n  text-align: center;\n  position: relative;\n"])), function (_a) {
    var height = _a.height;
    return "".concat(height, "px");
}, function (_a) {
    var width = _a.width;
    return "".concat(width, "px");
});
export var LabelFileUpload = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-width: 2px;\n  border-radius: 1rem;\n  border-style: dashed;\n  background: ", ";\n  border-color: black;\n\n  > div {\n    p {\n      color: black;\n      margin-bottom: 0.5rem;\n    }\n    button {\n      color: black;\n      text-decoration: underline;\n    }\n  }\n\n  transition: filter 0.1s;\n\n  ", "\n"], ["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-width: 2px;\n  border-radius: 1rem;\n  border-style: dashed;\n  background: ", ";\n  border-color: black;\n\n  > div {\n    p {\n      color: black;\n      margin-bottom: 0.5rem;\n    }\n    button {\n      color: black;\n      text-decoration: underline;\n    }\n  }\n\n  transition: filter 0.1s;\n\n  ", "\n"])), function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
}, function (_a) {
    var isDragActive = _a.isDragActive;
    return isDragActive && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      filter: brightness(0.8);\n    "], ["\n      filter: brightness(0.8);\n    "])));
});
export var UploadButton = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0.25rem;\n  font-size: 1rem;\n  border: none;\n  background: transparent;\n  margin-bottom: 1rem;\n\n  &:hover {\n    text-decoration-line: underline;\n  }\n"], ["\n  padding: 0.25rem;\n  font-size: 1rem;\n  border: none;\n  background: transparent;\n  margin-bottom: 1rem;\n\n  &:hover {\n    text-decoration-line: underline;\n  }\n"])));
export var DragFileElement = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 1rem;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 1rem;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styles.js.map