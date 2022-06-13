import GetLocation, { Location } from "react-native-get-location";
import { Location as LocationItem } from "../types/context";

const LIMIT = 30;

export const getLocation = async (): Promise<Location | null> => {
  try {
    const data = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000
    });
    return data;
  } catch(err) {
    return null;
  }
}

export const getNewLocationHistory = (
  currentLocation: LocationItem,
  locationHistory: LocationItem[]
): LocationItem[] => {
  console.log("current", currentLocation)
  const newHistory = currentLocation?.id? [currentLocation, ...locationHistory]: [...locationHistory];
  if(locationHistory.length >= LIMIT){
    newHistory.pop();
  }
  return newHistory;
}