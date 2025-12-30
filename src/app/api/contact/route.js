import { Resend } from "resend";

export async function POST(req) {
    try {
        const { name, company, email, message } = await req.json();

        // Базова валідація
        if (!name || !email || !message) {
            return Response.json(
                { ok: false, error: "Заповни: ім’я, e-mail і опис." },
                { status: 400 }
            );
        }

        // Перевірка формату email 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return Response.json(
                { ok: false, error: "Некоректний формат e-mail." },
                { status: 422 }
            );
        }

        if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
            console.error("Missing env vars");
            return Response.json(
                { ok: false, error: "Server misconfiguration" },
                { status: 500 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const subject = `Новий запит${company ? ` від ${company}` : ""}`;

        const text =
            `Ім’я: ${name}\n` +
            `Компанія: ${company || "-"}\n` +
            `E-mail: ${email}\n\n` +
            `Опис:\n${message}\n`;

        // Відправка email
        const { data, error } = await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
            to: process.env.CONTACT_TO_EMAIL,
            replyTo: email,
            subject,
            text,
        });

        if (error) {
            console.error("Resend error:", error);
            return Response.json(
                { ok: false, error: error.message },
                { status: 422 }
            );
        }

        console.log("📩 New contact form submission:", {
            name,
            company,
            email,
            message,
            resendId: data?.id,
        });

        return Response.json({ ok: true });

    } catch (err) {
        console.error("Server error:", err);
        return Response.json(
            { ok: false, error: "Server error" },
            { status: 500 }
        );
    }
}
