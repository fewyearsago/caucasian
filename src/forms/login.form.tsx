"use client";

import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";

interface IProps {
  onClose: () => void;
}

export function LoginForm({ onClose }: IProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Form className="px-4 py-2 flex gap-2" onSubmit={handleSubmit}>
      <Input
        isRequired
        errorMessage="Введите правильный E-Mail"
        name="email"
        value={formData.email}
        placeholder="Введите почту"
        type="email"
        validate={(value) => {
          if (!value) return "Почта обязательна";
          return null;
        }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <Input
        isRequired
        name="password"
        placeholder="Введите пароль"
        type="password"
        value={formData.password}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        validate={(value) => {
          if (!value) return "Пароль обязателен";
          return null;
        }}
      />

      <div className="flex w-[100%] mt-2 gap-4 items-center justify-end">
        <Button variant="light" onPress={onClose}>
          Отмена
        </Button>
        <Button color="primary" type="submit">
          Войти
        </Button>
      </div>
    </Form>
  );
}
