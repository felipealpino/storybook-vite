import { colors } from "../../shared/theme/colors";
export function colorGet(status, statusComplement, isTransparent) {
    if (status === void 0) { status = "primary"; }
    if (statusComplement === void 0) { statusComplement = ""; }
    return "".concat(colors["".concat(status).concat(isTransparent ? "Transparent" : "").concat(statusComplement)]);
}
//# sourceMappingURL=colorGet.js.map