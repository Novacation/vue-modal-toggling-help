<script setup>
import ModalTogglerBtn from '@/components/Globals/ModalTogglerBtn.vue'
</script>

<template>
  <!-- Transition is not necessary, but it's cool for smooth transitions-->
  <!-- "fade" is a piece of our css class (I put it on the App.vue so we can use it on every component), cause basically we have a pattern on defining the name of the class that'll be responsible for the "Transition"'s transition fx -->
  <Transition name="fade">
    <div class="modal select-none">
      <div class="modal-inner bg-gray-100">
        <ModalTogglerBtn />
      </div>
    </div>
  </Transition>
</template>

<style scoped></style>
