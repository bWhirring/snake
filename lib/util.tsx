#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
const inquirer = require("inquirer");
const colors = require("colors");

/**
 * if hasn't projectName ,set one
 */
export async function setProjectName(dir?: string) {
  const { projectName } = await inquirer.prompt({
    name: "projectName",
    message: "input project name"
  });
  global["projectName"] = projectName;
  if (!projectName) {
    console.log("\n please input dir".green + "\n");
    await setProjectName();
  } else if (fs.existsSync(projectName)) {
    console.log("\n the dir has exists, please input another one".green + "\n");
    await setProjectName();
  } else {
    return projectName;
  }
}

export async function setFileName(dir?: string) {
  const viewsPath = path.resolve(__dirname, "../src/views/");
  let { filename } = await inquirer.prompt({
    name: "filename",
    message: "input file name"
  });
  filename = filename.split(".")[0];
  global["filename"] = filename;
  if (!filename) {
    console.log("\n please input dir".green + "\n");
    await setFileName();
  } else if (fs.existsSync(`${viewsPath}/${filename}.js`)) {
    console.log("\n the dir has exists, please input another one".green + "\n");
    await setFileName();
  } else {
    return filename;
  }
}

/**
 * select mode
 */
export async function mode() {
  return await inquirer.prompt({
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
  });
}

/**
 * file directory
 * @param mode
 */
export function type(mode: string) {
  return {
    react: "/src/react-router",
    redux: "/src/redux",
    ts: "/src/ts",
    "ts-react": "/src/ts-react",
    express: "/src/express-demo"
  }[mode];
}

/**
 * node version need > 8
 * @param version
 */
export function compareVersion(version: string) {
  return Number(version.split(".")[0].slice(1)) >= 8;
}

/**
 * render view
 * @param filename
 * @param viewsPath
 */
export function renderView(filename: string, viewsPath: string) {
  const name = filename.slice(0, 1).toUpperCase() + filename.slice(1);
  fs.writeFileSync(
    `${viewsPath}/${filename}.jsx`,
    `import React from 'react'

export default class ${name} extends React.PureComponent {
  render() {
    return ${name}
  }
}
  `
  );
  console.log(`${filename}.jsx has been rendered at ${viewsPath}`.green);
}
