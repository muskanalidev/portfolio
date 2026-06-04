import React from "react";
import { cn } from "@/lib/utils";

const GooeyNav = ({ items }) => {
  return (
    <ul className="flex items-center space-x-6">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default GooeyNav;