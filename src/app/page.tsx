import Container from './layout/Container';
import Header from './layout/Header';
import Footer from './layout/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] bg-gray-50">
        <Container>
          <section className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Hello NFT Marketplace
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The leading NFT Marketplace for digital art, collectibles, and more.
            </p>
            <a
              href="/explore"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-bold text-lg shadow hover:bg-gray-800 transition"
            >
              Explore Marketplace
            </a>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}