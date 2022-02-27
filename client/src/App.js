import "./App.css";
import PostMessage from "./components/PostMessage";
import { Provider } from "react-redux";
import { store } from "./actions/store";

function App() {
  return (
    <Provider store={store}>
      <PostMessage />
    </Provider>
  );
}

export default App;
