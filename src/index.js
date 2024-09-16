import m from "mithril";
import "./styles.css";

// Paths
import Home from "./home";
import Alt from "./alt";

m.route(document.body, "/home", {
    "/home": Home,
    "/alt": Alt
});