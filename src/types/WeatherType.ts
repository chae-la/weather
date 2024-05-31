export type WeatherData = {
  current: {
    temp_c: number;
    temp_f: number;
    last_updated: string;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph: number;
    wind_kph: number;
    feelslike_c: number;
    feelslike_f: number;
    precip_mm: number;
    precip_in: number;
    uv: number;
  };
};
