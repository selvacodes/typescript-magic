var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function human(name, age) {
    return {
        name: name,
        age: age
    };
}
function humanToAngel(human) {
    return __assign({}, human, { wings: true });
}
var me = human("Selva", 12);
var x = [me].map(humanToAngel);
