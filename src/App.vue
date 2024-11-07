<script lang="ts" setup>
import { useRoute } from "vue-router";
import Btn from "./components/UI/Btn.vue"
const route = useRoute();
</script>

<template>
    <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/create">
            <Btn>Создать новый контакт</Btn>
        </router-link>
    </nav>

    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <div :key="route.name" class="container">
                <component :is="Component" />
            </div>
        </transition>
    </router-view>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
}

h1 {
    margin: 0;
}

nav {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    a {
        font-weight: bold;
        color: #2c3e50;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: #42b983;
        }
    }
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s ease-in-out;
}
</style>
