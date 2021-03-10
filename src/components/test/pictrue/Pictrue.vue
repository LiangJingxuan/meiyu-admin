<template>
  <div>
    <div class="previewImage" v-show="visible" @click="hidePreview">
      <img :src="imgSrc" @click.stop="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    hidePreview() {
      this.$emit("hidePreview", false);
    },
  },
  computed: {
    imgSrc() {
      let tmp = this.src.split('param=')[1]
      let src = this.src.replace(tmp, '500y500')
      return src;
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
</style>