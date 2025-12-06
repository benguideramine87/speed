import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, BedDouble, User } from 'lucide-react';

export default function AccountPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-8">
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://picsum.photos/seed/user/100/100" data-ai-hint="person portrait" />
          <AvatarFallback>أ ع</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">مرحباً، أحمد!</h1>
          <p className="text-muted-foreground">ahmad.ali@email.com</p>
        </div>
      </div>

      <Tabs defaultValue="bookings" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="bookings">حجوزاتي</TabsTrigger>
          <TabsTrigger value="profile">ملفي الشخصي</TabsTrigger>
        </TabsList>
        <TabsContent value="bookings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>حجوزاتك القادمة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <Plane className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">رحلة إلى باريس</p>
                    <p className="text-sm text-muted-foreground">25 ديسمبر 2024</p>
                  </div>
                </div>
                <Button variant="outline">عرض التفاصيل</Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <BedDouble className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">فندق لو بريستول باريس</p>
                    <p className="text-sm text-muted-foreground">25 ديسمبر - 30 ديسمبر 2024</p>
                  </div>
                </div>
                <Button variant="outline">عرض التفاصيل</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>تفضيلات السفر</CardTitle>
              <CardDescription>قم بإدارة تفضيلاتك لتوصيات أفضل.</CardDescription>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground py-12">
              <User className="h-12 w-12 mx-auto mb-4" />
              <p>ستكون إعدادات الملف الشخصي متاحة قريبًا.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
