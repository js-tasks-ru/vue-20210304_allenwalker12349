<template>
  <BaseButton v-bind="$attrs" class="button_danger" v-on="$listeners">
    <slot></slot>
  </BaseButton>
</template>

<script>
import BaseButton from "./BaseButton";
export default {
  name: 'DangerButton',
  inheritAttrs: false,
  components: {BaseButton}
};
</script>

<style scoped>
.button_danger {
  background-color: var(--white);
  border-color: var(--red);
  color: var(--red);
}

.button_danger:hover {
  border-color: var(--red-light);
}
</style>
