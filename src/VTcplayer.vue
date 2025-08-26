<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2025-08-26 19:16:57
 * @LastEditTime: 2025-08-26 19:31:06
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \GeneralBasicVideoplayer\src\VTCplayer.vue
 * 
-->
<template>
  <video ref="video" class="video-js" v-bind="$attrs" id="player-container-id">
  </video>
</template>
<script lang="ts" setup>
import TCPlayer from 'tcplayer.js';
import 'tcplayer.js/dist/tcplayer.min.css';
import { ref, onMounted, onUnmounted, useAttrs } from 'vue-demi'
interface Props {

  playerOptions?: {
  }

}

const props = defineProps<Props>()
const player = ref(null) // 用来存储当前 video
const video = ref()
const attrs = useAttrs()
onMounted(() => {
  // 渲染视频
  player.value = TCPlayer(video.value, { ...props.playerOptions }
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
