import "./Button.scss";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const Button = ({ label, onClick, variant = "primary" }: ButtonProps) => {
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
