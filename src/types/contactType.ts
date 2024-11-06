export type Contact = {
	id: number;
	name: string;
	phone: string;
	email: string;
};

export type InputContact = Omit<Contact, "id">;