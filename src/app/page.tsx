import Container from './layout/Container';

export default function Page() {
  return (
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
          className="inline-block px-8 py-3 dark:bg-gray-50 text-white dark:text-gray-900 rounded-lg font-bold text-lg shadow hover:bg-gray-800 hover:text-gray-50 transition"
        >
          Explore Marketplace
        </a>
      </section>
    </Container>
  );
}