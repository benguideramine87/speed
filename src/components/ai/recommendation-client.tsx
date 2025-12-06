"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getRecommendationAction, type FormState } from "@/lib/actions";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Loader2, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState: FormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          جارٍ الإنشاء...
        </>
      ) : (
        <>
          <Sparkles className="ml-2 h-4 w-4" />
          الحصول على توصية
        </>
      )}
    </Button>
  );
}

export function RecommendationClient() {
  const [state, formAction] = useFormState(getRecommendationAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if(state.success) {
        formRef.current?.reset();
      } else {
        toast({
          variant: "destructive",
          title: "خطأ",
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>مخطط الرحلات بالذكاء الاصطناعي</CardTitle>
          <CardDescription>
            صف إجازتك المثالية، وسيقوم مساعدنا الذكي بإنشاء توصية مخصصة لك.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-4">
            <Textarea
              name="prompt"
              placeholder="مثال: 'أبحث عن عطلة شاطئية مريحة في أوروبا مع طعام رائع وتاريخ غني، بميزانية متوسطة.'"
              rows={6}
              required
              minLength={10}
            />
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            توصيتك
          </CardTitle>
          <CardDescription>
            ستظهر توصية السفر الشخصية الخاصة بك هنا.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          {state.success && state.recommendation ? (
            <div className="space-y-4 text-sm text-foreground whitespace-pre-wrap font-body">
              {state.recommendation}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center text-muted-foreground p-8">
              تنتظر توصيتك...
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
