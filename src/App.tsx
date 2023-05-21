import { Provider } from "react-redux";

import "reset-css";

import PublicRoutes from "./router/Public/Public";
import store from "./store/index";


function App() {
  return (
    <Provider store={store}>
      <PublicRoutes />
    </Provider>
  );
}

export default App;
