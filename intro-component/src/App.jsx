import React, { useState} from "react";

function App() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First Name cannot be empty";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name cannot be empty";
    }
    if (!values.email) {
      errors.email = "Looks like this is not an email";
    } else if (!regex.test(values.email)) {
      errors.email = "Looks like this is not an email";
    }
    if (!values.password) {
      errors.password = "Password cannot be empty";
    } else if (values.password.length < 4) {
      errors.password = "Password is too short";
    }
    return errors;
  };
  return (
    <main className="w-full max-w-6xl mx-auto grid min-h-screen place-items-center font-poppins">
      <div className="m-auto grid sm:grid-cols-2 grid-cols-1 sm:px-5 px-3">
        {/* text side */}
        <div className="mt-14 sm:mt-0 flex items-center justify-center">
          <div className="text-white ">
            <h1 className="lg:text-6xl sm:text-4xl text-3xl text-center sm:text-left font-bold">
              Learn to code by
              <br />
              watching others
            </h1>
            <p className="font-poppins mt-5 md:text-base text-sm mb-7 sm:mb-0 text-center sm:text-left">
              See how experienced developers solve problems in real-time.
              <br className="hidden sm:block" />
              Watching scripted tutorilas is great, but understanding how{" "}
              <br className="hidden sm:block" />
              developers think is invaluable.
            </p>
          </div>
        </div>
        {/* form side */}
        <section className="sm:ml-5 lg:ml-16 ml-0">
          {/* button */}
          <div className="bg-[#6055A5] rounded-[0.6rem] mb-6 sm:text-base text-sm">
            <p className="text-white text-center p-4 font-[700]">
              Try it free 7 days{" "}
              <span className="font-thin">
                then <br className="sm:hidden" />
                $20/mo. thereafter
              </span>
            </p>
          </div>
          {/* white form */}
          <div className="bg-white rounded-[0.6rem] md:p-8 p-5 sm:mb-0 mb-14">
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <input
                    className={`${
                      formErrors.firstName
                        ? "inputs border-2 border-[#FF7A7A]"
                        : "inputs"
                    }`}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formValues.firstName}
                    onChange={handleChange}
                  />
                </div>
                <p className="errorMsg">{formErrors.firstName}</p>

                <div>
                  <input
                    className={`${
                      formErrors.lastName
                        ? "inputs border-2 border-[#FF7A7A]"
                        : "inputs"
                    }`}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formValues.lastName}
                    onChange={handleChange}
                  />
                </div>
                <p className="errorMsg">{formErrors.lastName}</p>

                <div>
                  <input
                    className={`${
                      formErrors.email
                        ? "inputs border-2 border-[#FF7A7A]"
                        : "inputs"
                    }`}
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <p className="errorMsg">{formErrors.email}</p>
                <div className="field">
                  <input
                    className={`${
                      formErrors.password
                        ? "inputs border-2 border-[#FF7A7A]"
                        : "inputs"
                    }`}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </div>
                <p className="errorMsg mb-4">{formErrors.password}</p>
                <button
                  onClick={handleSubmit}
                  className="shadow-inner shadow-green-600 bg-[#38CC8C] active:bg-green-300 text-white font-poppins p-3 rounded-md w-full"
                >
                  CLAIM YOUR FREE TRIAL
                </button>
              </div>
            </form>
            <p className="sm:text-xs text-[0.7rem] px-2 text-center text-gray-300 font-[400] pt-3">
              By clicking the button, you are agreeing to our{" "}
              <span className="text-[#FF7A7A] font-[700] cursor-pointer">
                Terms and Services
              </span>
            </p>
          </div>
          {/* form end */}
        </section>
      </div>
    </main>
  );
}

export default App;
