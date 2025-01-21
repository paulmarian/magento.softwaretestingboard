import {faker, fakerEN_US} from '@faker-js/faker';


export function getRandomFirstName() {
    return faker.person.firstName()
}

export function getRandomLastName() {
    return faker.person.lastName()
}

export function getRandomAddress() {
    return fakerEN_US.location.street() + ', ' + fakerEN_US.location.buildingNumber()
}

export function getRandomCity() {
    return fakerEN_US.location.city()
}

export function getRandomZipCode() {
    return fakerEN_US.location.zipCode()
}

export function getRandomPhoneNumber() {
    return fakerEN_US.phone.number()
}

export const getRandomNumber = async max => {
    return Math.floor(Math.random() * max);
};
