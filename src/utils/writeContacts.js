import * as fs from 'node:fs/promises';

import { PATH_DB } from '../../contacts/contacts.js';

export const writeContacts = async (contacts) => {
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};
