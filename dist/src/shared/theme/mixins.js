export var objectFit = function (fit, position) {
    return "\n        font-family: 'object-fit: ".concat(fit || 'cover', ";';\n        object-fit: ").concat(fit || 'cover', ";\n        ").concat(position ? "object-position: ".concat(position, ";") : '', "\n    ");
};
//# sourceMappingURL=mixins.js.map