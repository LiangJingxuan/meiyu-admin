<template>
  <a-layout id="layout">
    <a-layout-sider
      theme="light"
      v-model="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo" v-show="!collapsed">美遇管理系统</div>
      <div class="logo" v-show="collapsed">美遇</div>
      <a-menu
        mode="inline"
        :default-selected-keys="[routed]"
        :open-keys="[openKeys]"
        @openChange="onOpenChange"
      >
        <a-menu-item key="/home">
          <router-link to="/home">
            <a-icon type="home" />
            <span>home首页</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="key" />
            <span v-show="!collapsed">商品管理</span>
          </span>
          <a-menu-item key="/goods">
            <router-link to="/goods">
              <span>自由行</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <!-- <a-menu-item key="/client">
          <router-link to="/client">
            <a-icon type="team" />
            <span>攻略管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/client">
          <router-link to="/client">
            <a-icon type="team" />
            <span>客户管理</span>
          </router-link>
        </a-menu-item> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row>
          <a-col :span="12">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="collapsedToggle"
            />
          </a-col>
          <a-col :span="12" class="header_right">
            <a-dropdown-button>
              梁景轩
              <a-menu slot="overlay">
                <a-menu-item key="1">
                  <router-link to="/login" tag="span">
                    <a-icon type="poweroff" />退出登录
                  </router-link>
                </a-menu-item>
              </a-menu>
            </a-dropdown-button>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          minHeight: '280px',
          height: 'auto',
          display: 'table',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { Layout, Menu, Icon, Dropdown, Row, Col } from "ant-design-vue";
import { mapState, mapMutations } from "vuex";
import * as types from "../../store/types"

export default {
  name: "Layout",
  components: {
    ALayout: Layout,
    ALayoutSider: Layout.Sider,
    ALayoutHeader: Layout.Header,
    ALayoutContent: Layout.Content,
    AMenu: Menu,
    AMenuItem: Menu.Item,
    ASubMenu: Menu.SubMenu,
    AIcon: Icon,
    ADropdownButton: Dropdown.Button,
    ARow: Row,
    ACol: Col,
  },
  data() {
    return {
      openKeys: "",
    };
  },
  created() {
    if (this.routed === "/goods") {
      this.openKeys = "sub1";
    } else {
      this.openKeys = "";
    }
  },
  computed: {
    ...mapState(["collapsed"]),
    routed() {
      return this.$route.path;
    },
  },
  methods: {
    ...mapMutations({
      isCollapsed: types.IS_COLLAPSED
    }),
    // SubMenu切换
    onOpenChange(openKeys) {
      if (openKeys.length !== 0) {
        this.openKeys = openKeys[1];
      } else {
        this.openKeys = "";
      }
    },
    // 折叠导航切换
    collapsedToggle() {
      this.isCollapsed()
    }
  },
  watch: {
    $route: function () {
      if (this.routed === "/goods") {
        this.openKeys = "sub1";
      } else {
        this.openKeys = "";
      }
    },
  },
};
</script>
<style lang="less" scoped>
#layout {
  background-color: #ffffff;
  height: 100vh;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    text-align: center;
    line-height: 70px;
    height: 70px;
    background: #1890ff;
    overflow: hidden;
    font-weight: bold;
    font-size: 25px;
    color: #e6f7ff;
  }
  .ant-layout-header {
    .ant-dropdown-button {
      text-align: right;
      margin-right: 20px;
    }
  }
  .header_right {
    text-align: right;
  }
}
</style>