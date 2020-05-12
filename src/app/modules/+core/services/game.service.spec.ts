import { TestBed } from '@angular/core/testing';
import { PersonDto, StarshipDto } from 'app/api/models';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;
  const leftPersonId = 1;
  const rightPersonId = 2;
  const wrongPersonId = 3;
  const lesserMass = '20';
  const biggerMass = '40.35';
  const wrongMass = 'unknown';

  const leftStarshipId = 1;
  const rightStarshipId = 2;
  const wrongStarshipId = 3;
  const lesserCrew = '50';
  const biggerCrew = '100';
  const wrongCrew = 'unknown';

  const leftPerson: PersonDto = {
    id: leftPersonId,
    mass: lesserMass
  };
  const rightPerson: PersonDto = {
    id: rightPersonId,
    mass: biggerMass
  };
  const wrongPerson: PersonDto = {
    id: wrongPersonId,
    mass: wrongMass
  };
  const leftStarship: StarshipDto = {
    id: leftStarshipId,
    crew: lesserCrew
  };
  const rightStarship: StarshipDto = {
    id: rightStarshipId,
    crew: biggerCrew
  };
  const wrongStarship: StarshipDto = {
    id: wrongStarshipId,
    crew: wrongCrew
  };

  const count = 6;
  const min = 1;
  const max = 7;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should successfully compare masses', () =>
    expect(service.compareMasses(leftPerson, rightPerson)).toEqual(
      rightPersonId
    ));

  it('should return 0 on unknown mass', () =>
    expect(service.compareMasses(leftPerson, wrongPerson)).toEqual(0));

  it('should successfuly compare crew', () =>
    expect(service.compareCrew(leftStarship, rightStarship)).toEqual(
      rightStarshipId
    ));

  it('should return 0 on unknown crew', () =>
    expect(service.compareCrew(leftStarship, wrongStarship)).toEqual(0));

  it('should get random number in expected range', () => {
    expect(service.getRandomIntegerBetween(min, max)).toBeGreaterThanOrEqual(
      min
    );
    expect(service.getRandomIntegerBetween(min, max)).toBeLessThanOrEqual(max);
  });
});
