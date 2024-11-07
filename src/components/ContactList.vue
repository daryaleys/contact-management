<script lang="ts" setup>
import { ref, computed } from "vue";
import { type Contact } from "@/types/contactType";
import ContactItem from "@/components/ContactItem.vue";
import { getContacts, setContacts } from "@/methods";

const props = defineProps(['searchValue'])

// get contact list from localStorage / JSON
const contactList = ref<Contact[]>(getContacts());
const contactsError = ref<boolean>(false);
if (!contactList.value.length) {
    fetch("./data/contacts.json")
        .then((response) => response.json())
        .then((data) => {
            contactList.value = [...data];
            setContacts(data);
        })
        .catch(() => (contactsError.value = true));
}

// filter by name
const filteredList = computed(() => {
    return contactList.value.filter((item: Contact) => {
        return item.name.toLowerCase().includes(props.searchValue.toLowerCase());
    });
});

// delete contact
const deleteContact = (id: number): void => {
    contactList.value = contactList.value.filter((item: Contact) => item.id !== id);
    setContacts(contactList.value);
};
</script>

<template>
    <h3 v-if="contactsError">Не удалось загрузить контакты. Пожалуйста, обратитесь в поддержку</h3>
    <h3 v-else-if="!contactList.length">Ещё нет ни одного контакта</h3>
    <div v-else class="contact-list">
        <TransitionGroup name="list">
            <ContactItem v-for="contact in filteredList" :key="contact.id" v-bind="contact" @delete="deleteContact">
            </ContactItem>
        </TransitionGroup>
    </div>
</template>

<style lang="scss" scoped>
.contact-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: 0.3s ease-in-out;
    transition-property: opacity, transform;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(50px);
}
</style>
