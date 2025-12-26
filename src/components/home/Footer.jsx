export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-zinc-900" />
                        <div>
                            <div className="text-sm font-semibold">LOGITEX</div>
                            <div className="text-xs text-zinc-500">Демо Next.js / Tailwind</div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a className="text-sm text-zinc-600 hover:text-zinc-900" href="#company">Про компанію</a>
                        <a className="text-sm text-zinc-600 hover:text-zinc-900" href="#competencies">Компетенції</a>
                        <a className="text-sm text-zinc-600 hover:text-zinc-900" href="#services">Сервіс</a>
                        <a className="text-sm text-zinc-600 hover:text-zinc-900" href="#contact">Контакт</a>
                    </div>
                </div>

                <div className="mt-8 text-xs text-zinc-500">
                    © {new Date().getFullYear()} Це не офіційний сайт Logitex.
                </div>
            </div>
        </footer>
    );
}
