import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  let contact = JSON.parse(data);
  contact.push(createFakeContact());
  await fs.writeFile(PATH_DB, JSON.stringify(contact));
};
addOneContact();
