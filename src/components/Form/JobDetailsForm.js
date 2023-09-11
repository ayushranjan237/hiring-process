import React from 'react';
import { useFormik } from 'formik';

function JobDetailsForm({ onNext, onPrevious }) {
  const formik = useFormik({
    initialValues: {
      jobDescription: '',
      requiredSkills: '',
    },
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
      onNext();
    },
    validate: (values) => {
      const errors = {};
      if (!values.jobDescription) {
        errors.jobDescription = 'Required';
      }
      if (!values.requiredSkills) {
        errors.requiredSkills = 'Required';
      }
      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="jobDescription">Job Description</label>
        <textarea
          name="jobDescription"
          onChange={formik.handleChange}
          value={formik.values.jobDescription}
        />
        {formik.errors.jobDescription && formik.touched.jobDescription && (
          <div>{formik.errors.jobDescription}</div>
        )}
      </div>
      <div>
        <label htmlFor="requiredSkills">Required Skills</label>
        <textarea
          name="requiredSkills"
          onChange={formik.handleChange}
          value={formik.values.requiredSkills}
        />
        {formik.errors.requiredSkills && formik.touched.requiredSkills && (
          <div>{formik.errors.requiredSkills}</div>
        )}
      </div>
      
    </form>
  );
}

export default JobDetailsForm;

