<script lang="ts" setup>
import type { Contact } from '../types/contactType'

const props = defineProps<{
    name?: string;
    phone?: string;
    email?: string;
}>();

const formData = {
    name: props.name ?? "",
    phone: props.phone ?? "",
    email: props.email ?? "",
};

const submitForm = () => {
    console.log(formData)
}
</script>

<template>
    <form @submit.prevent="submitForm">
        <div class="input-wrap">
            <label for="name">Имя:</label>
            <input type="text" placeholder="Иван" id="name" name="name" required v-model="formData.name">
        </div>
        <div class="input-wrap">
            <label for="phone">Телефон:</label>
            <input type="tel" placeholder="+7(999)999-99-99" id="phone" name="phone" required v-model="formData.phone">
        </div>
        <div class="input-wrap">
            <label for="email">Email:</label>
            <input type="email" placeholder="***@yandex.ru" id="email" name="email" required v-model="formData.email">
        </div>
        <button type="submit" class="btn">Сохранить</button>
    </form>
</template>

<style lang="scss"></style>