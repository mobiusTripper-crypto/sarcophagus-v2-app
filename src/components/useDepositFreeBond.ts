import { useState } from 'react';
import { ArchaeologistFacet__factory } from '../assets/typechain-types';
import { useSubmitTransaction } from '../lib/useSubmitTransactions';

const useDepositFreeBond = () => {
  const [depositAmount, setDepositAmount] = useState('0');

  //  const { submit } = useSubmitTransaction('depositFreeBond', ArchaeologistFacet__factory.abi);

  const { submit } = useSubmitTransaction({
    functionName: 'depositFreeBond',
    contractInterface: ArchaeologistFacet__factory.abi,
  });

  function depositFreeBond() {
    submit({ args: [depositAmount], toastText: 'Deposit Free Bond' });
  }

  return { depositAmount, setDepositAmount, depositFreeBond };
};

export default useDepositFreeBond;
