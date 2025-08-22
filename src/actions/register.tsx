"use server";

import { IFormData } from "@/types/formData";
import prisma from "@/utils/prisma";

export async function registerUser(formData: IFormData) {
  const { email, password, confirmPassword } = formData;

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    return user;
  } catch (error) {
    console.error("Ошибка регистрации", error);
  }
}
