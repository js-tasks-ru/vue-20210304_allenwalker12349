<template>
  <button type="button" @click="$emit(`increment`, count+1)">{{count}}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  model: {
    prop: 'count',
    event: 'increment',
  },
};
</script>

<style></style>
