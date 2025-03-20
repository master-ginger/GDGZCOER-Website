import React from 'react';
import Image from 'next/image';

const Vision = () => {
  const cards = [
    {
      title: "Connect",
      description:
        "Get a chance to interact with students interested in technical fields from your college as well as from other colleges all over your university. Meet people from industries with the same technical background and connect with people from different backgrounds.",
      image: "/connect.png",
    },
    {
      title: "Learn",
      description:
        "Gain some new technical skills with the help of events, workshops, projects, interviews with ingenious people who will help you get your hands-on experience in various technical fields by learning a range of topics.",
      image: "/learn.png",
    },
    {
      title: "Grow",
      description:
        "Increase your technical aspects, develop your skills and advance your network. Get all that you need to build your better career, and amalgamate all those entities to find solutions for problems in local communities.",
      image: "/Grow.png",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="rounded-md object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;