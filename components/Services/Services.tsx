import Image from "next/image";
import { SERVICES_URL } from '@/constants'

const Services = () => {
    return (
        <>
            <div className="flex items-center justify-center">
            <div className="max-container padding-container text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h1>
            </div>
        </div>
            <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">

                <div className="relative z-20 flex flex-1 flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 mb-8 xl:mb-0">
                    <p className="bold-20 text-white">Building Construction and Land Development:</p>
                    <p className="regular-16 text-gray-20">
                        <ul className="regular-16 text-gray-20 list-disc pl-4">
                            <li>Multi-Storied Building Construction</li>
                            <li>Property Development and Consultancy</li>
                        </ul>
                    </p>
                </div>

                <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                    <Image
                        className="inline-block w-600 h-400 rounded-md"
                        src={SERVICES_URL["1st"]}
                        key={SERVICES_URL["1st"]}
                        alt="image"
                        width={800}
                        height={800}
                    />
                </div>


            </section>

            <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">

                <div className="relative z-20 flex flex-1 flex-col gap-8 xl:w-1/2">
                    <Image
                        className="inline-block w-600 h-400 rounded-md"
                        src={SERVICES_URL["2nd"]}
                        key={SERVICES_URL["2nd"]}
                        alt="image"
                        width={800}
                        height={800}
                    />
                </div>

                <div className="relative z-20 flex flex-1 flex-col rounded-3xl bg-green-90 px-7 py-8 mb-8 xl:mb-0">
                    <p className="bold-20 text-white">Construction Materials Supply:</p>
                    <p className="regular-16 text-gray-20">
                        <ul className="regular-16 text-gray-20 list-disc pl-4">
                            <li>Bricks, Cement, Iron, Rod, and Other Building Materials</li>
                            <li>Reliable and Timely Delivery Services</li>
                        </ul>
                    </p>
                </div>



            </section>

            <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">

                <div className="relative z-20 flex flex-1 flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 mb-8 xl:mb-0">
                    <p className="bold-20 text-white">Civil Engineering and Construction Works:</p>
                    <p className="regular-16 text-gray-20">
                        <ul className="regular-16 text-gray-20 list-disc pl-4">
                            <li>Road Construction</li>
                            <li>Bridge and Dam Construction</li>
                        </ul>
                    </p>
                </div>

                <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                    <Image
                        className="inline-block w-600 h-400 rounded-md"
                        src={SERVICES_URL["3rd"]}
                        key={SERVICES_URL["3rd"]}
                        alt="image"
                        width={800}
                        height={800}
                    />
                </div>


            </section>

            <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">

                <div className="relative z-20 flex flex-1 flex-col gap-8 xl:w-1/2">
                    <Image
                        className="inline-block w-600 h-400 rounded-md"
                        src={SERVICES_URL["4th"]}
                        key={SERVICES_URL["4th"]}
                        alt="image"
                        width={800}
                        height={800}
                    />
                </div>

                <div className="relative z-20 flex flex-1 flex-col  rounded-3xl bg-green-90 px-7 py-8 mb-8 xl:mb-0">
                    <p className="bold-20 text-white">Property Dealing and Consultancy:</p>
                    <p className="regular-16 text-gray-20">
                        <ul className="regular-16 text-gray-20 list-disc pl-4">
                            <li>Real Estate Sales and Advisory Services</li>
                            <li>Property Valuation and Investment Consultancy</li>
                        </ul>
                    </p>
                </div>




            </section>

            <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
                <div className="relative z-20 flex flex-1 flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 mb-8 xl:mb-0">
                    <p className="bold-20 text-white">Vehicle Sales and Supplies:</p>
                    <p className="regular-16 text-gray-20">
                        <ul className="regular-16 text-gray-20 list-disc pl-4">
                            <li>New and Used Vehicle Sales</li>
                            <li>Fleet Management Services</li>
                        </ul>
                    </p>
                </div>

                <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                    <Image
                        className="inline-block w-600 h-400 rounded-md"
                        src={SERVICES_URL["5th"]}
                        key={SERVICES_URL["5th"]}
                        alt="image"
                        width={800}
                        height={800}
                    />
                </div>
            </section>
        </>
    );
}

export default Services