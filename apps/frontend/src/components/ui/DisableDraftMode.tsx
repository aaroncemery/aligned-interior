"use client";

import { useTransition, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "@/lib/actions";

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  return (
    <div>
      {pending ? (
        "Disabling draft mode..."
      ) : (
        <button type="button" onClick={disable}>
          Disable draft mode
        </button>
      )}
    </div>
  );
}
