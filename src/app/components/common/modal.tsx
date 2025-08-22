"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/modal";
import { ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  size,
}: IProps) {
  return (
    <>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h3 className="text-xl mt-2 text-background font-semibold">
                {title}
              </h3>
            </ModalHeader>
            <ModalBody className="space-y-6 py-3">{children}</ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
