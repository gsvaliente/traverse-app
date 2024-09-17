"use client";

import { useState } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function Provider({ children }) {
  const [queryClient] = useState(() => new queryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}>{children}</ReactQueryDevtools>
    </QueryClientProvider>
  );
}
