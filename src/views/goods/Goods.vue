<template>
  <div>
    <SearchInput></SearchInput>
    <div v-limit="5">dsa565da65d6as56dadada56sd5a6ds</div>
    <center>
      {{ 1 | sex }}
    </center>

    <!-- 练习 -->
    <!-- <Pictrue :src="src" :visible="isPreview" @hidePreview="hidePreview" />
    <img v-for="p in piclist" :key="p" :src="p" @click="showPreview(p)" /> -->

    <!-- <br />
    <br />
    <br />
    <br /> -->

    <!-- <Piclist
      :list="list"
      :index="index"
      :visible="isPreviewlist"
      @hidePreviewlist="hidePreviewlist"
      @prev="prev"
      @next="next"
    />
    <img
      width="30%"
      v-for="(p, index) in list"
      :key="p"
      :src="p"
      @click="showPreviewList(index)"
    /> -->
  </div>
</template>

<script>
import SearchInput from "../../components/Search/SearchInput/Index";
import Pictrue from "../../components/test/pictrue/Pictrue";
import Piclist from "../../components/test/pictrue/Piclist";

export default {
  name: "Goods",
  components: {
    SearchInput,
    Pictrue,
    Piclist,
  },
  data() {
    return {
      // 单图
      piclist: [
        "http://p3.music.126.net/DM4bxrmYu-tTvzhx-a25iA==/109951165790893716.jpg?param=200y200",
        "http://p4.music.126.net/FMoa8czDLyzp2irg85trtQ==/109951165548182302.jpg?param=200y200",
        "http://p4.music.126.net/FfCRss9kp-nnG6xslggmeQ==/109951165613691674.jpg?param=200y200",
      ],
      isPreview: false,
      src: "",

      // 多图
      list: [
        "http://p1.music.126.net/Se2CPGsASOz8qe1mrFwC4g==/109951165790780186.jpg?imageView&quality=89",
        "http://p1.music.126.net/hQWhJM12qZxdOqIm7uRMrg==/109951165790253519.jpg?imageView&quality=89",
        "http://p1.music.126.net/sjCDHUqk9UzWRr48zZMMWA==/109951165790230449.jpg?imageView&quality=89",
      ],
      index: 0,
      isPreviewlist: false,
    };
  },
  methods: {
    // 单图
    showPreview(src) {
      this.isPreview = !this.isPreview;
      this.src = src;
    },
    hidePreview(parames) {
      this.isPreview = parames;
    },

    // 多图
    showPreviewList(index) {
      this.isPreviewlist = !this.isPreviewlist;
      this.index = index;
    },
    hidePreviewlist(parames) {
      this.isPreviewlist = parames;
    },
    prev() {
      if (this.index <= 0) this.index = this.list.length - 1;
      else --this.index;
    },
    next() {
      if (this.index < this.list.length - 1) ++this.index;
      else this.index = 0;
    },
  },
};
</script>

<style>
</style>