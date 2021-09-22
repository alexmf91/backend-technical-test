import { Coordinates, Scan } from 'types/intefaces';
import protocolTypes from '../utils/protocolTypes';
import { calculateDistance } from '../utils/helpersFunctions';

export function sortedEnemiesByDistance(myPosition:Coordinates, scan: Array<Scan> | undefined) {
  const radarPositions = scan
    ?.map((position) => ({ ...position, distance: calculateDistance(myPosition, position) }))
    .sort((a, b) => a.distance - b.distance);

  return radarPositions;
}
export function getAlliesPositions(scan: Array<Scan> | undefined) {
  const radarPositions = scan
    ?.filter((position) => position.allies);

  return radarPositions;
}
export function getEnemiesPositionsWithoutAllies(scan: Array<Scan> | undefined) {
  const radarPositions = scan
    ?.filter((position) => !position.allies);

  return radarPositions;
}
export function prioritizeMechTarget(scan: Array<Scan> | undefined) {
  let radarPositions = scan;
  if (scan?.some(({ enemies }:any) => enemies.type === 'mech')) {
    radarPositions = scan.filter(({ enemies }) => enemies.type === 'mech');
  }

  return radarPositions;
}
export function avoidMechTarget(scan: Array<Scan> | undefined) {
  const radarPositions = scan?.filter(({ enemies }) => enemies.type !== 'mech');

  return radarPositions;
}

export function protocolIterator(
  index:number, protocols:Array<string>, scan:Array<Scan> | undefined, myPosition:Coordinates
) {
  let lastingPositions;
  switch (protocols[index]) {
    case protocolTypes.closest_enemies:
      lastingPositions = sortedEnemiesByDistance(myPosition, scan);
      break;
    case protocolTypes.furthest_enemies:
      lastingPositions = sortedEnemiesByDistance(myPosition, scan)?.reverse();
      break;
    case protocolTypes.assist_allies:
      lastingPositions = getAlliesPositions(scan);
      break;
    case protocolTypes.avoid_crossfire:
      lastingPositions = getEnemiesPositionsWithoutAllies(scan);
      break;
    case protocolTypes.prioritize_mech:
      lastingPositions = prioritizeMechTarget(scan);
      break;
    case protocolTypes.avoid_mech:
      lastingPositions = avoidMechTarget(scan);
      break;
    default:

      break;
  }
  return lastingPositions;
}
