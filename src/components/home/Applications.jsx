import { Cpu, Factory, FlaskConical, Gauge, ShieldCheck, Wrench } from "lucide-react";
import Section from "./Section";

export default function Applications() {
    const items = [
        { icon: FlaskConical, title: "Лабораторії та фарма" },
        { icon: Cpu, title: "Напівпровідники та high-tech" },
        { icon: Factory, title: "Покриття та поверхні" },
        { icon: Gauge, title: "Газ/хімія" },
        { icon: ShieldCheck, title: "Моніторинг і кваліфікація" },
        { icon: Wrench, title: "Виробництво та сервіс" },
    ];

    return (
        <Section
            id="applications"
            eyebrow="Застосування"
            title="Досвід у різних галузях"
            desc="Рішення підлаштовуються під ваш процес, середовище та вимоги."
        >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                                <it.icon className="h-5 w-5" />
                            </div>
                            <div className="font-medium text-zinc-900">{it.title}</div>
                        </div>
                        <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                            Підбір конфігурації та матеріалів залежить від реальних умов експлуатації.
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
