import { timeline } from "../data/timeline"
import { timelineInfos } from "../data/timelineInfos"
import TimelineItem from "./TimelineItem"
import InfosItem from "./InfosItem"

export default function Timeline() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-3 text-white text-3xl">
            { 
                timeline.map((text, index) => (
                    <TimelineItem
                    key={index}
                    text={text}
                    isFirst={index == 0}
                    isLast={index == timeline.length - 1} />
                ))
            }
            {
                timelineInfos.map((infos, index) => (
                    <InfosItem
                        key={index}
                        infos={infos}/>
                ))
            }
        </div>
    )
}