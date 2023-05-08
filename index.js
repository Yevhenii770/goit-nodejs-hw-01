const contacts = require("./contacts.js");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const invorkeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.getAll();
      return console.table(allContacts);
    case "get":
      const oneContact = await contacts.getById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.add({ name, phone, email });
      return console.log(newContact);
    case "update":
      const updateContact = await contacts.updateById(id, {
        name,
        phone,
        email,
      });
      return console.log(updateContact);
    case "remove":
      const deleteContact = await contacts.deleteById(id);
      return console.log(deleteContact);
    default:
      return console.log("Unknown action");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invorkeAction(argv);
