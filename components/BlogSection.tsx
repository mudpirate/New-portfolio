const BlogSection = () => {
  return (
    <section id="blog" className="px-5 sm:px-8 lg:px-10 xl:px-12 py-8 md:py-10 lg:py-12 border-t border-dashed border-white/35">
      <div className="inline-block px-1 py-2 mb-6 lg:mb-8">
        <span className="font-[family-name:var(--font-geist-sans)] [font-weight:100] text-2xl sm:text-2xl md:text-2xl lg:text-3xl text-white tracking-tight leading-tight">
          Sharing what I learn
        </span>
      </div>

      <div className="flex items-center gap-3 py-6">
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        <p className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/45 text-sm lg:text-[15px] tracking-tight">
          In progress — blog posts coming soon.
        </p>
      </div>
    </section>
  );
};

export default BlogSection;
