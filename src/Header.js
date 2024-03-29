const Header = () => {
  const isAuthenticated = false;

  return (
    <header>
      <img
        src="https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1711497600&semt=sph"
        alt="oiseau"
      />
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Blog</li>
        </ul>
      </nav>

      {isAuthenticated ? <p>Vous êtes authentifié</p> : <p>Merci de vous connecter</p>}

      <ul></ul>
    </header>
  );
};

export default Header;
