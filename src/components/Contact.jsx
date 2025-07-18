import React, { useState } from "react";
import emailjs from "emailjs-com";
import p from '../assets/images/naru.png';
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "sathwiksampengala@gmail.com" },
    { logo: "logo-whatsapp", text: "7675975242" },
    { logo: "location", text: "Guntur" },
  ];

  const [emailStatus, setEmailStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_mco82ym";
    const templateId = "template_7s7n3ea";
    const userId = "ajykOHZkq5Q6Z5rlX";

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setEmailStatus("success");
        setTimeout(() => {
          setEmailStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error("Email error:", error.text);
        setEmailStatus("error");
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="py-10 px-3 text-white min-h-screen">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-9 max-w-5xl bg-gray-800 md:p-8 p-6 rounded-lg mx-auto">
          <form onSubmit={sendEmail} className="flex flex-col flex-1 gap-6 h-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring focus:border-cyan-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring focus:border-cyan-600"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              className="bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring focus:border-cyan-600"
              required
            ></textarea>
            <button
              type="submit"
              className="btn-primary w-fit bg-orange-600 p-4 rounded-lg text-white shadow-lg transition duration-300 hover:bg-orange-700"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-2xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1">
                    <p className="md:text-base text-sm break-words">
                      {contact.text}
                    </p>
                    {contact.logo === "location" }
                  </div>
                  
                </div>
                
              </div>
            ))}
            <div className="flex-1 flex justify-end pr-8 " >
                        <img
                          src={p}
                          alt="Location"
                          className="w-full h-44 object-contain"
                        />
                      </div>
          </div>
        </div>

        {emailStatus === "success" && (
          <div className="mt-4 flex items-center justify-center text-green-500">
            <FaCheckCircle className="text-3xl mr-2" />
            <span>Email sent successfully!</span>
          </div>
        )}

        {emailStatus === "error" && (
          <div className="mt-4 flex items-center justify-center text-red-500">
            <span>Error sending email. Please try again later.</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
