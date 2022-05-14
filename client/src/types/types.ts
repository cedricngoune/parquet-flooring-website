export interface Subject {
  label: string;
  value: string;
}
export interface IFormInput {
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  subject: SubjectEnum;
  object: string;
  area: number;
  project_type: string;
  message: string;
}

export enum SubjectEnum {
  project = "projet",
  information = "Demande d'informations",
}
export type Inputs = {
  example: string;
  exampleRequired: string;
};
