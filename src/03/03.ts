import {StudentType} from "../02/02";
import {GovernmentBuildings, HousesType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export function addMoneyToBudget(building: GovernmentBuildings, budget: number) {
    building.budget += budget;
}

export function repairHouse(house: HousesType) {
    house.repaired = true;
}

export function toFireStaff(building: GovernmentBuildings, staffCount: number) {
    building.staffCount -= staffCount;
}

export function toHireStaff(building: GovernmentBuildings, staffCount: number) {
    building.staffCount += staffCount;
}