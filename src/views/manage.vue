<template>
  <div class="manage">
    <router-link v-slot="{ href, navigate, isExactActive }" to="/home/user" custom>
      <div :class="{ active: isExactActive }" :href="href" @dblclick="navigate">跳转user</div>
    </router-link>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.manage {
  color: $test-color;
}
</style>
