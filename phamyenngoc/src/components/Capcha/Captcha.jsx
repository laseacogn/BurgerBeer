import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const ReCaptach = () => {
  const [verfied, setVerifed] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 mt-[10px]">
      <form>
        <ReCAPTCHA
          sitekey="6LdqtLwpAAAAAIlsfo0W5Gi39kxb6VsGsjw1IS4A"
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default ReCaptach;