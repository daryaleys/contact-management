<script lang="ts" setup>
const input = defineModel()
</script>

<template>
    <input class="input" type="text" placeholder="Поиск по имени" v-model="input">
</template>

<style lang="scss" scoped>
.input {
    width: 100%;
    outline: none;
    border: 1px solid #42b983;
    color: #246246;
    padding: 8px;
    border-radius: 5px;
    box-sizing: border-box;
}
</style>