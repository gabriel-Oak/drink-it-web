import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material';
import { FC } from 'react';
import { BreadLink, Root } from './styles';

interface BreadcrumbsProps {
  paths: Array<{
    title: string;
    href?: string;
  }>;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ paths }) => (
  <Root>
    <MUIBreadcrumbs aria-label="breadcrumb">
      {paths.map((path) => path.href ? (
        <BreadLink
          key={path.title}
          href={path.href}
        >
          {path.title}
        </BreadLink>
      ) : (
        <Typography key={path.title} color="text.primary">
          {path.title}
        </Typography>
      ))}
    </MUIBreadcrumbs>
  </Root>
);

export default Breadcrumbs;
