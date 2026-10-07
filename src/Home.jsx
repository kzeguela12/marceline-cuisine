import { Link } from "react-router-dom";
import "./App.css";

import hero from "./assets/Images/hero.jpg";
import fish from "./assets/Images/fish-with-onions.jpg";
import lamb from "./assets/Images/lamb-onions.jpg";
import rice from "./assets/Images/rice.jpg";
import fries from "./assets/Images/fries.jpg";
import gblofoto from "./assets/Images/gblofoto.jpg";
import brochette from "./assets/Images/brochette.jpg";
import brochetteOnPlate from "./assets/Images/brochette on plate.jpg";
import fishOnPlate from "./assets/Images/fish-onplate.jpg";
import fishVege from "./assets/Images/fish-vege.jpg";
import plantain from "./assets/Images/plantain.jpg";
import riceNew from "./assets/Images/rice-new.jpg";
import vegetables from "./assets/Images/vege.jpg";

const cateringEvents = [
  "Weddings",
  "Birthday Parties",
  "Corporate Events",
  "Graduation Parties",
  "Private Dinners",
  "Church Events",
  "Baby Showers",
];

const galleryPhotos = [
  { src: brochette, alt: "Freshly prepared grilled brochettes" },
  { src: brochetteOnPlate, alt: "A plated West African favorite" },
  { src: fishOnPlate, alt: "A fish dish served with traditional sides" },
  { src: fishVege, alt: "Fish and vegetables prepared with fresh herbs" },
  { src: plantain, alt: "Golden fried plantains" },
  { src: riceNew, alt: "A tray of seasoned West African rice" },
  { src: vegetables, alt: "Colorful vegetables prepared for a meal" },
];

export default function Home({ cartCount }) {
  return (
    <>
      <header className="site-header">
        <a className="site-brand" href="#home">
          Marceline <span>Cuisine</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About Marceline</a>
          <a href="#catering">Catering</a>
          <a href="#contact">Contact</a>
          <Link to="/menu">Menu</Link>
          <Link className="nav-order-link" to="/menu#order">
            Order <span>{cartCount}</span>
          </Link>
        </nav>
      </header>

      <section
        id="home"
        className="hero"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="overlay">
          <h1 className="hero-title">Marceline Cuisine</h1>
          <p className="hero-description">
            Authentic Ivorian &amp; West African Cuisine
          </p>
          <p className="hero-details">Catering • Private Events</p>
          <Link className="hero-button" to="/menu">
            Explore Our Menu
          </Link>
          <Link className="hero-secondary-button" to="/menu#order">
            Order Pickup
          </Link>
          <a className="hero-text-link" href="#catering">
            Celebrate with Marceline Cuisine
          </a>
        </div>
      </section>

      <section className="featured" id="featured">
        <h2>Featured Dishes</h2>

        <div className="food-grid">
          <article className="food-card">
            <img src={fish} alt="Grilled fish topped with onions and vegetables" />
            <h3>Grilled Fish</h3>
            <p>
              Whole grilled fish topped with fresh onions, tomatoes, peppers,
              and herbs.
            </p>
          </article>

          <article className="food-card">
            <img src={lamb} alt="Grilled lamb skewers" />
            <h3>Lamb Skewers</h3>
            <p>
              Tender marinated lamb grilled over an open flame with vegetables.
            </p>
          </article>

          <article className="food-card">
            <img src={rice} alt="A serving of jollof rice" />
            <h3>Jollof Rice</h3>
            <p>
              Our signature West African jollof rice served with seasoned
              vegetables.
            </p>
          </article>

          <article className="food-card">
            <img src={fries} alt="Loaded fries with house-made toppings" />
            <h3>Loaded Fries</h3>
            <p>
              Crispy fries served with our house-made sauces and grilled meats.
            </p>
          </article>

          <article className="food-card">
            <img src={gblofoto} alt="A freshly prepared dish from Marceline Cuisine" />
            <h3>A Taste of Marceline</h3>
            <p>
              Discover the vibrant flavors and warm hospitality of our kitchen.
            </p>
          </article>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-intro">
          <p className="section-eyebrow">A look into our kitchen</p>
          <h2>From Our Kitchen</h2>
          <p>
            Explore more of the dishes and fresh ingredients that make every
            Marceline Cuisine gathering special.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryPhotos.map((photo) => (
            <figure className="gallery-photo" key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>{photo.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-layout">
          <div
            className="about-portrait-placeholder"
            role="img"
            aria-label="Portrait of Marceline will be added here"
          >
            <span className="portrait-label">The heart of the kitchen</span>
            <span className="portrait-initial" aria-hidden="true">M</span>
            <span className="portrait-caption">Marceline</span>
          </div>

          <div className="about-copy">
            <p className="section-eyebrow">Our Story</p>
            <h2>About Marceline</h2>
            <p>
              Marceline Cuisine was founded with a passion for bringing
              authentic West African flavors to every table. Every dish is
              prepared from family recipes passed through generations, using
              fresh ingredients and traditional techniques.
            </p>
            <p>
              From the first aroma in the kitchen to the last bite shared
              around the table, Marceline welcomes every guest with the warmth
              and generosity of home.
            </p>
            <Link className="outline-button" to="/menu">
              Discover the Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="catering-section" id="catering">
        <div className="catering-intro">
          <p className="section-eyebrow">Gather around something wonderful</p>
          <h2>Catering for Every Celebration</h2>
          <p>
            Bring the flavors of Marceline Cuisine to your next gathering.
            We make special occasions feel warm, generous, and unforgettable.
          </p>
        </div>

        <div className="catering-grid">
          {cateringEvents.map((event, index) => (
            <article className="catering-card" key={event}>
              <span className="catering-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{event}</h3>
            </article>
          ))}
        </div>

        <div className="catering-inquiry" id="catering-inquiry">
          <div>
            <p className="section-eyebrow">Let’s make it memorable</p>
            <h3>Planning something special?</h3>
            <p>
              Tell us about your date, guest count, and favorite dishes so we
              can help shape your celebration.
            </p>
          </div>
          <a
            className="catering-quote-button"
            href={`mailto:kntamon@yahoo.com?subject=${encodeURIComponent("Catering quote request")}&body=${encodeURIComponent("Hello Marceline Cuisine,\n\nI would like to request a catering quote.\n\nEvent type:\nEvent date:\nGuest count:\nLocation:\nFavorite dishes or other details:\n\nThank you!")}`}
          >
            Request Catering Quote
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-intro">
          <p className="section-eyebrow">We would love to hear from you</p>
          <h2>Contact Marceline Cuisine</h2>
          <p>
            Reach out with questions, pickup plans, delivery requests, or
            details about your upcoming celebration.
          </p>
        </div>

        <div className="contact-details">
          <a
            className="contact-card"
            href="https://maps.google.com/?q=5907+Plata+St"
            rel="noreferrer"
            target="_blank"
          >
            <span className="contact-icon" aria-hidden="true">⌖</span>
            <span className="contact-label">Location</span>
            <span>5907 Plata St</span>
          </a>
          <a className="contact-card" href="tel:+14436000457">
            <span className="contact-icon" aria-hidden="true">☎</span>
            <span className="contact-label">Phone</span>
            <span>(443) 600-0457</span>
          </a>
          <a className="contact-card" href="mailto:kntamon@yahoo.com">
            <span className="contact-icon" aria-hidden="true">@</span>
            <span className="contact-label">Email</span>
            <span>kntamon@yahoo.com</span>
          </a>
        </div>

        <div className="social-section">
          <h3>Follow Along</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
              <span className="social-icon" aria-hidden="true">◎</span>
              Instagram
            </a>
            <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
              <span className="social-icon" aria-hidden="true">f</span>
              Facebook
            </a>
            <a href="https://www.tiktok.com/" rel="noreferrer" target="_blank">
              <span className="social-icon" aria-hidden="true">♪</span>
              TikTok
            </a>
            <a href="https://wa.me/14436000457" rel="noreferrer" target="_blank">
              <span className="social-icon" aria-hidden="true">◉</span>
              WhatsApp
            </a>
            <a href="mailto:kntamon@yahoo.com" rel="noreferrer" target="_blank">
              <span className="social-icon" aria-hidden="true">@</span>
              Email
            </a>
          </div>
          <p className="social-profile-note">
            Social links currently open each platform. Add Marceline Cuisine’s
            profile links when they’re ready.
          </p>
        </div>

        <div className="online-ordering">
          <div>
            <p className="section-eyebrow">Made fresh for you</p>
            <h3>Ready to order?</h3>
            <p>
              Build your order, choose pickup or special delivery, and send it
              directly to Marceline Cuisine.
            </p>
          </div>
          <div className="online-order-buttons">
            <Link className="catering-quote-button" to="/menu#order">
              Order Pickup
            </Link>
            <a
              className="outline-button"
              href={`mailto:kntamon@yahoo.com?subject=${encodeURIComponent("Catering request")}`}
            >
              Request Catering
            </a>
          </div>
        </div>
      </section>
    </>
  );
}