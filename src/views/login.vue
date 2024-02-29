<template>
  <div></div>
</template>
<script setup lang="ts">
import { getList } from '@/apis/user';
localStorage.setItem('role', 'admin'); //在登录页存储用户等级
getList({ id: 2 });
</script>
