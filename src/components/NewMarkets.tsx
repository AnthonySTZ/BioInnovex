import NewMarketsColumn from "./NewMarketsColumn";
import NewMarketsText from "./NewMarketsText";

export default function NewMarkets() {
    return (
        <div className="grid grid-cols-5 mx-16 gap-8">
            <NewMarketsColumn />
            <NewMarketsText />
        </div>
    )
}