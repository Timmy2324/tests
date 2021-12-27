import {CityType} from "../02/02_02";

export function demolishHouseOnTheStreet(city: CityType, addressTitle: string) {
    city.houses = city.houses.filter((house) => house.address.street.title !== addressTitle);
}