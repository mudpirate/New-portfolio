const Contact = () => {
  return (
    <section id="contact" className="px-5 sm:px-8 lg:px-10 xl:px-12 py-8 md:py-10 lg:py-12 border-t border-dashed border-white/35">
      <div className="inline-block border border-dashed border-white/35 px-4 py-2 mb-5 lg:mb-6">
        <span className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/80 text-xs sm:text-sm lg:text-base tracking-tight">
          Looking for a Developer? Let&apos;s Talk.
        </span>
      </div>

      <p className="text-white/65 text-sm sm:text-base lg:text-[17px] leading-relaxed">
        Think I&apos;m the right fit? Let&apos;s make it official —{" "}
        <a
          href="mailto:nomeshsingh33@gmail.com"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          schedule a meeting.
        </a>
      </p>
    </section>
  );
};

export default Contact;
