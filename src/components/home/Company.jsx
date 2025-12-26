import { Factory, ShieldCheck, Wrench } from "lucide-react";
import Section from "./Section";
import Card from "./ui/Card";

export default function Company() {
    return (
        <Section
            id="company"
            eyebrow="Хто ми"
            title="Техніка, спроєктована під чистоту та точність"
            desc="Коротко про підхід до роботи: безпека, контроль, документація та стабільний результат."
        >
            <div className="grid gap-6 lg:grid-cols-3">
                <Card
                    icon={ShieldCheck}
                    title="Зрозумілі процеси"
                    desc="Чіткі етапи від планування до здачі — щоб у виробництві не було сюрпризів."
                    bullets={["Документація", "Перевірки", "Орієнтація на ризики"]}
                />
                <Card
                    icon={Factory}
                    title="Виготовлення та збірка"
                    desc="Акуратний монтаж, правильні матеріали та практичні тести — для щоденної роботи в цеху."
                    bullets={["Неіржавна сталь", "Збірка вузлів", "Тестування"]}
                />
                <Card
                    icon={Wrench}
                    title="Ремонтопридатність"
                    desc="Добра система має бути зручною в обслуговуванні — це закладається ще на етапі проєктування."
                    bullets={["Сервісні концепти", "Запчастини", "Модернізації"]}
                />
            </div>
        </Section>
    );
}
