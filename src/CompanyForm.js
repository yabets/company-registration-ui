import { Formik, Form } from "formik";
import Input from "./Input";

function CompanyForm() {
  const initialValues = {
    name: "",
    size: "",
  };
  const handleCreateCompany = (values) => {
    console.log(value);
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={LoginSchema}
      onSubmit={handleCreateCompany}
    >
      {(formik) => {
        const { handleSubmit, errors, touched, isValid, dirty } = formik;
        return (
          <>
            <div className="Company__form">
              <h1>Create Company</h1>
              <Form>
                <div className="Company__formgroup">
                  <Input
                    label="Name"
                    name="name"
                    error={errors.name && touched.name}
                  />
                </div>
                <div className="Company__formgroup"></div>
                <Input
                  label="size"
                  name="size"
                  error={errors.size && touched.size}
                />
                <div>
                  <button
                    className="Login__submit"
                    disabled={!(dirty && isValid)}
                    onClick={handleSubmit}
                  >
                    Add Company
                  </button>
                </div>
              </Form>
            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default App;
