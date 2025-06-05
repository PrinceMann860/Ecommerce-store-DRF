import React from 'react'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8" style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/shopping-pattern-background-design_260839-17.jpg')" }}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Us!</h1>
        <p className="text-lg text-gray-700 mb-12">
          We are a passionate team committed to delivering the best products and services. Our mission is to create value through innovation, dedication, and a customer-first mindset.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Pritam mann</h3>
              <p className="text-gray-600 text-lg">Lead Developer</p>
              <p className="text-gray-600 bg-gray-100 p-7">As a Lead Developer, I leverage my extensive experience to guide projects and teams to success. My role involves not only building robust software solutions but also mentoring junior developers and promoting best practices. By staying current with industry trends, I ensure we implement innovative solutions that enhance efficiency and user experience, ultimately driving our development goals forward.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Tanish Mann</h3>
              <p className="text-gray-600 text-lg">UI/UX Designer</p>
              <p className="text-gray-600 bg-gray-100 p-7">As a UI/UX Designer, I focus on creating intuitive and engaging user experiences. My work involves researching user needs, designing interfaces, and testing prototypes to ensure usability. By collaborating closely with developers and stakeholders, I strive to create designs that not only look great but also enhance functionality and user satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
