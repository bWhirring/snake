#!/usr/bin/env node

import * as ncp from 'ncp';
import * as path from 'path';
import * as ora from 'ora';
import { exec, execSync } from "child_process";
import * as fs from 'fs';
const inquirer = require("inquirer");

import {
  renderView,
  setFileName,
} from './util'
/**
 * generation directory
 * @param dir directory
 * @param projectName project name
 */
export function dir(dir: string, projectName: string) {
  const spinner = ora('init project');
  spinner.start();
  ncp.ncp(dir, projectName, (err) => {
    if (err) {
      console.log(err); process.exit();
    }
    spinner.stop();
    console.log();
    console.log("Project init finished".green);
    console.log("=====================".green);
    console.log();
    console.log("To get started");
    console.log();
    console.log(`    cd ${projectName}`.red);
    console.log("    yarn && npm run start".red);
  })
}

export async function viewTemplate(name: string) {
  const viewsPath = process.cwd() + '/src/views';
  let filename = name && name.split('.')[0];
  if (!fs.existsSync(viewsPath)) {
    const { views } = await inquirer.prompt({
      name: 'views',
      type: 'confirm',
      message: 'Target directory hasn\'t exist, mkdir one',
    });
    if (views) {
      fs.mkdirSync(viewsPath);
      filename && renderView(filename, viewsPath);
    } else {
      process.exit();
    }
  } else {
    !name && await setFileName();
    filename = global['filename'] || name;
    const exist = fs.existsSync(`${viewsPath}/${filename}.js`)
    if (exist) {
      console.log('the file has exist, please input another one'.red);
      return false;
    }
    renderView(filename, viewsPath);
  }
}

