import ContactImage from "./ContactImage";
import irina from "../assets/images/irina.png";
import leonid from "../assets/images/leonid.png";

const descriptionCSS = "text-xl"

export default function Contacts() {
    return (
        <div id="contacts" className="mx-4 lg:mx-8 space-y-16">
            <div className="bg-blue-600 text-white p-8 lg:p-20">
                <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
                    EXECUTIVE TEAM<br/>
                    WITH INTERNATIONAL<br/>
                    PHARMA LEADERSHIP
                    </h1>
            </div>

            <div className="hidden lg:grid grid-cols-5 grid-rows-[auto_auto_auto_auto_auto_auto_auto] gap-6 text-blue-600">

                {/* ==== IRINA ==== */}
                <div className="col-start-2 row-start-1 text-center">
                    <ContactImage image={irina}/>
                </div>
                <h1 className="col-start-2 row-start-2 text-4xl font-semibold whitespace-nowrap text-center">IRINA RASKINA</h1>
                <p  className="col-start-2 row-start-3 text-lg text-center">PARIS</p>
                <p  className={`col-start-2 row-start-4 ${descriptionCSS}`}>International Business Development, Licensing & Export Strategy</p>
                <p  className={`col-start-2 row-start-5 ${descriptionCSS}`}>20+y as Country Manager and BD in France, Russia, CIS across Eastern Europe, Turkey, Greece, Balkans</p>
                <p  className={`col-start-2 row-start-6 ${descriptionCSS}`}>Expert in Market Access, Promotion, Patient Journey, Reimbursement Pathways</p>
                <a href="mailto:Irina.raskina@bioinnovex"
                    className="col-start-2 row-start-7 text-xl underline text-center">
                    Irina.raskina@bioinnovex
                </a>

                {/* ==== LEONID ==== */}
                <div className="col-start-4 row-start-1 text-center">
                    <ContactImage image={leonid}/>
                </div>
                <h1 className="col-start-4 row-start-2 text-4xl font-semibold whitespace-nowrap text-center">LEONID PARSHENKOV</h1>
                <p  className="col-start-4 row-start-3 text-lg text-center">BASEL</p>
                <p  className={`col-start-4 row-start-4 ${descriptionCSS}`}>Business Acceleration Expansion Strategy</p>
                <p  className={`col-start-4 row-start-5 ${descriptionCSS}`}>20+y GM positions with full P&L responsibility across CEE, CIS, Africa, and Middle East</p>
                <p  className={`col-start-4 row-start-6 ${descriptionCSS}`}>Expert in business localization and local stakeholder engagement</p>
                <a href="mailto:Leonid.parshenkov@bioinnovex.com"
                    className="col-start-4 row-start-7 text-xl underline text-center">
                    Leonid.parshenkov@bioinnovex.com
                </a>

            </div>


            <div className="flex lg:hidden flex-col gap-8 text-blue-600">
                <div className="space-y-4">
                    <ContactImage 
                        image={irina}
                    />
                    <div>
                        <h1 className="text-4xl font-semibold whitespace-nowrap">IRINA RASKINA</h1>
                        <p className="text-xl">PARIS</p>
                    </div>
                    <p className={descriptionCSS}>International Business Development, Licensing & Export Strategy</p>
                    <p className={descriptionCSS}>20+y as Country Manager and BD in France, Russia, CIS across Eastern Europe, Turkey, Greece, Balkans</p>
                    <p className={descriptionCSS}>Expert in Market Access, Promotion, Patient Journey, Reimbursement Pathways,</p>
                    <a href="mailto:Irina.raskina@bioinnovex" className="text-xl underline">Irina.raskina@bioinnovex</a>
                </div>

                <div className="space-y-4">
                    <ContactImage 
                        image={leonid}
                    />
                    <div>
                        <h1 className="text-4xl font-semibold whitespace-nowrap">LEONID PARSHENKOV</h1>
                        <p className="text-xl">BASEL</p>
                    </div>
                    <p className={descriptionCSS}>Business Acceleration Expansion Strategy</p>
                    <p className={descriptionCSS}>20+y GM positions with full P&L responsibility across CEE, CIS, Africa, and the Middle East</p>
                    <p className={descriptionCSS}>Expert in business localization and local stakeholder engagement</p>
                    <a href="mailto:Leonid.parshenkov@bioinnovex.com" className="text-xl underline">Leonid.parshenkov@bioinnovex.com</a>
                </div>
            </div>
        </div>
    )
}