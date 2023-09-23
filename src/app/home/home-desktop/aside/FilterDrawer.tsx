import { SwipeableDrawer } from '@mui/material';
import { FC, Fragment } from 'react';
import Filter from './Filter';
import { useHome } from '../../context';
import { FloatingButton } from './styles';

const FilterDrawer: FC = () => {
  const { drawer, setDrawer } = useHome();

  return (
    <Fragment key="right">
      <FloatingButton variant='contained' onClick={() => setDrawer(true)}>
        Options
      </FloatingButton>

      <SwipeableDrawer
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
      >
        <Filter />
      </SwipeableDrawer>
    </Fragment>
  );
}

export default FilterDrawer;