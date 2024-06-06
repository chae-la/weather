export type Unit = "C" | "F" | "kph" | "mph" | "mm" | "in" | "km" | "miles";

export type Settings = {
  temperature: "C" | "F";
  wind: "kph" | "mph";
  precipitation: "mm" | "in";
  visibility: "km" | "miles";
};
