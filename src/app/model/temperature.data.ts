export interface TemperatureData {
  hour: number;
  temperature: number;
}

export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    is_day: string;
    rain: string;
    cloud_cover: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    is_day: number;
    rain: number;
    cloud_cover: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
}
