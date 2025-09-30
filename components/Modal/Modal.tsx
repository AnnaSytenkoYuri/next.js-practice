'use client';

import { useRouter } from 'next/router';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const close = () => router.back();
  return (
    <>
      <div>
        {children}
        <button onClick={close}>Close</button>
      </div>
    </>
  );
}
