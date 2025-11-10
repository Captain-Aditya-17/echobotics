import React from "react";

const About = () => {
  const useCases = [
    {
      id: 1,
      bg: "/use_case1.png",
      icon: "/Mask.png",
      title: (
        <>
          Customer Support <span className="orange">and</span> Sales
        </>
      ),
      description:
        "Deliver customer service that feels human, not scripted. Echobotics AI agents handle FAQs, bookings, troubleshooting, and sales queries instantly, providing 24/7 personalized support that improves satisfaction and reduces workload.",
    },
    {
      id: 2,
      bg: "/use_case2.png",
      icon: "/image44.png",
      title: (
        <>
          <span className="orange">virtual</span> assistant
        </>
      ),
      description:
        "Go beyond simple chatbots with AI agents that schedule tasks, send reminders, and even hold natural conversations. From smart homes to personal digital companions, Echobotics creates assistants that feel truly human.",
    },
    {
      id: 3,
      bg: "/use_case3.png",
      icon: "/edu.png",
      title: (
        <>
          education <span className="orange">and</span> training
        </>
      ),
      description:
        "Turn learning into an engaging two-way experience. With AI tutors who explain, guide, and test knowledge live, students and professionals can learn interactively. Role-play simulations and language partners create deeper, practical training.",
    },
  ];

  return (
    <div className="w-full md:h-[90vh] p-5 flex flex-col md:flex-row gap-10 justify-center items-center relative">
      <div className="flex flex-col gap-4 md:gap-1 w-full md:w-[50%] items-center md:items-start">
        <div className="text-center md:text-left">
          <h4 className="uppercase orange font-[light] opacity-[.5] text-[3vw] md:text-[1.1vw] mb-2">
            Use cases
          </h4>
          <h1 className="text-[8vw] md:text-[3.5vw] font-[bold] uppercase">
            Use <span className="orange">Cases <br /></span> That{" "}
            <span className="orange-bg px-2">Redefine</span> Interaction
            <span className="orange">.</span>
          </h1>
        </div>
        <div className="text-center md:text-left">
          <p className="font-[light] text-[3vw] text-[#C9C9C9] md:text-[1vw]">
            <span className="orange">Echobotics</span> adapts across industries —
            from gaming to customer support — enabling AI agents that listen,
            think, and act instantly. Whether it’s powering NPCs, virtual
            assistants, or AI companions, the possibilities are endless.
          </p>
        </div>
        <button className="mt-5 bg-linear-to-br from-[#1a0b04] via-[#331407] to-[#EC4E02]/40 flex justify-between cursor-pointer border border-[#EC4E02] rounded-lg text-[3vw] md:text-[1vw] font-light items-stretch pl-5 py-2 pr-1 w-[35vw] md:w-[13vw]">
          <h1 className="my-2 md:my-1 md:text-xl font-[light]">View All</h1>
          <span className="orange-bg w-[9vw] md:w-[3vw] rounded flex items-center justify-center text-2xl">
            <i className="ri-arrow-right-up-line"></i>
          </span>
        </button>
      </div>

      <div className="w-full my-3 flex items-center justify-center flex-col gap-10 md:gap-5 md:flex-row">
        {useCases.map((item) => (
          <div
            key={item.id}
            className="w-[80vw] h-[120vw] md:w-[20vw] md:h-[32vw] px-3 pb-10 rounded-xl clipy flex flex-col justify-end md:justify-start md:pt-35 relative"
            style={{
              backgroundImage: `url(${item.bg})`,
              backgroundSize: "cover",
            }}
          >
            <div>
              <div className="w-[15vw] h-[15vw] md:w-[4vw] md:h-[4vw] mb-4 rounded-md border border-[#EC4E02] bg-[#ec4c0256] flex items-center justify-center">
                <img className="w-[70%]" src={item.icon} alt="" />
              </div>
              <h1 className="text-xl md:text-[1.7vw] font-[medium] font-bold uppercase">
                {item.title}
              </h1>
              <p className="text-[#C9C9C9] font-[light] mt-2 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
