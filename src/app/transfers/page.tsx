import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Car, MapPin, ArrowRight, Calendar, Clock } from "lucide-react";

export default function TransfersPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const { pickup, dropoff, date, time } = searchParams;
  return (
    <div className="container py-12 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <Car className="mx-auto h-12 w-12 text-primary mb-4" />
          <CardTitle className="text-2xl">تأكيد حجز النقل الخاص بك</CardTitle>
          <CardDescription>
            لقد وجدنا لك وسيلة نقل. يرجى مراجعة التفاصيل أدناه.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-center border-t border-b py-6 my-6">
            <div className="flex items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>{pickup}</span>
              </div>
              <ArrowRight className="h-5 w-5 text-primary" />
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>{dropoff}</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{String(date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{String(time)}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-muted-foreground">السعر الإجمالي</span>
            <span className="text-3xl font-bold text-primary">$45.00</span>
          </div>

          <Button asChild className="w-full text-lg h-12">
            <Link href="/payment">المتابعة إلى الدفع</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
