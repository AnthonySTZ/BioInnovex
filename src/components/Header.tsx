import logo from "../assets/images/logoBioInnovex.png"

export default function Header() {
    return (
        <div className="flex justify-between items-center p-8 bg-white shadow">
            <a href="/"><img src={logo} className="h-12 w-auto"/></a>
            <div className="text-lg flex justify-evenly items-center gap-8 text-blue-500 font-semibold">
                <a href="/">About us</a>
                <a href="#our-services">Our services</a>
                <a href="#references">References</a>
                <a href="#contacts">Contacts</a>
            </div>
        </div>
    )
}