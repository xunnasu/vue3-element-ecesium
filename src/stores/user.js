import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';

const TokenKey = 'X-User-Token';
export const useUserStore = defineStore('user', {
  state: () => ({
    token: Cookies.get(TokenKey) || null,
  }),

  getters: {},

  actions: {
    setToken(val) {
      if (!val) {
        Cookies.remove(TokenKey);
        return;
      }
      Cookies.set(TokenKey, val);
    },

    logOut() {
      return new Promise((resolve, reject) => {
        this.setToken();
        resolve();
      });
    },
  },
});
