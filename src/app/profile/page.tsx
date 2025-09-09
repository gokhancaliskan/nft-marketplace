import React from "react";
import NFTGrid from "@/components/NFTGrid";
import { mockUserNFTs } from "@/data/userNFTs";

const ProfilePage = () => {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Your NFTs</h1>
            <NFTGrid nfts={mockUserNFTs} />
        </main>
    );
};

export default ProfilePage;
