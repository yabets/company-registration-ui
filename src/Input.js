import { Field, ErrorMessage } from "formik";

export default function Input({ label = "", type = "text", name, error }) {
  return (
    <>
      <label>{label}</label>
      <Field
        type={type}
        name={name}
        id={name}
        className={error ? "input-error" : null}
      />
      <ErrorMessage name={name} component="span" className="error" />
    </>
  );
}
