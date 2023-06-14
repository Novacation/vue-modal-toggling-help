<script setup>
import { computed } from 'vue'
import { useModalStore } from '@/stores/modalStore'
import Modal from '@/components/Globals/Modal.vue'
import ModalTogglerBtn from '@/components/Globals/ModalTogglerBtn.vue'

const modalStore = useModalStore()

//define as computed, so the btnText value will be updated on every "modalStore.open" update
const modalState = computed(() => modalStore.open)
</script>

<template>
  <div
    class="relative w-full bg-neutral-200 flex justify-center items-center h-full">
    <ModalTogglerBtn v-show="!modalState" />

    <Modal v-if="modalState" />
  </div>
</template>

<style scoped></style>
