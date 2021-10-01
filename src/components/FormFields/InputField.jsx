import { TextField } from '@material-ui/core';
import React from 'react';
import { useController } from 'react-hook-form';
export function InputField({ name, control, label, ...inputProps }) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      variant="outlined"
      innerRef={ref}
      error={invalid}
      helperText={error?.message}
      inputProps={inputProps}
    />
  );
}
