// birthdate must has the format yyyy-mm-dd
export function calcAge(birthdate) {
    var age = Math.floor((Date.now() - +new Date("".concat(birthdate.split("-").join("/")))) / 31557600000);
    if (isNaN(age) || age < 0)
        return "";
    return age;
}
//# sourceMappingURL=calculateAge.js.map