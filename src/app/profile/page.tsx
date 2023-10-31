'use client';
import { FC } from 'react';
import RootDesktop from '../../shared/components/root-desktop';
import { ProfileProvider } from './context';
import ProfileForm from './profile-form';

const ProfilePage: FC = () => {

  return (
    <RootDesktop>
      <ProfileProvider>
        <ProfileForm />
      </ProfileProvider>
    </RootDesktop>
  );
}

export default ProfilePage;