import React from "react";
import { Provider } from "react-redux";
import store from "./store";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h1>Taskman</h1>
                </div>
            </Provider>
        );
    }
}
