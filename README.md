# GeneralBasicVideoplayer

基于video.js和tcplayer.js等多个播放器封装的视频播放器

支持Vue3和Vue2，vue2请使用@1版本，Vue3请使用@2版本

## video.js

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

## tcplayer.js

```
import { VTcplayer } from "general-basic-videoplayer";
import 'general-basic-videoplayer/style'

<VTcplayer class="video-player" playsinline webkit-playsinline x5-playsinline :player-options="playerOptions">
</VTcplayer>

playerOptions: {
  controls: true,
  loop: true,
  preload: true,
  height: 525,
  licenseUrl: 'https://你在腾讯云申请的.license',
},
```

如果视频URL的来源是腾讯的静态文件服务，需要到存储的控制台设置允许跨域到播放器部署的网站

文档资料：

https://cloud.tencent.com/document/product/881/79169#web

https://cloud.tencent.com/document/product/881/30818

https://cloud.tencent.com/document/product/881/30820

https://rtcube.cloud.tencent.com/component/experience-center/index.html#/detail?scene=player

