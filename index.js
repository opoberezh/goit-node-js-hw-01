const contacts = require("./contacts");
const argv = require('yargs').argv;




 async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list':
        const contactsList = await contacts.listContacts();
        console.table(contactsList);
        break;
  
      case 'get':
      const getContact = await contacts.getContactById(id);
      console.table(getContact);
        break;
  
      case 'add':
       const newContact = await contacts.addContact(name, email, phone);
       console.table(newContact);
        break;
  
      case 'remove':
        const removedContact = await contacts.removeContact(id);
        console.table(removedContact);
        break;
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  
  invokeAction(argv);