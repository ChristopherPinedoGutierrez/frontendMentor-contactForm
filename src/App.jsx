import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    "1-firstName": "",
    "2-lastName": "",
    "3-email": "",
    "4-queryType": "",
    "5-message": "",
    "6-consent": false,
  });

  const [errors, setErrors] = useState({
    "1-firstName": "",
    "2-lastName": "",
    "3-email": "",
    "4-queryType": "",
    "5-message": "",
    "6-consent": "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  function validateForm() {
    const newErrors = {};

    if (!formData["1-firstName"]) {
      newErrors["1-firstName"] = "This field is required";
    }

    if (!formData["2-lastName"]) {
      newErrors["2-lastName"] = "This field is required";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData["3-email"]) {
      newErrors["3-email"] = "The email address is requied";
    } else if (!emailRegex.test(formData["3-email"])) {
      newErrors["3-email"] = "Please enter a valid email address";
    }

    if (!formData["4-queryType"]) {
      newErrors["4-queryType"] = "Please select a query type";
    }

    if (!formData["5-message"]) {
      newErrors["5-message"] = "This field is required";
    }

    if (!formData["6-consent"]) {
      newErrors["6-consent"] =
        "To submit this form, please consent to being contacted";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
    }
  }

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center bg-emerald-100">
      <div className="my-8 flex flex-col gap-8 rounded-2xl border border-none bg-white p-6">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          {/* Inputs - Names */}
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-center">
            {/* Input text - First Name */}
            <div className="flex flex-col gap-4 lg:min-w-64">
              <label htmlFor="inputFirstName" className="text-sm">
                First Name <span className="text-emerald-900">*</span>
              </label>
              <input
                id="inputFirstName"
                type="text"
                name="1-firstName"
                value={formData["1-firstName"]}
                onChange={handleChange}
                className={`rounded-md ${errors["1-firstName"] ? "border-rose-500" : "border-emerald-900"}`}
              />
              {errors["1-firstName"] && (
                <p className="text-rose-500">{errors["1-firstName"]}</p>
              )}
            </div>
            {/* Input text - Last Name */}
            <div className="flex flex-col gap-4 lg:min-w-64">
              <label htmlFor="inputLastName" className="text-sm">
                Last Name <span className="text-emerald-900">*</span>
              </label>
              <input
                id="inputLastName"
                type="text"
                name="2-lastName"
                value={formData["2-lastName"]}
                onChange={handleChange}
                className={`rounded-md ${errors["2-lastName"] ? "border-rose-500" : "border-emerald-900"}`}
              />
              {errors["2-lastName"] && (
                <p className="text-rose-500">{errors["2-lastName"]}</p>
              )}
            </div>
          </div>
          {/* Input email - Email Address */}
          <div className="flex flex-col gap-4">
            <label htmlFor="inputEmail" className="text-sm">
              Email Address <span className="text-emerald-900">*</span>
            </label>
            <input
              id="inputEmail"
              type="email"
              name="3-email"
              value={formData["3-email"]}
              onChange={handleChange}
              className={`rounded-md ${errors["3-email"] ? "border-rose-500" : "border-emerald-900"}`}
            />
            {errors["3-email"] && (
              <p className="text-rose-500">{errors["3-email"]}</p>
            )}
          </div>
          {/* Radio buttons - Query type */}
          <div className="flex flex-col gap-4">
            <p className="text-sm">
              Query Type <span className="text-emerald-900">*</span>
            </p>
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-center">
              <label
                className={`flex w-full items-center gap-2 rounded-md border p-2 has-[:checked]:bg-emerald-100 ${errors["4-queryType"] ? "" : "border-emerald-900"} `}
              >
                <input
                  type="radio"
                  name="4-queryType"
                  value="General Enquiry"
                  checked={formData["4-queryType"] === "General Enquiry"}
                  onChange={handleChange}
                  className="text-emerald-900"
                />
                <span>General Enquiry</span>
              </label>
              <label
                className={`flex w-full items-center gap-2 rounded-md border p-2 has-[:checked]:bg-emerald-100 ${errors["4-queryType"] ? "" : "border-emerald-900"}`}
              >
                <input
                  type="radio"
                  name="4-queryType"
                  value="Support request"
                  checked={formData["4-queryType"] === "Support request"}
                  onChange={handleChange}
                  className="text-emerald-900"
                />
                <span>Support Request</span>
              </label>
            </div>
            {errors["4-queryType"] && (
              <p className="text-rose-500">{errors["4-queryType"]}</p>
            )}
          </div>
          {/* Textarea - Message */}
          <div className="flex flex-col gap-4">
            <label htmlFor="textareaMessage" className="text-sm">
              Message <span className="text-emerald-900">*</span>
            </label>
            <textarea
              id="textareaMessage"
              name="5-message"
              value={formData["5-message"]}
              onChange={handleChange}
              className={`resize-none rounded-md ${errors["5-message"] ? "border-rose-500" : "border-emerald-900"}`}
            ></textarea>
            {errors["5-message"] && (
              <p className="text-rose-500">{errors["5-message"]}</p>
            )}
          </div>
          {/* Checkbox - Consent */}
          <div className="max-w-64 lg:max-w-full">
            <label className="flex items-center gap-4 text-sm">
              <input
                type="checkbox"
                name="6-consent"
                checked={formData["6-consent"]}
                onChange={handleChange}
                className="text-emerald-900"
              />
              <span>
                I consent to being contacted by the team{" "}
                <span className="text-emerald-900">*</span>
              </span>
            </label>
            {errors["6-consent"] && (
              <p className="text-rose-500">{errors["6-consent"]}</p>
            )}
          </div>
          {/* Button - submit form */}
          <button
            type="submit"
            className="rounded-md border bg-emerald-800 p-2 font-medium text-white hover:bg-emerald-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
