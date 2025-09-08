import React from 'react';

const Footer: React.FC = () => (
    <footer className="w-full py-6 px-4 md:px-8 bg-gray-900 text-white text-center">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            <span className="text-sm md:text-base">© {new Date().getFullYear()} NFT Marketplace. All rights reserved.</span>
            <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="/privacy" className="hover:underline text-xs md:text-sm">Privacy</a>
                <a href="/terms" className="hover:underline text-xs md:text-sm">Terms</a>
            </div>
        </div>
    </footer>
);

export default Footer;