"use client";
import { useState } from "react";
import { Locale } from "../../../../../i18n-config";
import Modal from "app/components/modal";
import { useRouter } from "next/navigation";

export default function TestPageModal({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale };
}) {
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();

  const closeModal = () => {
    setShowModal(false);
    router.back();
  };
  return (
    <Modal show={showModal} onClose={closeModal}>
      <h1>
        Test page Modal {id} --- Language {lang}
      </h1>
      <p>This is modal test Intercept route</p>
    </Modal>
  );
}
