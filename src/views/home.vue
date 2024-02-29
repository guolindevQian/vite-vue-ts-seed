<template>
  <div>
    菜单栏
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </router-view>
  </div>
</template>
