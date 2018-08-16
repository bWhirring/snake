#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var commander = require("commander");
var fs = require("fs");
var child_process_1 = require("child_process");
var path = require("path");
var version = require("../package.json").version;
var util_1 = require("./util");
var generate_1 = require("./generate");
commander
    .version(version, "-V, --version")
    .usage("[Options] | [Commands] <file>");
commander
    .command("init")
    .description("generation a webpack project")
    .option("dir");
commander
    .command("view")
    .description("generation a react component")
    .option("<file>");
commander.on("--help", function () {
    console.log("\n Examples:");
    console.log("");
    console.log("  $ snake -h");
    console.log("  $ snake init snake-demo ");
    console.log("");
});
function help() {
    commander.parse(process.argv);
    if (commander.args.length < 1)
        return commander.help();
}
help();
exports.release = function () { return __awaiter(_this, void 0, void 0, function () {
    var nodeVersion, argv2, argv3, projectName, reactMode, currentPath, directory;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nodeVersion = child_process_1.execSync("node -v", { encoding: "utf8" });
                if (process.argv.length === 2) {
                    child_process_1.execSync("snake -h");
                }
                if (!util_1.compareVersion(nodeVersion)) {
                    console.log("Please make sure the node version is above 8.0".red);
                    process.exit();
                }
                argv2 = process.argv[2];
                argv3 = process.argv[3];
                if (!(argv2 === "init")) return [3 /*break*/, 6];
                projectName = argv3;
                if (!!projectName) return [3 /*break*/, 2];
                return [4 /*yield*/, util_1.setProjectName()];
            case 1:
                projectName = _a.sent();
                return [3 /*break*/, 4];
            case 2:
                if (!fs.existsSync(projectName)) return [3 /*break*/, 4];
                console.log("\n the dir has exists, please input another one".green + "\n");
                return [4 /*yield*/, util_1.setProjectName()];
            case 3:
                projectName = _a.sent();
                _a.label = 4;
            case 4: return [4 /*yield*/, util_1.mode()];
            case 5:
                reactMode = _a.sent();
                projectName = projectName || global["projectName"];
                fs.mkdirSync(projectName);
                currentPath = path.resolve(__dirname, "..");
                directory = currentPath + util_1.type(reactMode.flag);
                generate_1.dir(directory, projectName);
                return [3 /*break*/, 7];
            case 6:
                if (argv2 === "view") {
                    generate_1.viewTemplate(argv3);
                }
                _a.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.release().catch(function (err) {
    console.error(err);
    process.exit();
});
commander.parse(process.argv);
//# sourceMappingURL=index.js.map