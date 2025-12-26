"use client";

import Section from "./Section";
import { ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <Section
            id="contact"
            eyebrow="Контакт"
            title="Коротко опишіть, що потрібно"
            desc="Ми зв'яжемося з Вами якнайшвидше."
        >
            <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                        <h3 className="text-lg font-semibold">Контакти</h3>
                        <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                            Замінити на реальні дані компанії.
                        </p>

                        <div className="mt-6 space-y-3 text-sm">
                            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                                <div className="text-xs uppercase tracking-widest text-zinc-500">Адреса</div>
                                <div className="mt-1 text-zinc-800">пров. Тихий 66, 36000 Полтава</div>
                            </div>
                            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                                <div className="text-xs uppercase tracking-widest text-zinc-500">Телефон</div>
                                <div className="mt-1 text-zinc-800">+49 (0)000 0000 0</div>
                            </div>
                            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                                <div className="text-xs uppercase tracking-widest text-zinc-500">E-mail</div>
                                <div className="mt-1 text-zinc-800">info@example.com</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                        <h3 className="text-lg font-semibold">Форма запиту</h3>
                        <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                            Демо-режим: submit показує повідомлення.
                        </p>

                        <form
                            className="mt-6 grid gap-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Демо: підключи форму до бекенду/API для реальної відправки.");
                            }}
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="grid gap-2">
                                    <span className="text-sm font-medium">Ім’я</span>
                                    <input
                                        className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                                        placeholder="Іван"
                                    />
                                </label>
                                <label className="grid gap-2">
                                    <span className="text-sm font-medium">Компанія</span>
                                    <input
                                        className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                                        placeholder="Company GmbH"
                                    />
                                </label>
                            </div>

                            <label className="grid gap-2">
                                <span className="text-sm font-medium">E-mail</span>
                                <input
                                    type="email"
                                    className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                                    placeholder="name@firma.de"
                                />
                            </label>

                            <label className="grid gap-2">
                                <span className="text-sm font-medium">Опис</span>
                                <textarea
                                    rows={5}
                                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                                    placeholder="Коротко: середовище, обʼєми, інтерфейси, терміни…"
                                />
                            </label>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90"
                            >
                                Надіслати
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
}
