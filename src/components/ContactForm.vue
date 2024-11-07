<script lang="ts" setup>
import { type Contact, type InputContact } from '@/types/contactType';
import Btn from '@/components/UI/Btn.vue';

const props = defineProps<Partial<Contact>>();

const formData: InputContact = {
    name: props.name ?? "",
    phone: props.phone ?? "",
    email: props.email ?? "",
};
</script>

<template>
    <form @submit.prevent="$emit('updateContacts', formData)" class="form">
        <div class="input-wrap">
            <label for="name">Имя:</label>
            <input class="input" type="text" placeholder="Иван" id="name" name="name" required
                v-model="formData.name" />
        </div>
        <div class="input-wrap">
            <label for="phone">Телефон:</label>
            <input class="input" type="tel" placeholder="+7(999)999-99-99" id="phone" name="phone"
                v-model="formData.phone" />
        </div>
        <div class="input-wrap">
            <label for="email">Email:</label>
            <input class="input" type="email" placeholder="***@yandex.ru" id="email" name="email" required
                v-model="formData.email" />
        </div>
        <Btn type="submit">Сохранить</Btn>
    </form>
</template>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    max-width: 300px;
}

.input-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
}

.input {
    outline: none;
    border: 1px solid #42b983;
    color: #246246;
    padding: 5px;
    border-radius: 5px;
}
</style>
