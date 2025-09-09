import React from "react";
import NFTGrid from "../../components/NFTGrid";
import Container from "../layout/Container";
import { mockNFTs } from "@/data/nfts";

const ExplorePage = () => {
    return (
        <Container>
            <div className="py-8">
                <h1 className="text-3xl font-bold mb-6">Explore NFTs</h1>
                <NFTGrid nfts={mockNFTs} />
            </div>
        </Container>
    );
};

export default ExplorePage;