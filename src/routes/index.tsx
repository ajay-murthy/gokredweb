import { createFileRoute } from "@tanstack/react-router";
import { StorySection, ColRow } from "@/components/StorySection";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <main className="w-full overflow-x-hidden bg-[#0a0a0a]">
      {/* Top nav, fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-5 mix-blend-difference text-white">
        <p className="font-display text-lg tracking-tight">GOKRED</p>
        <nav className="hidden gap-8 text-[11px] font-bold uppercase tracking-[0.2em] md:flex">
          <a href="#story">Story</a>
          <a href="#how">How it works</a>
          <a href="#chain">Ledger</a>
          <a href="#join">Get the app</a>
        </nav>
        <a
          href="#join"
          className="rounded-full border border-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em]"
        >
          Download
        </a>
      </header>

      <div id="story" />

      <StorySection
        index="01"
        kicker="Who we are"
        title={<>Every<br />Credential.<br />One Identity.</>}
        bg="#FD5200"
        fg="#ffffff"
        rule="#000000"
      >
        <p className="mt-auto max-w-[55ch] text-[clamp(0.9rem,2.2vw,1.9rem)] font-normal leading-relaxed">
          Gokred is a mobile app that turns your national ID into the master key for every degree,
          diploma, license, and badge you've ever earned · verified, portable, and yours.
        </p>
      </StorySection>

      <StorySection
        index="02"
        kicker="The problem"
        title={<>Paper<br />Lies.<br />Verification<br />Takes Weeks.</>}
        bg="#0a0a0a"
        fg="#ffffff"
      >
        <p className="max-w-[55ch] text-[clamp(0.9rem,2.2vw,1.9rem)] font-normal leading-relaxed">
          Certificates get lost. Transcripts get faked. Background checks crawl for weeks while
          opportunities slip away. The credential system was built for filing cabinets · not for life.
        </p>
        <hr className="border-none border-t border-white/40" />
        <ColRow
          items={[
            { label: "$600B", body: "Lost yearly to credential fraud and hiring delays worldwide." },
            { label: "21 days", body: "Average time to verify a single university degree manually." },
            { label: "1 in 3", body: "Job seekers carry at least one unverifiable certificate." },
          ]}
        />
      </StorySection>

      <StorySection
        index="03"
        kicker="The timeline"
        title={<>Your Life,<br />In One<br />Scroll.</>}
        bg="#F5F0E8"
        fg="#0a0a0a"
      >
        <p className="max-w-[55ch] text-[clamp(0.9rem,2.2vw,1.9rem)] font-normal leading-relaxed">
          Log in with your national ID. Your name, photo, and date of birth flow in from the social
          registry. Every credential ever issued to you · school report cards, university degrees,
          professional licenses, micro-courses · lines up in a beautiful chronological timeline.
        </p>
        <hr className="border-none border-t border-black/40" />
        <ColRow
          items={[
            { label: "Permanent", body: "Degrees and diplomas pinned for life with issuer signature." },
            { label: "Time-bound", body: "Licenses with live expiry, renewal reminders, and revocation." },
            { label: "Micro", body: "Courses, badges, workshops · every small win counts and stacks." },
          ]}
        />
      </StorySection>

      <StorySection
        index="04"
        kicker="Capture & verify"
        title={<>Snap.<br />Verified.<br />Done.</>}
        bg="#1A3DE8"
        fg="#ffffff"
      >
        <p className="max-w-[55ch] text-[clamp(0.9rem,2.2vw,1.9rem)] font-normal leading-relaxed">
          Found an old paper certificate? Point the camera. Gokred OCRs it, pings the original
          issuer, and stamps it Verified · or flags it Unverified · in seconds. Then it joins your
          timeline, signed and anchored.
        </p>
        <hr className="border-none border-t border-white/40" />
        <ColRow
          items={[
            { label: "01 · Snap", body: "Auto-crop, OCR, and issuer detection happen on-device." },
            { label: "02 · Verify", body: "Live API to the issuing institution returns truth in under 5 seconds." },
            { label: "03 · Anchor", body: "Hash committed to the ledger. Tamper-proof, forever." },
          ]}
        />
      </StorySection>

      <StorySection
        index="05"
        kicker="Consent"
        title={<>You Own<br />The Key.<br />Always.</>}
        bg="#FD5200"
        fg="#0a0a0a"
        rule="#000000"
      >
        <p className="max-w-[55ch] text-[clamp(0.9rem,2.2vw,1.9rem)] font-normal leading-relaxed">
          Per-credential visibility. Public to institutions, consent-only, or private. Background
          check requested? You get a push notification, see who's asking, and approve · the whole
          round-trip closes in seconds, not weeks.
        </p>
        <hr className="border-none border-t border-black/40" />
        <ColRow
          items={[
            { label: "Public", body: "Discoverable by verified institutions without asking. You set the rules." },
            { label: "On request", body: "Asked, notified, approved · every access logged on the ledger." },
            { label: "Private", body: "Yours alone. Hidden from search. Hidden from anyone but you." },
          ]}
        />
      </StorySection>

      <div id="chain" />
      <StorySection
        index="06"
        kicker="The ledger"
        title={<>You Are<br />The Block.</>}
        bg="#0a0a0a"
        fg="#ffffff"
      >
        <p className="max-w-[55ch] text-[clamp(0.9rem,2.2vw,1.9rem)] font-normal leading-relaxed">
          Every citizen is an identity block. Every credential is a signed transaction. Every consent,
          revocation, and result is recorded. Anchored to a permissioned chain · searchable in
          milliseconds, falsifiable by no one.
        </p>
        <hr className="border-none border-t border-white/40" />
        <ColRow
          items={[
            { label: "Identity", body: "Your hash. Your public key. Born from your national ID. Immutable." },
            { label: "Credentials", body: "Each issuer signs a transaction. Each transaction links back to you." },
            { label: "Consents", body: "Every grant and revoke is on-chain. Audit trail for life." },
          ]}
        />
      </StorySection>

      <StorySection
        index="07"
        kicker="Matching"
        title={<>Opportunities<br />Find You.</>}
        bg="#F5F0E8"
        fg="#0a0a0a"
      >
        <p className="max-w-[55ch] text-[clamp(0.9rem,2.2vw,1.9rem)] font-normal leading-relaxed">
          Verified scores. Stated interests. The right universities, scholarships, and employers
          surface in your feed. Exam results? Published to the backend, pushed to your phone the
          second they drop.
        </p>
      </StorySection>

      <section id="join" className="relative flex min-h-[100dvh] w-full items-end overflow-hidden bg-flame px-[5vw] pt-[6vw] pb-[max(2.5rem,env(safe-area-inset-bottom,0px)+2rem)] md:pb-[5vw] text-white">
        <div className="w-full">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em]">08 · Join the chain</p>
          <hr className="my-[2vw] border-none border-t border-black/60" />
          <h2 className="font-display text-[clamp(4rem,15vw,18rem)] leading-[0.85] uppercase tracking-tight">
            Get<br />Gokred.
          </h2>
          <hr className="my-[2vw] border-none border-t border-black/60" />
          <div className="flex flex-wrap items-end justify-between gap-8">
            <p className="max-w-[40ch] text-[clamp(1rem,2vw,1.6rem)] font-normal leading-relaxed">
              Your credentials, verified for life. Available on iOS and Android.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-[0.2em]">App Store</a>
              <a href="#" className="rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black">Google Play</a>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap justify-between text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">
            <span>© 2026 Gokred</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Issuers</span>
            <span>Verifiers</span>
          </div>
        </div>
      </section>
    </main>
  );
}
