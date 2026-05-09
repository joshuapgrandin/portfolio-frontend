const ContactMe = () => {
  return (
    <div className="bg-bg-2 p-6">
      {/* Header */}
      <h2 className="text-2xl">
        Open a <span className="text-accent italic">connection</span>
      </h2>
      <p className="text-ink-dim mt-2 text-xs">
        If you're hiring or building something interesting, the easiest way is
        just to message me directly.
      </p>

      {/* Contact rows */}
      <div className="mt-6 flex flex-col">
        <div className="border-line grid grid-cols-[80px_1fr] items-center border-b border-dashed py-3">
          <p className="text-ink-faint text-[10px] tracking-wider uppercase">
            Email
          </p>
          <a
            href="mailto:joshuapgrandin@gmail.com"
            className="text-ink hover:text-accent font-mono text-xs transition-colors"
          >
            joshuapgrandin@gmail.com
          </a>
        </div>
        <div className="border-line grid grid-cols-[80px_1fr] items-center border-b border-dashed py-3">
          <p className="text-ink-faint text-[10px] tracking-wider uppercase">
            GitHub
          </p>
          <a
            href="https://github.com/joshuapgrandin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-accent font-mono text-xs transition-colors"
          >
            github.com/joshuapgrandin
          </a>
        </div>
        <div className="border-line grid grid-cols-[80px_1fr] items-center border-b border-dashed py-3">
          <p className="text-ink-faint text-[10px] tracking-wider uppercase">
            LinkedIn
          </p>
          <a
            href="https://linkedin.com/in/joshpetrie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-accent font-mono text-xs transition-colors"
          >
            in/joshpetrie
          </a>
        </div>
        <div className="border-line grid grid-cols-[80px_1fr] items-center border-b border-dashed py-3">
          <p className="text-ink-faint text-[10px] tracking-wider uppercase">
            CV
          </p>
          <a
            href="/josh-petrie-cv.pdf"
            className="text-ink hover:text-accent font-mono text-xs transition-colors"
          >
            download · pdf
          </a>
        </div>
        <div className="border-line grid grid-cols-[80px_1fr] items-center border-b border-dashed py-3">
          <p className="text-ink-faint text-[10px] tracking-wider uppercase">
            Location
          </p>
          <p className="text-ink font-mono text-xs">
            Manchester · open to remote
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
