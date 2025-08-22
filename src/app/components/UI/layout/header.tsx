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
import { MENU } from "@/app/components/menu.data";
import { MenuItem } from "@/app/components/MenuItem";
import { layoutConfig } from "@/config/layout.config";
import RegistrationModal from "@/app/components/UI/modals/registration.modal";
import { useState } from "react";
import LoginModal from "@/app/components/UI/modals/login.modal";

export default function App() {
  const pathname = usePathname();

  const [isRegOpen, setIsRegOpen] = useState(false);
  const [isLogOpen, setIsLogOpen] = useState(false);

  return (
    <Navbar style={{ height: layoutConfig.headerHeight }}>
      <NavbarBrand>
        <Link href={PAGES.HOME}>
          <p className="font-bold text-white">Bashlam</p>
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
          <Button
            onPress={() => setIsLogOpen(true)}
            className="text-white"
            as={Link}
            color="default"
            href="#"
            variant="light"
          >
            Логин
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            onPress={() => setIsRegOpen(true)}
            className="text-white"
            as={Link}
            color="success"
            href="#"
            variant="flat"
          >
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>

      <RegistrationModal
        isOpen={isRegOpen}
        onClose={() => setIsRegOpen(false)}
      />
      <LoginModal isOpen={isLogOpen} onClose={() => setIsLogOpen(false)} />
    </Navbar>
  );
}
