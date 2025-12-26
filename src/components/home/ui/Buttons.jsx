import { ArrowRight } from "lucide-react";

export function PrimaryButton({ href, children }) {
    return (
        <a
            href={href}
            className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 active:opacity-80 transition"
        >
            {children}
            <ArrowRight className="ml-2 h-4 w-4" />
        </a>
    );
}

export function GhostButton({ href, children }) {
    return (
        <a
            href={href}
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 transition"
        >
            {children}
        </a>
    );
}
