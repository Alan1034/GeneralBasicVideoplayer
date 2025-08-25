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
   background-color: rgb(233, 235, 239);
   height: inherit;
   transform: scale(1.19);
}
```

文档资料：
https://www.npmjs.com/package/video.js

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video
