"use client";
import {
  IoCall,
  IoMail,
  IoLocationSharp,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function ContactDetails() {
  const handleClick = (item) => {
    if (item.key === "phone") {
      navigator.clipboard.writeText(item.value);
      toast.success("📞 Phone number copied to clipboard!");
    } else if (item.key === "email") {
      window.location.href = `mailto:${item.value}`;
    } else if (item.link) {
      window.open(item.link, "_blank");
    }
  };

  const items = [
    {
      icon: <IoCall className="text-green-500 text-3xl" />,
      label: "Phone Number",
      value: "+91 98765 43210",
      key: "phone",
    },
    {
      icon: <IoMail className="text-blue-500 text-3xl" />,
      label: "Email ID",
      value: "gdgoczcoer@zealeducation.com",
      key: "email",
    },
    {
      icon: <IoLocationSharp className="text-red-500 text-3xl" />,
      label: "Location",
      value: "Zeal College of Engineering, Pune",
      key: "location",
    },
    {
      icon: <IoLogoInstagram className="text-pink-500 text-3xl" />,
      label: "Instagram",
      value: "@gdgzcoer",
      key: "insta",
      link: "https://www.instagram.com/gdgoc_zcoer?igsh=MTJ3ZHZwbW45amozaw==",
    },
    {
      icon: <IoLogoLinkedin className="text-blue-600 text-3xl" />,
      label: "LinkedIn",
      value: "GDG ZCOER",
      key: "linkedin",
      link: "https://www.linkedin.com/company/gdgoc-zcoer/",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 p-6">
      <div className="backdrop-blur-lg bg-white/60 border border-yellow-200 rounded-3xl shadow-2xl p-10 max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Connect with <span className="text-yellow-600">GDGOC ZCOER</span>
        </h2>
        <p className="text-center text-lg text-gray-700 mb-10">
          Reach out to us for event collaborations, queries, or just to say hi!
        </p>

        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.key}
              onClick={() => handleClick(item)}
              className="flex items-center gap-4 px-4 py-3 bg-white/80 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {item.icon}
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-lg font-medium text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-yellow-700">
            Let’s build the future of tech together 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
