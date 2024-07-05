import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const countNumb = JSON.parse(data);
  return countNumb.length;
};

console.log(await countContacts());
