import axios from "axios";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

// Validation schema
const AddRequirementSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  
  description: Yup.string()
    .min(10, "Description should be at least 10 characters")
    .max(250, "Too Long!")
    .required("Required"),
  
  country: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  
  image: Yup.string()
    .url("Invalid URL")
    .required("Required")
    .min(5, "Too Short!")
    .max(250, "Too Long!"),
});

function AddRequirement() {
  const navigate = useNavigate();

  const formStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  };

  const fieldStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: "-8px",
    marginBottom: "10px",
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Add New Requirement</h1>
      <Formik
        initialValues={{
          title: "",
          description: "",
          country: "",
          image: "",
        }}
        validationSchema={AddRequirementSchema}
        onSubmit={(values) => {
          axios
            .post("http://localhost:3001/requirements", values)
            .then(() => navigate("/"));
        }}
      >
        {({ errors, touched }) => (
          <Form style={formStyle}>
            <label htmlFor="title">Title</label>
            <Field name="title" placeholder="Enter title" style={fieldStyle} />
            {errors.title && touched.title ? <div style={errorStyle}>{errors.title}</div> : null}

            <label htmlFor="description">Description</label>
            <Field
              name="description"
              as="textarea"
              placeholder="Enter description"
              style={{ ...fieldStyle, height: "100px" }}
            />
            {errors.description && touched.description ? (
              <div style={errorStyle}>{errors.description}</div>
            ) : null}

            <label htmlFor="country">Country</label>
            <Field name="country" placeholder="Enter country" style={fieldStyle} />
            {errors.country && touched.country ? (
              <div style={errorStyle}>{errors.country}</div>
            ) : null}

            <label htmlFor="image">Image URL</label>
            <Field name="image" placeholder="Enter image URL" style={fieldStyle} />
            {errors.image && touched.image ? <div style={errorStyle}>{errors.image}</div> : null}

            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddRequirement;
