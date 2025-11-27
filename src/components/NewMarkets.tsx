import NewMarketsColumn from "./NewMarketsColumn";
import NewMarketsText from "./NewMarketsText";

export default function NewMarkets() {
    return (
        <div id="about-us" className="flex flex-col lg:grid lg:grid-cols-2 mx-0 lg:mx-8 gap-8 mb-8">
            <NewMarketsColumn />
            <NewMarketsText />
        </div>
    )
}