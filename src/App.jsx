export default function App() {
  return (
    <div
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Hero */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80') center/cover",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            color: "#d4af37",
            marginBottom: "20px",
          }}
        >
          Marceline Cuisine
        </h1>

        <p
          style={{
            fontSize: "24px",
            maxWidth: "700px",
            lineHeight: 1.6,
          }}
        >
          Authentic Ivorian & West African Cuisine
        </p>

        <p
          style={{
            marginTop: "10px",
            opacity: 0.8,
          }}
        >
          Cuisine Ivoirienne Authentique
        </p>

        <button
          style={{
            marginTop: "40px",
            padding: "18px 40px",
            fontSize: "18px",
            background: "#d4af37",
            border: "none",
            borderRadius: "40px",
            cursor: "pointer",
          }}
        >
          Explore Our Menu
        </button>
      </section>

      {/* About */}
      <section
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "100px 30px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#d4af37",
            fontSize: "48px",
          }}
        >
          About Marceline
        </h2>

        <p
          style={{
            marginTop: "30px",
            fontSize: "22px",
            lineHeight: 1.8,
          }}
        >
          Every meal is handcrafted with love using authentic family recipes
          from Côte d'Ivoire and across West Africa. Whether you are hosting a
          wedding, birthday, graduation, or private dinner, Marceline Cuisine
          brings unforgettable flavors and warm hospitality to every table.
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          borderTop: "1px solid #333",
        }}
      >
        © 2026 Marceline Cuisine
      </footer>
    </div>
  );
}