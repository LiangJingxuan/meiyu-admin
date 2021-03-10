<template>
  <div>
    <div class="previewImage" v-show="visible" @click="hidePreviewlist">
      <img :src="imgSrc" @click.stop="" />
      <div class="button left" @click.stop="prev"></div>
      <div class="button right" @click.stop="next"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  methods: {
    hidePreviewlist() {
      this.$emit("hidePreviewlist", false);
    },
    prev() {
      this.$emit("prev")
    },
    next() {
      this.$emit("next")
    },
  },
  computed: {
    imgSrc() {
      return this.list[this.index];
    },
  },
};
</script>

<style>
.previewImage {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
}
.button {
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
}
.left {
  left: 5%;
}
.right {
  
  right: 5%;
}
</style>