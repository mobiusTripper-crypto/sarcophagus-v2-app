import { VStack } from '@chakra-ui/react';
import DepositFreeBond from '../components/DepositFreeBond';
import DisplayFreeBond from '../components/DisplayFreeBond';

function TestPage() {
  return (
    <VStack>
      <DepositFreeBond />
      <DisplayFreeBond />
    </VStack>
  );
}

export default TestPage;
