import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Bara de navigare */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </div>
        <div className="nav-buttons">
          {/* Buton Home fără Link */}
          <button>Home 🏠</button>

          {/* Link către pagina City Page */}
          <Link href="/city">
            <button>City Page 🌃</button>
          </Link>
        </div>
      </nav>

      {/* Conținutul principal al paginii */}
      <main>
        <h1>Bine ai venit! 🤗</h1>
        <p>Travel around your favorite cities virtually.</p>

        {/* Caseta cu favorite cities */}
        <div className="favorites-box">
          <h2>Apasa butonul si cauta-ti orasul dorit.</h2>
          <ol>
            {/* Link către pagina City Page */}
          <Link href="/city">
            <button>City Page 🌃</button>
          </Link>
          </ol>
        </div>

        
      </main>
    </div>
  );
}