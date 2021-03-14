<template>
  <ul class="pager flex">
    <li v-show="current > 1" @click="current = 1">首页</li>
    <li v-show="current > 1" @click="current--">上一页</li>
    <li
      :class="{ item: 'item', active: i === current }"
      v-for="i in pageCount"
      :key="i"
      @click="current = i"
    >
      {{ i }}
    </li>
    <li v-show="current < pageCount" @click="current++">下一页</li>
    <li v-show="current < pageCount" @click="current = pageCount">尾页</li>
  </ul>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      current: 1,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pageSize);
    },
  },
  watch: {
    current(val) {
      if (val < 1) this.current = 1;
      else if (val > this.pageCount) this.current = this.pageCount;
      this.$emit("change", this.current);
    },
  },
};
</script>

<style>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.pager {
  padding: 10px;
}
.pager li {
  border: 1px solid rgb(0, 162, 255);
  color: rgb(0, 162, 255);
  margin: 0 1px;
  user-select: none;
  cursor: pointer;
  min-width: 30px;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pager li:not(.item) {
  width: 50px;
}
.pager li.active {
  background: rgb(0, 162, 255);
  color: #fff;
}
.pager li.disable {
  background: rgb(214, 214, 214);
  color: #000;
  cursor: none;
}
</style>