import { Check } from "lucide-react";

export default function Card({ icon: Icon, title, desc, bullets }) {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                    <Icon className="h-5 w-5 text-zinc-800" />
                </div>
                <div className="min-w-0">
                    <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{desc}</p>
                    {bullets?.length ? (
                        <ul className="mt-4 space-y-2">
                            {bullets.map((b, i) => (
                                <li key={i} className="flex gap-2 text-sm text-zinc-700">
                                    <Check className="mt-0.5 h-4 w-4 text-zinc-700" />
                                    <span className="min-w-0">{b}</span>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
