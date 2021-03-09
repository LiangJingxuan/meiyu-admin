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
            <a-col :span="5">
              <p class="left"><span>北京</span>出发</p>
            </a-col>
            <a-col :span="2">
              <p class="center">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconjiantou"></use>
                </svg>
              </p>
            </a-col>
            <a-col :span="14">
              <a-input value="英国" />
            </a-col>
            <a-col :span="3">
              <p class="right">
                <a-icon type="search" />
              </p>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Row, Col, Input, Icon } from "ant-design-vue";
export default {
  name: "Index",
  components: {
    ARow: Row,
    ACol: Col,
    AInput: Input,
    AIcon: Icon,
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
    line-height: 30px;
    background-color: #5ba5ef;
    border-radius: 3px;
    padding: 5px;
    overflow: hidden;
    .left {
      background: #fff;
      border-radius: 2px;
      height: 30px;
      cursor: pointer;
      span {
        font-size: 20px;
        font-weight: bold;
        color: #000;
        margin: 0 10px;
      }
    }
    .center {
      color: #fff;
      text-align: center;
    }
    .right {
      text-align: center;
      cursor: pointer;
      border-radius: 2px;
      height: 30px;
      transition: all 0.5s;
      color: #fff;
      font-size: 25px;
      &:hover {
        background-color: #7dbcfb;
      }
    }
  }
}
</style>