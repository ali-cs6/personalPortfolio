import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contactleft() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_nzjnmuh", "template_sfkgdyj", form.current, {
        publicKey: "lKVCDNlUMWtwDXgSr",
      })
      .then(
        () => {
          // Reset form fields and show success message
          setLoading(false);
          setMessage("");
          setName("");
          setEmail("");
          setSuccess("Your message has been sent successfully!");
          console.log("SUCCESS!");
        },
        (error) => {
          setLoading(false);
          setSuccess("Failed to send message. Please try again later.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="lg:w-2/3">
      <p className="text-4xl text-orange mb-3">Get in touch</p>
      <p className="text-white text-[16px] md:text-[20px] mb-10">
        Feel free to reach out if you'd like to collabrate
        <br />
        You are just a flew clicks away!
      </p>
      {/* success msg on submit */}
      {success && (
        <p className="text-cyan font-semibold -mt-7 mb-3">{success}</p>
      )}
      <form className="flex flex-col gap-4 text-white" ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          required
          type="text"
          placeholder="Your Name"
          className="h-12 bg-lightBrown px-2 rounded-lg"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          required
          type="email"
          placeholder="Your Email"
          className="h-12 bg-lightBrown px-2 rounded-lg"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          required
          type="text"
          rows={9}
          cols={50}
          placeholder="Write your message here..."
          className="bg-lightBrown rounded-lg px-2"
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button
          type="submit"
          className="bg-cyan p-[10px] cursor-pointer text-white rounded-lg text-xl font-bold hover:bg-darkCyan transition-all duration-500"
          disabled={loading || success} // Disable button if success message is shown and while loading
          style={{
            opacity: loading || success ? 0.7 : 1, // Adjust opacity based on loading or success state
          }}
        >
          {loading ? "Sending..." : success ? "Submitted" : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Contactleft;
