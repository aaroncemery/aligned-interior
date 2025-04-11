export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-aligned-black py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-brand-winter-morning text-sm">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
