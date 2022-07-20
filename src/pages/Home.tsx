import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  FormControl,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Input,
  FormLabel,
  VStack,
  Button,
  Box,
  Textarea,
  Text,
} from '@chakra-ui/react';
import { ethers, utils, BigNumber } from 'ethers';
import { useAccount } from 'wagmi';
import { useSubmitTransaction } from '../lib/useSubmitTransactions';
import { EmbalmerFacet__factory } from '../assets/typechain-types';
import useFileEncryption from '../contexts/useFileEncryption';
import { split, combine } from 'shamirs-secret-sharing-ts';
import TestPage from '../pages/TestPage';

function Home() {
  const [sarcophagusName, setSarcophagusName] = useState('');
  const [recipientAddress, setRecipientAddress] = useState<string | null>(null);
  const [minimumNumberShards, setMinimumNumberShards] = useState(3);

  const { address: embalmerAddress } = useAccount();
  const currentTimestamp = Date.now();
  const resurrectionTime = currentTimestamp + 7 * 24 * 60 * 60 * 1000;

  const sarcoId = utils.id(embalmerAddress + currentTimestamp.toString());

  const unnamedAccounts = [
    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
    '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
  ];

  const archaeologists = [
    {
      archAddress: unnamedAccounts[1],
      bounty: BigNumber.from('100'),
      diggingFee: BigNumber.from('5'),
      storageFee: BigNumber.from('10'),
      hashedShard: utils.id(unnamedAccounts[0]),
    },
    {
      account: unnamedAccounts[2],
      bounty: BigNumber.from('120'),
      diggingFee: BigNumber.from('6'),
      storageFee: BigNumber.from('13'),
      hashedShard: utils.id(unnamedAccounts[1]),
    },
    {
      account: unnamedAccounts[3],
      bounty: BigNumber.from('130'),
      diggingFee: BigNumber.from('4'),
      storageFee: BigNumber.from('9'),
      hashedShard: utils.id(unnamedAccounts[2]),
    },
  ];

  const arweaveArchaeologist = unnamedAccounts[0];

  const canBeTransferred = false;

  const {
    file,
    setFile,
    recipientPublicKey,
    setRecipientPublicKey,
    fileEncryptedRecipient,
    setRandomPublicKey,
    doubleEncryptedFile,
  } = useFileEncryption();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    const fr = new FileReader();
    fr.readAsText(acceptedFiles[0]);
    fr.onload = () => console.log(fr.result);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const { submit } = useSubmitTransaction({
    functionName: 'initializeSarcophagus',
    contractInterface: EmbalmerFacet__factory.abi,
  });

  function secondEncryptAndGenerateShards() {
    const wallet = ethers.Wallet.createRandom();
    const signingKey = new utils.SigningKey(wallet.privateKey);
    const publicKey = signingKey.publicKey;
    console.log(publicKey);
    setRandomPublicKey(publicKey);

    const secret = Buffer.from(wallet.privateKey);
    const shares = split(secret, { shares: archaeologists.length, threshold: minimumNumberShards });
    const newKey = combine(shares);

    console.log(
      'da shat',
      newKey.toString(),
      wallet.privateKey,
      newKey.toString() === wallet.privateKey
    );
  }

  function initializeSarcophagus() {
    const args = [
      sarcoId,
      sarcophagusName,
      archaeologists,
      arweaveArchaeologist,
      recipientAddress,
      resurrectionTime,
      canBeTransferred,
      minimumNumberShards,
    ];

    console.log(args);
    submit({
      args: args,
      toastText: 'Initialize Sarcophagus',
    });
  }
  return (
    <FormControl>
      <Tabs>
        <TabList>
          <Tab>Page 1</Tab>
          <Tab>Page 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack align="left">
              <FormLabel>
                Sarcophagus Name
                <Input
                  id="sarcophagusName"
                  value={sarcophagusName}
                  onChange={e => {
                    setSarcophagusName(e.target.value);
                  }}
                />
              </FormLabel>
              <FormLabel>
                Recipient
                <Input
                  id="recipientAddress"
                  value={recipientAddress || ''}
                  onChange={e => {
                    setRecipientAddress(e.target.value);
                  }}
                />
                <Input
                  id="recipientPublicKey"
                  value={recipientPublicKey || ''}
                  onChange={e => {
                    setRecipientPublicKey(e.target.value);
                  }}
                />
              </FormLabel>

              <Button
                onClick={() => {
                  setRecipientAddress('0x3810fc3D479e9cCb1B81C647a552869996f20D31');
                  setRecipientPublicKey(
                    '0x04e30cd7fb3e2e1b2c7b2c54654a95d18e1c063bc7925bb85359f82f05b7a0232211687caa0e0817be0c30745e926badde34d42e9d0cb700170f09a7d8e52193ce'
                  );
                }}
              >
                Default Recipient
              </Button>
              <Box
                border="2px"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag and drop some files here, or click to select files</p>
                )}
                {file?.name}
              </Box>
              <Textarea value={fileEncryptedRecipient?.toString()} />
              <FormLabel>
                Minimum Number of Shards (m)
                <Input
                  id="minimumNumberShards"
                  value={minimumNumberShards}
                  onChange={e => {
                    setMinimumNumberShards(Number(e.target.value));
                  }}
                />
              </FormLabel>
              <Text>Number of Archeologist (n): {archaeologists.length}</Text>
              <Button
                onClick={() => {
                  secondEncryptAndGenerateShards();
                }}
              >
                Generate Shards
              </Button>
              <FormLabel>
                Second Encrypted File
                <Textarea value={doubleEncryptedFile?.toString()} />
              </FormLabel>
              <Box>sarcoId: {sarcoId}</Box>
              <Box>
                Resurection TimeStamp: {resurrectionTime} {new Date(resurrectionTime).toString()}
              </Box>
            </VStack>

            <Button onClick={() => initializeSarcophagus()}>Submit</Button>
          </TabPanel>
          <TabPanel>
            <TestPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </FormControl>
  );
}

export default Home;
