"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { ButtonOrLink } from "../ui/ButtonOrLink";
import { X } from "lucide-react";
import { urlForImage } from "@/sanity/lib/utils";

interface AnnouncementPopupProps {
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

export function AnnouncementPopup({ announcement }: AnnouncementPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const dismissedAnnouncements = JSON.parse(
      localStorage.getItem("dismissedAnnouncements") || "[]",
    );

    if (!dismissedAnnouncements.includes(announcement._id)) {
      setShouldShow(true);
      // Show popup after 1 second delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Start animation slightly after visibility
        setTimeout(() => setIsAnimating(true), 50);
      }, 1000);

      return () => clearTimeout(timer);
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleDismiss();
    }
  };

  if (!shouldShow || !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        isAnimating ? "bg-black/20" : "bg-black/0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ease-out ${
          isAnimating
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-95 opacity-0"
        }`}
      >
        <div className="relative flex min-h-[400px] flex-col md:flex-row">
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 z-20 rounded-full bg-white/80 p-2 text-gray-400 shadow-sm backdrop-blur-sm transition-colors hover:text-gray-600"
            aria-label="Close announcement"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image Section */}
          {announcement.image && (
            <div className="relative h-64 md:h-auto md:w-1/2">
              <Image
                src={urlForImage(announcement.image)?.url() || ""}
                alt={announcement.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content Section */}
          <div
            className={`${announcement.image ? "md:w-1/2" : "w-full"} flex flex-col justify-center p-8 md:p-12`}
          >
            <div className="mx-auto max-w-md md:mx-0">
              <h2 className="mb-4 text-2xl leading-tight font-bold text-gray-900 md:text-3xl">
                {announcement.title}
              </h2>

              <div className="prose prose-sm mb-8 max-w-none leading-relaxed text-gray-600">
                <PortableText value={announcement.content} />
              </div>

              {announcement.cta && (
                <div className="space-y-4">
                  <ButtonOrLink
                    {...announcement.cta}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-base font-medium text-white shadow-lg transition-colors hover:bg-gray-800 hover:shadow-xl"
                    onClick={handleDismiss}
                  >
                    {announcement.cta.title}
                  </ButtonOrLink>

                  <button
                    onClick={handleDismiss}
                    className="w-full py-2 text-sm text-gray-500 transition-colors hover:text-gray-700"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
