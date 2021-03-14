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
    <echarts />
    
  </div>
</template>

<script>
import Calender from "../../components/calendar/Calender";
import Pagination from "../../components/pagination/Pagination";
import Tabs from "../../components/tabs/Tabs";
import TabsItem from "../../components/tabs/TabsItem";

import Echarts from '../../components/Echarts/Echarts'

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
    Calender,
    Pagination,
    Tabs,
    TabsItem,
    Echarts,
  },
  data() {
    return {
      aaa: 0,
    };
  },
  methods: {
    change(current) {
      console.log(current);
    },
  },
};
</script>

<style>
</style>