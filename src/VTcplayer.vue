<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2025-08-26 19:16:57
 * @LastEditTime: 2025-08-27 09:44:10
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
import { ref, onMounted, onUnmounted, } from 'vue-demi'
interface Props {

  playerOptions?: {
    autoplay?: Boolean
  }

}

const props = defineProps<Props>()
const player = ref(null) // 用来存储当前 video
const video = ref()
// const attrs = useAttrs()
onMounted(() => {
  // 渲染视频
  player.value = TCPlayer(video.value, { ...props.playerOptions }
  );

  // player.value.on('error', function (error) {
  //   // 做一些处理
  // });
})
onUnmounted(() => {
  closeVideo()
})

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
defineExpose({ closeVideo, resetVideo })
</script>
<style lang="">

</style>
