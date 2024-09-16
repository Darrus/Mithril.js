import model from "./model";

const increaseCount = () => {
  model.count++;
}

const Alt = {
  view: () =>
    m(".w-screen.py-5",
      m(".flex.flex-col.gap-3",
        m(".text-center",
          m("p.text-4xl.font-bold", "Alt"),
          m("p.text-lg.text-gray-400", "Count: ", model.count),
          m("button.bg-blue-500.hover:bg-blue-700.text-white.font-bold.py-2.px-4.rounded-full", {
            type: "button",
            onclick: increaseCount}, "Increase count"),
            m("button.bg-blue-500.hover:bg-blue-700.text-white.font-bold.py-2.px-4.rounded-full", {
              type: "button",
              onclick: () => {
                m.route.set("/home");
              }
            },"Route to home")
        ),
        m(".text-center",
          m("p.text-sm", "The quick brown fox jump over the lazy dog.")
        )
      )
    )
};

export default Alt;
