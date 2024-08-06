const Home = {
  view: () =>
    m(".w-screen.py-5",
      m(".flex.flex-col.gap-3",
        m(".text-center",
          m("p.text-4xl.font-bold", "Hello World"),
          m("p.text-lg.text-gray-400", "I am just a test")
        ),
        m(".text-center",
          m("p.text-sm", "The quick brown fox jump over the lazy dog.")
        )
      )
    )
};

export default Home;
