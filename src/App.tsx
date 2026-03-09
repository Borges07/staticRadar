import "./App.css";

function App() {

  const abrirWhatsapp = () => {
    window.location.href =
      "https://chat.whatsapp.com/LNHe9ON5kYeE3IUhSzI7pm";
  };

  return (
    <div className="container">

      <div className="top-bar">
        APROVEITE AGORA AS MELHORES PROMOÇÕES DE 2026!
      </div>

      <div className="content">

        <h2>
          🎟️ GRUPO DE CUPONS, PROMOÇÕES E LANÇAMENTOS 🎟️
        </h2>

        <p className="sub">
          Produtos com 50% 60% 70% OFF
        </p>

        <div className="image-box">
          <img src="\public\WhatsApp Image 2026-03-08 at 22.11.26.jpeg" alt="promo" />
        </div>

        <button className="btn" onClick={abrirWhatsapp}>
          QUERO PARTICIPAR
        </button>

        <p className="members">
          ✨ VENHA PARTICIPAR ✨
        </p>

      </div>

      <footer>
        Direitos Reservados
      </footer>

    </div>
  );
}

export default App;