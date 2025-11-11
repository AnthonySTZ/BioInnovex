import NewMarketsColumn from "./NewMarketsColumn";
import NewMarketsText from "./NewMarketsText";

export default function NewMarkets() {
    return (
        <div id="about-us" className="flex flex-col lg:grid lg:grid-cols-5 mx-4 lg:mx-16 gap-8">
            <NewMarketsColumn />
            <NewMarketsText />
        </div>
    )
}