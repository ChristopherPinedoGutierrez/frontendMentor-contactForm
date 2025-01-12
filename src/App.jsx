function App() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log("formData");
    console.log(formData);
    console.log("formObject");
    console.log(formObject);
  }

  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <h1 className="text-2xl font-semibold">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {/* Input text - First Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="inputFirstName">First Name</label>
            <input
              type="text"
              name="input-firstName"
              id="inputFirstName"
              className="rounded"
            />
          </div>
          {/* Input text - Last Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="inputLastName">Last Name</label>
            <input
              type="text"
              name="input-lastName"
              id="inputLastName"
              className="rounded"
            />
          </div>
          {/* Input email - Email Address */}
          <div className="flex flex-col gap-2">
            <label htmlFor="inputEmail">Email Address</label>
            <input
              type="email"
              name="input-email"
              id="inputEmail"
              className="rounded"
            />
          </div>
          {/* Radio buttons - Query type */}
          <div className="flex flex-col gap-2">
            <p>Query Type</p>
            <label className="flex items-center gap-2">
              <input type="radio" name="query-type" value="General Enquiry" />
              <span>General Enquiry</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="query-type" value="Support request" />
              <span>Support Request</span>
            </label>
          </div>
          {/* Textarea - Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="textareaMessage">Message</label>
            <textarea
              id="textareaMessage"
              name="textarea-message"
              value="Message from textarea"
              className="rounded"
            ></textarea>
          </div>
          {/* Checkbox - Consent */}
          <div>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="checkbox-consent" />
              <span>I consent to being contacted by the team</span>
            </label>
          </div>
          {/* Button - submit form */}
          <button type="submit" className="rounded border p-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
