import m from "mithril";
import "./styles.css";

// Paths
import Home from "./home";

m.route(document.body, "/home", {
    "/home": Home
});