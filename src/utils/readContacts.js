import * as fs from 'node:fs/promises';
import { PATH_DB } from '../../contacts/contacts.js';

export const readContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(data);
};
