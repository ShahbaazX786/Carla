import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:'button' | 'submit';
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer:(Manufacturer:string)=> void;
}

export interface CarProps {
  city_mpg: number; //city mile per gallon
  class:string;
  combination_mpg:number;
  cylinders:number;
  displacement:number;
  drive:string;
  fuel_type:string;
  highway_mpg:number;
  make:string;
  model:string;
  transmission:string;
  year:number;
}