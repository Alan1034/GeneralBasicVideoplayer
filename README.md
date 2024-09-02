# GeneralBasicVideoplayer

基于video.js封装的视频播放器

支持Vue3

```vue
import { VVideoplayer } from "general-basic-videoplayer";

<VVideoplayer class="video-player" :sources="sources" :controls='false' muted autoplay loop preload playsinline :player-options="playerOptions">
</VVideoplayer>

sources: [{
    src: theSrc,
    type: "video/mp4"
}],
playerOptions: {
    fluid: true,
    autoplay: true,
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

