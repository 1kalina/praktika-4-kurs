"use client";

import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import Pill from "./ui/Pill";
import Stat from "./ui/Stat";
import { GhostButton, PrimaryButton } from "./ui/Buttons";

export default function Hero() {
    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="py-14 sm:py-20">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-7">
                        <div className="flex flex-wrap gap-2">
                            <Pill>Зроблено в Німеччині</Pill>
                            <Pill>Планування → Виготовлення → Сервіс</Pill>
                            <Pill>Автоматизація</Pill>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 text-3xl sm:text-5xl font-semibold tracking-tight"
                        >
                            Коли важлива кожна дрібниця,
                            <span className="text-zinc-500"> потрібні рішення, що працюють стабільно.</span>
                        </motion.h1>

                        <p className="mt-5 text-zinc-600 leading-relaxed max-w-2xl">
                            Індивідуальні системи для високочистих газів і середовищ — разом з автоматизацією,
                            документацією та підтримкою, щоб ваш процес був передбачуваним і контрольованим.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <PrimaryButton href="#contact">Запросити проєкт</PrimaryButton>
                            <GhostButton href="#services">Переглянути сервіс</GhostButton>
                        </div>

                        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
                            <Stat label="Фокус" value="Надчисті технології" />
                            <Stat label="Напрям" value="Автоматизація" />
                            <Stat label="Підтримка" value="Сервіс" />
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative rounded-3xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-50" />
                            <div className="relative p-6 sm:p-8">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-semibold">Огляд етапів</div>
                                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                                        <span>Статус</span>
                                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                    </div>
                                </div>

                                <div className="mt-5 space-y-3">
                                    {[
                                        { title: "Старт і вимоги", meta: "ТЗ, список середовищ, планування", done: true },
                                        { title: "Інжиніринг", meta: "Механіка, електрика, автоматизація", done: true },
                                        { title: "Виготовлення та збірка", meta: "Майстерня, тести, документація", done: false },
                                        { title: "Запуск", meta: "Перевірки, передача, навчання", done: false },
                                    ].map((step, idx) => (
                                        <div key={idx} className="rounded-2xl border border-zinc-200 bg-white p-4">
                                            <div className="flex items-start gap-3">
                                                <div
                                                    className={`mt-0.5 h-6 w-6 rounded-xl border flex items-center justify-center ${step.done ? "border-emerald-200 bg-emerald-50" : "border-zinc-200 bg-zinc-50"
                                                        }`}
                                                >
                                                    {step.done ? (
                                                        <Check className="h-4 w-4 text-emerald-700" />
                                                    ) : (
                                                        <ChevronDown className="h-4 w-4 text-zinc-500" />
                                                    )}
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="text-sm font-medium text-zinc-900">{step.title}</div>
                                                    <div className="mt-1 text-xs text-zinc-600">{step.meta}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
