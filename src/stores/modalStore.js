// stores/counter.js
import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
  state: () => {
    return { open: false };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    toggleModal() {
      this.open = !this.open;
    },
  },
});
