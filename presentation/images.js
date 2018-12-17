/* eslint-disable global-require */
import preloader from "spectacle/lib/utils/preloader";

const images = {
    hooks: require("../assets/hooks.jpeg"),
};

preloader(images);

export default images;
