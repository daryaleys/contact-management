<script lang="ts" setup>
import { ref } from "vue";
import ContactList from "@/components/ContactList.vue";
import SearchBar from "@/components/SearchBar.vue";

const searchValue = ref<string>("");

</script>

<template>
    <h1>Список контактов</h1>
    <div class="main-wrap">
        <SearchBar v-model="searchValue" />
        <ContactList :searchValue />
    </div>
</template>

<style lang="scss" scoped>
.main-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    max-width: 300px;
}
</style>
