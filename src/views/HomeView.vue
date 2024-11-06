<script lang="ts" setup>
import ContactList from "../components/ContactList.vue"
</script>

<template>
  <router-link to="/create" class="btn">Создать новый контакт</router-link>

  <ContactList />
</template>