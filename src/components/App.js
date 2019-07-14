import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from './header';
import StreamList from "./streams/StreamList";

const App = () => {
  return (
    <div className="ui container">
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={StreamList} />
        </BrowserRouter>
    </div>
  );
};

export default App;
