import "./SettingsMenu.scss";
import cross from "../../assets/images/black-cross.png";
import Switch from "../Switch/Switch";
import { FormEventHandler, useState } from "react";
import settings from "../../assets/images/settings-icon.png";
import { Settings, Unit } from "../../types/SettingsType";

type SettingsMenuProps = {
  onClose: () => void;
};

const SettingsMenu = () => {
  const [ showSettings, setShowSettings ] = useState<boolean>(false);
  const [ tempUnit, setTempUnit ] = useState<Unit>("C");
  const [ visUnit, setVisUnit ] = useState<Unit>("km");
  const [ precipUnit, setPrecipUnit ] = useState<Unit>("mm");
  const [ windUnit, setWindUnit ] = useState<Unit>("kph");

  const toggleTemp = (value: Unit) => setTempUnit(value);
  const toggleVis = (value: Unit) => setVisUnit(value);
  const togglePrecip = (value: Unit) => setPrecipUnit(value);
  const toggleWind = (value : Unit) => setWindUnit(value);


  

  const toggleShowSettings = () => {
    setShowSettings(!showSettings)
  }
  return (
    <div className="settings-menu">
      <div className="settings-menu__image" onClick={toggleShowSettings}>
      <img src={settings} />
      </div>
      {showSettings && (
      <div className="settings-menu__container">
        <h4 className="settings-menu__title">Configure the Units</h4>
        <div className="settings-menu__switch-container">
        <p>Temperature Unit</p>
        <Switch labelOne="°F" labelTwo="°C" value={tempUnit} handleChange={() => toggleTemp}  />
        <p>Wind Unit</p>
        <Switch labelOne="mph" labelTwo="kph" value={windUnit} handleChange={() => toggleWind}  />
        <p>Precipitation Unit</p>
        <Switch labelOne="in" labelTwo="mm" value={precipUnit} handleChange={() => togglePrecip}  />
        <p>Visibility Unit</p>
        <Switch labelOne="miles" labelTwo="km" value={visUnit} handleChange={() => toggleVis}  />
        </div>
        
      </div>

      )}
    </div>
  );
};

export default SettingsMenu;
