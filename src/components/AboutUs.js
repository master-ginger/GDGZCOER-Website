import Head from "next/head";
import { FaUsers, FaLaptopCode, FaLightbulb, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | GDG ZCOER</title>
        <meta
          name="description"
          content="Discover what GDG ZCOER is all about – community, collaboration, and coding!"
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">
            👋 About <span className="text-yellow-500">GDGOC ZCOER</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Where tech enthusiasts, innovators, and learners come together at
            Zeal College of Engineering and Research.
          </p>
        </div>

        <section className="max-w-4xl mx-auto mt-10 grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
            <FaUsers className="text-3xl text-blue-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-700">
                We’re a tight-knit community of developers, students, and tech
                lovers who grow together.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
            <FaLaptopCode className="text-3xl text-green-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Learn by Doing</h3>
              <p className="text-gray-700">
                From hands-on workshops to coding sprints, we believe in
                learning by building real things.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
            <FaLightbulb className="text-3xl text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Inspire Innovation</h3>
              <p className="text-gray-700">
                Explore cutting-edge tech like AI, Cloud, Web Dev & more — and
                use it to create impact.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
            <FaRocket className="text-3xl text-purple-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Future Ready</h3>
              <p className="text-gray-700">
                We help you build the skills, confidence, and network to thrive
                in your tech career 🚀
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-2xl font-semibold text-blue-600">
            💡 Code. Connect. Create. Join the movement at GDGOC ZCOER.
          </p>
        </div>
      </main>
    </>
  );
}
