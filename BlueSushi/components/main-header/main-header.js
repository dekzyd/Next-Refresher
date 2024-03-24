import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "@/components/main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={logoImg}
            alt="A japanese style plate with food"
            priority
          />
          Blue Sushi
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">BlueSushi Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
