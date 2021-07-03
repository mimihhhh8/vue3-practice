<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <CustomInput :age="age" :name="name" @itemclick="itemclickFun" />
    <!-- vue3中的属性绑定 -->
    <Button @click="onClick1" @click2="onClick2" />

    <!-- teleport -->
    <MinDialog :isShow="true" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CustomInput from "@/components/custom-input.vue";
import { ref } from "vue";
import Button from "@/components/button1.vue";
import MinDialog from "@/components/minDialog.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    CustomInput,
    Button,
    MinDialog,
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

    /**
     * 2、vue3中的属性绑定
     */
    const onClick1 = () => {
      console.log("1111111");
    };

    const onClick2 = () => {
      console.log("2222222");
    };

    return {
      names,
      itemclickFun,
      onClick1,
      onClick2,
    };
  },
};
</script>
