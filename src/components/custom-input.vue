<template>
  <input type="年龄" :value="age" @input="onInput" />
  <input type="姓名" :value="name" @input="onNameInput" />
  <br />
  子组件给父组件传值：<button @click="clickInfo">点击</button>
  <br />
  <!-- vuex的使用 -->
  <div>1、vuex取到的值state：{{ myName }}</div>
  <div>2、vuex取到的值getters：{{ myJoint }}</div>
  <div>
    3、vuex取到的值mutations：{{ store.state.price
    }}<button @click="handleAdd">点击加1</button>
  </div>
  <div>
    4、action{{ store.state.price
    }}<button @click="handleAddP">点击action</button>
  </div>
  <br />
  <br />
  <br />
  <VueZb />
</template>
<script>
import { reactive, ref } from "vue";

import { useStore } from "vuex";
import VueZb from "./vue3zb.vue";
export default {
  components: {
    VueZb,
  },

  props: ["age", "name"],
  setup(props, context) {
    /**
     * value cannot be made reactive: '哈哈哈哈哈哈'
     而输出的值确实发生了变化，只不过这种变化并没有反馈到界面上，
     也就是说并没有实现双向数据绑定。当然，如果是 ref 的话，
     就不存在这样的问题。而如果要使用 reactive ，我们需要将参数从 基本类型 转化为 对象。
     */
    // const age1 = reactive(props.age); 错误写法
    const age1 = reactive({
      age1: props.age,
    });
    const name1 = reactive({
      name1: props.name,
    });

    /**
     * 1、子组件给父组件传值
     */
    // 子组件点击事件
    const clickInfo = () => {
      // 抛出事件
      context.emit(
        "itemclick",
        "子组件传给父组件的第一个值",
        "子组件传给父组件的第二个值"
      );
    };

    /**
     * vuex的使用
     */
    let store = useStore();
    // 1、state
    let myName = ref("");
    myName.value = useStore().state.name;

    // 2、getters
    let myJoint = ref("");
    myJoint.value = useStore().getters.num;

    // 3、mutations
    let mutAff = () => {
      store.commit("add", 5);
    };

    // 点击加一
    let handleAdd = () => {
      store.commit("add", 1);
    };

    // 4、action
    let handleAddP = () => {
      store.dispatch("addPrice", 3);
    };

    return {
      age1,
      name1,
      clickInfo,
      store,
      myName,
      myJoint,
      mutAff,
      handleAdd,
      handleAddP,
    };
  },
};
</script>
<style scoped lang="less"></style>
