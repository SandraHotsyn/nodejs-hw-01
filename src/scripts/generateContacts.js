import * as fs from 'node:fs';

import { createFakeContact } from '../utils/createFakeContact.js';
import { error, log } from 'node:console';

const generateContacts = async (number) => {
  const constantsList = Array(number).fill(0).map(createFakeContact);
  fs.readFile('../../db/db.json', (error, data) => {
    console.log(error);
    console.log(data);
  });
};

generateContacts(5);
