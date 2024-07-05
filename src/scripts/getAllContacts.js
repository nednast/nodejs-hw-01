import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  data = JSON.parse(data);
  return data;
};
console.log(await getAllContacts());
