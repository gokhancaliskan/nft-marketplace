import React from "react";
import NFTGrid from "@/components/NFTGrid";
import { mockNFTs } from "@/data/nfts";

const ExplorePage = () => {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Explore NFTs</h1>
            <NFTGrid nfts={mockNFTs} />
        </main>
    );
};

export default ExplorePage;