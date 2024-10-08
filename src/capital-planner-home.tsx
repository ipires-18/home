import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Home } from "./home";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
  errorBoundary(err, info, props) {
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
