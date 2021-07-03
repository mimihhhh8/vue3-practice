<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <CustomInput :age="age" :name="name" @itemclick="itemclickFun" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CustomInput from "@/components/custom-input.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    CustomInput,
  },
  data() {
    return {
      age: 25,
      name: "哈哈哈哈哈哈",
    };
  },

  setup() {
    const names = ref("传入子组件的name");

    /**
     * 1、父组件接收到子组件传的值
     */
    const itemclickFun = (prop1, prop2) => {
      console.log("子组件的值：", prop1, prop2);
    };

    return {
      names,
      itemclickFun,
    };
  },
};
</script>
