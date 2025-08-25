# GeneralBasicVideoplayer

基于video.js封装的视频播放器

支持Vue3和Vue2，vue2请使用@1版本，Vue3请使用@2版本

```vue
import { VVideoplayer } from "general-basic-videoplayer";
import 'general-basic-videoplayer/style'

<VVideoplayer class="video-player" :controls='false' muted autoplay loop preload :sources="sources"
  playsinline :player-options="playerOptions">
</VVideoplayer>

sources: [{
    src: theSrc,
    type: "video/mp4"
}],
playerOptions: {
    // fill: true,
    height: window.innerHeight,
    userActions: {
        click: false,
        doubleClick: false,
        hotkeys: false,
    }
},

.video-player {
    background-color: #ECEEF0;
    // transform: scale(1.19);
}
```

动态设置URL和封面图
  created() {
    const { url = "", coverRelativeUrl } = this.$route.query;
    const baseUrl = "https://lumian-1330789281.cos.ap-guangzhou.myqcloud.com"
    this.sources = [{
      src: baseUrl + decodeURIComponent(url),
      type: "video/mp4"
    }]
    this.playerOptions.poster = baseUrl + decodeURIComponent(coverRelativeUrl)
  }

文档资料：
https://www.npmjs.com/package/video.js

https://www.hxstrive.com/subject/video_js/2677.htm

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video
