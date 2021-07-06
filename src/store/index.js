import { createStore } from "vuex";

export default createStore({
  state: {
    name: "请叫我郭子",
    price: 1,
  },

  getters: {
    num(state) {
      return state.name + "这是getters拼接的";
    },
  },

  mutations: {
    add(state, n) {
      // n是接收的参数
      state.price += n;
    },
  },

  actions: {
    addPrice(context, n) {
      context.commit("add", n);
    },
  },

  //action的操作逻辑
  /**
   *先由事件触发dispatch,
   提交action中的事件，并传递参数，再由action中的context
   触发mutation中的事件更改state
   *  */

  modules: {},
});
