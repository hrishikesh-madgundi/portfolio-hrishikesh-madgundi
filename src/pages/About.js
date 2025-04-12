const About = () => (
  <section className="bg-gray-100 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Introduction */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">About Me</h1>
        <p className="text-lg mt-4 text-gray-600">
          I’m <span className="font-bold">Hrishikesh Madgundi</span>, a passionate full-stack developer who enjoys building creative and efficient web applications.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Profile Image */}
        <div className="w-full lg:w-1/2">
          <div className="border-dashed border-2 border-black relative rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D22AQGL9wXNiN05GQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1685352973563?e=1747267200&v=beta&t=rWVJwQnklbVciPjpPRVUPjN7O7c9hWgbmu22nOYA3dA"
              alt="Hrishikesh Madgundi"
              className="object-cover w-full h-full"
            />
           
          </div>
        </div>

        {/* About Text */}
        <div className="w-full lg:w-1/2">
          <div className="border-dashed border-2 border-black bg-white shadow-lg rounded-lg p-8">
            <p className="text-lg text-gray-800">
              As a MERN stack developer, I thrive on solving real-world problems with technology. My core skills lie in developing seamless user interfaces and building robust back-end systems that scale. 
            </p>
            <p className="mt-4 text-lg text-gray-800">
              My journey with web development started out of curiosity, and over the years, it has grown into a true passion. I enjoy blending creativity with logic and pushing the boundaries of what's possible on the web.
            </p>
            <p className="mt-4 text-lg text-gray-800">
              When I'm not coding, you can find me exploring new tech trends or brainstorming new ideas to make the digital world more exciting.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Frontend Development</h3>
            <p className="text-gray-600">Creating modern, responsive, and dynamic UIs with React.js, HTML, and CSS.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Backend Development</h3>
            <p className="text-gray-600">Building scalable, efficient backend systems using Node.js, Express, and MongoDB.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Problem Solving</h3>
            <p className="text-gray-600">Approaching challenges with creative solutions and writing clean, maintainable code.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
