import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from './screens/AboutScreen'
import ParkDetailsScreen from "./screens/ParkDetailsScreen";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/about" component={AboutScreen} exact />
      <Route path="/park-details/:parkId" component={ParkDetailsScreen} exact />
    </>
  );
}

export default App;
