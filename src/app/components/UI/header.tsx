"use client";

import { PAGES } from "@/config/pages.config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import { MENU } from "../menu.data";
import { MenuItem } from "../MenuItem";
import { layoutConfig } from "@/config/layout.config";

export default function App() {
  const pathname = usePathname();

  return (
    <Navbar style={{ height: layoutConfig.headerHeight }}>
      <NavbarBrand>
        <Link href={PAGES.HOME}>
          <p className="font-bold text-inherit">Bashlam</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {MENU.map((el) => (
          <MenuItem
            key={el.name}
            menuItem={el}
            isActive={pathname === el.href}
          />
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Логин</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
