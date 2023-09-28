// ({ field }) => <TextField {...field} />
import { TextField as Field } from '@mui/material';

import { FC } from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

interface TextFieldProps {
  field: ControllerRenderProps<FieldValues>;
}

const TextField: FC<TextFieldProps> = ({ field }) => (
  <Field {...field} />
);

export default TextField;
