<script lang="ts" setup>
import ContactForm from "../components/ContactForm.vue";
import { getContacts, setContacts } from "@/methods";
import { Contact } from "@/types/contactType";
import { useRoute, useRouter } from "vue-router";

const router = useRouter(),
    route = useRoute();

const currectContactList: Contact[] = getContacts();
const currentContactIndex: number = currectContactList.findIndex((contact) => contact.id === +route.params.id);

const editContact = (data: Contact) => {
    data.id = currectContactList[currentContactIndex].id;
    currectContactList.splice(currentContactIndex, 1, data);
    setContacts(currectContactList);
    router.push("/");
};
</script>

<template>
    <h1>Редактирование контакта</h1>
    <p v-if="currentContactIndex === -1">Контакт не найден</p>
    <ContactForm v-else v-bind="currectContactList[currentContactIndex]" @updateContacts="editContact"></ContactForm>
</template>
