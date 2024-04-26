//
import React, { ReactNode } from 'react';

export interface RedButtonProps {
  children: string;
};

export const RedButton = (props: RedButtonProps) => {
  return (
    <button 
      style={{backgroundColor: "red", color: "white"}}
      onClick={() => console.log("***** RedButton clicked again!")}
    >
      {props.children}
    </button>
  )
}