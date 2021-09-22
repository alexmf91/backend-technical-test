export interface Coordinates {
    x: number,
    y: number,
}

export interface Enemies {
    type: string,
    number: number
}
export interface Scan {
    coordinates: Coordinates,
    allies: string,
    enemies: Enemies,
    distance?: number
}

export interface AttackRequest {
    protocols: Array <string>,
    scan: Array<Scan> | undefined
}
