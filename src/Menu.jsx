import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

import fries from "./assets/Images/fries.jpg";
import brochetteOnPlate from "./assets/Images/brochette on plate.jpg";
import fishOnPlate from "./assets/Images/fish-onplate.jpg";
import plantainBeignets from "./assets/Images/Plantain beignets .png";
import okraSoup from "./assets/Images/Okra soup.png";
import riceNew from "./assets/Images/rice-new.jpg";
import westAfricanGreens from "./assets/Images/SPINICH STEW (1).png";

const emailAddress = "kntamon@yahoo.com";

const appetizers = [
  { name: "Beignets", price: 10 },
  { name: "Fried Plantains", price: 5 },
  { name: "Fried Yuca", price: 5 },
  { name: "Plantain Beignets", price: 5 },
];

const entrees = [
  { name: "Grilled Fish with Attiéké", price: 25 },
  { name: "Oxtail and Rice Platter", price: 25 },
  { name: "Fish Yassa", price: 23 },
  { name: "Spinach Stew with Fish", price: 30 },
  { name: "Spinach Stew with Smoked Turkey", price: 25 },
  { name: "Potato Leaf Stew", price: 25 },
];

const westAfricanStews = [
  { name: "West African Greens (Spinach) Stew with Placali", price: 25, image: westAfricanGreens },
];

const grilledDishes = [
  { name: "Chicken Kabobs", price: 18 },
  { name: "Beef Kabobs", price: 20 },
  { name: "Grilled Chicken", price: 20 },
  { name: "Lamb", price: 27 },
];

const riceFavorites = [
  { name: "Jollof Rice", price: 18 },
  { name: "Riz au Gras", price: 15 },
  { name: "Tchep", price: 15 },
  { name: "White Rice", price: 5 },
  { name: "Attiéké", price: 7 },
];

const soups = [
  { name: "Placali & Palm Soup", price: 25 },
  { name: "Peanut Butter Soup", price: 20 },
  { name: "Kedjenou & Attiéké", price: 25 },
  { name: "Cassava Dough with Okra Soup", price: 25 },
];

const sides = [{ name: "Loaded Fries", price: 14 }];

const drinks = [
  { name: "Sweet Millet", price: 10 },
  { name: "Sweet Pineapple Ginger", price: 6 },
  { name: "Hibiscus", price: 6 },
  { name: "Soft Drinks", price: 2 },
];

function MenuItems({ items, onAddToCart }) {
  return (
    <div className="menu-list">
      {items.map((item) => (
        <div className="menu-item" key={item.name}>
          <span>{item.name}</span>
          <span className="menu-item-price">${item.price}</span>
          <button
            className="add-to-cart-button"
            onClick={() => onAddToCart(item)}
            type="button"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

function MenuSection({ title, items, onAddToCart, image }) {
  return (
    <section className={`menu-section${image ? " menu-section-with-image" : ""}`}>
      <div>
        <h2>{title}</h2>
        <MenuItems items={items} onAddToCart={onAddToCart} />
      </div>
      {image && <img className="menu-section-image" src={image.src} alt={image.alt} />}
    </section>
  );
}

export default function Menu({ cart, onAddToCart, onRemoveFromCart }) {
  const [fulfillment, setFulfillment] = useState("Pickup");
  const [paymentMethod, setPaymentMethod] = useState("Zelle");
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  useEffect(() => {
    if (window.location.hash === "#order") {
      document.getElementById("order")?.scrollIntoView();
    }
  }, []);

  function submitOrder(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const orderLines = cart.map(
      (item) =>
        `${item.quantity} x ${item.name} — $${(item.price * item.quantity).toFixed(2)}`,
    );
    const deliveryAddress =
      fulfillment === "Delivery" ? formData.get("deliveryAddress") : "Pickup";
    const message = [
      "New Marceline Cuisine order",
      `Customer reports sending payment by ${paymentMethod}. Please verify payment before confirming the order.`,
      "",
      `Name: ${formData.get("customerName")}`,
      `Phone: ${formData.get("customerPhone")}`,
      `Email: ${formData.get("customerEmail")}`,
      `Fulfillment: ${fulfillment}`,
      `Delivery address: ${deliveryAddress}`,
      "",
      "Order:",
      ...orderLines,
      "",
      `Food subtotal: $${subtotal.toFixed(2)}`,
      paymentMethod === "Zelle"
        ? "Zelle payment sent to: 443-600-0457"
        : "Venmo payment sent to: @marceline-cuisine",
      `Payment method: ${paymentMethod}`,
      fulfillment === "Delivery"
        ? "Delivery availability and any delivery fee still need confirmation."
        : "",
      "",
      formData.get("orderNotes")
        ? `Notes: ${formData.get("orderNotes")}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");
    const subject = encodeURIComponent("Marceline Cuisine order");

    window.open(
      `mailto:${emailAddress}?subject=${subject}&body=${encodeURIComponent(message)}`,
      "_self",
    );
  }

  return (
    <div className="menu-page">
      <div className="menu-header">
        <Link className="menu-home-link" to="/">
          Home
        </Link>
        <h1>Our Menu</h1>
        <p>Authentic West African Cuisine</p>
        <a className="menu-cart-link" href="#order">
          Your Order <span>{cartCount}</span>
        </a>
      </div>

      <MenuSection
        title="Appetizers"
        items={appetizers}
        onAddToCart={onAddToCart}
        image={{
          src: plantainBeignets,
          alt: "Golden plantain beignets",
        }}
      />

      <section className="featured-dish">
        <img src={fishOnPlate} alt="Grilled fish served with traditional sides" />
        <div>
          <h2>Signature Entrées</h2>
          <MenuItems items={entrees} onAddToCart={onAddToCart} />
        </div>
      </section>

      <section className="menu-section west-african-stews">
        <h2>West African Stews</h2>
        <div className="west-african-stew-grid">
          {westAfricanStews.map(({ image, ...stew }) => (
            <article className="west-african-stew-card" key={stew.name}>
              <img
                className="west-african-stew-image"
                src={image}
                alt={stew.name}
              />
              <MenuItems items={[stew]} onAddToCart={onAddToCart} />
            </article>
          ))}
        </div>
      </section>

      <section className="featured-dish reverse">
        <div>
          <h2>From the Grill</h2>
          <MenuItems items={grilledDishes} onAddToCart={onAddToCart} />
        </div>
        <img src={brochetteOnPlate} alt="A plated serving of grilled brochettes" />
      </section>

      <section className="featured-dish">
        <img src={riceNew} alt="A tray of seasoned West African rice" />
        <div>
          <h2>Rice Favorites</h2>
          <MenuItems items={riceFavorites} onAddToCart={onAddToCart} />
        </div>
      </section>

      <MenuSection
        title="Soups"
        items={soups}
        onAddToCart={onAddToCart}
        image={{
          src: okraSoup,
          alt: "West African okra soup",
        }}
      />

      <section className="featured-dish reverse sides-feature">
        <img src={fries} alt="Loaded fries with house-made toppings" />
        <div>
          <h2>Sides</h2>
          <MenuItems items={sides} onAddToCart={onAddToCart} />
        </div>
      </section>

      <MenuSection title="Drinks" items={drinks} onAddToCart={onAddToCart} />

      <p className="menu-note">
        All entrée dishes are served with your choice of Rice or Attiéké.
      </p>

      <section className="order-section" id="order">
        <div className="order-heading">
          <p className="section-eyebrow">Pickup or special delivery</p>
          <h2>Your Order</h2>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart-message">
            Your cart is empty. Add dishes from the menu above to get started.
          </p>
        ) : (
          <>
            <div className="cart-items" aria-live="polite">
              {cart.map((item) => (
                <div className="cart-row" key={item.name}>
                  <span className="cart-item-name">
                    {item.name}
                    <small>
                      ${item.price.toFixed(2)} each · Qty {item.quantity}
                    </small>
                  </span>
                  <span className="cart-line-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="remove-cart-item"
                    onClick={() => onRemoveFromCart(item.name)}
                    type="button"
                    aria-label={`Remove one ${item.name} from your order`}
                  >
                    −
                  </button>
                  <button
                    className="add-cart-item"
                    onClick={() => onAddToCart(item)}
                    type="button"
                    aria-label={`Add one ${item.name} to your order`}
                  >
                    +
                  </button>
                </div>
              ))}
              <p className="cart-subtotal">
                Subtotal <strong>${subtotal.toFixed(2)}</strong>
              </p>
              <p className="delivery-fee-note">
                Any delivery fee will be confirmed before your order is
                finalized.
              </p>
            </div>

            <form className="order-form" onSubmit={submitOrder}>
              <h3>Where should we send your order?</h3>
              <fieldset className="fulfillment-options">
                <legend>Choose pickup or delivery</legend>
                {["Pickup", "Delivery"].map((option) => (
                  <label key={option}>
                    <input
                      checked={fulfillment === option}
                      name="fulfillment"
                      onChange={() => setFulfillment(option)}
                      type="radio"
                      value={option}
                    />
                    {option === "Pickup" ? "Order Pickup" : "Special Delivery"}
                  </label>
                ))}
              </fieldset>

              <div className="order-form-grid">
                <label>
                  Your name
                  <input autoComplete="name" name="customerName" required />
                </label>
                <label>
                  Phone number
                  <input
                    autoComplete="tel"
                    name="customerPhone"
                    required
                    type="tel"
                  />
                </label>
                <label>
                  Email address
                  <input
                    autoComplete="email"
                    name="customerEmail"
                    required
                    type="email"
                  />
                </label>
                {fulfillment === "Delivery" && (
                  <label className="delivery-address-field">
                    Delivery address
                    <textarea
                      autoComplete="street-address"
                      name="deliveryAddress"
                      required
                      rows="3"
                    />
                  </label>
                )}
                <label className="order-notes-field">
                  Notes or special requests (optional)
                  <textarea name="orderNotes" rows="3" />
                </label>
              </div>

              <fieldset className="fulfillment-options payment-method-options">
                <legend>Choose a payment method</legend>
                {["Zelle", "Venmo"].map((option) => (
                  <label key={option}>
                    <input
                      checked={paymentMethod === option}
                      name="paymentMethod"
                      onChange={() => setPaymentMethod(option)}
                      type="radio"
                      value={option}
                    />
                    {option}
                  </label>
                ))}
              </fieldset>

              <div className="payment-instructions">
                <h3>Pay with {paymentMethod}</h3>
                <p>
                  Send <strong>${subtotal.toFixed(2)}</strong> for the food
                  subtotal{" "}
                  {paymentMethod === "Zelle" ? (
                    <>
                      to <strong>443-600-0457</strong> using Zelle.
                    </>
                  ) : (
                    <>
                      to{" "}
                      <strong>
                        <a
                          href="https://venmo.com/u/marceline-cuisine"
                          rel="noreferrer"
                          target="_blank"
                        >
                          @marceline-cuisine
                        </a>
                      </strong>{" "}
                      using Venmo.
                    </>
                  )}{" "}
                  Check that the recipient name is correct in your payment app,
                  and include your name in the payment note.
                </p>
                {fulfillment === "Delivery" && (
                  <p>
                    Please wait for Marceline Cuisine to confirm delivery
                    availability and any delivery fee before paying that fee.
                  </p>
                )}
              </div>

              <label className="payment-confirmation">
                <input name="paymentSent" required type="checkbox" />
                I have sent the food subtotal by {paymentMethod}. I understand
                the order is not confirmed until payment and availability are
                verified.
              </label>

              <button
                className="catering-quote-button order-submit-button"
                type="submit"
              >
                I’ve Sent Payment — Email My Order
              </button>
              <p className="payment-note">
                This opens a prefilled email to kntamon@yahoo.com. Review it
                and press Send in your email app. We do not receive your order
                until you send the email, and we’ll verify payment before
                confirming it.
              </p>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
