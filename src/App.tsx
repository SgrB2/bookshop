import { Provider } from "react-redux";

import "reset-css";

import PublicRoutes from "./router/Public/Public";
import store from "./store/index";

import "./variables.css";

function App() {
  return (
    <Provider store={store}>
      <PublicRoutes />
    </Provider>
  );
}

export default App;
