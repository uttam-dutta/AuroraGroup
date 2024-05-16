import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="bold-52 lg:bold-88">Welcome to  Aurora Group</h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            Welcome to  Aurora Group, your one-stop solution for a wide range of business activities and services. With a diverse portfolio and a commitment to excellence, we strive to meet the needs of our clients across various sectors. Explore our offerings and discover how we can assist you in achieving your goals.
          </p>
        </div>
        <div className="relative z-20 flex flex-col items-start flex-1 xl:flex-row">
          <div className="relative z-20 flex flex-1 flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 xl:ml-8">
            <p className="bold-20 text-white">Our Services</p>
            <ul className="regular-16 text-gray-20 list-disc pl-4">
              <li>Government and Semi-Government Contracts</li>
              <li>Building Construction and Land Development</li>
              <li>Property Dealing and Consultancy</li>
              <li>Vehicle Sales and Supplies</li>
              <li>Construction Materials Supply (Bricks, Cement, Iron, etc.)</li>
              <li>Telecom Tower Installation and Services</li>
              <li>Civil Engineering and Construction Works</li>
              <li>Logistic Parks and Warehouses Establishment</li>
              <li>Petroleum Business and Fuel Sales</li>
              <li>Furnishing, Designing, and Renovation Services</li>
            </ul>
            <p className="regular-16 text-gray-20">Explore our website to learn more about our services and how we can support your business endeavors.</p>
          </div>
        </div>

      </section>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">

        <div className="relative z-20 flex flex-1 flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 mb-8 xl:mb-0">
          <p className="bold-20 text-white">Our Vision</p>
          <p className="regular-16 text-gray-20">At Aurora Group, our vision is to be a trusted partner in the development and growth of businesses and infrastructure across India and beyond. We aim to deliver exceptional value and quality in every project we undertake, ensuring satisfaction and success for our clients.</p>
        </div>

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image
            className="inline-block w-600 h-400 rounded-md"
            src='/building-supplies-1.jpg'
            key='/building-supplies-1.jpg'
            alt="image"
            width={800}
            height={800}
          />
        </div>


      </section>
    </>
  )
}
