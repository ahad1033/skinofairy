import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";

// ----------------------------------------------------------------------

export const metadata = {
  title: "Skinofairy - Contact Us",
  description:
    "Discover expert advice on skincare, solutions for skin problems, beauty tips, and nourishing foods for radiant, healthy skin at Skinofairy.",
  openGraph: {
    title: "Skinofairy - Contact Us",
    description:
      "Explore comprehensive guides on skincare, solutions for skin issues, and foods that promote skin health on Skinofairy.",
    url: "https://www.skinofairy.com/contact",
    images: [
      {
        url: "/images/og-image.webp",
        width: 800,
        height: 600,
        alt: "Skinofairy - Contact Us",
      },
    ],
    alternates: {
      canonical: "https://www.skinofairy.com/contact",
    },
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
