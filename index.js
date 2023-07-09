import yargs from "yargs";

import contactsService from "./contacts.js";



const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allContacts = await contactsService.listContacts();
            return console.log(allContacts);
        case 'get':
            const contact = await contactsService.getContactById(id)
            console.log(contact);
        case 'add':
            const newContact = await contactsService.addContact({ name, email, phone });
            return console.log(newContact);

        case 'remove':
            const deleteContact = await contactsService.removeContact(id);
            return console.log(deleteContact);

        default:
            console.warn('\x1B[31m Unknown action type!');
    };
};

const {argv} = yargs(process.argv.slice(2));

invokeAction(argv);

