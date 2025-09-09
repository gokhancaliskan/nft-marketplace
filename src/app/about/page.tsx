import Container from '../layout/Container';

export default function AboutPage() {
    return (
        <Container>
            <div className="max-w-4xl mx-auto py-16">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <div className="mb-8">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        About NFT Marketplace
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        A modern, responsive NFT marketplace built with cutting-edge web technologies for learning and experimentation.
                    </p>
                </section>

                {/* Project Details */}
                <section className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
                        <p className="text-gray-600 leading-relaxed">
                            This NFT Marketplace is a demo platform designed to showcase modern web development practices.
                            It features a clean, responsive design and demonstrates how to build scalable applications
                            using React-based frameworks.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The project focuses on user experience, performance optimization, and maintainable code structure,
                            making it an excellent learning resource for developers interested in Web3 and modern frontend development.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Technologies Used</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border">
                                <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Next.js 14</li>
                                    <li>• React 18</li>
                                    <li>• TypeScript</li>
                                    <li>• Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border">
                                <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Responsive Design</li>
                                    <li>• Component Architecture</li>
                                    <li>• Mobile-First</li>
                                    <li>• Type Safety</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Design</h3>
                            <p className="text-gray-600 text-sm">Optimized for all devices with mobile-first approach and flexible layouts.</p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Type Safety</h3>
                            <p className="text-gray-600 text-sm">Built with TypeScript for better development experience and fewer runtime errors.</p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Stack</h3>
                            <p className="text-gray-600 text-sm">Latest Next.js features with App Router, React Server Components, and more.</p>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
}
