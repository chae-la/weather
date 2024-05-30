import "./Button.scss"

type ButtonProps ={
    label: string;
}

const Button = ({label}: ButtonProps) => {
    return(
            <a className="button">{label}</a>
    )

}

export default Button;