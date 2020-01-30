import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";

import HeaderComponet from "./components/header";
import ImageGrid from "./components/image_grid/";

import { configureStore } from "./store";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <HeaderComponet />
          <ImageGrid />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
