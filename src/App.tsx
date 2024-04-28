import { Provider } from "react-redux";
import { store } from "./core/store";
import Routing from "./routing/Routing";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;