import Image from "next/image";
import CaseStudyShell from "./CaseStudyShell";

const meta = [
  { label: "Industry", value: "Fintech" },
  { label: "Location", value: "Bangladesh" },
  { label: "Website", value: "www.example.com" },
];

const problems = [
  {
    title: "Cluttered interface",
    text: "Poor spacing and weak visual hierarchy made it hard to scan and focus.",
  },
  {
    title: "Unclear guidance",
    text: "Lack of instructions, especially for top-ups, created uncertainty.",
  },
  {
    title: "Weak input validation",
    text: "Users could enter incorrect payment details without immediate feedback.",
  },
  {
    title: "Too many actions",
    text: "Redundant call-to-actions added noise and slowed down decision-making.",
  },
  {
    title: "Confusing payment options",
    text: "Fees and exchange rates were not clearly explained, causing hesitation and mistakes.",
  },
];

const solutions = [
  {
    title: "Simplified interface",
    text: "Cleaner layout with improved spacing and visual hierarchy for better focus.",
  },
  {
    title: "Clearer guidance",
    text: "Separated payment options and added helpful tooltips for better understanding.",
  },
  {
    title: "Stronger validation",
    text: "Real-time validation for payment details with clear error feedback.",
  },
  {
    title: "Reduced clutter",
    text: "Removed unnecessary actions to streamline navigation and decision-making.",
  },
  {
    title: "Improved checkout flow",
    text: "Redesigned in-app checkout with clear options and upfront fee disclosure.",
  },
];

const processSteps = [
  {
    title: "01 — Discovery & Research",
    text: "Understanding the travel payment landscape, user needs, and key product gaps. Market research, wallet workflow analysis, identifying user drop-offs, and key user pain points.",
  },
  {
    title: "02 — Structure & Wireframing",
    text: "Mapping the core jobs of the wallet — top up, pay, and track — into clear information architecture and low-fidelity wireframes.",
  },
  {
    title: "03 — UX & Visual Design",
    text: "Crafting a clean, trustworthy visual language with reusable components, consistent patterns, and accessible states.",
  },
  {
    title: "04 — Testing & Handoff",
    text: "Validating with moderated usability sessions, refining edge cases, and delivering specs and prototypes to engineering.",
  },
];

const researchInsights = [
  {
    title: "Users struggled with clarity",
    text: "Payment options and labels were confusing, especially for first-time users.",
  },
  {
    title: "High cognitive load",
    text: "Too many actions and unclear hierarchy made tasks feel complex.",
  },
  {
    title: "Frequent input errors",
    text: "Lack of validation led to incorrect payment details.",
  },
  {
    title: "Unclear next steps",
    text: "Users often hesitated because they didn't know what to do next.",
  },
  {
    title: "Trust issues",
    text: "Poor feedback and unclear messaging reduced confidence during transactions.",
  },
];

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-4 md:gap-8">
    <h2 className="pr-10 text-2xl font-medium uppercase leading-[1.2] text-slate-900">{label}</h2>
    <div className="flex flex-col items-start justify-start md:col-span-3">{children}</div>
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="pb-24 text-3xl font-semibold leading-[1.2] md:text-[40px]">{children}</h3>
);

const NumberedList = ({ items }: { items: { title: string; text: string }[] }) => (
  <ol className="w-full list-decimal space-y-1 pl-5 text-xl leading-[2] text-slate-900 marker:text-slate-400">
    {items.map((item) => (
      <li key={item.title}>
        <span className="font-semibold">{item.title}</span>: {item.text}
      </li>
    ))}
  </ol>
);

const FullImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full overflow-hidden">
    <Image
      className="object-cover"
      src={src}
      alt={alt}
      width={1600}
      height={900}
      priority={false}
      quality={75}
      loading="lazy"
      sizes="100vw"
    />
  </div>
);

const StPayCaseStudy = () => {
  return (
    <CaseStudyShell label="app_design" title="ST pay - Digital Wallet">
      <FullImage src="/assets/case-study/st-pay/hero.png" alt="ST Pay hero" />

      {/* Project Overview */}
      <Section label="Project Overview">
        <p className="w-full text-xl leading-[1.5] text-slate-900 md:text-[22px]">
          ST Pay is a secure in-app travel wallet designed to simplify payments for flights, hotels, and other
          travel services. The project focused on seamless top-ups, clear transaction history, and frictionless
          checkout — improving trust, activation, and transaction completion for travelers.
        </p>
        <div className="mt-12 flex w-full flex-col gap-5 sm:flex-row">
          {meta.map((item) => (
            <div key={item.label} className="flex flex-1 flex-col gap-2">
              <p className="text-lg opacity-60">{item.label}</p>
              <p className="text-xl font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      <FullImage src="/assets/case-study/st-pay/overview.png" alt="ST Pay overview" />

      {/* Problem Identification */}
      <Section label="Problem Identification">
        <div className="flex w-full flex-col gap-4">
          <SectionTitle>Challenges in Everyday Payment Tasks</SectionTitle>
          <p className="text-lg leading-[1.6] md:text-xl">
            Users struggled to complete basic wallet actions due to poor interface structure, unclear guidance, and
            weak validation — leading to confusion, errors, and abandoned transactions.
          </p>
        </div>
        <div className="mt-4">
          <NumberedList items={problems} />
        </div>
      </Section>

      <FullImage src="/assets/case-study/st-pay/problem.png" alt="ST Pay problems" />

      {/* Solutions */}
      <Section label="Solutions">
        <div className="flex w-full flex-col gap-4">
          <SectionTitle>Design Improvements</SectionTitle>
          <p className="text-lg leading-[1.6] md:text-xl">
            We redesigned the experience to reduce complexity, improve clarity, and guide users through payment
            tasks with confidence.
          </p>
        </div>
        <div className="mt-4">
          <NumberedList items={solutions} />
        </div>
      </Section>

      <FullImage src="/assets/case-study/st-pay/research-hero.png" alt="ST Pay screens" />

      {/* Process */}
      <Section label="Process">
        <div className="flex w-full flex-col gap-3">
          <SectionTitle>The UX design process behind the scene</SectionTitle>
          <p className="text-lg leading-[1.6] md:text-xl">
            A clear, design-first process focused on real traveler workflows and everyday use.
          </p>
        </div>
        <div className="mt-10 grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col gap-3 border-t-4 border-neutral-100 bg-gradient-to-b from-[#f5f5f5] from-40% to-white p-8"
            >
              <p className="text-xl font-semibold leading-[1.2]">{step.title}</p>
              <p className="text-lg leading-[1.5] opacity-80">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <FullImage src="/assets/case-study/st-pay/process.png" alt="ST Pay design process" />

      {/* Research */}
      <Section label="Research">
        <div className="flex w-full flex-col gap-3">
          <SectionTitle>User Research &amp; Insights</SectionTitle>
          <p className="text-lg leading-[1.6] md:text-xl">
            To understand how users perform everyday wallet and payment tasks, identify usability issues, and
            uncover opportunities to simplify the experience.
          </p>
        </div>
        <div className="mt-4">
          <NumberedList items={researchInsights} />
        </div>

        {/* Persona */}
        <div className="mt-12 w-full">
          {/* <FullImage src="/assets/case-study/st-pay/persona-wide.png" alt="User research" /> */}

          <div className="mt-2 flex w-full flex-col gap-5 bg-[#02131a] p-8 md:p-16">
            <p className="text-xl font-semibold uppercase leading-[1.4] text-[#9ae66e]">User Persona</p>
            <div className="flex flex-col gap-2 md:flex-row">
              <div className="flex flex-1 flex-col gap-9 bg-white/[0.06] p-8">
                <div className="flex items-center gap-5">
                  <div className="relative size-[88px] shrink-0 overflow-hidden rounded-full border-4 border-white/10">
                    <Image
                      className="object-cover"
                      src="/assets/case-study/st-pay/persona.png"
                      alt="Rahim Ahmed"
                      fill
                      sizes="88px"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-white">
                    <p className="text-2xl font-semibold leading-[1.2]">Rahim Ahmed</p>
                    <p className="text-base leading-[1.5] opacity-80">
                      Small business owner managing daily payments and travel expenses
                    </p>
                  </div>
                </div>
                <div className="h-px w-full bg-white/10" />
                <div className="flex flex-col gap-0 text-base leading-[1.5] text-white opacity-80">
                  <p>Age: 32</p>
                  <p>Location: Dhaka, Bangladesh</p>
                  <p>Occupation: Retail Business Owner</p>
                  <p>Tech Level: Comfortable with mobile apps, not technical</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-5 bg-[#9ae66e] p-7">
                  <span className="text-4xl font-semibold leading-none text-[#19300b]">&ldquo;</span>
                  <p className="text-lg font-semibold leading-[1.3] text-[#19300b]">
                    I just want to pay quickly without worrying about making mistakes.
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-3 bg-white/[0.06] p-8 text-white">
                  <p className="text-lg font-semibold uppercase opacity-80">User Needs</p>
                  <ul className="list-disc space-y-1 pl-6 text-base leading-[1.5] opacity-80">
                    <li>Simple and easy-to-follow workflows</li>
                    <li>Clear instructions for different payment types</li>
                    <li>Instant validation to avoid mistakes</li>
                    <li>Transparent information (fees, steps, status)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Visual Design */}
      <Section label="Visual Design">
        <SectionTitle>Visual identity and brand story</SectionTitle>
        <div className="flex w-full flex-col gap-4 text-lg leading-[1.6] md:text-xl">
          <p>
            The product is designed to simplify everyday travel payments for users who are not finance experts. The
            goal is to create a sense of clarity, trust, and control — helping users confidently manage transactions
            without confusion or errors.
          </p>
          <p>
            The brand positions itself as a reliable travel companion, removing complexity from payments and making
            digital transactions feel approachable and secure.
          </p>
        </div>
      </Section>

      <div className="flex flex-col gap-2">
        <FullImage src="/assets/case-study/st-pay/visual-1.png" alt="ST Pay visual design" />
        <FullImage src="/assets/case-study/st-pay/visual-2.png" alt="ST Pay visual design" />
        <FullImage src="/assets/case-study/st-pay/visual-3.png" alt="ST Pay visual design" />
      </div>

      {/* Results & Outcomes */}
      <Section label="Results & Outcomes">
        <div className="flex w-full flex-col gap-3">
          <SectionTitle>Outcomes that moved the needle</SectionTitle>
          <p className="text-lg leading-[1.6] md:text-xl">
            The redesigned wallet delivered measurable improvements across activation, completion, and trust.
          </p>
        </div>
        <div className="mt-4">
          <NumberedList items={solutions} />
        </div>
      </Section>
    </CaseStudyShell>
  );
};

export default StPayCaseStudy;
