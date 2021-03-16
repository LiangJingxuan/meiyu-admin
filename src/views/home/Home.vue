<template>
  <div>
    <!-- <calender /> -->
    <!-- <pagination :total="150" :page-size="50" @change="change" /> -->
    <!-- <tabs v-model="aaa">
      <tabs-item label="飞机票">飞机票详情...</tabs-item>
      <tabs-item label="火车票">火车票详情...</tabs-item>
      <tabs-item label="汽车票">汽车票详情...</tabs-item>
    </tabs> -->

    <!-- <tabs v-model="aaa">
      <tabs-item label="飞机票"></tabs-item>
      <tabs-item label="火车票"></tabs-item>
      <tabs-item label="汽车票"></tabs-item>
    </tabs> -->
    <a-row>
      <a-col class="gutter-row" :xs="12" :sm="12" :md="12" :lg="12" :xl="6">
        <gradient-card
          :colors="['#759bff', '#843cf6']"
          :content="{
            title: '昨日新增客户',
            info: '2997',
            explain: '14 - March 2021',
            icon: '',
          }"
        />
      </a-col>
      <a-col class="gutter-row" :xs="12" :sm="12" :md="12" :lg="12" :xl="6">
        <gradient-card
          :colors="['#fc5286', '#fbaaa2']"
          :content="{
            title: '昨日收益',
            info: '889.8$',
            explain: '14 - March 2021',
            icon: '',
          }"
        />
      </a-col>
      <a-col class="gutter-row" :xs="12" :sm="12" :md="12" :lg="12" :xl="6">
        <gradient-card
          :colors="['#ffc480', '#ff763b']"
          :content="{
            title: '昨日电话回访',
            info: '425',
            explain: '14 - March 2021',
            icon: '',
          }"
        />
      </a-col>
      <a-col class="gutter-row" :xs="12" :sm="12" :md="12" :lg="12" :xl="6">
        <gradient-card
          :colors="['#0e4cfd', '#6a8eff']"
          :content="{
            title: '昨日成交',
            info: '983.7$',
            explain: '14 - March 2021',
            icon: '',
          }"
        />
      </a-col>
      <a-col :span="24" class="panel">
        <echarts style="width: 85%; height: 400px;" :option="option.homeSale" />
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around">
      <a-col class="gutter-row panel" :span="10">
        <echarts style="width: 90%; height: 350px;" :option="option.homeOrder" />
      </a-col>
      <a-col class="gutter-row panel" :span="6">
        <echarts style="width: 90%; height: 350px;" :option="option.homeOrder" />
      </a-col>
      <a-col class="gutter-row panel" :span="6">
        <echarts style="width: 90%; height: 350px;" :option="option.homeOrder" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Row, Col } from "ant-design-vue";

import Calender from "../../components/calendar/Calender";
import Pagination from "../../components/pagination/Pagination";
import Tabs from "../../components/tabs/Tabs";
import TabsItem from "../../components/tabs/TabsItem";

import GradientCard from "../../components/Card/GradientCard";

import Echarts from "../../components/Echarts/Echarts";
import homesaleCharts from '../../chartsData/homeSale'
import homeOrderCharts from '../../chartsData/homeOrder'

// 防抖
function d(fn, time) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}
// 节流
function t(fn, time) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, time);
    }
  };
}

export default {
  name: "Home",
  components: {
    ARow: Row,
    ACol: Col,

    Calender,
    Pagination,
    Tabs,
    TabsItem,
    Echarts,
    GradientCard,
  },
  data() {
    return {
      aaa: 0,
      // 图表数据
      option: {
        homeSale: {},
        homeOrder: {},
      },
    };
  },
  methods: {
    change(current) {
      console.log(current);
    },
    // 图表
    charts() {
      this.option.homeSale = homesaleCharts;
      this.option.homeOrder = homeOrderCharts;
    },
  },
  created() {
    this.charts();
  },
};
</script>

<style>
.gutter-row {
  padding: 5px;
}
</style>