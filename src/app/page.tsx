'use client';

import { withHome } from './home/context';
import HomeDesktop from './home/home-desktop';

const Home = () => {
  return (
    <HomeDesktop />
  )
}

export default withHome(Home);