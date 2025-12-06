"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, MapPin, Users } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";
import type { DateRange } from "react-day-picker";


const formSchema = z.object({
  destination: z.string().min(1, "مطلوب"),
  guests: z.number().min(1),
});

export function HotelBookingForm() {
  const router = useRouter();
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: "",
      guests: 2,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!date?.from || !date?.to) return;
    const params = new URLSearchParams({
      destination: values.destination,
      checkin: format(date.from, 'yyyy-MM-dd'),
      checkout: format(date.to, 'yyyy-MM-dd'),
      guests: values.guests.toString(),
    });
    router.push(`/hotels?${params.toString()}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الوجهة</FormLabel>
              <FormControl>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="مدينة، فندق..." {...field} className="pl-10" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <div className="grid md:grid-cols-2 gap-4">
          <FormItem className="flex flex-col">
            <FormLabel>تسجيل الدخول / الخروج</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn("w-full justify-start text-right font-normal", !date && "text-muted-foreground")}>
                  
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>اختر التواريخ</span>
                  )}
                  <CalendarIcon className="mr-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </FormItem>
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الضيوف</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="number" min="1" {...field} onChange={e => field.onChange(parseInt(e.target.value))} className="pl-10" />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">ابحث عن فنادق</Button>
      </form>
    </Form>
  );
}
