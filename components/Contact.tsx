const Contact = () => {
  return (
    <section id="contact" className="px-5 sm:px-8 py-8 border-t border-dashed border-white/35">
      <div className="inline-block border border-dashed border-white/35 px-4 py-2 mb-5">
        <span className="font-[family-name:var(--font-geist-sans)] [font-weight:400] text-white/80 text-xs sm:text-sm tracking-tight">
          Looking for a Developer? Let&apos;s Talk.
        </span>
      </div>

      {/* Geist Sans body text */}
      <p className="text-white/65 text-sm sm:text-base leading-relaxed">
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
