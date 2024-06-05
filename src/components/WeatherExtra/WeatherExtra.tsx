import "./WeatherExtra.scss"

type WeatherExtraProps = {
    title: string;
    data: string;
    more_info ?: string;
}

const WeatherExtra = ({title, data, more_info}: WeatherExtraProps) => {
    return(
        <div className="weather-extra">
          <h3 className="weather-extra__title">{title}</h3>
          <h2 className="weather-extra__data">{data}</h2>
          <h3 className="weather-extra__more">{more_info}</h3>
        </div>
    )
}

export default WeatherExtra;