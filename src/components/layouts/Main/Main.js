import Footer from '@app/components/presentational/Footer';
import Header from '@app/components/presentational/Header';

function MainLayout({ children }) {
  return (
    <div class="container">
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
