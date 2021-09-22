import { Link } from 'react-router-dom';

import "../../Assets/css/flexbox.css";
import "../../Assets/css/reset.css";
import "../../Assets/css/style.css";

import logo from "../../Assets/img/Logo-Branca.png";

function App() {
  return (
    <div>
      <header className="cabecalhoPrincipal">
      <div className="container">
          <Link to="/"><img src={logo} alt="logo dos Classificados" /></Link>

          <nav className="cabecalhoPrincipal-nav">
            <Link to="/">Home</Link>
            <Link to="anunciar">Anunciar</Link>
            <Link className="cabecalhoPrincipal-nav-login" to="login" >Login</Link>
            {/* <a className="cabecalhoPrincipal-nav-login" href="login">Login</a> */}
          </nav>
        </div>
      </header>
      
      
    </div>
  );
}

export default App;
