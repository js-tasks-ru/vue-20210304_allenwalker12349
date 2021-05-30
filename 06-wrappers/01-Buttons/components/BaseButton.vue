<template>
  <component type="button"
             class="button"
             v-bind="$attrs"
             :class="{'button_block' : block}"
             :is="tag"
             v-on="$listeners"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    block: Boolean,
    tag: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: initial;
  text-align: center;
  border: 4px solid transparent;
  transition: 0.2s all;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
}

.button.button_block {
  display: block;
  width: 100%;
}
</style>
