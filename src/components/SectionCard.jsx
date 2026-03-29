const SectionCard = ({ title, children, className = "" }) => (
  <div className={`bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm p-5 mb-4 ${className}`}>
    {title && (
      <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-3">
        {title}
      </p>
    )}
    {children}
  </div>
);

export default SectionCard;