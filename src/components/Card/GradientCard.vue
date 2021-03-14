<template>
  <div class="gradient_card" :style="style">
    <div class="context">
      <p class="title">{{ content.title }}</p>
      <p class="info">{{ content.info }}</p>
      <p class="explain">{{ content.explain }}</p>
    </div>
    <div class="icon">
      <img src="../../assets/images/default_icon.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default() {
        return {
          title: "美遇后台标题",
          info: "4122",
          explain: "美遇后台说明",
          icon: "/src/assets/images/default_icon.png",
        };
      },
    },
    colors: {
      type: Array,
      default() {
        return ["#759bff", "#843cf6"];
      },
    },
  },
  computed: {
    style() {
      return {
        "--background-first": this.colors[0],
        "--background-last": this.colors[1],
      }
    }
  }
};
</script>

<style lang="less" scoped>
.gradient_card {
  width: 100%;
  height: 150px;
  display: flex;
  color: #ffffff;
  border-radius: 10px;
  user-select: none;
  transition: all 0.3s;
  background-image: linear-gradient(230deg, var(--background-first), var(--background-last));
  &:hover {
    box-shadow: 0px 0px 10px var(--background-last);
  }
  div {
    height: 100%;
    line-height: 40px;
    margin: 10px 25px 0;
  }
  p {
    margin: 0;
  }
  .context {
    flex: 2;
  }
  .title,
  .info {
    font-weight: bold;
  }
  .title {
    font-size: 15px;
  }
  .info {
    font-size: 30px;
  }
  .explain {
    font-size: 12px;
  }
  .icon {
    opacity: 0.7;
    line-height: 130px;
    flex: 1;
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>