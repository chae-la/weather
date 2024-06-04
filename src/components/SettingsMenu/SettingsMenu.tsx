import "./SettingsMenu.scss";
import cross from "../../assets/images/black-cross.png";
import Switch from "../Switch/Switch";
import { FormEventHandler, useState } from "react";
import settings from "../../assets/images/settings-icon.png";

type SettingsMenuProps = {
  onClose: () => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const SettingsMenu = () => {
  const [ showSettings, setShowSettings ] = useState<boolean>(false);

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
        <Switch labelOne="°F" labelTwo="°C" />
        <p>Wind & Gust Unit</p>
        <Switch labelOne="mph" labelTwo="kph" />
        <p>Precipitation Unit</p>
        <Switch labelOne="in" labelTwo="mm" />
        <p>Visibility Unit</p>
        <Switch labelOne="miles" labelTwo="km"/>
        </div>
        
      </div>

      )}
    </div>
  );
};

export default SettingsMenu;
