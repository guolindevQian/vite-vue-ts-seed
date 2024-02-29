import { defineStore } from 'pinia';
import { useUserStore } from './user';
enum Sex {
  man = '男',
  woman = '女',
}

export const userSexStore = defineStore('user2', {
  state: () => {
    return {
      sex: Sex.man,
    };
  },
  actions: {
    updateSex() {
      const userStore = useUserStore();
      if (userStore.userInfo.name !== 'zhangsan') {
        this.sex = Sex.woman;
      }
    },
  },
});
