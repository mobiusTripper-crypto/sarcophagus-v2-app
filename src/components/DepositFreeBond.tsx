import { Box, Button, FormControl, FormLabel, FormHelperText, Input } from '@chakra-ui/react';

import useDepositFreeBond from './useDepositFreeBond';

function DepositFreeBond() {
  const { depositAmount, setDepositAmount, depositFreeBond } = useDepositFreeBond();

  return (
    <Box>
      <FormControl>
        <FormLabel>Free Bond Amount</FormLabel>
        <Input
          id="amount"
          value={depositAmount}
          onChange={e => {
            setDepositAmount(e.target.value);
          }}
        />
        <FormHelperText>Enter amount for free bond deposit</FormHelperText>
        <Button onClick={() => depositFreeBond()}>Deposit</Button>
      </FormControl>
    </Box>
  );
}

export default DepositFreeBond;
