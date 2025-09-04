export const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>
              FIRST NAME <span className="required">*</span>
            </label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>
              LAST NAME <span className="required">*</span>
            </label>
            <input type="text" placeholder="Enter your last name" required />
          </div>
        </div>

        <div className="form-group">
          <label>
            EMAIL <span className="required">*</span>
          </label>
          <input type="email" placeholder="Email" required />
        </div>

        <div className="form-group">
          <label>
            MESSAGE <span className="required">*</span>
          </label>
          <textarea placeholder="Message" rows="4" required></textarea>
        </div>

        <div className="checkbox-group">
          <div className="checkbox-flex">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">
              I consent to having this website store my submitted information.
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
