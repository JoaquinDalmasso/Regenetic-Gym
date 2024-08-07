export enum SelectedPage{
    Inicio="inicio",
    Profesionales="profesionales",
    Beneficios="beneficios",
    Contacto="contacto"
}

export interface BenefitType{
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
