import Container from '../layout/Container';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-[80vh] bg-gray-50">
                <Container>
                    <section className="text-center py-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About This Project</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            NFT Marketplace is a demo platform built with Next.js, Tailwind CSS, and Web3 technologies for learning and experimentation.
                        </p>
                    </section>
                </Container>
            </main>
            <Footer />
        </>
    );
}
