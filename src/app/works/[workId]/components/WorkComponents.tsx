export const Section = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-4 md:gap-8">
    <h2 className="pr-10 text-2xl font-medium uppercase leading-[1.2] text-slate-900">
      {label}
    </h2>
    <div className="flex flex-col items-start justify-start md:col-span-3">
      {children}
    </div>
  </div>
);

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-3xl font-semibold leading-[1.2] md:text-[40px] mb-4">
    {children}
  </h3>
);

export const Lede = ({ children }: { children: React.ReactNode }) => (
  <p className="w-full text-lg leading-[1.6] md:text-xl">{children}</p>
);

export const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="w-full text-lg leading-[1.6] md:text-xl">{children}</p>
);

export const NumberedList = ({
  items,
}: {
  items: { title: string; text: string }[];
}) => (
  <ol className="w-full list-decimal space-y-1 pl-5 text-xl leading-[2] text-slate-900 marker:text-slate-400">
    {items.map((item) => (
      <li key={item.title}>
        <span className="font-semibold">{item.title}</span>: {item.text}
      </li>
    ))}
  </ol>
);

export const MetaRow = ({
  items,
}: {
  items: { label: string; value: string }[];
}) => (
  <div className="mt-12 flex w-full flex-col gap-5 sm:flex-row">
    {items.map((item) => (
      <div key={item.label} className="flex flex-1 flex-col gap-2">
        <p className="text-lg opacity-60">{item.label}</p>
        <p className="text-xl font-medium">{item.value}</p>
      </div>
    ))}
  </div>
);

export const ProcessGrid = ({
  steps,
}: {
  steps: { title: string; text: string }[];
}) => (
  <div className="mt-10 grid w-full grid-cols-1 gap-3 md:grid-cols-2">
    {steps.map((step) => (
      <div
        key={step.title}
        className="flex flex-col gap-3 border-t-4 border-neutral-100 bg-gradient-to-b from-[#f5f5f5] from-40% to-white p-8"
      >
        <p className="text-xl font-semibold leading-[1.2]">{step.title}</p>
        <p className="text-lg leading-[1.5] opacity-80">{step.text}</p>
      </div>
    ))}
  </div>
);

export const PersonaBlock = ({
  name,
  role,
  avatar,
  quote,
  details,
  needs,
}: {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  details: string[];
  needs: string[];
}) => (
  <div className="mt-12 w-full">
    <div className="mt-2 flex w-full flex-col gap-5 bg-[#02131a] p-8 md:p-16">
      <p className="text-xl font-semibold uppercase leading-[1.4] text-[#9ae66e]">
        User Persona
      </p>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-9 bg-white/[0.06] p-8">
          <div className="flex items-center gap-5">
            <div className="relative size-[88px] shrink-0 overflow-hidden rounded-full border-4 border-white/10">
              <img
                className="h-full w-full object-cover"
                src={avatar}
                alt={name}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-2 text-white">
              <p className="text-2xl font-semibold leading-[1.2]">{name}</p>
              <p className="text-base leading-[1.5] opacity-80">{role}</p>
            </div>
          </div>
          <div className="h-px w-full bg-white/10" />
          <div className="flex flex-col gap-0 text-base leading-[1.5] text-white opacity-80">
            {details.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-5 bg-[#9ae66e] p-7">
            <span className="text-4xl font-semibold leading-none text-[#19300b]">
              &ldquo;
            </span>
            <p className="text-lg font-semibold leading-[1.3] text-[#19300b]">
              {quote}
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-3 bg-white/[0.06] p-8 text-white">
            <p className="text-lg font-semibold uppercase opacity-80">
              User Needs
            </p>
            <ul className="list-disc space-y-1 pl-6 text-base leading-[1.5] opacity-80">
              {needs.map((need) => (
                <li key={need}>{need}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const FullImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full overflow-hidden">
    <img
      className="h-auto w-full object-cover"
      src={src}
      alt={alt}
      loading="lazy"
    />
  </div>
);
