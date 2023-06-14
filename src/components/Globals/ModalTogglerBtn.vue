<script setup>
import { useModalStore } from '@/stores/modalStore'
import { computed } from 'vue'

const btnText = computed(() =>
  useModalStore().open ? 'Close Modal' : 'Open Modal'
)
</script>

<template>
  <button
    @click="useModalStore().toggleModal()"
    class="text-5xl shadow hover:shadow-xl hover:shadow-neutral-400 font-semibold text-neutral-800 hover:bg-neutral-800 hover:scale-105 hover:text-neutral-200 text-center transition-all border-solid border-2 border-neutral-800 px-8 py-4 rounded-xl">
    {{ btnText }}
  </button>
</template>

<style scoped></style>
