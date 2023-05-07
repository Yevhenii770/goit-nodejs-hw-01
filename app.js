const contacts = require("./contacts");

console.log(__dirname);

const invorkeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.getAll();
      return console.log(allContacts);
    case "getById":
      const oneContact = await contacts.getById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.add({ name, phone, email });
      return console.log(newContact);
    case "updateById":
      const updateContact = await bools.updateById(id);
      return console.log(updateContact);
  }
};

// invorkeAction({ action: "read" });
// invorkeAction({ action: "getById", id: "qdggE76Jtbfd9eWJHrssH" });
// invorkeAction({
//   action: "add",
//   name: "Yevhenii Sitolenko",
//   phone: "068-134-34-34",
//   email: "zkjhfds@dgk.com",
// });
invorkeAction({
  action: "updateById",
  id: "U_4lP04Xta8J0u2vnZlUk",
  name: "FASFSAFS-FF",
  phone: "068-134-34-34",
  email: "zkjhfds@dgk.com",
});
