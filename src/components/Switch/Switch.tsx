import { ChangeEventHandler } from "react";
import "./Switch.scss";

type SwitchProps = {
    labelOne : string;
    labelTwo: string;
    value : string;
  // handleChange : ChangeEventHandler<HTMLInputElement>;
}

const Switch = ({labelOne, labelTwo, value, } : SwitchProps) => {
  return (
    <div className="switch">
      <label className="switch__label">
        <input type="checkbox" className="switch__checkbox" value={value} />
        <span className="switch__slider">
          <span className="switch__slider-text switch__slider-text--before">{labelOne}</span>
          <span className="switch__slider-text switch__slider-text--after">{labelTwo}</span>
        </span>
      </label>
    </div>
  );
};

export default Switch;
