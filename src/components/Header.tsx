import logo from "../assets/images/logoBioInnovex.png"

export default function Header() {
    return (
        <div className="flex justify-between items-center p-8 mb-8 bg-white shadow">
            <img src={logo} className="h-12 w-auto"/>
            <div className="flex justify-evenly items-center gap-8 text-blue-500 font-semibold">
                <a href="/">About us</a>
                <a href="/">Our services</a>
                <a href="/">References</a>
                <a href="/">Contacts</a>
            </div>
        </div>
    )
}