"use client";
import { useState } from "react";
import { Button, TextInput, Textarea, Card, Alert, Spinner } from 'flowbite-react';
import { HiMail, HiInformationCircle, HiUser } from 'react-icons/hi';

// The correct email address
const DESTINATION_EMAIL = 'aus@primuse.net';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});
    
    try {
      // Send the form data to our API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          to: DESTINATION_EMAIL
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      if (data.warning) {
        // SMTP not configured but we're in development
        setSubmitStatus({
          success: true,
          message: "Development mode: Email would have been sent in production. SMTP server not configured."
        });
      } else {
        // Email sent successfully
        setSubmitStatus({
          success: true,
          message: data.message || "Your message has been sent successfully. We'll get back to you soon!"
        });
      }
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : "There was an error sending your message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            Got a technical issue? Want to send feedback? Need details about our business plan? Let us know.
          </p>
          
          {submitStatus.message && (
            <Alert
              color={submitStatus.success ? "success" : "failure"}
              icon={HiInformationCircle}
              className="mb-6"
            >
              <span className="font-medium">{submitStatus.message}</span>
            </Alert>
          )}
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <label htmlFor="name" className="text-white">
                  Your name
                </label>
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                icon={HiUser}
              />
            </div>
            
            <div>
              <div className="mb-2 block">
                <label htmlFor="email" className="text-white">
                  Your email
                </label>
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                icon={HiMail}
              />
            </div>
            
            <div>
              <div className="mb-2 block">
                <label htmlFor="subject" className="text-white">
                  Subject
                </label>
              </div>
              <TextInput
                id="subject"
                type="text"
                placeholder="Let us know how we can help you"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <div className="mb-2 block">
                <label htmlFor="message" className="text-white">
                  Your message
                </label>
              </div>
              <Textarea
                id="message"
                placeholder="Leave a comment..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              color="blue"
              className="w-full sm:w-auto mt-2"
            >
              {isSubmitting ? (
                <>
                  <Spinner size="sm" className="mr-3" />
                  <span>Sending...</span>
                </>
              ) : "Send message"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}