import { Box, Button, CardMedia, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import pic from "../images/Blog_customercare.jpg";
import pic2 from "../images/lovepik-female-customer-service.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "../schema/contactSchema";
import emailjs from "@emailjs/browser";
import { IoIosHome, IoMdPhonePortrait } from "react-icons/io"
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Contact() {
  const [message, setMessage] = useState('')
  const form = useRef();
  const sendEmail = async () => {
    try {
      await emailjs
        .sendForm(
          process.env.REACT_APP_YOUR_SERVICE_ID, // Replace with your EmailJS service ID
          process.env.REACT_APP_YOUR_TEMPLATE_ID, // Replace with your EmailJS template ID
          form.current,
          process.env.REACT_APP_PUBLICKEY // Replace with your EmailJS user ID
        )
        form.current.reset()
        setMessage('Email sent successfully!');
    } catch (error) {
      console.error(error)
    }
  };
  return (
    <div>
      <Box sx={{ width: "100%", position: "relative" }}>
        <CardMedia
          component="img"
          src={pic}
          className="lg:block xs:hidden"
          sx={{ height: "95vh" }}
        />
        <CardMedia
          component="img"
          src={pic2}
          className="xs:block lg:hidden"
          sx={{ height: "95vh" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "95vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            color={"white"}
            sx={{
              fontWeight: { sm: 50 },
              fontSize: { sm: 50, xs: 25 },
              fontFamily: "open-sans",
            }}
            align="center"
          >
            Contact Us
          </Typography>
          <Typography className="text-white w-[50vw] text-center">
            Have questions or need assistance with your travel plans? We're here
            to help! Reach out to the Kenji Flight team for personalized
            support, whether you're booking flights, need travel advice, or have
            inquiries about your trip. We're just a message away to ensure your
            journey is smooth and enjoyable.
          </Typography>
        </Box>
      </Box>

      {/* Map section */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.2778563899935!2d3.45733675502653!3d6.451037683477421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf452da3bd44b%3A0x47331fb41adc9d28!2sLekki%20Phase%201%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1726983260960!5m2!1sen!2sng"
          title="Our Location"
          className="w-[100%] h-[70vh]"
        ></iframe>
      </div>
      {/*  */}

      <div className="flex lg:flex-row xs:flex-col place-content-center pt-10 pb-10 gap-28">
        <div className="p-5">
          <Formik
            initialValues={{ Name: "", email: "", Message: "" }}
            validationSchema={contactSchema}
            onSubmit={sendEmail}
            validateOnBlur={false}
            validateOnChange={false}
          >
            <Form ref={form}>
              <div>
                <label htmlFor="Name" className="block font-bold">
                  Name:
                </label>
                <Field
                  className="border-blue-500 border-2 rounded-md lg:w-[30vw] xs:w-[90vw] h-11"
                  id="Name"
                  name="Name"
                />
                <ErrorMessage
                  name="Name"
                  component="div"
                  className="text-red-700 w-[30vw]"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block font-bold">
                  Email Address:
                </label>
                <Field
                  className="border-blue-500 border-2 rounded-md lg:w-[30vw] xs:w-[90vw] h-11"
                  id="email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-700 w-[20vw]"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="Message" className="block font-bold">
                  Message:
                </label>
                <Field
                  as="textarea"
                  className="border-blue-500 border-2 resize-none rounded-md lg:w-[30vw] xs:w-[90vw] h-[30vh]"
                  id="Message"
                  name="Message"
                />
                <ErrorMessage
                  name="Message"
                  component="div"
                  className="text-red-700 w-[30vw]"
                />
              </div>
              <Box>
                {message && (
                  <h2 className="text-green-500">{message}</h2>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  className="p-5 mt-5 lg:w-[10vw] xs:w-[25vw]"
                >
                  Send
                </Button>
              </Box>
            </Form>
          </Formik>
        </div>

        <div className="flex flex-col gap-y-7 lg:mt-7 pl-5 ContainerLinks">
          <div className="flex gap-x-3">
            <IoIosHome className="text-3xl"/>
            <Link className="text-2xl" to={'#'}>No 16th new world street ajao estate</Link>
          </div>
          <div className="flex gap-x-3">
            <IoMdPhonePortrait className="text-3xl"/>
            <Link to={'tel:+2347086661378'} className="text-2xl">+2347086661378</Link>
          </div>
          <div className="flex gap-x-3">
            <MdEmail className="text-3xl"/>
            <Link className="text-2xl" to={'mailto:okolochidera223@gmail.com'}>okolochidera223@gmail.com</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
