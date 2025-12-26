"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useMemo, useState } from "react";

const Anchor = ({ href, children }) => (
    <a href={href} className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors">
        {children}
    </a>
);

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const nav = useMemo(
        () => [
            { label: "Головна", href: "#top" },
            { label: "Хто ми", href: "#company" },
            { label: "Компетенції", href: "#competencies" },
            { label: "Застосування", href: "#applications" },
            { label: "Сервіс", href: "#services" },
            { label: "Контакт", href: "#contact" },
        ],
        []
    );

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/70 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="min-h-16 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">

                    {/* LOGO + TEXT */}
                    <a href="#top" className="flex min-w-0 items-center gap-2">
                        <div className="min-w-0 leading-tight">
                            <div className="text-sm font-semibold truncate">
                                LOGITEX
                            </div>

                            {/* повний текст — тільки з sm */}
                            <div className="text-xs text-zinc-500 hidden sm:block truncate">
                                Технології надчистих середовищ
                            </div>

                            {/* короткий варіант — тільки xs */}
                            <div className="text-xs text-zinc-500 sm:hidden truncate">
                                Надчисті середовища
                            </div>
                        </div>
                    </a>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center gap-6 shrink-0">
                        {nav.map((n) => (
                            <Anchor key={n.href} href={n.href}>
                                {n.label}
                            </Anchor>
                        ))}
                    </nav>

                    {/* DESKTOP BUTTON */}
                    <div className="hidden md:flex items-center gap-3 shrink-0">
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 transition"
                        >
                            <Phone className="mr-2 h-4 w-4" />
                            Запит
                        </a>
                    </div>

                    {/* MOBILE MENU */}
                    <button
                        className="md:hidden shrink-0 inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Відкрити меню"
                    >
                        <Menu className="h-5 w-5" />
                    </button>

                </div>
            </div>


            <AnimatePresence>
                {mobileOpen ? (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="md:hidden border-t border-zinc-200 bg-white"
                    >
                        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-semibold">Навігація</div>
                                <button
                                    className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white p-2"
                                    onClick={() => setMobileOpen(false)}
                                    aria-label="Закрити меню"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="mt-3 grid gap-2">
                                {nav.map((n) => (
                                    <a
                                        key={n.href}
                                        href={n.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 hover:bg-zinc-50"
                                    >
                                        {n.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
}
