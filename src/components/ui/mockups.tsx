export const BrowserMockup = ({
  title,
  subtitle,
  imageSrc,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  className?: string;
}) => {
  return (
    <div className={`browser-shell ${className}`}>
      <div className="browser-frame">
        <div className="browser-topbar">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          </div>
          <div className="min-w-0 flex-1 truncate font-nav text-sm font-semibold uppercase tracking-[0.12em] text-foreground/70">{title}</div>
        </div>
        <div className="p-3">
          <div className="browser-image-wrap">
            {imageSrc ? (
              <img src={imageSrc} alt={`${title ?? "Project"} screenshot`} />
            ) : (
              <div className="flex h-full items-center justify-center px-3 text-center">
                <div>
                  <div className="font-hero text-lg font-semibold text-foreground">{title}</div>
                  {subtitle && <div className="mt-1 text-sm text-foreground/70">{subtitle}</div>}
                </div>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MobileMockup = ({ title, className = "" }: { title?: string; className?: string }) => {
  return (
    <div className={`browser-shell ${className}`}>
      <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-background/60 to-background/30">
        <div className="mx-auto mb-3 mt-2 h-1 w-20 rounded-full bg-background/30" />
        <div className="p-3">
          <div className="flex h-44 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-background/5 md:h-64">
            <div className="px-2 text-center">
              <div className="font-hero text-sm font-semibold text-foreground">{title}</div>
              <div className="mt-2 text-xs text-foreground/70">Interactive preview</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserMockup;
