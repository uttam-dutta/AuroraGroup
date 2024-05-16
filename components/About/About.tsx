import React from 'react'

const About = () => {
  return (
    <>
  <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
    <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
      <h1 className="bold-52 lg:bold-88">About Aurora Group</h1>
      <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
       Aurora Group is a dynamic partnership firm specializing in a wide array of business activities and services. With a rich heritage of expertise and a forward-thinking approach, we are dedicated to delivering excellence in every project we undertake.
      </p>
    </div>
    <div className="relative z-20 flex flex-col items-start flex-1 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 xl:ml-8">
        <p className="bold-20 text-white">Our Mission</p>
        <p className="regular-16 text-gray-20">
          Our mission at  Aurora Group is to provide innovative solutions and superior services that contribute to the growth and success of our clients' businesses. We are committed to integrity, professionalism, and continuous improvement in all aspects of our operations.
        </p>
      </div>  
    </div>
  </section>
  <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
    <div className="relative z-20 flex flex-1 flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 mb-8 xl:mb-0">
      <p className="bold-20 text-white">Our Team</p>
      <p className="regular-16 text-gray-20">
        At  Aurora Group, we are proud of our team of professionals who bring extensive experience and passion to their work. From skilled engineers to expert consultants, our team is dedicated to exceeding client expectations and driving positive outcomes.
      </p>
    </div>
    <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
      <div className="relative z-20 flex flex-1 flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
        <p className="bold-20 text-white">Why Choose Us</p>
        <ul className="regular-16 text-gray-20 list-disc pl-4">
          <li>Comprehensive Range of Services</li>
          <li>Commitment to Quality and Excellence</li>
          <li>Experienced and Dedicated Team</li>
          <li>Customer-Centric Approach</li>
          <li>Transparent and Ethical Business Practices</li>
        </ul>
      </div>
    </div>
  </section>
</>

  )
}

export default About