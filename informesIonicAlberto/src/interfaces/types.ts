// src/services/alumnosService.ts
export interface Alumno {
  id: number;
  nombre: string;
  sexo: Sexo;
  email: string;
  repetidor: boolean;
  activo: boolean;
}

export enum Sexo {
  F = "F",
  M = "M"
}
