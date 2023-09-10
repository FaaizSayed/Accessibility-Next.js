import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <a href="#default" class="logo">
        CompanyLogo
      </a>
      <div class="header-right">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
}
