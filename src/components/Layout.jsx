import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header /> 
      <main className="main">
        {children} {/* Contenuto dinamico passato come prop */}
      </main>
      <Footer /> 
    </div>
  );
}

export default Layout;