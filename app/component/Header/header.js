'use client'

import Link from "next/link";
import SkipLink from "../skipLink/skipLink";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Header() {
  const items = [
    {
      id: 1,
      title: "Home",
      href: "/",
      activeSegment: null,
    },
    {
      id: 2,
      title: "About",
      href: "/about",
      activeSegment: "about",
    },
    {
      id: 3,
      title: "Contact",
      href: "/contact",
      activeSegment: "contact",
    },
  ];

  // Inside you client component
  const activeSegment = useSelectedLayoutSegment();

  return (
    <header className="header">
      <SkipLink />
      <a href="#" class="logo">
        CompanyLogo
      </a>
      <div class="header-right">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={activeSegment === item.activeSegment ? "active" : ""}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
}
