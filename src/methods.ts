import { Contact } from "./types/contactType";

const CONTACTS_KEY = "contacts";

export const getContacts = (): Contact[] => {
	const item: string | null = localStorage.getItem(CONTACTS_KEY);
	return item ? JSON.parse(item) : [];
};

export const setContacts = (contacts: Contact[]) => {
	localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
};
