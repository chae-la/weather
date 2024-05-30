import "./SettingsMenu.scss";
import cross from "../../assets/images/black-cross.png";
import Switch from "../Switch/Switch";
import { FormEventHandler } from "react";
import Button from "../Button/Button";

type SettingsMenuProps = {
  onClose: () => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const SettingsMenu = ({ onClose, onSubmit }: SettingsMenuProps) => {
  return (
    <div className="settings-menu">
      <div className="settings-menu-__container">
        <img src={cross} alt="Close Menu" onClick={onClose} />
        <div className="settings-menu__switch-container">
        <h2>Fahrenheit</h2>
        <Switch labelOne="°F" labelTwo="°C" />
        <h2>Celcius</h2>
        </div>
        {/* <form className="settings-menu__form" onSubmit={onsubmit}>
          <label htmlFor="location">Current Location</label>

        </form> */}
      </div>
    </div>
  );
};

export default SettingsMenu;
