import "./Switch.scss";

type SwitchProps = {
    labelOne : string;
    labelTwo: string;

}

const Switch = ({labelOne, labelTwo} : SwitchProps) => {
  return (
    <div className="switch">
      <label className="switch__label">
        <input type="checkbox" className="switch__checkbox" />
        <span className="switch__slider">
          <span className="switch__slider-text switch__slider-text--before">{labelOne}</span>
          <span className="switch__slider-text switch__slider-text--after">{labelTwo}</span>
        </span>
      </label>
    </div>
  );
};

export default Switch;
