import { Check } from "lucide-react";
import Section from "./Section";
import { GhostButton, PrimaryButton } from "./ui/Buttons";

export default function Services() {
    return (
        <Section
            id="services"
            eyebrow="Сервіс"
            title="Підтримка, обслуговування та модернізації"
            desc="Після здачі проєкту ми допомагаємо підтримувати високу доступність — планово або за потребою."
        >
            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                    <h3 className="text-lg font-semibold">Пакети підтримки (приклад)</h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                        Оберіть рівень: від “за потребою” до “регулярно за графіком”.
                    </p>

                    <div className="mt-6 space-y-3">
                        {["Базова підтримка", "Планове ТО", "Рекваліфікація", "Апгрейди та ретрофіти"].map((t, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3"
                            >
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    <span className="text-sm font-medium">{t}</span>
                                </div>
                                <span className="text-xs text-zinc-500">за запитом</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                        <PrimaryButton href="#contact">Запитати підтримку</PrimaryButton>
                        <GhostButton href="#contact">Запланувати ТО</GhostButton>
                    </div>
                </div>

                <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                    <h3 className="text-lg font-semibold">Як стартує проєкт</h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                        Чіткий старт економить тижні: вимоги, середовища, безпека, точки передачі.
                    </p>

                    <ol className="mt-6 space-y-4">
                        {[
                            { title: "Короткий дзвінок", desc: "Цілі, терміни, обмеження" },
                            { title: "Збір даних", desc: "Середовища, схеми, інтерфейси" },
                            { title: "Пропозиція", desc: "Концепт, кошторис, етапи" },
                            { title: "Реалізація", desc: "Інжиніринг → виготовлення → тести" },
                        ].map((s, i) => (
                            <li key={i} className="flex gap-3">
                                <div className="mt-0.5 h-7 w-7 rounded-xl bg-zinc-900 text-white flex items-center justify-center text-xs font-semibold">
                                    {i + 1}
                                </div>
                                <div>
                                    <div className="text-sm font-medium">{s.title}</div>
                                    <div className="text-sm text-zinc-600">{s.desc}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </Section>
    );
}
