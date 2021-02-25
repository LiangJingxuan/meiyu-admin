<template>
  <div id="app">
    <config-provider :locale="zh_CN">
      <router-view />
    </config-provider>
  </div>
</template>

<script>
import { ConfigProvider } from "ant-design-vue";
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";

export default {
  components: {
    ConfigProvider,
  },
  data() {
    return {
      zh_CN,
    };
  },
};
</script>

<style lang="less">
@import url("assets/css/normalize.css");
</style>
