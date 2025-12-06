import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlightBookingForm } from '@/components/booking/flight-booking-form';
import { HotelBookingForm } from '@/components/booking/hotel-booking-form';
import { TransferBookingForm } from '@/components/booking/transfer-booking-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const destinations = PlaceHolderImages.filter(img => img.id.startsWith('destination-'));

  return (
    <div className="flex flex-col gap-12 pb-12 md:gap-20 md:pb-20">
      <section className="relative h-[70vh] md:h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">ابحث عن مغامرتك القادمة</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            احجز رحلات الطيران والفنادق والمواصلات بسهولة مع سفرنا.
          </p>
          <div className="mt-8 w-full max-w-4xl">
            <Tabs defaultValue="flights" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/20 backdrop-blur-sm text-white">
                <TabsTrigger value="flights">رحلات جوية</TabsTrigger>
                <TabsTrigger value="hotels">فنادق</TabsTrigger>
                <TabsTrigger value="transfers">نقل</TabsTrigger>
              </TabsList>
              <Card className="mt-4 bg-background/90 text-foreground">
                <CardContent className="p-4 md:p-6">
                  <TabsContent value="flights"><FlightBookingForm /></TabsContent>
                  <TabsContent value="hotels"><HotelBookingForm /></TabsContent>
                  <TabsContent value="transfers"><TransferBookingForm /></TabsContent>
                </CardContent>
              </Card>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="text-3xl font-bold text-center font-headline">وجهات رائجة</h2>
        <p className="mt-2 text-center text-muted-foreground">اكتشف أماكن مذهلة للسفر إليها بعد ذلك.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {destinations.map(dest => (
            <Card key={dest.id} className="overflow-hidden group">
              <div className="relative h-60 w-full">
                {dest &&
                  <Image
                    src={dest.imageUrl}
                    alt={dest.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={dest.imageHint}
                  />
                }
              </div>
              <CardHeader>
                <CardTitle>{dest.description}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline">احصل على توصيات سفر مخصصة بالذكاء الاصطناعي</h2>
            <p className="mt-4 text-muted-foreground">
              لست متأكدًا إلى أين تذهب؟ دع مساعد السفر الذكي الخاص بنا يخطط لرحلتك المثالية. أخبرنا بما تحلم به، وسنقوم بالباقي.
            </p>
            <Button asChild className="mt-6">
              <Link href="/ai-recommendations">
                جرب الآن
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
             <Image
                src="https://picsum.photos/seed/8/600/400"
                alt="AI bot illustration"
                fill
                className="object-cover"
                data-ai-hint="robot travel"
              />
          </div>
        </div>
      </section>
    </div>
  );
}
