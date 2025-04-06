/*
    Author :- Prathamesh Kothalkar
*/
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const data = [
        {
            imageUrl: "/sollution.png",
            title: "Solution Challenge",
            description: "The mission of the Solution Challenge is to solve for one or more of the United Nations' 17 Sustainable Development Goals using Google technology.",
            start: "Feb 02, 2025",
            end: "Feb 02, 2025",
            address: "https://gdg.community.dev/events/details/google-gdg-on-campus-zeal-college-of-engineering-research-pune-india-presents-solution-challenge/"
        },
        {
            imageUrl: "/connect.png",
            title: "Tech Winter Break",
            description: "Whether you're a beginner or an experienced coder, this session will give you the tools and guidance to kickstart your journey toward creating impactful solutions.",
            start: "Dec 23, 2024",
            end: "Dec 23, 2024",
            address: "https://gdg.community.dev/events/details/google-gdg-on-campus-zeal-college-of-engineering-research-pune-india-presents-tech-winter-break-gdg_zcoer/"
        },
        {
            imageUrl:"/blockchain.jpg",
            title:"The Power of Blockchain ",
            description:"This entry-level event is crafted for everyone—whether you're a beginner or a tech pro. From core concepts to advanced applications, we've got you covered. Join us and elevate your blockchain knowledge!",
            start:"Nov 21, 2024",
            end:"Nov 21, 2024",
            address:"https://gdg.community.dev/events/details/google-gdg-on-campus-zeal-college-of-engineering-research-pune-india-presents-the-power-of-blockchain/"
        },
        {
            imageUrl:"/genai.png",
            title:"Build with AI",
            description:"Build with AI is an introductory event centered on the fundamentals of Artificial Intelligence, featuring Dr. Rajat Dandekar. Tailored for beginners",
            start:"October 22, 2024",
            end:"October 22, 2024",
            address:"https://gdg.community.dev/events/details/google-gdg-on-campus-zeal-college-of-engineering-research-pune-india-presents-build-with-ai/"
        },
        {
            imageUrl:"/jamstudy.png",
            title:"Google GenAI Study Jam",
            description:"If you've already registered for the GenAI event, keep an eye on your inbox—emails with the next steps will be sent out on 1st October",
            start:"Oct 2, 2024,",
            end:"Oct 2, 2024,",
            address:"https://gdg.community.dev/events/details/google-gdg-on-campus-zeal-college-of-engineering-research-pune-india-presents-introduction-to-google-genai-study-jam/"
        },
        {
            imageUrl:"/connect.png",
            title:"GDG: Intro and Opportunities",
            description:"Join us for the Google Developer Groups On Campus: Intro and Opportunities event! This session will introduce you to Google Developer Groups On Campus ZCOER, showcasing its mission and the exciting opportunities it offers.",
            start:"Sep 29, 2024",
            end:"Sep 29, 2024",
            address:"https://gdg.community.dev/events/details/google-gdg-on-campus-zeal-college-of-engineering-research-pune-india-presents-google-developer-groups-on-campus-intro-and-opportunities/"
        },
    ];

    return (
        <>
            <div className="h-full">
                <div className="relative bg-[url('https://gdgakgec.org/static/media/background9.9ad3cf924bcca4b38f8a.png')] bg-cover bg-center md:bg-fixed h-auto md:h-80 shadow-sm">
                    <div className="p-9">
                        <div className="text-4xl md:text-6xl text-center text-[#202124] mt-6">
                            Events
                        </div>
                        <div className="text-left md:text-center text-xl md:text-2xl text-[#202124] mt-8 p-3 md:p-6">
                            <p>The main motive behind each event conducted by GDG On Campus-ZCOER is to spread knowledge and inspire developers.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mt-14 px-4 md:px-8">
                {data.map((event, index) => (
                    <EventCard key={index} {...event} />
                ))}
            </div>

        </>
    );
}

const EventCard = ({ title, start, end, description, imageUrl, address }) => {
    return (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 w-80 max-w-full m-4 p-2 border-4 border-t-yellow-400 border-l-[#4285F4] border-r-[#0F9D58] border-b-[#DB4437]">
            {/* Image Section */}
            <div className="h-48 relative">
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    layout="fill" 
                    objectFit="contain" 
                    className="rounded-t-xl"
                />
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col justify-between h-56">
                <div>
                    <h3 className="text-lg font-bold text-[#4285F4]">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        {start} - {end}
                    </p>
                    <p className="text-sm text-gray-700 mt-4 line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* Action Button */}
                {address && (
                    <div className="mt-4">
                        <Link href={address} target="_blank">
                            <span className="w-full block text-center bg-[#4285F4] text-white text-sm font-medium py-2 rounded-lg hover:bg-[#FBBC05] transition-colors cursor-pointer">
                                Learn More
                            </span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
