import { Routes, Route } from 'react-router-dom';
import TestPage from '../pages/TestPage';
import Home from '../pages/Home';
import { Box } from '@chakra-ui/react';

function Body() {
  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        ></Route>
        <Route
          path="/testpage"
          element={<TestPage />}
        ></Route>
      </Routes>
    </Box>
  );
}

export default Body;
