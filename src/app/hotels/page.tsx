import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const mockHotels = [
  { id: 1, name: 'فندق فور سيزونز', location: 'مراكش', rating: 5, price: 350, imageId: 'hotel-1' },
  { id: 2, name: 'منتجع مازاغان بيتش', location: 'الجديدة', rating: 5, price: 280, imageId: 'hotel-2' },
  { id: 3, name: 'فندق سوفيتيل', location: 'الرباط', rating: 4, price: 220, imageId: 'hotel-3' },
];

export default function HotelsPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const { destination } = searchParams;
  const hotelImages = Object.fromEntries(
    PlaceHolderImages.filter(img => img.id.startsWith('hotel-'))
      .map(img => [img.id, img])
  );

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold font-headline">فنادق في {destination || 'وجهتك'}</h1>
      <p className="text-muted-foreground mt-2">
        اعثر على المكان المثالي لإقامتك.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockHotels.map(hotel => {
          const image = hotelImages[hotel.imageId];
          return (
            <Card key={hotel.id} className="overflow-hidden group">
              {image && (
                <div className="relative h-56 w-full">
                  <Image
                    src={image.imageUrl}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}
              <CardContent className="p-4 space-y-2">
                <CardTitle className="text-lg">{hotel.name}</CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{hotel.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: hotel.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent-foreground" />
                  ))}
                  {Array.from({ length: 5 - hotel.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div>
                  <span className="text-xl font-bold text-primary">${hotel.price}</span>
                  <span className="text-sm text-muted-foreground">/ليلة</span>
                </div>
                <Button asChild>
                  <Link href="/payment">احجز الآن</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
