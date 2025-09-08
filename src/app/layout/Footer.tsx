import React from 'react';

const Footer: React.FC = () => (
    <footer className="w-full py-4 bg-gray-900 text-white text-center fixed bottom-0 left-0">
        © {new Date().getFullYear()} NFT Marketplace. All rights reserved.
    </footer>
);

export default Footer;