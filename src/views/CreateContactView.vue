<script lang="ts" setup>
import ContactForm from "../components/ContactForm.vue";
import { getContacts, setContacts } from "@/methods";
import { Contact } from "@/types/contactType";
import { useRouter } from "vue-router";

const router = useRouter();

const currectContactList: Contact[] = [...getContacts()];

const createContact = (data: Contact) => {
    data.id = currectContactList.length + 1;
    currectContactList.push(data);
    setContacts(currectContactList);
    router.push("/");
};
</script>

<template>
    <h1>Создание нового контакта</h1>
    <ContactForm @updateContacts="createContact"></ContactForm>
</template>
