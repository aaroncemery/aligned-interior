import { FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-brand-aligned-black relative z-10 mb-32 rounded-b-xl py-4">
        <div className="container mx-auto flex items-center justify-between px-4 text-center">
          <p className="text-brand-winter-morning text-sm">
            &copy; {currentYear} All rights reserved.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/aligned_interior?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-brand-winter-morning text-2xl" />
            </a>
          </div>
        </div>
      </footer>
      <div className="bg-brand-aligned-blue fixed bottom-0 -z-20 h-48 w-full overflow-hidden md:h-36">
        <div className="mx-auto flex h-full items-end justify-center md:items-center">
          <p className="text-brand-winter-morning font-cinzel transform text-center text-[64px] leading-[1] md:text-[80px] md:whitespace-nowrap lg:translate-y-0 lg:text-[120px]">
            Aligned Interior
          </p>
        </div>
      </div>
    </>
  );
};
