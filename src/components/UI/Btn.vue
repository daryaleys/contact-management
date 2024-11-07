<script lang="ts" setup></script>

<template>
    <button class="btn" @click="$emit('clickBtn')">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.btn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #42b983;
    color: #fff;
    cursor: pointer;
}
</style>