import { ContractInterface } from 'ethers';
import { useContractWrite } from 'wagmi';
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import { useToast, ToastId } from '@chakra-ui/react';
import { useRef } from 'react';

import { UseContractWriteArgs } from 'wagmi/dist/declarations/src/hooks/contracts/useContractWrite';

// export function useSubmitTransaction(functionName: string, contractInterface: ContractInterface) {
//   const config = {
//     addressOrName: '0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0',
//     functionName: functionName,
//     contractInterface: contractInterface,
//   };
export function useSubmitTransaction(contractConfig: Omit<UseContractWriteArgs, 'addressOrName'>) {
  const writeConfig = {
    addressOrName: '0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0',
    ...contractConfig,
  };

  const pendingToastId = useRef<ToastId | undefined>();
  const toastText = useRef<string>();
  const toast = useToast();

  const addRecentTransaction = useAddRecentTransaction();

  const contractWrite = useContractWrite({
    onSuccess(data) {
      pendingToastId.current = toast({
        title: 'Pending transaction',
        description: toastText.current,
        status: 'success',
        duration: null,
        isClosable: true,
        position: 'bottom-right',
      });
      addRecentTransaction({ hash: data.hash, description: 'deposit free bonds' });
    },
    onSettled(data, error) {
      if (pendingToastId.current) toast.close(pendingToastId.current);
      if (!error) {
        toast({
          title: 'Completed transaction',
          description: toastText.current,
          status: 'success',
          isClosable: true,
          position: 'bottom-right',
        });
      }
    },
    onError(error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        isClosable: true,
        position: 'bottom-right',
      });
    },
    ...writeConfig,
  });

  function submit(config: { args?: any; toastText: string }) {
    toastText.current = config.toastText;
    contractWrite.write({ args: config.args });
  }

  return {
    submit,
  };
}
