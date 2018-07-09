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
var fs = require("fs");
var path = require("path");
var inquirer = require("inquirer");
var colors = require("colors");
/**
 * if hasn't projectName ,set one
 */
function setProjectName(dir) {
    return __awaiter(this, void 0, void 0, function () {
        var projectName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer.prompt({
                        name: "projectName",
                        message: "input project name"
                    })];
                case 1:
                    projectName = (_a.sent()).projectName;
                    global["projectName"] = projectName;
                    if (!!projectName) return [3 /*break*/, 3];
                    console.log("\n please input dir".green + "\n");
                    return [4 /*yield*/, setProjectName()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 3:
                    if (!fs.existsSync(projectName)) return [3 /*break*/, 5];
                    console.log("\n the dir has exists, please input another one".green + "\n");
                    return [4 /*yield*/, setProjectName()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5: return [2 /*return*/, projectName];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.setProjectName = setProjectName;
function setFileName(dir) {
    return __awaiter(this, void 0, void 0, function () {
        var viewsPath, filename;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    viewsPath = path.resolve(__dirname, "../src/views/");
                    return [4 /*yield*/, inquirer.prompt({
                            name: "filename",
                            message: "input file name"
                        })];
                case 1:
                    filename = (_a.sent()).filename;
                    filename = filename.split(".")[0];
                    global["filename"] = filename;
                    if (!!filename) return [3 /*break*/, 3];
                    console.log("\n please input dir".green + "\n");
                    return [4 /*yield*/, setFileName()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 3:
                    if (!fs.existsSync(viewsPath + "/" + filename + ".js")) return [3 /*break*/, 5];
                    console.log("\n the dir has exists, please input another one".green + "\n");
                    return [4 /*yield*/, setFileName()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5: return [2 /*return*/, filename];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.setFileName = setFileName;
/**
 * select mode
 */
function mode() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer.prompt({
                        name: "flag",
                        message: "select a mode",
                        type: "list",
                        choices: [
                            {
                                name: "react + react-router",
                                value: "react"
                            },
                            {
                                name: "react + react-router + redux",
                                value: "redux"
                            },
                            {
                                name: "typescript",
                                value: "ts"
                            },
                            {
                                name: "typescript + react",
                                value: "ts-react"
                            },
                            {
                                name: "express+inversify",
                                value: "express"
                            }
                        ]
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.mode = mode;
/**
 * file directory
 * @param mode
 */
function type(mode) {
    return {
        react: "/src/react-router",
        redux: "/src/redux",
        ts: "/src/ts",
        "ts-react": "/src/ts-react",
        express: "/src/express-demo"
    }[mode];
}
exports.type = type;
/**
 * node version need > 8
 * @param version
 */
function compareVersion(version) {
    return Number(version.split(".")[0].slice(1)) >= 8;
}
exports.compareVersion = compareVersion;
/**
 * render view
 * @param filename
 * @param viewsPath
 */
function renderView(filename, viewsPath) {
    var name = filename.slice(0, 1).toUpperCase() + filename.slice(1);
    fs.writeFileSync(viewsPath + "/" + filename + ".jsx", "import React from 'react'\n\nexport default class " + name + " extends React.PureComponent {\n  render() {\n    return " + name + "\n  }\n}\n  ");
    console.log((filename + ".jsx has been rendered at " + viewsPath).green);
}
exports.renderView = renderView;
//# sourceMappingURL=util.js.map