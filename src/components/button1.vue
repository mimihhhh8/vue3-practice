<template>
  <!-- <div>
    <button>
      <slot />
    </button>
  </div> -->
  <!-- 上面的代码Button的click事件会在根元素div上绑定，
  如果我们要指定click的区域为button元素的话我们就需要使用inheritAttrs -->

  <!-- 1、属性只绑定在button上的情况 -->
  <!-- <div>
    <button v-bind="$attrs">
      vue3中的属性绑定11
      <slot />
    </button>
  </div> -->

  <!-- 2、一部分属性绑定在button上，一部分绑定在div上 -->
  <div :size="size">
    <!-- 父组件绑定点击事件，点击子组件按钮触发 -->
    <button v-bind="rest">
      vue3中的属性绑定22
      <slot />
    </button>

    <!-- 子组件调用父组件的方法 -->
    <button @click="handleClick">点我</button>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  setup(props, context) {
    const { size, ...rest } = context.attrs;

    const handleClick = () => {
      rest.onClick2();
    };
    return {
      size,
      rest,
      handleClick,
    };
  },
};
</script>
<style scoped lang="less"></style>
