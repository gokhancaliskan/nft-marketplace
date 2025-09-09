import React from 'react';
import NFTCard from './NFTCard';
import { NFT } from '@/types/nft';

interface NFTGridProps {
    nfts: NFT[];
}

const NFTGrid: React.FC<NFTGridProps> = ({ nfts }) => {
    if (!nfts || nfts.length === 0) {
        return (
            <div className="w-full text-center py-12 text-gray-400 text-lg">No NFTs found</div>
        );
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {nfts.map((nft, idx) => (
                <NFTCard
                    key={idx}
                    nft={nft}
                />
            ))}
        </div>
    );
};

export default NFTGrid;

