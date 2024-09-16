import Link from "next/link";

const navLink = [
  {
    href: "/chat",
    title: "chat",
  },
  {
    href: "/tours",
    title: "tours",
  },
  {
    href: "/tours/new-tour",
    title: "new tour",
  },
  {
    href: "/profile",
    title: "profile",
  },
];

export function NavLinks() {
  return (
    <ul className="menu text-base-content">
      {navLink.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="capitalize font-bold ">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
