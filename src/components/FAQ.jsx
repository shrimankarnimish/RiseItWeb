import { useState } from "react";

const faqs = [
  {
    id: 1,
    question:
      "I already have an in-house marketing person. Can you still help?",
    answer:
      "Absolutely. We often collaborate with in-house teams to bring in deeper expertise, structure, and analytics. Think of us as the extension that fills the gaps.",
  },
  {
    id: 2,
    question: "Do you work within IR35?",
    answer: "Yes, we ensure compliance with IR35 regulations where applicable.",
  },
  {
    id: 3,
    question: "What agency projects have you been involved with?",
    answer:
      "We have worked with multiple agencies including XYZ, ABC, and more.",
  },
  {
    id: 4,
    question: "What are your expertise?",
    answer:
      "Our expertise includes web development, design, and digital marketing.",
  },
  {
    id: 5,
    question: "What is the typical project timeline?",
    answer:
      "Project timelines vary, but we strive to deliver within agreed deadlines.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="titleabout text-center text-[#BFBFBF] mb-12">
          What Clients Usually Ask
        </h2>

        <div className="space-y-6">
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              onClick={() => toggleFAQ(id)}
              className="bg-white rounded-xl shadow-md border border-gray-200 
                         transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              aria-expanded={openId === id}
            >
              <div className="flex justify-between items-center px-6 py-4">
                <h3 className="uhp">
                  {question}
                </h3>

                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                    openId === id ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>

              {/* Animated answer */}
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                  openId === id
                    ? "max-h-40 opacity-100 px-6 pb-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[1.1rem] font-light text-[#0D0D0D] leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
