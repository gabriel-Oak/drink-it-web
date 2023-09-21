import { AppBar, Toolbar, Typography } from '@mui/material';

const Home = () => {
  return (
    <main>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Drink.it
          </Typography>
        </Toolbar>
      </AppBar>
    </main>
  )
}

export default Home;