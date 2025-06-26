import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";

// ----------------------------------------------------------------------

export const metadata = {
  title: "Skinofairy - Contact Us",
  description:
    "Have questions about skincare, blog topics, or collaborations? Contact Skinofairy for personalized support, partnership opportunities, and expert advice.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Skinofairy - Contact Us",
    description:
      "Have questions about skincare, blog topics, or collaborations? Contact Skinofairy for personalized support, partnership opportunities, and expert advice.",
    url: "https://www.skinofairy.com/contact",
    images: [
      {
        url: "/images/og-image.webp",
        width: 800,
        height: 600,
        alt: "Skinofairy - Contact Us",
      },
    ],
  },
  alternates: {
    canonical: "https://www.skinofairy.com/contact",
  },
};

const ContactPage = () => {
  return (
    <>
      <Banner title="Contact Us" />

      <ContactForm />
    </>
  );
};

export default ContactPage;
