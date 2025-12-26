export default function Stat({ label, value }) {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="text-2xl font-semibold text-zinc-900">{value}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500">{label}</div>
        </div>
    );
}
