import blue_arrow from "../assets/images/blue_arrow.png";
import world from "../assets/images/world.png";

export default function NetworkCoverage() {
    return (
        <div className="bg-cover bg-center flex flex-col p-8 mx-16 gap-64 items-start"
        style={{backgroundImage: `url(${world})`}}>

            <h1 className="text-6xl font-bold text-white">NETWORK &<br/> COVERAGE</h1>

            <div className="flex flex-col gap-4 bg-[rgb(107,215,147)] text-white p-4">
                <div className="flex gap-4 items-center">
                    <img src={blue_arrow} className="h-12 w-12"/>
                    <h2 className="text-4xl">17 Locations</h2>
                </div>
                <div className="flex gap-4 items-center">
                    <img src={blue_arrow} className="h-12 w-12"/>
                    <h2 className="text-4xl">35 Distributors</h2>
                </div>
                <div className="flex gap-4 items-center">
                    <img src={blue_arrow} className="h-12 w-12"/>
                    <h2 className="text-4xl">50+ KOLS</h2>
                </div>
                <div className="flex gap-4 items-center">
                    <img src={blue_arrow} className="h-12 w-12"/>
                    <h2 className="text-4xl">20+ MA Experts</h2>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <p className="text-center text-white text-2xl">
                    We realy on a long-standing network of trusted partners, built over years of collaboration and mutual confidence.<br/>
                    Beyond strong relationships, we bring deep understanding of local business practices and continuously monitor<br/>
                    macroeconomic trends, financial signals, and partner stability to secure reliable performance across markets.
                </p>
            </div>
        </div>
    )
}