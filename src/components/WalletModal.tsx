"use client";
import React from 'react';

interface WalletModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const walletOptions = [
    {
        name: 'MetaMask',
        icon: (
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
            </div>
        ),
        description: 'Connect using browser extension'
    },
    {
        name: 'WalletConnect',
        icon: (
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
            </div>
        ),
        description: 'Scan with mobile wallet'
    }
];

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-auto relative">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-xl font-bold text-gray-900">Connect Wallet</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    <p className="text-gray-600 mb-6">Choose your preferred wallet to connect to the marketplace</p>

                    <div className="space-y-3">
                        {walletOptions.map((wallet) => (
                            <button
                                key={wallet.name}
                                className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors"
                                onClick={() => {
                                    // TODO: Handle wallet connection
                                    console.log(`Connecting to ${wallet.name}`);
                                    onClose();
                                }}
                            >
                                {wallet.icon}
                                <div className="ml-4 text-left">
                                    <div className="font-semibold text-gray-900">{wallet.name}</div>
                                    <div className="text-sm text-gray-500">{wallet.description}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletModal;
