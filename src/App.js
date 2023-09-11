import React, { useState } from 'react';

import RequisitionDetailsForm from './components/Form/RequisitionDetailsForm';
import JobDetailsForm from './components/Form/JobDetailsForm';
import InterviewSettingsForm from './components/Form/InterviewSettingsForm';
import { Box, Heading, Button } from '@chakra-ui/react';

function App() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };



  return (
    <Box p={4} bg="primary.50">
      <Heading as="h1" mb={4}>
        Hiring Process
      </Heading>
      {step === 1 && <RequisitionDetailsForm onNext={handleNextStep} />}
      {step === 2 && <JobDetailsForm onNext={handleNextStep} onPrevious={handlePreviousStep} />}
      {step === 3 && <InterviewSettingsForm onPrevious={handlePreviousStep} />}
      {step > 1 && (
        <Button colorScheme="blue" size="lg" onClick={handlePreviousStep}>Previous</Button>
      )}
      {step < 3 && (
        <Button colorScheme="blue" size="lg" onClick={handleNextStep}>Next</Button>
      )}
    </Box>
  );
}

export default App;
