import {useState} from 'react'

function Work() {
  const [work, setWork] = useState([
    {
      image: 'https://via.placeholder.com/150',
      title: 'Project 1',
      codeLink: 'https://github.com',
      demoLink: 'https://github.com',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Project 2',
      codeLink: 'https://github.com',
      demoLink: 'https://github.com',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Project 3',
      codeLink: 'https://github.com',
      demoLink: 'https://github.com',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Project 4',
      codeLink: 'https://github.com',
      demoLink: 'https://github.com',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Project 5',
      codeLink: 'https://github.com',
      demoLink: 'https://github.com',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Project 6',
      codeLink: 'https://github.com',
      demoLink: 'https://github.com',
    },
  ]);

  return (
    <div className="container md:w-[85%] lg:w-[65%] mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Work</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {work.map((project, index) => (
          <div
            key={index}
            className="project bg-gray-800 rounded-lg overflow-hidden transition-all hover:shadow-lg shadow-amber-50 hover:shadow-slate-50"
          >
            <img
              className="object-cover w-full h-48"
              src={project.image}
              alt={project.title}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 truncate line-clamp-3">{project.description}</p>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  className="text-xs font-medium text-white hover:text-blue-500"
                >
                  Code
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  className="text-xs font-medium text-white hover:text-blue-500"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work