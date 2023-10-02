import { FC } from 'react';
import { Left, Right, Root } from './styles';
import { Typography } from '@mui/material';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: FC = () => (
  <Root>
    <Left>
      <Typography variant="body1" fontWeight={500}>
        Drink.it
      </Typography>

      <Typography variant="body1">
        By Gabriel Oak.
      </Typography>
    </Left>

    <Right>
      <Link target="_blank" href="https://github.com/gabriel-Oak">
        <GitHubIcon fontSize="medium" color="primary" />
      </Link>

      <Link target="_blank" href="https://www.instagram.com/gabriel_oakcoast">
        <InstagramIcon fontSize="medium" color="primary" />
      </Link>

      <Link target="_blank" href="https://www.linkedin.com/in/gabriel-carvalho-costa">
        <LinkedInIcon fontSize="medium" color="primary" />
      </Link>
    </Right>
  </Root>
);

export default Footer;