import { Control, Controller, FieldValues, RegisterOptions } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FC, useState } from 'react';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const FormInputText: FC<{
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
  disabled?: boolean;
  rules?: Omit<RegisterOptions<any, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">;
  autoComplete?: string
}> = ({
  name,
  control,
  label,
  type,
  disabled,
  rules,
  autoComplete
}) => {
    const [showPass, setShowPass] = useState(false);

    return (
      <Controller
        name={name}
        control={control}
        disabled={disabled}
        rules={rules}
        render={({
          field,
          fieldState: { error },
        }) => (
          <FormControl
            fullWidth
            variant="outlined"
            disabled={disabled}
            required={!!rules?.required}
            error={!!error}
          >
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <OutlinedInput
              id={name}
              disabled={disabled}
              type={type !== 'password'
                ? (type || 'text')
                : (showPass ? 'text' : 'password')}
              {...field}
              value={field.value || ''}
              fullWidth
              label={label}
              autoComplete={autoComplete}
              endAdornment={type && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPass(!showPass)}
                    edge="end"
                  >
                    {showPass ? (
                      <VisibilityOff color={error && 'error'} />
                    ) : (
                      <Visibility color={error && 'error'} />
                    )}
                  </IconButton>
                </InputAdornment>
              )}
            />
            {error?.message && (
              <FormHelperText error>
                {error.message}
              </FormHelperText>
            )}
          </FormControl>
        )}
      />
    );
  }
export default FormInputText