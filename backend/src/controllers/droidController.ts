import { Request, Response } from 'express';
import { protocolIterator } from '../utils/protocolHandlers';
import { Scan } from '../types/intefaces';
import { filterNearEnemiesAtRange } from '../utils/helpersFunctions';

async function droidController(req:Request, res:Response) {
  const { protocols } = req.body;
  const { scan } = req.body;
  const myPosition = { x: 0, y: 0 };
  let enemiesPositions:Array<Scan> | undefined = scan;
  let coordinates;
  let index = 0;
  try {
    while (index < protocols.length) {
      enemiesPositions = protocolIterator(index, protocols, enemiesPositions, myPosition);
      index += 1;
    }
    if (enemiesPositions?.length) {
      const nearEnemiesPositions = filterNearEnemiesAtRange(enemiesPositions);
      [{ coordinates }] = nearEnemiesPositions;
    }
    res.json(coordinates);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  droidController
};
