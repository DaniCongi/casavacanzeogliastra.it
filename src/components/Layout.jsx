import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Componente Header */}
      <main className="flex-grow p-4">
        {children} {/* Contenuto dinamico passato come prop */}
      </main>
      <Footer /> {/* Componente Footer */}
    </div>
  );
}

export default Layout;