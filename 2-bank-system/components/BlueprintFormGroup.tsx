import { FormGroup, IconName, Intent } from '@blueprintjs/core';
import { FormikProps } from 'formik';
import React from 'react';
import BlueprintField from './BlueprintField';

interface BlueprintFormGroupProps<T> {
  props: FormikProps<T>;
  property: keyof T;
  placeholder?: string;
  label?: string;
  labelInfo?: string;
  disabled?: boolean;
  inline?: boolean;
  helperText?: string;
  type?: string;
  textarea?: boolean;
  numeric?: boolean;
  leftIcon?: IconName;
  intent?: Intent;
}

function BlueprintFormGroup<T>({
  property,
  label,
  labelInfo,
  placeholder,
  disabled,
  inline,
  helperText,
  type,
  textarea,
  numeric,
  leftIcon,
  intent,
  props: { touched, errors, handleBlur, handleChange },
}: BlueprintFormGroupProps<T>) {
  return (
    <FormGroup
      intent="danger"
      label={label}
      labelInfo={labelInfo}
      disabled={disabled}
      inline={inline}
      labelFor={property.toString()}
      helperText={
        helperText ??
        (touched[property] ? (errors[property] ? errors[property] : undefined) : undefined)
      }
    >
      <BlueprintField
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        name={property.toString()}
        placeholder={placeholder}
        textarea={textarea}
        numeric={numeric}
        leftIcon={leftIcon}
        intent={intent}
      />
    </FormGroup>
  );
}

export default BlueprintFormGroup;
