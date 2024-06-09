import "./App.scss";
import SettingsMenu from "./components/SettingsMenu/SettingsMenu";
import Stock from "./components/Stock/Stock";
import Todo from "./components/Todo/Todo";
import Weather from "./components/Weather/Weather";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  return (
    <>
      <SettingsMenu />
      <Welcome />
      <Weather
        initialLocation="Kuala Lumpur"
        settings={{
          temperature: "C",
          wind: "kph",
          precipitation: "mm",
          visibility: "km",
        }}
      />
      <Stock />
      <Todo />
    </>
  );
};

export default App;
