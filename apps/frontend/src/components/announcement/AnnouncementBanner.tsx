"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { ButtonOrLink } from "../ui/ButtonOrLink";
import { X } from "lucide-react";
import { urlForImage } from "@/sanity/lib/utils";

interface AnnouncementBannerProps {
  announcement: {
    _id: string;
    _createdAt: string;
    title: string;
    image: any;
    content: any[];
    cta: any;
    popup: boolean;
  };
}

export function AnnouncementBanner({ announcement }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const dismissedAnnouncements = JSON.parse(
      localStorage.getItem("dismissedAnnouncements") || "[]",
    );

    if (dismissedAnnouncements.includes(announcement._id)) {
      setIsVisible(false);
    } else {
      // Start animation after component mounts
      setTimeout(() => setIsAnimating(true), 100);
    }
  }, [announcement._id]);

  const handleDismiss = () => {
    const dismissedAnnouncements = JSON.parse(
      localStorage.getItem("dismissedAnnouncements") || "[]",
    );

    if (!dismissedAnnouncements.includes(announcement._id)) {
      dismissedAnnouncements.push(announcement._id);
      localStorage.setItem(
        "dismissedAnnouncements",
        JSON.stringify(dismissedAnnouncements),
      );
    }

    // Smooth fade out animation
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`relative border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 transition-all duration-300 ease-out ${
        isAnimating ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 flex-1 items-center space-x-4">
            {announcement.image && (
              <div className="flex-shrink-0">
                <Image
                  src={urlForImage(announcement.image)?.url() || ""}
                  alt={announcement.title}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-medium text-gray-900">
                {announcement.title}
              </h3>
              <div className="line-clamp-1 text-sm text-gray-600">
                <PortableText value={announcement.content} />
              </div>
            </div>
            {announcement.cta && (
              <div className="flex-shrink-0">
                <ButtonOrLink
                  {...announcement.cta}
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-indigo-700"
                >
                  {announcement.cta.label}
                </ButtonOrLink>
              </div>
            )}
          </div>
          <button
            onClick={handleDismiss}
            className="ml-4 flex-shrink-0 p-1 text-gray-400 transition-colors hover:text-gray-500"
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
