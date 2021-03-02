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
import "./assets/js/iconfont";

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
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
