import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="container py-20 flex items-center justify-center">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader className="p-8 md:p-12">
          <CardTitle className="text-3xl font-headline">{title}</CardTitle>
          <CardDescription className="mt-2 text-lg">{description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
