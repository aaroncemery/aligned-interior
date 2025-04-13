export default function BlogPageSkeleton() {
  return (
    <div className="container mx-auto bg-white px-4">
      <header className="border-brand-interior-green grid grid-cols-1 items-center gap-4 border-t-[1px] border-b-[1px] py-6 lg:grid-cols-2">
        <div className="border-r-brand-interior-green mb-0 max-w-[700px] gap-4 lg:border-r-[1px] lg:pr-12">
          <div className="aspect-square w-full animate-pulse bg-gray-200" />
        </div>
        <div className="space-y-4">
          <div className="h-4 w-32 animate-pulse bg-gray-200" />
          <div className="h-12 w-3/4 animate-pulse bg-gray-200" />
        </div>
      </header>
      <div className="container mx-auto max-w-5xl px-4 py-10">
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-full animate-pulse bg-gray-200" />
              <div className="h-4 w-5/6 animate-pulse bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
