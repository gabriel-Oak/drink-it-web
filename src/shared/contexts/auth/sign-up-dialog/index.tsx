import { Button, Dialog, DialogActions, DialogTitle, LinearProgress } from '@mui/material';
import { FC } from 'react';
import { useAuth } from '..';
import { useForm } from 'react-hook-form';
import { CreateUser } from '../types';
import FormInputText from '../../../components/form-text-input';
import { Form, StyledDialogContent } from './styles';
import validateEmail from '../../../utils/validations/validate-email';
import validatePassword from '../../../utils/validations/validate-password';


const SingUpDialog: FC = () => {
  const { singUpDialog, setSingInDialog, setSingUpDialog, signUp, user } = useAuth();
  const { handleSubmit, control, reset, watch } = useForm<CreateUser>();

  const onSingIn = (values: CreateUser & { 'confirm-password'?: string }) => {
    delete values['confirm-password']
    signUp(values);
  }

  const handleSignIn = () => {
    setSingUpDialog(false);
    setSingInDialog(true);
  }

  return (
    <Dialog
      open={singUpDialog}
      onClose={() => setSingUpDialog(false)}
      maxWidth="xs"
      fullWidth
    >
      {user.loading && <LinearProgress color="secondary" />}

      <Form onSubmit={handleSubmit(onSingIn)}>
        <DialogTitle>Nice to meet ya!</DialogTitle>

        <StyledDialogContent>
          <FormInputText
            name="name"
            label="Name"
            control={control}
            disabled={user.loading}
            rules={{
              required: {
                message: 'Please tell me your name',
                value: true
              },
            }}
          />

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
            name="username"
            label="User Name"
            control={control}
            disabled={user.loading}
            rules={{
              required: {
                message: 'Please inform a user name',
                value: true
              },
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

          <FormInputText
            name="confirm-password"
            label="Confirm Password"
            control={control}
            type="password"
            autoComplete="off"
            disabled={user.loading}
            rules={{
              required: {
                message: 'Please confirm your password',
                value: true
              },
              validate: validatePassword(watch().password),
            }}
          />
        </StyledDialogContent>

        <DialogActions>
          <Button
            color="secondary"
            type="button"
            onClick={handleSignIn}
            disabled={user.loading}
          >
            I Have One
          </Button>

          <Button
            color="primary"
            type="submit"
            disabled={user.loading}
          >
            Register
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
}


export default SingUpDialog;