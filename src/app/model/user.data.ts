export interface User {
  id: number;
  name: string;
  energyUsage: number;
  lastUpdated: Date;
}

export interface House {
  houseName: string;
  isOccupied: boolean;
  lastUsed: Date;
  isAirFilterOn: boolean;
}
