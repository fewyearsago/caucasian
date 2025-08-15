import { PAGES } from "@/config/pages.config";
import { NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import { IMenuItem } from "./menu.data";

interface Props {
  menuItem: IMenuItem;
  isActive: boolean;
}

export function MenuItem({ menuItem, isActive }: Props) {
  return (
    <>
      <NavbarItem>
        <Link
          className={isActive ? "text-emerald-500" : "text-white"}
          href={menuItem.href}
        >
          {menuItem.name}
        </Link>
      </NavbarItem>
    </>
  );
}
