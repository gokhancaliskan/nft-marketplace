"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import WalletModal from '../../components/WalletModal';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore' },
    { href: '/profile', label: 'Profile' },
    { href: '/about', label: 'About' }
];

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [walletModalOpen, setWalletModalOpen] = useState(false);

    return (
        <>
            <header className="bg-gray-900 text-white">
                <div className="flex items-center justify-between px-4 py-4 md:px-8">
                    <div className="font-bold text-2xl">NFT Marketplace</div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} className="hover:underline">
                                {link.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => setWalletModalOpen(true)}
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                            Connect Wallet
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center px-2 py-1 border border-gray-700 rounded text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <nav className="md:hidden px-4 pb-4 animate-fade-in">
                        <div className="flex flex-col space-y-2 bg-gray-800 rounded-lg shadow-lg p-4">
                            {navLinks.map(link => (
                                <Link key={link.href} href={link.href} className="hover:underline text-white text-lg">
                                    {link.label}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setWalletModalOpen(true);
                                    setMenuOpen(false);
                                }}
                                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors text-left"
                            >
                                Connect Wallet
                            </button>
                        </div>
                    </nav>
                )}
            </header>

            <WalletModal
                isOpen={walletModalOpen}
                onClose={() => setWalletModalOpen(false)}
            />
        </>
    );
};

export default Header;