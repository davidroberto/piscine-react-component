const Header = () => {
  const frameworks = ["express", "react", "nest"];

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

      <ul>
        {frameworks.map((framework) => {
          return <li>{framework}</li>;
        })}
      </ul>
    </header>
  );
};

export default Header;
