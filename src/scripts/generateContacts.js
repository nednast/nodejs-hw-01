import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  let contacts = JSON.parse(data);
  for (let index = 0; index < number; index++) {
    contacts.push(createFakeContact());
  }
  await fs.writeFile(PATH_DB, JSON.stringify(contacts));
};

generateContacts(5);
