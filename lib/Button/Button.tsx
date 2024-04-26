//
import React, { ReactNode } from 'react';

export interface ButtonProps {
  children: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <button 
      style={{backgroundColor: "green", color: "white"}}
      onClick={() => console.log("***** Button clicked again!")}
      >
        {props.children}
      </button>
  )
}