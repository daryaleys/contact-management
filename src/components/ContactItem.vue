<script lang="ts" setup>
import type { Contact } from '../types/contactType'
import Btn from './UI/Btn.vue';

const props = defineProps<Contact>()

const editUrl = "/edit/" + props.id;
</script>

<template>
    <div class="contact-wrap">
        <div class="contact-field">
            <span class="text-label">Имя: </span>
            <span class="text">{{ name }}</span>
        </div>
        <div class="contact-field">
            <span class="text-label">Телефон: </span>
            <span class="text">{{ phone }}</span>
        </div>
        <div class="contact-field">
            <span class="text-label">Email: </span>
            <span class="text">{{ email }}</span>
        </div>
        <div class="contact-actions">
            <router-link :to="editUrl" class="btn">
                <Btn>Редактировать</Btn>
            </router-link>
            <Btn @clickBtn="$emit('delete', id)">Удалить</Btn>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contact-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #42b983;
    padding: 10px;
    border-radius: 5px;
}

.contact-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>