<template>
  <div id="echarts" ref="echarts"></div>
</template>

<script>
import { mapState } from "vuex";
let echarts = require("echarts");

export default {
  name: "Echarts",
  props: {
    option: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    option: {
      handler: function () {
        this.initEchart();
      },
      deep: true,
    },
    isCollapsed() {
      setTimeout(() => {
        this.chart.resize();
      }, 300);
    },
  },
  computed: {
    ...mapState({
      isCollapsed: (state) => state.collapsed,
    }),
  },
  methods: {
    // 初始化
    initEchart() {
      if (!this.chart) this.chart = echarts.init(this.$refs.echarts);
      this.chart.setOption(this.option);
    },
    // 自适应
    resizeEchart(ruin) {
      if (this.chart) {
        ruin
          ? window.removeEventListener("resize", this.chart.resize)
          : window.addEventListener("resize", this.chart.resize);
      }
    },
  },
  mounted() {
    this.initEchart();
    this.resizeEchart();
  },
  destroyed() {
    // 防止内存泄漏  销毁事件
    this.resizeEchart(true);
  },
};
</script>

<style lang="less" scoped>
</style>