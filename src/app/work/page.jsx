import React from "react";

const workItems = [
  {
    title: "Leads & Conversions",
    subtitle:
      "SEO, PPC, CRO, Email Marketing, Affiliate Marketing, Video Marketing Build pipelines that convert, not just traffic that bounces.",
    videoUrl:
      "https://framerusercontent.com/assets/cTB75mH1aRqp7h0EVnYeN6oMTQk.mp4",
  },
  {
    title: "Visibility & Engagement",
    subtitle:
      "Boost your brand's visibility through strategic engagement channels.",
    videoUrl:
      "https://framerusercontent.com/assets/5iQNkiLslpAvklqo38iSCtiqc.mp4",
  },
  {
    title: "Revenue & Retention",
    subtitle:
      "Remarketing, Marketing Automation, CRM Integration Turn first-time buyers into loyal customers with systems that scale.",
    videoUrl:
      "https://framerusercontent.com/assets/UAZjOmzvHxP6KnTC54NAGANEzyo.mp4",
  },
  {
    title: "Content Strategy",
    subtitle:
      "Drive results with high-impact content tailored to your audience’s journey.",
    videoUrl:
      "https://framerusercontent.com/assets/cTB75mH1aRqp7h0EVnYeN6oMTQk.mp4",
  },
  {
    title: "Social Media Management",
    subtitle:
      "Build a loyal community across platforms through consistent, strategic content.",
    videoUrl:
      "https://framerusercontent.com/assets/5iQNkiLslpAvklqo38iSCtiqc.mp4",
  },
  {
    title: "Analytics & Reporting",
    subtitle:
      "Gain deep insights and optimize marketing decisions with actionable data.",
    videoUrl:
      "https://framerusercontent.com/assets/UAZjOmzvHxP6KnTC54NAGANEzyo.mp4",
  },
  {
    title: "Brand Identity",
    subtitle:
      "Craft a compelling and memorable brand experience from the ground up.",
    videoUrl:
      "https://framerusercontent.com/assets/cTB75mH1aRqp7h0EVnYeN6oMTQk.mp4",
  },
  {
    title: "Email Campaigns",
    subtitle:
      "Engage your subscribers with personalized, automated, and effective emails.",
    videoUrl:
      "https://framerusercontent.com/assets/5iQNkiLslpAvklqo38iSCtiqc.mp4",
  },
  {
    title: "Product Launches",
    subtitle:
      "Launch products with maximum impact using a full-funnel go-to-market strategy.",
    videoUrl:
      "https://framerusercontent.com/assets/UAZjOmzvHxP6KnTC54NAGANEzyo.mp4",
  },
];

const WorkSection = () => {
  return (
    <section className="bg-[#F0F0F2]  pt-36 pb-20 px-4 ">
      {/* Heading */}
      <div className="mb-12 container-wrapper pt-16">
        <h2 className="uh1 mb-8"> Latest Work</h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 container-wrapper">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-xl transform transition duration-500 hover:-translate-y-1"
          >
            {/* Video Section */}
            <div className="w-full h-48 bg-black">
              <video
                src={item.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-[250px]">
              <h3 className="text-xl font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#002B5B] font-light">
                {item.subtitle}
              </p>

              {/* Footer */}
              <div className="mt-6 flex justify-between items-center">
                <div className="bg-[#0D0D0D] px-5 py-2 rounded-full text-white text-sm font-medium cursor-pointer hover:text-[#2E8BFF] transition">
                  Read More
                </div>

                <div className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
