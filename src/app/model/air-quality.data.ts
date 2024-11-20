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

export interface LightData {
  timestamp: Date;
  energyProduce: number;
  energySave: number;
}

export interface Status {
  isActive: boolean;
  label: string;
  description: string;
}
