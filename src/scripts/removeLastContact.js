import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  const data = await fs.readFile(PATH_DB, 'utf8');
  let contacts = JSON.parse(data);
  if (contacts.length > 0) {
    let spliced = contacts.splice(-1);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } else {
    console.log('The array must have at least one contact!');
  }
};

removeLastContact();
