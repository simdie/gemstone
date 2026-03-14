"use client";

import { ReactNode } from "react";
import { AppointmentModalProvider } from "@/components/appointment-modal";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AppointmentModalProvider>
      {children}
    </AppointmentModalProvider>
  );
}
