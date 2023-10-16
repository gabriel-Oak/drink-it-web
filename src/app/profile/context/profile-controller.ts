import { useForm } from 'react-hook-form';
import { useAuth } from '../../../shared/contexts/auth';
import { PassForm, ProfileContextProps } from './types';
import { User } from '../../../shared/contexts/auth/types';

const useProfileController = (): ProfileContextProps => {
  const { user } = useAuth();
  const profileForm = useForm<User>({
    defaultValues: user.data
  });
  const passForm = useForm<PassForm>();

  const loading = user.loading;

  return {
    loading,
    profileForm,
    passForm
  };
}

export default useProfileController;