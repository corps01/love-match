import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import './component.scss';

/* eslint-disable-next-line */
export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button: FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className={`button-field ${
        buttonProps?.className ? buttonProps?.className : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
