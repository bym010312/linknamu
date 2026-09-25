type LinkCardProps = {
  title: string;
  url: string;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-2xl border border-white/70 bg-white/40 px-16 py-4 text-center text-[15px] font-semibold shadow-[0_6px_24px_-10px_rgba(168,92,52,0.25)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_10px_28px_-10px_rgba(168,92,52,0.32)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d98a5f] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
      <span className="absolute top-1/2 right-5 -translate-y-1/2 text-xs font-medium tabular-nums text-[#9a8175]">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
