import { Link } from 'react-router-dom';
import { HStack, Grid, GridItem } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header() {
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem alignSelf="left">Sarcophugus V2</GridItem>
        <GridItem alignSelf="center">
          <HStack justifyContent="center">
            <Link to="/">Home</Link>
            <Link to="/testpage/">Test Page</Link>
          </HStack>
        </GridItem>
        <GridItem alignSelf="center">
          <ConnectButton />
        </GridItem>
      </Grid>
    </div>
  );
}

export default Header;
