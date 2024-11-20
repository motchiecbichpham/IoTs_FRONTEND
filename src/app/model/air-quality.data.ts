export interface AirQualityData {
  hour: number;
  value: number;
}

export interface EnvironmentalData {
  _id: string;
  temperature: number;
  eco2: number;
  hour: number;
  date: string;
}
