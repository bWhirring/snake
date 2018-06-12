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
Object.defineProperty(exports, "__esModule", { value: true });
var ncp = require("ncp");
var ora = require("ora");
var fs = require("fs");
var inquirer = require("inquirer");
var util_1 = require("./util");
/**
 * generation directory
 * @param dir directory
 * @param projectName project name
 */
function dir(dir, projectName) {
    var spinner = ora('init project');
    spinner.start();
    ncp.ncp(dir, projectName, function (err) {
        if (err) {
            console.log(err);
            process.exit();
        }
        spinner.stop();
        console.log();
        console.log("Project init finished".green);
        console.log("=====================".green);
        console.log();
        console.log("To get started");
        console.log();
        console.log(("    cd " + projectName).red);
        console.log("    yarn && npm run start".red);
    });
}
exports.dir = dir;
function viewTemplate(name) {
    return __awaiter(this, void 0, void 0, function () {
        var viewsPath, filename, views, _a, exist;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    viewsPath = process.cwd() + '/src/views';
                    filename = name && name.split('.')[0];
                    if (!!fs.existsSync(viewsPath)) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer.prompt({
                            name: 'views',
                            type: 'confirm',
                            message: 'Target directory hasn\'t exist, mkdir one',
                        })];
                case 1:
                    views = (_b.sent()).views;
                    if (views) {
                        fs.mkdirSync(viewsPath);
                        filename && util_1.renderView(filename, viewsPath);
                    }
                    else {
                        process.exit();
                    }
                    return [3 /*break*/, 5];
                case 2:
                    _a = !name;
                    if (!_a) return [3 /*break*/, 4];
                    return [4 /*yield*/, util_1.setFileName()];
                case 3:
                    _a = (_b.sent());
                    _b.label = 4;
                case 4:
                    _a;
                    filename = global['filename'] || name;
                    exist = fs.existsSync(viewsPath + "/" + filename + ".js");
                    if (exist) {
                        console.log('the file has exist, please input another one'.red);
                        return [2 /*return*/, false];
                    }
                    util_1.renderView(filename, viewsPath);
                    _b.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.viewTemplate = viewTemplate;
//# sourceMappingURL=generate.js.map