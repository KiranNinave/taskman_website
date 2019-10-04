import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { userExistingLogin } from "./actions/userActions";

// pages
import HomePage from "./pages/HomePage";
import Admin from "./pages/admin/Index";
import User from "./pages/user/Index";
import NotFound from "./pages/404Page";

// notifications
import { Provider as AlertProvider } from "react-meerkat";
import AlertTemplate from "react-meerkat-template-basic";

// apis
import { getUserFromStorage } from "./apis/storageApis";

export default class App extends React.Component {
    componentDidMount() {
        const user = getUserFromStorage();
        if (user) {
            store.dispatch(userExistingLogin(user));
        }
    }

    render() {
        const options = {
            position: "bottom right",
            timeout: 5000,
            offset: "30px",
            transition: "scale"
        };
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...options}>
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
                </AlertProvider>
            </Provider>
        );
    }
}
