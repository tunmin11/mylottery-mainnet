'use client';

import MintBox from "@/components/MintBox";
import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";
import dynamic from "next/dynamic";


const WalletProvider = dynamic(() => import("@/components/WalletProvider"), {
    ssr: false,
  })
  

const Mint = () => {
    const BgStyle = {
        backgroundImage: 'url(/images/bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // height: '100%',
        backgroundPosition: 'center',
    };

    return (
        <WalletProvider>
            <div style={BgStyle} className="bg-white h-screen">
                <NavBar 
                    mintVisiable={false}
                />
                <div className="">
                    <MintBox />
                </div>
                <Footer />
            </div>
        </WalletProvider>
    )
}


export default Mint;