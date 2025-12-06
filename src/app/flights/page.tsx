import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeftRight, Clock } from 'lucide-react';
import Link from 'next/link';

const mockFlights = [
  { id: 1, airline: 'الخطوط الملكية المغربية', from: 'CMN', to: 'JFK', departure: '10:30', arrival: '14:00', duration: '8h 30m', price: 550 },
  { id: 2, airline: 'طيران الإمارات', from: 'CMN', to: 'JFK', departure: '12:00', arrival: '18:30', duration: '11h 30m', price: 620, stops: 1 },
  { id: 3, airline: 'الخطوط الفرنسية', from: 'CMN', to: 'JFK', departure: '08:45', arrival: '15:00', duration: '11h 15m', price: 580, stops: 1 },
  { id: 4, airline: 'Lufthansa', from: 'CMN', to: 'JFK', departure: '06:15', arrival: '13:00', duration: '11h 45m', price: 600, stops: 1 },
];

export default function FlightsPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const { from, to } = searchParams;
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold font-headline">نتائج البحث عن رحلات جوية</h1>
      <p className="text-muted-foreground mt-2">
        رحلات من <strong>{from || '...'}</strong> إلى <strong>{to || '...'}</strong>
      </p>

      <div className="mt-8 space-y-6">
        {mockFlights.map(flight => (
          <Card key={flight.id} className="transition-all hover:shadow-lg">
            <CardContent className="p-4 grid md:grid-cols-4 items-center gap-4">
              <div className="font-semibold">{flight.airline}</div>
              <div className="flex items-center gap-4 justify-center">
                <div>
                  <div className="text-lg font-bold">{flight.departure}</div>
                  <div className="text-sm text-muted-foreground">{flight.from}</div>
                </div>
                <ArrowLeftRight className="h-5 w-5 text-muted-foreground shrink-0" />
                <div>
                  <div className="text-lg font-bold">{flight.arrival}</div>
                  <div className="text-sm text-muted-foreground">{flight.to}</div>
                </div>
              </div>
              <div className="text-center text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{flight.duration}</span>
                </div>
                {flight.stops && <div className="text-sm">{flight.stops === 1 ? 'توقف واحد' : `${flight.stops} توقفات`}</div>}
              </div>
              <div className="flex flex-col items-center sm:items-end gap-2">
                <div className="text-2xl font-bold text-primary">${flight.price}</div>
                <Button asChild>
                  <Link href="/payment">احجز الآن</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
