import "./Welcome.scss";
import moon from "../../assets/images/moon.png";
import sun from "../../assets/images/sun.png";
import sunrise from "../../assets/images/sunrise.png";
import { currentDay } from "../../Utilities/Date";

const Welcome = () => {
  const getGreetingMessage = (hour: number): string => {
    if (hour < 12) {
      return "Good Morning";
    }

    if (hour < 18) {
      return "Good Afternoon";
    }

    return "Good Evening";
  };

  const getGreetingImage = (hour: number) => {
    if (hour < 12) {
      return sunrise;
    }

    if (hour < 18) {
      return sun;
    }

    return moon;
  };

  const currentHour = new Date().getHours();
  const greetingImage = getGreetingImage(currentHour);
  const greetingMessage = getGreetingMessage(currentHour);

  return (
    <div className="welcome">
      <h4 className="welcome__day">{currentDay}</h4>
      <img
        src={greetingImage}
        alt="Current Time Icon"
        className="welcome__image"
      />
      <h4 className="welcome__greeting">{greetingMessage}</h4>
    </div>
  );
};

export default Welcome;
