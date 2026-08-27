export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-24">
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[var(--color-ink)]/30"></div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-ink)]/70">
                Get In Touch
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-[var(--color-ink)] leading-none tracking-tighter mb-12">
              Start the<br />
              <span className="italic font-light">Dialogue.</span>
            </h1>

            <div className="flex flex-col gap-8 mb-16">
              <div>
                <h4 className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-ink)]/50 mb-2">Basecamp</h4>
                <a href="https://maps.google.com/?q=GMS+Road+Dehradun+248001" target="_blank" rel="noopener noreferrer" className="font-serif text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">GMS Road, Dehradun 248001</a>
              </div>
              <div>
                <h4 className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-ink)]/50 mb-2">Direct Line</h4>
                <div className="flex gap-2 items-center">
                  <a href="tel:+919520557784" className="font-serif text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">9520557784</a>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-ink)]/50 mb-2">Email</h4>
                <a href="mailto:xplorethedreams@gmail.com" className="font-serif text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">xplorethedreams@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-[var(--color-ink)] text-[var(--color-paper)] p-12 md:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-serif mb-8">Inquire about an expedition.</h3>
            
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-paper)]/70">Name</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b border-[var(--color-paper)]/20 py-2 text-sm focus:outline-none focus:border-[var(--color-paper)] transition-colors rounded-none placeholder:text-[var(--color-paper)]/30"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-paper)]/70">Email</label>
                <input 
                  type="email" 
                  className="bg-transparent border-b border-[var(--color-paper)]/20 py-2 text-sm focus:outline-none focus:border-[var(--color-paper)] transition-colors rounded-none placeholder:text-[var(--color-paper)]/30"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-paper)]/70">Message</label>
                <textarea 
                  rows={4}
                  className="bg-transparent border-b border-[var(--color-paper)]/20 py-2 text-sm focus:outline-none focus:border-[var(--color-paper)] transition-colors rounded-none resize-none placeholder:text-[var(--color-paper)]/30"
                  placeholder="Tell us about your mountaineering experience..."
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="mt-8 border border-[var(--color-paper)] text-[var(--color-paper)] py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </main>
  );
}
