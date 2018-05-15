#!/usr/bin/env node
import * as fs from 'fs'
import * as path from 'path';
const inquirer = require("inquirer");
const colors = require('colors');

/**
 * if hasn't projectName ,set one
 */
export async function setProjectName(dir?: string) {
  const { projectName } = await inquirer.prompt({
    name: 'projectName',
    message: 'input project name',
  });
  global['projectName'] = projectName
  if (!projectName) {
    console.log('\n please input dir'.green + '\n');
    await setProjectName();
  } else if (fs.existsSync(projectName)) {
    console.log('\n the dir has exists, please input another one'.green + '\n');
    await setProjectName();
  } else {
    return projectName;
  }
}

export async function setFileName(dir?: string) {
  const viewsPath = path.resolve(__dirname, '../src/views/');
  let { filename } = await inquirer.prompt({
    name: 'filename',
    message: 'input file name',
  });
  filename = filename.split('.')[0];
  global['filename'] = filename
  if (!filename) {
    console.log('\n please input dir'.green + '\n');
    await setFileName();
  } else if (fs.existsSync(`${viewsPath}/${filename}.js`)) {
    console.log('\n the dir has exists, please input another one'.green + '\n');
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
    name: 'flag',
    message: 'select a mode',
    type: 'list',
    choices: [{
      name: 'react + react-router',
      value: true,
    }, {
      name: 'react + react-router + redux',
      value: false,
    }]
  })
}

/**
 * node version need > 8
 * @param version
 */
export function compareVersion(version: string) {
  return version.slice(1,2) >= "8";
}

export async function createViewsDir() {
  const { views } = await inquirer.prompt({
    name: 'views',
    message: 'input project name',
  });
  console.log(views);
}

/**
 * render view
 * @param filename
 * @param viewsPath
 */
export function renderView(filename:string, viewsPath: string) {
  const name = filename.slice(0,1).toUpperCase() + filename.slice(1);
  fs.writeFileSync(`${viewsPath}/${filename}.jsx`,
`import React from 'react'

export default class ${name} extends React.PureComponent {
  render() {
    return ${name}
  }
}
  `);
  console.log(`${filename}.jsx has been rendered at ${viewsPath}`.green);
}


