"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import Container from "./Container";

// ----------------------------------------------------------------------
const rightSideVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// ----------------------------------------------------------------------

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log("Form Submitted: ", formData);
  };

  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Side Text */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="rounded-md max-w-lg flex flex-col border p-8 gap-4 w-full"
          >
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid items-center gap-1">
                <Label className="mb-2" htmlFor="firstName">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid items-center gap-1">
                <Label className="mb-2" htmlFor="lastName">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="grid w-full items-center gap-1">
              <Label className="mb-2" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className="grid w-full items-center gap-1">
              <Label className="mb-2" htmlFor="message">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="gap-4 w-full mt-3">
              Send Message <MoveRight className="w-4 h-4" />
            </Button>
          </form>
        </div>

        {/* Right Side Contact Form */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={rightSideVariants}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Get in Touch with Us
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  We would love to hear from you! Fill out the form to send us a
                  message and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <div className="flex flex-col gap-1">
                <p>Call us at:</p>
                <p className="text-muted-foreground text-sm">+880 1636428995</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <div className="flex flex-col gap-1">
                <p>Email us at:</p>
                <p className="text-muted-foreground text-sm">
                  ahad.dev2@gmail.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default ContactForm;
