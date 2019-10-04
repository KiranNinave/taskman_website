import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

// pages
import HomePage from "./pages/HomePage";
import Admin from "./pages/admin/Index";
import User from "./pages/user/Index";
import NotFound from "./pages/404Page";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/user" component={User} />
                            <Route path="/admin" component={Admin} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}
