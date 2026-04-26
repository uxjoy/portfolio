const Ruler = () => {
  return (
    <div className="container h-full absolute left-1/2 -translate-x-1/2 border-l border-r border-white/5 select-none pointer-events-none text-whiteAlpha-12">
      <div className="absolute -left-8 top-[144px] flex flex-col gap-10 text-xs">
        <div className="-rotate-90">0</div>
        <div className="-rotate-90">50</div>
        <div className="-rotate-90">100</div>
        <div className="-rotate-90">150</div>
        <div className="-rotate-90">200</div>
        <div className="-rotate-90">250</div>
        <div className="-rotate-90">300</div>
        <div className="-rotate-90">350</div>
        <div className="-rotate-90">400</div>
        <div className="-rotate-90">450</div>
        <div className="-rotate-90">500</div>
        <div className="-rotate-90">550</div>
        <div className="-rotate-90">600</div>
        <div className="-rotate-90">650</div>
        <div className="-rotate-90">700</div>
        <div className="-rotate-90">750</div>

        <div className="relative bottom-[200px] h-[200px] bg-gradient-to-b from-transparent to-bgColor backdrop-blur-[1px]"></div>
      </div>
      <div className="absolute -right-8 top-[144px] flex flex-col gap-10 text-xs">
        <div className="rotate-90">0</div>
        <div className="rotate-90">50</div>
        <div className="rotate-90">100</div>
        <div className="rotate-90">150</div>
        <div className="rotate-90">200</div>
        <div className="rotate-90">250</div>
        <div className="rotate-90">300</div>
        <div className="rotate-90">350</div>
        <div className="rotate-90">400</div>
        <div className="rotate-90">450</div>
        <div className="rotate-90">500</div>
        <div className="rotate-90">550</div>
        <div className="rotate-90">600</div>
        <div className="rotate-90">650</div>
        <div className="rotate-90">700</div>
        <div className="rotate-90">750</div>
        <div className="relative bottom-[200px] h-[200px] bg-gradient-to-b from-transparent to-bgColor backdrop-blur-[1px]"></div>
      </div>
    </div>
  );
};

export default Ruler;
