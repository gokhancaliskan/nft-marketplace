import Container from '../layout/Container';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function ProfilePage() {
    return (
        <>
            <Header />
            <main className="min-h-[80vh] bg-gray-50">
                <Container>
                    <section className="text-center py-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Your Profile</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            View your owned NFTs, track your activity, and manage your account settings.
                        </p>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-gray-400">
                            Profile details and NFT list will be shown here soon.
                        </div>
                    </section>
                </Container>
            </main>
            <Footer />
        </>
    );
}
