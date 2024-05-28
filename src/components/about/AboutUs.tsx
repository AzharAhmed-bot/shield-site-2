import Landing from "./Landing";
import CompanyValues from "./CompanyValues";
import Team from "./Team";
import CompanyMission from "./CompanyMission";
import { values } from "../../constants";
import { missionStatement } from "../../constants";
import Partners from "./Partners";
import Footer from "../Common/Footer";

export default function AboutUs() {
    return (
        <>
            <Landing />
            {/* Values items */}
            <div className="flex flex-col-reverse lg:bg-black lg:flex-row min-h-full font-sans items-center lg:items-center justify-center">
                {values.map((value, index) => (
                    <CompanyValues key={index} {...value} />
                ))}
            </div>
            {/* Company mission and vision */}
            <div className="flex flex-col lg:mt-[-80px]  w-full lg:flex-row min-h-full font-sans items-center justify-center p-8">
                {missionStatement.map((value, index) => (
                    <CompanyMission key={index} {...value} />
                ))}
            </div>

            {/* Partners */}
            <Partners/>

            {/* Team */}
            <Team/>

            {/* Footer */}
            <Footer/>
        </>
    );
}
