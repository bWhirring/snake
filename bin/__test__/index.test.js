"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var util_1 = require("../util");
test("the type function input params 'express' return '/src/express-demo'", function () {
    var dir = util_1.type("express");
    expect(dir).toBe("/src/express-demo");
});
test("8.1 > 8", function () {
    var version = util_1.compareVersion("8.1");
    expect(version).toBe(true);
});
test("7.9 > 8", function () {
    var version = util_1.compareVersion("7.9");
    expect(version).toBe(false);
});
//# sourceMappingURL=index.test.js.map