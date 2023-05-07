// імпорт для роботи з файлами
const fs = require("fs/promises");
// імпорт пас
const path = require("path");
const { nanoid } = require("nanoid");
const { get } = require("http");

// два шматки шляху(__dirname - корінь, файл)
const contactsPath = path.join(__dirname, "/contacts.json");

const getAll = async () => {
  // без ютф-8 ми отримаємо буфер(00, 3H), але для парса він не потрібен
  const data = await fs.readFile(contactsPath);
  // для того щоб повернув  [{масив}, {обьектів}] з тексту
  return JSON.parse(data);
};

const getById = async (id) => {
  const contacts = await getAll();
  const result = contacts.find((item) => item.id === id);
  return result || null;
};

const add = async (data) => {
  const contacts = await getAll();

  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  // перезаписуэмо json
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

// export
module.exports = {
  getAll,
  getById,
  add,
};
