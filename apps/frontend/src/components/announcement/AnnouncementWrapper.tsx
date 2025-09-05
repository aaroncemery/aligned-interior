import { sanityFetch } from "@/sanity/lib/fetch";
import { ANNOUNCEMENT_QUERY } from "@/sanity/lib/queries";
import { AnnouncementBanner } from "./AnnouncementBanner";
import { AnnouncementPopup } from "./AnnouncementPopup";

type Announcement = {
  _id: string;
  _createdAt: string;
  title: string;
  image: any;
  content: any[];
  cta: any;
  popup: boolean;
};

export async function AnnouncementWrapper() {
  try {
    const announcement = (await sanityFetch({
      query: ANNOUNCEMENT_QUERY,
    })) as Announcement | null;

    if (!announcement) return null;

    return (
      <>
        {announcement.popup ? (
          <AnnouncementPopup announcement={announcement} />
        ) : (
          <AnnouncementBanner announcement={announcement} />
        )}
      </>
    );
  } catch (error) {
    console.error("Failed to fetch announcement:", error);
    return null;
  }
}
