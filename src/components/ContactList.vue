<script lang="ts" setup>
import { onMounted, ref, type Ref, computed } from 'vue';
import { type Contact } from '@/types/contactType';
import ContactItem from "@/components/ContactItem.vue"
import SearchBar from "@/components/SearchBar.vue"
import { getContacts } from '@/methods';

// get contact list from localStorage / JSON
const contactList: Ref<Contact[]> = ref([]);
const contactsError: Ref<boolean> = ref(false);

onMounted(() => {
    const contacts: Contact[] | null = getContacts();

    if (contacts && contacts.length) {
        contactList.value = contacts;
    } else {
        fetch("./data/contacts.json")
            .then((response) => response.json())
            .then((data) => {
                contactList.value = data;
                localStorage.setItem('contacts', JSON.stringify(data));
            })
            .catch(() => contactsError.value = true)
    }
})

// filter by name
const searchValue: Ref<string> = ref("");
const filteredList = computed(() => {
    return contactList.value.filter((item: Contact) => item.name.toLowerCase().includes(searchValue.value.toLowerCase()));
})
</script>

<template>
    <SearchBar v-model="searchValue" />

    <h3 v-if="contactsError">Не удалось загрузить контакты. Пожалуйста, обратитесь в поддержку</h3>
    <h3 v-else-if="!contactList.length">Ещё нет ни одного контакта</h3>
    <div v-else>
        <ContactItem v-for="contact in filteredList" v-bind="contact"></ContactItem>
    </div>
</template>