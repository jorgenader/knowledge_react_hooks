/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from 'react-hot-loader';

import Presentation from "./presentation";


const renderApp = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>, document.getElementById("root"),
    );
};

renderApp(Presentation);


if (module.hot) {
    module.hot.accept('./presentation', () => {
        renderApp(require('./presentation').default); // eslint-disable-line
    });
}
