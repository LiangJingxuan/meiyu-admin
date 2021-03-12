<template>
  <div style="width: 430px">
    <button @click="prev">上月</button>
    <button @click="home">本月</button>
    <button @click="next">下月</button>
    <div id="calender">
      <ul class="flex">
        <li v-for="str in '日一二三四五六'" :key="str">{{ str }}</li>
      </ul>
      <ul class="flex nums">
        <li class="disabled" v-for="b in repairBefore" :key="`${b}b`">
          {{ b }}
        </li>
        <li
          :class="{ active: isToday(num) }"
          v-for="num in monthDays"
          :key="num"
        >
          {{ num }}
        </li>
        <li class="disabled" v-for="a in repairAfter" :key="`${a}a`">
          {{ a }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      globaDate: new Date(),
      today: new Date(),
    };
  },
  computed: {
    // 上一个月最后几天
    repairBefore() {
      let firstDay = new Date(this.globaDate);
      firstDay.setDate(1);
      let days = firstDay.getDay();
      let res = [];
      for (let i = 0; i < days; i++) {
        firstDay.setDate(firstDay.getDate() - 1);
        res.unshift(firstDay.getDate());
      }
      return res;
    },
    // 下一个月前几天
    repairAfter() {
      let lastDay = new Date(this.globaDate);
      lastDay.setDate(this.monthDays);
      let days = 6 - lastDay.getDay();
      let res = [];
      for (let i = 1; i <= days; i++) {
        res.push(i);
      }
      return res;
    },
    // 每月天数
    monthDays() {
      switch (this.globaDate.getMonth() + 1) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31;
        case 4:
        case 6:
        case 9:
        case 11:
          return 30;
        case 2:
          // 闰年
          let nowY = this.globaDate.getFullYear();
          if (
            ((nowY % 4 === 0 && nowY % 100 !== 0) || year % 400 === 0) &&
            this.globaDate.getMonth() === 1
          )
            return 28;
      }
    },
  },
  methods: {
    // 当前日期激活
    isToday(d) {
      let now = new Date();
      return (
        now.getDate() === d &&
        now.getMonth() === this.globaDate.getMonth() &&
        now.getFullYear() === this.globaDate.getFullYear()
      );
    },
    // 上一个月
    prev() {
      let tmp = new Date(this.globaDate);
      tmp.setDate(1);
      tmp.setMonth(tmp.getMonth() - 1);
      this.globaDate = tmp;
    },
    home() {
      this.globaDate = new Date();
    },
    // 下一个月
    next() {
      let tmp = new Date(this.globaDate);
      tmp.setDate(1);
      tmp.setMonth(tmp.getMonth() - 1);
      this.globaDate = tmp;
    },
  },
};
</script>

<style>
li {
  list-style: none;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex-nowrap {
  flex-wrap: nowrap !important;
}
.flex-col {
  flex-direction: column;
}
#calender {
  width: 430px;
  border: 1px solid red;
}
#calender li {
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.nums li {
  cursor: pointer;
  /* box-shadow: 0 0 0 #000; */
}
.nums li:hover {
  background: #eee;
}
.disabled {
  color: #ccc;
  cursor: not-allowed !important;
}
.disabled:hover {
  background: #fff !important;
}
.active {
  background: #eee;
}
</style>