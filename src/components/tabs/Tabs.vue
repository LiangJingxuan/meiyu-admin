<template>
  <div>
    <ul class="tabs flex">
      <li
        v-for="(item, i) in titles"
        :key="item"
        @click="active = i"
        :class="{ active: i === active }"
      >
        {{ item }}
      </li>
    </ul>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      active: 0,
      titles: [],
    };
  },
  watch: {
    active(i) {
      this.$children.forEach((r, j) => {
        r.isShow = i === j
      })
      this.$emit('input', i)
    },
  },
  mounted() {
    this.$children[this.active].isShow = true;
  },
};
</script>

<style>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.tabs li {
  margin: 0 20px;
}
</style>