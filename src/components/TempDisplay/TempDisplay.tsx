import "./TempDisplay.scss"

type TempDisplayProps = {
    unit: string;
    temp: number
}

const TempDisplay = ({unit, temp} : TempDisplayProps) => {
    return(
        <div className="temp-display">
            <h1 className="temp-display__container">{temp}{unit}</h1>
        </div>
    )
}

export default TempDisplay;