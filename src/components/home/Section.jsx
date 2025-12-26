export default function Section({ id, eyebrow, title, desc, children }) {
    return (
        <section id={id} className="scroll-mt-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
                <div className="max-w-2xl">
                    {eyebrow ? (
                        <div className="text-xs tracking-widest uppercase text-zinc-500">{eyebrow}</div>
                    ) : null}
                    <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-zinc-900">{title}</h2>
                    {desc ? <p className="mt-3 text-zinc-600 leading-relaxed">{desc}</p> : null}
                </div>
                <div className="mt-10">{children}</div>
            </div>
        </section>
    );
}
