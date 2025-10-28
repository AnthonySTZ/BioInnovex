const descriptionCSS = "text-xl"

export default function Contacts() {
    return (
        <div id="contacts" className="mx-16 space-y-16">
            <div className="bg-blue-600 text-white p-20">
                <h1 className="text-6xl font-semibold leading-tight">
                    EXECUTIVE TEAM<br/>
                    WITH INTERNATIONAL<br/>
                    PHARMA LEADERSHIP
                    </h1>
            </div>

            <div className="grid grid-cols-5 text-blue-600 gap-4">
                <div />
                <div>
                    <h1 className="text-5xl font-semibold whitespace-nowrap">IRINA RASKINA</h1>
                    <p className="text-xl">PARIS</p>
                </div>
                <div />
                <div>
                    <h1 className="text-5xl font-semibold whitespace-nowrap">LEONID PARSHENKOV</h1>
                    <p className="text-xl">BASEL</p>
                </div>
                <div />
                <div />

                <p className={descriptionCSS}>International Business Development, Licensing & Export Strategy</p>
                <div />
                <p className={descriptionCSS}>Business Acceleration Expansion Strategy</p>
                <div />

                <div />
                <p className={descriptionCSS}>20+y as Country Manager and BD in France, Russia, CIS across Eastern Europe, Turkey, Greece, Balkans</p>
                <div />
                <p className={descriptionCSS}>20+y GM positions with full P&L responsibility across CEE, CIS, Africa, and the Middle East</p>
                <div />
                <div />

                <p className={descriptionCSS}>Expert in Market Access, Promotion, Patient Journey, Reimbursement Pathways,</p>
                <div />
                <p className={descriptionCSS}>Expert in business localization and local stakeholder engagement</p>
                <div />

                <div />
                <a href="mailto:Irina.raskina@bioinnovex" className="text-xl underline">Irina.raskina@bioinnovex</a>
                <div />
                <a href="mailto:Leonid.parshenkov@bioinnovex.com" className="text-xl underline">Leonid.parshenkov@bioinnovex.com</a>
                <div />
            </div>
        </div>
    )
}