"use client";

import { useState } from "react";
import Section from "./Section";
import { ArrowRight } from "lucide-react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // success | error | null

    function setField(key, value) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        setStatus(null);

        if (!form.name || !form.email || !form.message) {
            setStatus("error");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok || !data.ok) {
                throw new Error();
            }

            setStatus("success");
            setForm({
                name: "",
                company: "",
                email: "",
                message: "",
            });
        } catch {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    }

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

                        <div className="mt-6 space-y-3 text-sm">
                            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                                <div className="text-xs uppercase tracking-widest text-zinc-500">
                                    Адреса
                                </div>
                                <div className="mt-1 text-zinc-800">
                                    пров. Тихий 66, 36000 Полтава
                                </div>
                            </div>

                            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                                <div className="text-xs uppercase tracking-widest text-zinc-500">
                                    Телефон
                                </div>
                                <div className="mt-1 text-zinc-800">
                                    +49 (0)000 0000 0
                                </div>
                            </div>

                            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                                <div className="text-xs uppercase tracking-widest text-zinc-500">
                                    E-mail
                                </div>
                                <div className="mt-1 text-zinc-800">
                                    info@example.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                        <h3 className="text-lg font-semibold">Форма запиту</h3>

                        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="grid gap-2">
                                    <span className="text-sm font-medium">Ім’я</span>
                                    <input
                                        value={form.name}
                                        onChange={(e) =>
                                            setField("name", e.target.value)
                                        }
                                        className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                                        placeholder="Іван"
                                        required
                                    />
                                </label>

                                <label className="grid gap-2">
                                    <span className="text-sm font-medium">Компанія</span>
                                    <input
                                        value={form.company}
                                        onChange={(e) =>
                                            setField("company", e.target.value)
                                        }
                                        className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                                        placeholder="Company GmbH"
                                    />
                                </label>
                            </div>

                            <label className="grid gap-2">
                                <span className="text-sm font-medium">E-mail</span>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) =>
                                        setField("email", e.target.value)
                                    }
                                    className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                                    placeholder="name@firma.de"
                                    required
                                />
                            </label>

                            <label className="grid gap-2">
                                <span className="text-sm font-medium">Опис</span>
                                <textarea
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) =>
                                        setField("message", e.target.value)
                                    }
                                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20"
                                    placeholder="Коротко: середовище, обʼєми, інтерфейси, терміни…"
                                    required
                                />
                            </label>

                            {status === "success" && (
                                <div className="text-sm text-emerald-600">
                                    ✅ Запит надіслано. Ми звʼяжемося з вами.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="text-sm text-red-600">
                                    ❌ Помилка. Перевірте поля або спробуйте пізніше.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 disabled:opacity-50"
                            >
                                {loading ? "Надсилаю..." : "Надіслати"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
}
