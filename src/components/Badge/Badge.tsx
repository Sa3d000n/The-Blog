import React from "react";

type BadgeProps = {
  title:
    | "Design"
    | "Research"
    | "Presentation"
    | "Interface"
    | "Leadership"
    | "Management"
    | "Product"
    | "Frameworks"
    | "Software Development";
};



const badgeStyles: Record<string, { bg: string; color: string }> = {
  Design: { bg: "bg-purple-100", color: "text-purple-700" },
  Research: { bg: "bg-blue-100", color: "text-blue-700" },
  Presentation: { bg: "bg-yellow-100", color: "text-yellow-700" },
  Interface: { bg: "bg-pink-100", color: "text-pink-700" },
  Leadership: { bg: "bg-green-100", color: "text-green-700" },
  Management: { bg: "bg-orange-100", color: "text-orange-700" },
  Product: { bg: "bg-cyan-100", color: "text-cyan-700" },
 Frameworks: { bg: "bg-indigo-100", color: "text-indigo-700" },
  "Software Development": { bg: "bg-red-100", color: "text-red-700" },
};

export default function Badge({ title }: BadgeProps) {
  
  const style = badgeStyles[title] || {
    bg: "bg-gray-100",
    color: "text-gray-700",
  };

  return (
    <span
      className={`rounded-full ${style.bg} px-2.5 py-0.5 text-sm whitespace-nowrap ${style.color}`}
    >
      {title}
    </span>
  );
}
