import Hls from "hls.js";
import VideoQuality from "../Constants/VideoQuality";

export default function VideoPlayer() {
    const GUID = crypto.randomUUID();
    let level = 0;
    let hls;

    const initHls = (source) => {
        if(Hls.isSupported())
        {
            const video = document.getElementById(GUID);
            hls = new Hls({
                autoStartLoad: false
            });
            hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
                hls.loadLevel = level;
                hls.startLoad(level);
            });
            hls.loadSource(source);
            hls.attachMedia(video);
        }
    }

    const handleQualityOnClick = (e) => {
        setLevel(e.target.value);
        hls.currentLevel = level;
    }

    const setLevel = (_level) => {
        level = Number(_level);
    }

    return {
        oninit: ({attrs: { quality = 0 }}) => {
            setLevel(quality);
        },
        oncreate: ({attrs: { source }}) => {
            initHls(source);
        },
        view: ({attrs: { 
            controls = true, 
            autoplay = true
        }}) => m("div.relative",
            m(`video#${GUID}`, {
                controls,
                autoplay
            }), 
            m('div.absolute.top-0.right-0.w-100.p-1',
                m("div.grid.grid-cols-2.gap-x-2.text-white.opacity-10.hover:opacity-100",
                    m("div.text-right", // Because grid stretches to fit the it's size put inside input to prevent input from stretching
                        m("input", {
                            id: `${GUID}-480P`,
                            type: "radio", 
                            name: `${GUID}-quality`, 
                            value: VideoQuality.VIDEO_480P,
                            onclick: handleQualityOnClick,
                            checked: level == VideoQuality.VIDEO_480P,
                        })
                    ),
                    m("label", {for: `${GUID}-480P`}, "480P"),
                    m("div.text-right",
                        m("input", {
                            id: `${GUID}-720P`,
                            type: "radio", 
                            name: `${GUID}-quality`, 
                            value: VideoQuality.VIDEO_720P,
                            checked: level == VideoQuality.VIDEO_720P,
                            onclick: handleQualityOnClick
                        })
                    ),
                    m("label", {for: `${GUID}-720P`}, "720P"),
                    m("div.text-right",
                        m("input", {
                            id: `${GUID}-1080P`,
                            type: "radio", 
                            name: `${GUID}-quality`, 
                            value: VideoQuality.VIDEO_1080P,
                            checked: level == VideoQuality.VIDEO_1080P,
                            onclick: handleQualityOnClick
                        })
                    ),
                    m("label", {for: `${GUID}-1080P`}, "1080P")
                ) 
            )
        )
    }
}