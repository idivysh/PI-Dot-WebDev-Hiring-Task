import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-20">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Why Join Us?</h2>
      <HoverEffect items={projects} />
      <h2 className="mt-20 text-3xl font-bold text-center text-white">Why Life at PI Dot</h2>
    </div>
  );
}
export const projects = [
  {
    title: "Mission-Driven Work",
    description:
      "Contribute to meaningful projects that impact millions of lives",
    link: "#",
  },
  {
    title: "Growth Opportunities",
    description:
      "Continuous learning and career advancement programs",
    link: "#",
  },
  {
    title: "Collaborative Culture",
    description:
      "Work with talented, passionate professionals",
    link: "#",
  },
  {
    title: "Comprehensive Benefits",
    description:
      "Health, wellness, and financial benefits for all employees",
    link: "#",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "Access to the latest tools and technologies",
    link: "#",
  },
  {
    title: "Global Impact",
    description:
      "Be part of a company that shapes the future of technology worldwide",
    link: "#",
  },
];
