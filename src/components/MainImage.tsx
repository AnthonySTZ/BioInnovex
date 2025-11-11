import purpleStrings from "../assets/images/purple_strings.png"

export default function MainImage() {
    return (
        <div className="transition-all duration-150 ease-in-out flex bg-cover bg-center py-4 md:py-16 mx-4 lg:mx-8"
        style= { { backgroundImage: `url(${purpleStrings})` } }>
            <div className="bg-blue-600/80 p-12 py-24 rounded-r-lg">
                <h1 className="text-3xl lg:text-5xl text-white font-semibold leading-tight">
                    YOU’VE BUILT VALUE<br/>
                    WE HELP YOU UNLOCK<br/>
                    ITS FULL POTENTIAL
                </h1>
            </div>
        </div>
    )
}