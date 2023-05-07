import { FaDiscord, FaFacebook, FaTwitter } from  "react-icons/fa"

const Footer = () => {

    return (
        <div className="w-full bg-white bottom-0 fixed">
            <hr className="h-1 rounded-full bg-gradient-to-r from-red-500 to-pink-500 animate-pulse" />
            <div className="flex justify-center gap-8 py-3">
                <a href="https://discord.gg/2rnkY6fBEN">
                    <FaDiscord className="text-3xl text-gray-500 hover:text-indigo-500 transform duration-200"/>
                </a>
                <a href="https://twitter.com/MyLotteryNFT">
                    <FaTwitter className="text-3xl text-gray-500 hover:text-sky-500 transform duration-200"/>
                </a>
                <a href="https://www.facebook.com/MyLotteryNFT">
                    <FaFacebook className="text-3xl text-gray-500 hover:text-blue-700 transform duration-200"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;