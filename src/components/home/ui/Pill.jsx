export default function Pill({ children }) {
    return (
        <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs text-zinc-600 shadow-sm">
            {children}
        </span>
    );
}
