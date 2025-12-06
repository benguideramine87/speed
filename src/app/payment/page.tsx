"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function PaymentPage() {
  const { toast } = useToast();
  const router = useRouter();

  function handlePayment(event: React.FormEvent) {
    event.preventDefault();
    toast({
      title: "تم الدفع بنجاح!",
      description: "تم تأكيد حجزك. سيتم إرسال التفاصيل عبر البريد الإلكتروني.",
    });
    router.push('/account');
  }

  return (
    <div className="container py-12 flex justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>الدفع الآمن</CardTitle>
          <CardDescription>أدخل تفاصيل الدفع الخاصة بك لإكمال الحجز.</CardDescription>
        </CardHeader>
        <form onSubmit={handlePayment}>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">الاسم على البطاقة</Label>
              <Input id="name" placeholder="الاسم الكامل" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="card-number">رقم البطاقة</Label>
              <div className="relative">
                <Input id="card-number" placeholder="•••• •••• •••• ••••" required />
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="month">انتهاء الصلاحية</Label>
                <Input id="month" placeholder="MM" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="year">&nbsp;</Label>
                <Input id="year" placeholder="YY" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="CVC" required />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4">
              <div className="w-full flex justify-between items-baseline font-bold text-xl">
                  <span>المجموع:</span>
                  <span className="text-primary">$595.00</span>
              </div>
            <Button className="w-full" type="submit">ادفع الآن</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
