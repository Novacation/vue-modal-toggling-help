<script setup></script>

<template>
  <RouterView />
</template>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.modal {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(27, 27, 27, 0.8);
  z-index: 900;
}

.modal-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 640px;
  width: 80dvw;
  height: 50dvh;
  margin-top: 25dvh;
  border-radius: 1rem;
  transition: height 0.2s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@media screen and (min-width: 640px) {
  .modal-inner {
    position: relative;
    max-width: 640px;
    width: 100dvw;
    height: 90dvh;
    margin-top: 5dvh;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}
</style>
