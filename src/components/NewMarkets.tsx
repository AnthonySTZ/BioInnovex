import NewMarketsColumn from "./NewMarketsColumn";
import NewMarketsText from "./NewMarketsText";

export default function NewMarkets() {
    return (
        <div className="flex mx-16 mt-16">
            <NewMarketsColumn />
            <NewMarketsText />
        </div>
    )
}