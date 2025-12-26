"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Cpu, Factory, FlaskConical, Gauge, ShieldCheck, Wrench } from "lucide-react";
import { useMemo, useState } from "react";
import Section from "./Section";
import Card from "./ui/Card";

export default function Competencies() {
    const [activeTab, setActiveTab] = useState("purity");

    const tabs = useMemo(
        () => [
            {
                key: "purity",
                label: "Надчисті технології",
                icon: FlaskConical,
                cards: [
                    {
                        icon: Factory,
                        title: "Системи та вузли під ваш процес",
                        desc: "Від ідеї до запуску: рішення для високочистих середовищ — міцні, задокументовані та зручні в експлуатації.",
                        bullets: ["Ємності та модулі з нержавійки", "Відбір/роздача/дозування", "Фільтрація, підігрів, периферія"],
                    },
                    {
                        icon: ShieldCheck,
                        title: "Якість та простежуваність",
                        desc: "Коли важлива кожна частинка: контроль матеріалів, протоколи та дисципліна процесів.",
                        bullets: ["Простежуваність партій", "Протоколи перевірок", "Очищення/пакування"],
                    },
                ],
            },
            {
                key: "automation",
                label: "Автоматизація",
                icon: Cpu,
                cards: [
                    {
                        icon: Cpu,
                        title: "Програмування та HMI",
                        desc: "Логіка, інтерфейси, обміни даними — щоб система була стабільною і ремонтопридатною.",
                        bullets: ["HMI", "Інтерфейси/протоколи", "Аварії та діагностика"],
                    },
                    {
                        icon: Gauge,
                        title: "Електрика та мережі",
                        desc: "Проєктування, шафи керування та індустріальні мережі — для масштабованих рішень.",
                        bullets: ["Проєктування I/O, специфікації", "Шафи керування", "Підтримка на місці"],
                    },
                ],
            },
            {
                key: "service",
                label: "Сервіс",
                icon: Wrench,
                cards: [
                    {
                        icon: Wrench,
                        title: "Підтримка та ремонт",
                        desc: "Швидка допомога: від дистанційної діагностики до виїзду на об’єкт.",
                        bullets: ["Пошук несправностей", "Remote-support", "Виїзди за потребою"],
                    },
                    {
                        icon: ShieldCheck,
                        title: "Планове обслуговування",
                        desc: "Регулярні перевірки підвищують доступність. На вимогу — з протоколами та звітами.",
                        bullets: ["Плани ТО", "Функціональні тести", "Документований результат"],
                    },
                ],
            },
        ],
        []
    );

    const active = tabs.find((t) => t.key === activeTab) ?? tabs[0];

    return (
        <Section
            id="competencies"
            eyebrow="Компетенції"
            title="Надчисті технології, автоматизація і сервіс — в одному підході"
            desc="Оберіть вкладку, щоб подивитися типові блоки та можливості."
        >
            <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-2">
                    {tabs.map((t) => (
                        <button
                            key={t.key}
                            onClick={() => setActiveTab(t.key)}
                            className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm shadow-sm transition ${activeTab === t.key
                                ? "border-zinc-900 bg-zinc-900 text-white"
                                : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50"
                                }`}
                        >
                            <t.icon className="h-4 w-4" />
                            {t.label}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.key}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="grid gap-6 lg:grid-cols-2"
                    >
                        {active.cards.map((c, i) => (
                            <Card key={i} icon={c.icon} title={c.title} desc={c.desc} bullets={c.bullets} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </Section>
    );
}
