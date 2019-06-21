import React from "react";
import "./SearchForm.css";
import { Formik, Field } from "formik";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const SearchForm = props => {
  const onSubmit = async (sol, camera) => {
    console.log("On submit is called", camera.toLowerCase());
    props.history.push(`/photos/${sol}/${camera.toLowerCase()}`);
  };
  return (
    <div className="SearchForm">
      <Formik
        initialValues={{ sol: "", camera: "" }}
        validate={values => {
          const errors = {};
          if (!values.sol) {
            errors.sol = "Required";
          }
          if (!values.camera) {
            errors.camera = "Required";
          }
          return errors;
        }}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await onSubmit(values.sol, values.camera);
          } catch (e) {
            console.log("ERROR", e.message);
          }
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting
        }) => (
          <div className="content-wrapper">
            <div className="upper-area">
              <Field
                type="text"
                name="sol"
                label="Sol"
                value={values.sol}
                onChangeText={text => setFieldValue("sol", text)}
                placeholder="Sol"
                component={Input}
              />
              <Field
                type="text"
                name="camera"
                label="Camera"
                value={values.camera}
                onChangeText={text => setFieldValue("camera", text)}
                placeholder="FHAZ,RHAZ,MAST,MAHLI"
                component={Input}
              />
            </div>
            <div className="lower-area">
              <Button onPress={() => handleSubmit()} name="Find photos" />
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
