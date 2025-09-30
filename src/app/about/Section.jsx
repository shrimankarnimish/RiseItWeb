import React from "react";

export default function PortfolioSection() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop",
      title:
        "Every brand has its own growth curve. We design systems that respect that.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=250&fit=crop",
      title: "Good decisions come from data, and the instincts behind it.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop",
      title:
        "Marketing should be measured in business impact, not impressions.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=250&fit=crop",
      title: "Consistency compounds faster than campaigns.",
      company: "Walmart",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=250&fit=crop",
      title: "Every strategy starts with listening, not selling.",
      company: "Walmart",
    },
  ];

  return (
    <div className="min-h-screen bg-[#BCC5CF] flex">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center p-16">
        <div className="text-left">
          <h1 className="text-7xl font-light leading-tight text-gray-600">
            These aren’t just ideas. They’re principles that guide everything{" "}
            <span className="text-[#2E8BFF] font-medium">we do</span>:
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-black p-16 flex flex-col">
        <h2 className="text-xl mb-12" style={{ color: "#BFBFBF" }}>
          The Way We Think
        </h2>

        <div className="space-y-8 flex-1">
          {projects.map((project, index) => (
            <div key={index} className="flex gap-6 groupr">
              <div className="w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-gray-200 text-lg font-light mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm">{project.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
