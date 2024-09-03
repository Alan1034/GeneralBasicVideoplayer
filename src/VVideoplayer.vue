<template>
  <video ref="video" class="video-js" v-bind="$attrs">
    <source v-for="(item,) in sources" :key="item.src" v-bind="item" />
  </video>
</template>
<script lang="ts" setup>
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { ref, onMounted, onUnmounted, useAttrs } from 'vue-demi'
interface Props {
  sources: any[]
  playerOptions?: {
    autoplay?: Boolean
  }
}

const props = defineProps<Props>()
const player = ref(null) // 用来存储当前 video
const video = ref()
const attrs = useAttrs()
onMounted(() => {
  // 渲染视频
  player.value = videojs(video.value, { ...props.playerOptions }
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
  // console.log(player.value)
  // player.value.ready(() => {
  //   this.autoPlay()
  // })
})
onUnmounted(() => {
  closeVideo()
})
/**
  * @description: 部分浏览器不能自动播放，要手动调用一下
  * @return {*}
  */
const autoPlay = () => {
  if (!player.value) {
    return
  }
  if (!(props.playerOptions?.autoplay || attrs.autoplay)) {
    return
  }
  const promise = player.value.play();
  if (promise !== undefined) {
    promise.then(function () {
      console.info("Autoplay started!")
      // Autoplay started!
    }).catch(function (error) {
      // Autoplay was prevented.
      console.warn("Autoplay was prevented.", error)
    });
  }
}
const closeVideo = () => {
  if (player.value != null) {
    player.value.pause() //关闭
    player.value.dispose();//销毁
    player.value = null
  }
}
const resetVideo = () => {
  if (player.value != null) {
    player.value.pause()//暂停
    player.value.currentTime(0)//复位
  }
}
defineExpose({ autoPlay, closeVideo, resetVideo })
</script>
<style lang="">

</style>
