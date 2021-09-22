import { Scan, Coordinates } from '../types/intefaces';

export function calculateDistance(myPosition:Coordinates, { coordinates }:Scan) {
  return Math.sqrt((coordinates.x - myPosition.x) ** 2
        + (coordinates.y - myPosition.y) ** 2);
}

export function filterNearEnemiesAtRange(enemies:Array<Scan>) {
  return enemies?.filter(({ distance = 0 }) => distance < 100);
}
