import React, { useCallback, useState } from "react";
import { ContainerUploader, FileUploaderContainer, DragFileElement, LabelFileUpload, UploadButton, } from "./styles";
var Uploader = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 400 : _b, _c = _a.height, height = _c === void 0 ? 200 : _c, handleUploadCallback = _a.handleUploadCallback, maxSize = _a.maxSize, validTypes = _a.validTypes, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? "#FFFFFF" : _d;
    var _e = useState(false), dragActive = _e[0], setDragActive = _e[1];
    var inputRef = React.useRef(null);
    // triggers when file is selected with click
    var onButtonClick = function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    var handleDrag = function (event) {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(event.type === "dragenter" || event.type === "dragover");
    };
    var validateFiles = useCallback(function (files) {
        var validFiles = Array.from(files).map(function (file) {
            if (maxSize && file.size > maxSize)
                return {
                    file: file,
                    isValid: false,
                    invalidReason: "invalid file size"
                };
            if (validTypes && !validTypes.includes(file.type))
                return {
                    file: file,
                    isValid: false,
                    invalidReason: "invalid file type"
                };
            return {
                file: file,
                isValid: true,
                invalidReason: null
            };
        });
        return validFiles;
    }, [maxSize, validTypes]);
    // triggers when file is dropped
    var handleDrop = useCallback(function (event) {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);
        if (!event.dataTransfer.files || !event.dataTransfer.files[0])
            return;
        var filteredValidFiles = validateFiles(event.dataTransfer.files);
        handleUploadCallback(filteredValidFiles);
    }, [handleUploadCallback, validateFiles]);
    // triggers when file is selected with click
    var handleChange = useCallback(function (event) {
        event.preventDefault();
        if (!event.target.files || !event.target.files[0])
            return;
        var filteredValidFiles = validateFiles(event.target.files);
        handleUploadCallback(filteredValidFiles);
    }, [handleUploadCallback, validateFiles]);
    return (React.createElement(ContainerUploader, { className: "container-uploader" },
        React.createElement(FileUploaderContainer, { width: width, height: height, className: "file-uploader-container", onDragEnter: function (event) { return handleDrag(event); } },
            React.createElement("input", { multiple: true, type: "file", ref: inputRef, style: { display: "none" }, accept: "image/jpeg, image/jpg, image/png", onChange: function (event) { return handleChange(event); } }),
            React.createElement(LabelFileUpload, { backgroundColor: backgroundColor, isDragActive: dragActive },
                React.createElement("div", null,
                    React.createElement("p", null, "Drag and drop your files here or"),
                    React.createElement(UploadButton, { onClick: onButtonClick }, "Upload a file"),
                    validTypes && (React.createElement("p", null,
                        "Valid formats: ",
                        validTypes.map(function (type) { return type + " "; }))),
                    !!maxSize ? React.createElement("p", null,
                        "Max Size: ",
                        maxSize) : '')),
            dragActive && (React.createElement(DragFileElement, { onDrop: function (event) { return handleDrop(event); }, onDragEnter: function (event) { return handleDrag(event); }, onDragLeave: function (event) { return handleDrag(event); }, onDragOver: function (event) { return handleDrag(event); } })))));
};
export { Uploader };
//# sourceMappingURL=index.js.map