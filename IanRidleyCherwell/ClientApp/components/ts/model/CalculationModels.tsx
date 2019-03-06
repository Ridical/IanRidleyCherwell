export interface OneAInputModel {
    row: string,
    column: number,
    specMode: boolean
}

export interface OneAOutputModel extends TriangleModel {
    input: string,
    evenColumn: boolean
}

export interface OneBInputModel extends TriangleModel {
}

export interface OneBOutputModel {
    triangle: string
}


export interface TriangleModel {
    vertexOne: VertexModel,
    vertexTwo: VertexModel,
    vertexThree: VertexModel,
}

export interface VertexModel {
    X: number,
    Y: number,
}