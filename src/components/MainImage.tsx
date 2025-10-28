import purpleStrings from "../assets/images/purple_strings.png"

export default function MainImage() {
    return (
        <div className="flex bg-cover bg-center py-32 mx-16"
        style= { { backgroundImage: `url(${purpleStrings})` } }>
            <div className="bg-blue-700/80 p-12 py-24 rounded-r-lg">
                <h1 className="text-6xl text-white font-semibold leading-tight">
                    YOU’VE BUILT VALUE<br/>
                    WE HELP YOU UNLOCK<br/>
                    ITS FULL POTENTIAL
                </h1>
            </div>
        </div>
    )
}