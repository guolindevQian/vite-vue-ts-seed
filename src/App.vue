<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { manageRoute } from '@/router/routes';
const router = useRouter();
const route = useRoute();
watch(route, async (newVal) => {
  const role = localStorage.getItem('role');
  if (role && role === 'admin') {
    router.addRoute('Home', manageRoute);
    /* 防止页面刷新，路由丢失 */
    /* 在动态路由页面刷新时,matched数组为空 */
    if (!newVal.matched.length && newVal.fullPath === '/home/manage') {
      await router.replace('/home/manage');
    }
  }
});
</script>

<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
