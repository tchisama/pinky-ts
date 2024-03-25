#! /home/tchisama/nodejs/bin/node
import * as dotenv from 'dotenv';

import inquirer from 'inquirer';

const answer = inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'number',
    name: 'age',
    message: 'Enter your age: ',
  },
  {
    type: 'list',
    name: 'gender',
    message: 'What is your gender?',
    choices: ['Male', 'Female', 'Prefer not to say'],
  },
]);


dotenv.config();
