import { RecommendationClient } from "@/components/ai/recommendation-client";

export default function AiRecommendationsPage() {
  return (
    <div className="container py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline">مستشارك للسفر بالذكاء الاصطناعي</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
          هل أنت في حيرة من أمرك؟ دع تقنيتنا الذكية تصمم رحلتك المثالية بناءً على رغباتك.
        </p>
      </div>
      <RecommendationClient />
    </div>
  );
}
