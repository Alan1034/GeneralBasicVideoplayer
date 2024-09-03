# GeneralBasicVideoplayer

基于video.js封装的视频播放器

支持Vue3

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
    // fluid: true,
    height: window.innerHeight,
    userActions: {
        click: false,
        doubleClick: false,
        hotkeys: false,
    }
},

.video-player {
    background-color: #ECEEF0;
}
```

文档资料：
https://gitcode.gitcode.host/docs-cn/video.js-docs-cn/index.html
https://www.npmjs.com/package/video.js
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video
