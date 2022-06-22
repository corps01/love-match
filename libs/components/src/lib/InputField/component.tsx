import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from 'react';
import './component.scss';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  containerProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  containerLabelProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  labelProps?: DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  containerErrorProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  errorProps?: DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  label?: string;
  error?: boolean;
  errorText?: string;
}

export const InputField: FC<InputProps> = ({
  containerProps,
  containerLabelProps,
  labelProps,
  label,
  containerErrorProps,
  errorProps,
  error = false,
  errorText,
  ...inputProps
}) => {
  return (
    <div
      {...containerProps}
      className={`input-container ${
        containerProps?.className ? containerProps?.className : ''
      }`}
    >
      {label ? (
        <div
          {...containerLabelProps}
          className={`label-field-container ${
            containerLabelProps?.className ? containerLabelProps?.className : ''
          }`}
        >
          <label
            {...labelProps}
            className={`label-field ${error ? 'label-field-error' : ''} ${
              labelProps?.className ? labelProps?.className : ''
            }`}
          >
            {label}
          </label>
        </div>
      ) : null}
      <input
        {...inputProps}
        className={`input-field ${error ? 'input-error' : ''} ${
          inputProps?.className ? inputProps?.className : ''
        }`}
      />
      <div
        {...containerErrorProps}
        className={`label-error-container ${
          containerErrorProps?.className ? containerErrorProps?.className : ''
        }`}
      >
        {error ? (
          <label
            {...errorProps}
            className={`label-error ${
              errorProps?.className ? errorProps?.className : ''
            }`}
          >
            {errorText}
          </label>
        ) : null}
      </div>
    </div>
  );
};

export default InputField;
