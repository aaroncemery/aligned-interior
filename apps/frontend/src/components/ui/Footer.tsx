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
      <div className="bg-brand-aligned-blue fixed bottom-0 -z-20 h-36 w-full overflow-hidden lg:h-40">
        <div className="mx-auto flex items-center justify-center">
          <p className="text-brand-winter-morning font-cinzel transform text-center text-[64px] leading-tight md:text-[96px] md:leading-normal lg:translate-y-0 lg:text-[120px] lg:whitespace-nowrap">
            Aligned Interior
          </p>
        </div>
      </div>
    </>
  );
};
