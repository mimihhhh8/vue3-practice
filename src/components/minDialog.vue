<template>
  <teleport to="#dialog" v-if="isIf">
    <h2>我是传送门组件teleport</h2>
  </teleport>
</template>
<script>
import { reactive } from "vue";
// TODO
export default {
  props: {
    isshow: Boolean,
  },
  setup(props) {
    const isshow1 = reactive({
      test: props.isshow,
    });
    const isIf = isshow1.test;
    console.log("isshow1", isshow1.test);
    return {
      isshow1,
      isIf,
    };
  },
};
</script>
