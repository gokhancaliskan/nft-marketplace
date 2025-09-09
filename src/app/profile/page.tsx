import React from "react";
import NFTGrid from "../../components/NFTGrid";
import Container from "../layout/Container";
import { mockUserNFTs } from "@/data/userNFTs";

const ProfilePage = () => {
    return (
        <Container>
            <div className="py-8">
                <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">Your NFTs</h1>
                <NFTGrid nfts={mockUserNFTs} />
            </div>
        </Container>
    );
};

export default ProfilePage;
