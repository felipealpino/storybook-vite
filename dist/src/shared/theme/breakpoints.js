var breakpoints = ['480px', '768px', '1024px', '1280px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
var media = {
    sm: "@media (min-width: ".concat(breakpoints.sm, ")"),
    md: "@media (min-width: ".concat(breakpoints.md, ")"),
    lg: "@media (min-width: ".concat(breakpoints.lg, ")"),
    xl: "@media (min-width: ".concat(breakpoints.xl, ")")
};
export { breakpoints, media };
//# sourceMappingURL=breakpoints.js.map