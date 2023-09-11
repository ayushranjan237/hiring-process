// components/Form/RequisitionDetailsForm.js

import React from 'react';
import { useFormik } from 'formik';
import { Box, Input } from '@chakra-ui/react';

function RequisitionDetailsForm({ onNext }) {
  const formik = useFormik({
    initialValues: {
      jobTitle: '',
      department: '',
    },
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
      onNext();
    },
    validate: (values) => {
      const errors = {};
      if (!values.jobTitle) {
        errors.jobTitle = 'Required';
      }
      if (!values.department) {
        errors.department = 'Required';
      }
      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box p={4} bg="primary.50" mb={4}>
        <Input
          name="jobTitle"
          placeholder="Job Title"
          onChange={formik.handleChange}
          value={formik.values.jobTitle}
        />
        {formik.errors.jobTitle && formik.touched.jobTitle && (
          <div>{formik.errors.jobTitle}</div>
        )}
      </Box>
      <Box p={4} bg="primary.50" mb={4}>
        <Input
          name="department"
          placeholder="Department"
          onChange={formik.handleChange}
          value={formik.values.department}
        />
        {formik.errors.department && formik.touched.department && (
          <div>{formik.errors.department}</div>
        )}
      </Box>
      
    </form>
  );
}

export default RequisitionDetailsForm;
