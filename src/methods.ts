import { Contact } from "./types/contactType";

const ITEM_NAME = "contacts";

export const getContacts = (): Contact[] | null => {
	const item: string | null = localStorage.getItem(ITEM_NAME);
	return item ? JSON.parse(item) : null;
};

export const setContacts = (contacts: Contact[]) => {
	localStorage.setItem(ITEM_NAME, JSON.stringify(contacts));
};
