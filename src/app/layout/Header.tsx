import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
            <div className="font-bold text-2xl">NFT Marketplace</div>
            <nav>
                <Link href="/" className="text-white mr-4 hover:underline">Home</Link>
                <Link href="/explore" className="text-white mr-4 hover:underline">Explore</Link>
                <Link href="/profile" className="text-white hover:underline">Profile</Link>
            </nav>
        </header>
    );
};

export default Header;