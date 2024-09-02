<template>
  <video muted ref="video" class="video-js" v-bind="$attrs">
    <source v-for="(item, index) in sources" :key="item.src" v-bind="item" />
  </video>
</template>
<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
export default {
  props: {
    sources: {
      type: Array,
      default: () => []
    },

    playerOptions: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      player: null, // 用来存储当前 video
    };
  },
  mounted() { // 渲染视频
    this.player = videojs(this.$refs.video, { ...this.playerOptions }
      // , function onPlayerReady() {
      //   videojs.log('Your player is ready!');

      //   // In this context, `this` is the player that was created by Video.js.
      //   console.log(this)
      //   // this.play();
      //   // How about an event listener?
      //   this.on('ended', function () {
      //     videojs.log('Awww...over so soon?!');
      //   });
      // }
    );
    // console.log(this.player)
    // this.player.ready(() => {
    //   this.autoPlay()
    // })
  },
  destroyed() {
    this.closeVideo()
  },
  // watch: {
  //   "$route": function (val, oldVal) {
  //     this.autoPlay()
  //   }
  // },
  // updated() {
  //   console.log("updated")

  // },
  methods: {
    /**
     * @description: 部分浏览器不能自动播放，要手动调用一下
     * @return {*}
     */
    autoPlay() {
      if (!this.player) {
        return
      }
      if (!(this.playerOptions.autoplay || this.$attrs.autoplay)) {
        return
      }
      const promise = this.player.play();
      if (promise !== undefined) {
        promise.then(function () {
          console.info("Autoplay started!")
          // Autoplay started!
        }).catch(function (error) {
          // Autoplay was prevented.
          console.warn("Autoplay was prevented.", error)
        });
      }
    },
    closeVideo() {
      if (this.player != null) {
        this.player.pause() //关闭
        this.player.dispose();//销毁
        this.player = null
      }
    },
    resetVideo() {
      if (this.player != null) {
        this.player.pause()//暂停
        this.player.currentTime(0)//复位
      }
    },
  },
}
</script>
<style lang="">

</style>
