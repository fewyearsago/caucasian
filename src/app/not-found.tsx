"use client";
interface Props {}
import { PAGES } from "@/config/pages.config";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound({}: Props) {
  return (
    <div className="flex gap-4 flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="text-3xl">Страница не найдена.</p>
      <Button
        as={Link}
        href={PAGES.HOME}
        className="mt-3"
        color="primary"
        variant="bordered"
      >
        Вернуться на главную
      </Button>
    </div>
  );
}
