
"use server";

import { getRecommendation, RecommendationInput } from "@/ai/flows/recommendation-from-prompt";
import { z } from "zod";

const promptSchema = z.object({
  prompt: z.string().min(10, "Please describe your ideal vacation in a bit more detail."),
});

export type FormState = {
  message: string;
  recommendation?: string;
  success: boolean;
};

export async function getRecommendationAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = promptSchema.safeParse({
    prompt: formData.get("prompt"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed: " + validatedFields.error.flatten().fieldErrors.prompt?.join(", "),
      success: false,
    };
  }

  try {
    const input: RecommendationInput = { prompt: validatedFields.data.prompt };
    const result = await getRecommendation(input);
    
    return {
      message: "Recommendation generated successfully!",
      recommendation: result.recommendation,
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An error occurred while generating the recommendation. Please try again.",
      success: false,
    };
  }
}
