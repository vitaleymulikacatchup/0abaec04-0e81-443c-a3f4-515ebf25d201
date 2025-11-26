"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="gradientBars"
      cardStyle="glass-flat"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Kavove"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Ukrainian Coffee Experience"
          description="Discover authentic specialty coffee crafted with passion. Local roasted beans and expert baristas bringing you the perfect cup."
          tag="Local Kafii"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175299027-iwmnk7v5.jpg"
          imageAlt="Cozy Ukrainian coffeeshop with warm lighting and welcoming atmosphere"
          frameStyle="card"
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Visit Us", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Our Coffeeshop"
          description="We are a local Ukrainian coffeeshop dedicated to bringing the finest specialty coffee to our community. Every cup is crafted with care and precision."
          tag="Our Story"
          bulletPoints={[
            {
              title: "Local Roasted",
              description: "We roast all our beans locally using traditional Ukrainian methods"
            },
            {
              title: "Expert Baristas",
              description: "Our team is professionally trained with years of coffee expertise"
            },
            {
              title: "Community Focused",
              description: "Supporting local farmers and suppliers from across Ukraine"
            },
            {
              title: "Quality First",
              description: "Only the finest arabica and robusta beans make it to our cups"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175300145-bv4id9sk.jpg"
          imageAlt="Expert Ukrainian barista crafting specialty coffee with precision"
          imagePosition="right"
          textboxLayout="default"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Our Coffee Menu"
          description="Explore our signature coffee selections, each crafted to perfection"
          products={[
            {
              id: "1",
              name: "Espresso",
              price: "₴40",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175301238-2zifb3xy.jpg",
              imageAlt: "Rich concentrated espresso shot"
            },
            {
              id: "2",
              name: "Cappuccino",
              price: "₴60",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175302183-gqxrrv3j.jpg",
              imageAlt: "Cappuccino with beautiful latte art"
            },
            {
              id: "3",
              name: "Americano",
              price: "₴50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175303205-i0dh083e.jpg",
              imageAlt: "Classic dark americano coffee"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Customers Say"
          description="Join our community of coffee lovers who trust us for the perfect cup"
          testimonials={[
            {
              id: "1",
              name: "Mariya Kovalenko",
              role: "Regular Customer",
              company: "Kyiv Local",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175304672-72m8jaon.jpg",
              imageAlt: "Mariya Kovalenko happy customer portrait"
            },
            {
              id: "2",
              name: "Ivan Petrov",
              role: "Coffee Enthusiast",
              company: "Coffee Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175305767-74ezwu7s.jpg",
              imageAlt: "Ivan Petrov satisfied customer"
            },
            {
              id: "3",
              name: "Oksana Shevchenko",
              role: "Local Visitor",
              company: "Kyiv Urban",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175306885-l3i43sen.jpg",
              imageAlt: "Oksana Shevchenko enjoying coffee"
            },
            {
              id: "4",
              name: "Dmytro Bondarenko",
              role: "Daily Regular",
              company: "Work Partner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175308022-h5yzvqa6.jpg",
              imageAlt: "Dmytro Bondarenko smiling portrait"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our coffeeshop and services"
          faqs={[
            {
              id: "1",
              title: "Where are you located?",
              content: "We are located in the heart of Kyiv at 123 Khreschatyk Street. Easy access by metro and plenty of street parking nearby."
            },
            {
              id: "2",
              title: "Do you offer takeout?",
              content: "Yes, we offer both dine-in and takeout options. We also provide eco-friendly cups for our takeout customers."
            },
            {
              id: "3",
              title: "Can I order online?",
              content: "We accept orders through our website and popular delivery apps. Your coffee will be prepared fresh when you arrive."
            },
            {
              id: "4",
              title: "Do you have WiFi?",
              content: "Yes, free high-speed WiFi is available for all customers. Perfect for working or studying in our cozy atmosphere."
            }
          ]}
          textPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated with Us"
          description="Subscribe to receive news about new seasonal blends, special events, and exclusive offers from our Ukrainian coffeeshop."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764175299027-iwmnk7v5.jpg"
          imageAlt="Cozy coffeeshop perfect for relaxing with coffee"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Kavove"
          columns={[
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Menu", href: "menu" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Location", href: "#" },
                { label: "Reservations", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            }
          ]}
          copyrightText="© Kavove Ukrainian Coffeeshop 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}