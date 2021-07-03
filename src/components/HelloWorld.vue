<template>
  <div>vue3练习</div>
  <div>{{ count }}</div>
  <div>
    <input type="text" v-model="text" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      count: 8888,
      text: "111",
    };
  },

  watch: {
    text(val) {
      console.log(val);
    },
  },

  setup() {},
};
</script>

<style scoped lang="less"></style>
