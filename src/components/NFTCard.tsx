import React from 'react';
import Image from 'next/image';
import { NFT } from '@/types/nft';

interface NFTCardProps {
    nft: NFT;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
    return (
        <div>
            <Image
                src={nft.image}
                alt={nft.title}
                width={400}
                height={224}
                className="w-full h-56 object-cover"
                style={{ objectFit: 'cover' }}
            />
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-gray-900 truncate">{nft.title}</h2>
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Creator: <span className="font-medium text-gray-700">{nft.creator}</span></span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-gray-800 font-bold">{nft.price} ETH</span>
                </div>
            </div>
        </div>
    );
};

export default NFTCard;
