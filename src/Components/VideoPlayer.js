import Hls from "hls.js";

export default function VideoPlayer() {
    const GUID = crypto.randomUUID();

    const initHls = (source) => {
        if(Hls.isSupported())
        {
            const video = document.getElementById(GUID);
            var hls = new Hls();
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                m.redraw();
            });
            hls.loadSource(source);
            hls.attachMedia(video);
        }
    }

    return {
        oncreate: ({attrs: { source }}) => {
            initHls(source);
        },
        view: ({attrs: { 
            controls = true, 
            autoplay = true
        }}) =>  m(`video#${GUID}`, {
            controls,
            autoplay
        })
    }
}