import VideoPlayer from "./Components/VideoPlayer.js";
import VideoQuality from "./Constants/VideoQuality.js";
import model from "./model";

const increaseCount = () => {
  model.count++;
}

const Home = {
  view: () =>
    m(".w-screen.py-5",
      m(".flex.flex-col.gap-3.items-center",
        m(".text-center",
          m("p.text-4xl.font-bold", "Home"),
          m("p.text-lg.text-gray-400", "Count: ", model.count),
          m("button.bg-blue-500.hover:bg-blue-700.text-white.font-bold.py-2.px-4.rounded-full", {
            type: "button",
            onclick: increaseCount},
          "Increase count"),
          m("button.bg-blue-500.hover:bg-blue-700.text-white.font-bold.py-2.px-4.rounded-full", {
            type: "button",
            onclick: () => {
              m.route.set("/alt");
            }
          },
        "Route to alt")
        ),
        m(VideoPlayer, { source: "http://localhost:5290/api/Video/video.mp4/video.m3u8", controls: true, autoplay: false, quality: VideoQuality.VIDEO_480P }),
        m(VideoPlayer, { source: "http://localhost:5290/api/Video/video.mp4/video.m3u8", controls: true, autoplay: false, quality: VideoQuality.VIDEO_720P }),
        m(VideoPlayer, { source: "http://localhost:5290/api/Video/video.mp4/video.m3u8", controls: true, autoplay: false, quality: VideoQuality.VIDEO_1080P }),
        m(".text-center",
          m("p.text-sm", "The quick brown fox jump over the lazy dog.")
        )
      )
    )
};

export default Home;
