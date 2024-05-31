import "./Button.scss"

type ButtonProps ={
    label: string;
    onClick : () => void;
    variant: "primary" | "secondary";
}

const Button = ({label, onClick, variant}: ButtonProps) => {
    const buttonStyles= `button button--${variant}`

    return(
            <a className={buttonStyles} onClick={onClick}>{label} </a>
    )

}

export default Button;