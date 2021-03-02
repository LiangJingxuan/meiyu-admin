<template>
  <div id="search_input">
    <a-row>
      <a-col :span="6">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconziyuan13"></use>
        </svg>
        <span class="name">自由行</span>
      </a-col>
      <a-col :span="18">
        <div class="input">
          <a-row>
            <a-col :span="7">
              <p class="left">
                <span>北京</span>出发
              </p>
            </a-col>
            <a-col :span="1"> </a-col>
            <a-col :span="12"></a-col>
            <a-col :sapn="4"></a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Row, Col } from "ant-design-vue";
export default {
  name: "Index",
  components: {
    ARow: Row,
    ACol: Col,
  },
};
</script>

<style lang="less" scoped>
#search_input {
  width: 70%;
  height: 70px;
  margin: auto;
  background-image: url("~assets/images/brand-fh-bg.jpg");
  background-repeat: no-repeat;
  .icon {
    font-size: 30px;
  }
  .name {
    font-size: 24px;
    color: #333;
    margin-left: 10px;
  }
  .input {
    width: 100%;
    height: 40px;
    background-color: #ff9d00;
    border-radius: 3px;
    padding: 5px;
    overflow: hidden;
    margin-top: 20px;
    .left {
      background: #fff;
    }
  }
}
</style>