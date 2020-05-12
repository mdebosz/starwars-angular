import { Injectable } from '@angular/core';
import { PersonDto, StarshipDto } from 'app/api/models';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor() {}

  compareMasses(leftPerson: PersonDto, rightPerson: PersonDto): number {
    const leftPersonMass = Number(leftPerson.mass);
    const rightPersonMass = Number(rightPerson.mass);
    if (leftPersonMass > rightPersonMass) {
      return leftPerson.id;
    } else if (leftPersonMass < rightPersonMass) {
      return rightPerson.id;
    }
    return 0;
  }

  compareCrew(leftStarship: StarshipDto, rightStarship: StarshipDto): number {
    const leftStarshipCrew = parseInt(leftStarship.crew, 10);
    const rightStarshipCrew = parseInt(rightStarship.crew, 10);
    console.log(leftStarshipCrew, rightStarshipCrew);
    if (leftStarshipCrew > rightStarshipCrew) {
      return leftStarship.id;
    } else if (leftStarshipCrew < rightStarshipCrew) {
      return rightStarship.id;
    }
    return 0;
  }

  getRandomIntegerBetween(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
}
