import cells from "../assets/images/cells.png"

export default function NewMarketsColumn() {
    return (
        <div className="col-span-2 flex flex-col">
            <div className="grid grid-rows-2 bg-cover bg-center"
            style={{ backgroundImage: `url(${cells})` }}>
                <div></div>
                <div className="bg-blue-600/70 flex items-center justify-center">
                    <p className="text-white text-5xl font-bold p-4">
                    BIOINNOVEX OPENS<br />
                    NEW MARKETS FOR<br />
                    YOUR PRODUCTS
                    </p>
                </div>
            </div>

            <div className="flex flex-col bg-blue-700/40 p-8 gap-8">
                <div className="space-y-2">
                    <p className="text-5xl text-blue-600 font-semibold">YOU HAVE STRONG PORTEFOLIO</p>
                    <p className="text-white text-2xl">Efficient processes, and a highperforming team.</p>
                </div>
                <div className="space-y-2">
                    <p className="text-5xl text-blue-600 font-semibold">YOU ARE FOCUSED ON YOUR CORE MARKETS</p>
                    <p className="text-white text-2xl">Where you are structured to succeed.</p>
                </div>
                <div className="space-y-2">
                    <p className="text-5xl text-blue-600 font-semibold">YOU KEEP FULL CONTROL RESOURCES</p>
                    <p className="text-white text-2xl">Expand internationally without the need for significant internal investment.</p>
                </div>
            </div>
        </div>
    )
}