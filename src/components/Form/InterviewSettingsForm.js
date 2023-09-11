import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button } from '@chakra-ui/react';

function InterviewSettingsForm({ onPrevious }) {
  const [submittedData, setSubmittedData] = useState(null);
  const formik = useFormik({
    initialValues: {
      interviewDate: '',
      interviewLocation: '',
    },
    onSubmit: (values) => {
      // Handle form submission here
      setSubmittedData(values);
    },
    validate: (values) => {
      const errors = {};
      if (!values.interviewDate) {
        errors.interviewDate = 'Required';
      }
      if (!values.interviewLocation) {
        errors.interviewLocation = 'Required';
      }
      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="interviewDate">Interview Date</label>
        <input
          type="date"
          name="interviewDate"
          onChange={formik.handleChange}
          value={formik.values.interviewDate}
        />
        {formik.errors.interviewDate && formik.touched.interviewDate && (
          <div>{formik.errors.interviewDate}</div>
        )}
      </div>
      <div>
        <label htmlFor="interviewLocation">Interview Location</label>
        <input
          type="text"
          name="interviewLocation"
          onChange={formik.handleChange}
          value={formik.values.interviewLocation}
        />
        {formik.errors.interviewLocation && formik.touched.interviewLocation && (
          <div>{formik.errors.interviewLocation}</div>
        )}
      </div>
    
        <Button colorScheme="blue" size="lg" type="submit">Submit</Button>

        {submittedData && (
        <div>
          <h2>Submitted Details:</h2>
          <p>Interview Date: {submittedData.interviewDate}</p>
          <p>Interview Location: {submittedData.interviewLocation}</p>
        </div>
      )} 
    </form>
    
  );
}

export default InterviewSettingsForm;
