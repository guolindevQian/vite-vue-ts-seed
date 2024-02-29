<template>
  <div></div>
</template>
<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router';
onBeforeRouteLeave(() => {
  // console.log(to, from, next);
  const answer = window.confirm('确定离开吗');
  // 取消导航并停留在同一页面上2
  if (!answer) return false;
});
</script>
