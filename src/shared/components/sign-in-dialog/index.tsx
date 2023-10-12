import { Button, Dialog, DialogActions, DialogTitle, LinearProgress } from '@mui/material';
import { FC } from 'react';
import { useAuth } from '../../contexts/auth';
import { useForm } from 'react-hook-form';
import { LogInUser } from '../../contexts/auth/types';
import FormInputText from '../form-text-input';
import { Form, StyledDialogContent } from './styles';
import validateEmail from '../../utils/validations/validate-email';


const SingInDialog: FC = () => {
  const { singInDialog, setSingInDialog, setSingUpDialog, signIn, user } = useAuth();
  const { handleSubmit, control, reset } = useForm<LogInUser>();

  const onSingIn = (values: LogInUser) => {
    signIn(values);
    reset();
  }

  const handleSignUp = () => {
    setSingInDialog(false);
    setSingUpDialog(true);
  }

  return (
    <Dialog
      open={singInDialog}
      onClose={() => setSingInDialog(false)}
      maxWidth="xs"
      fullWidth
    >
      {user.loading && <LinearProgress color="secondary" />}

      <Form onSubmit={handleSubmit(onSingIn)}>
        <DialogTitle>Welcome Back!</DialogTitle>

        <StyledDialogContent>

          <FormInputText
            name="email"
            label="Email"
            control={control}
            disabled={user.loading}
            rules={{
              required: {
                message: 'Please inform a valid email',
                value: true
              },
              validate: validateEmail,
            }}
          />

          <FormInputText
            name="password"
            label="Password"
            control={control}
            type="password"
            disabled={user.loading}
            rules={{
              required: {
                message: 'Please inform a password',
                value: true
              }
            }}
          />

        </StyledDialogContent>

        <DialogActions>
          <Button
            color="secondary"
            type="button"
            onClick={handleSignUp}
            disabled={user.loading}
          >
            Create Account
          </Button>

          <Button
            color="primary"
            type="submit"
            disabled={user.loading}
          >
            Enter
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
}


export default SingInDialog;