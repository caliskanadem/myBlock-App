import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom/dist";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
