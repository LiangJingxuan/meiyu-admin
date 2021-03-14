<template>
  <div class="tabs_item" v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "选项卡"
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  created() {
    this.$parent.titles.push(this.label)
  }

}
</script>

<style>

</style>