import "./Button.scss"

type ButtonProps ={
    label: string;
    onClick : () => void;
}

const Button = ({label, onClick}: ButtonProps) => {
    return(
            <a className="button" onClick={onClick}>{label} </a>
    )

}

export default Button;