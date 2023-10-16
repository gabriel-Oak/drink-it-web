import { UseFormReturn } from 'react-hook-form';
import { User } from '../../../shared/contexts/auth/types';

export interface PassForm {
  oldPassword: string;
  newPassword: string;
}

export interface ProfileContextProps {
  loading: boolean;
  profileForm: UseFormReturn<User>;
  passForm: UseFormReturn<PassForm>;
}