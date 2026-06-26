import { getModel } from "./utils";
import { createCompletion, createParsedCompletion } from "@anvia/core";
import z from "zod";
import "dotenv/config";

const userPrompt = "Why was I charged twice? Please fix it now.";

const PROMPT_INTENT = {
    fraud_and_dispute:
    "You are a dispute specialist. Help users reporting double charge or refund issue.",
  card_operation:
    "You handle lost card, blocked card and PIN issues.",
  digital_banking:
    "You handle login, OTP and mobile banking issues.",
  general_support:
    "You are a general support agent.",
   
};

const PromtIntentSchema = z.object({
    intent: z.enum(["fraud_and_dispute", "card_operation", "digital_banking", "general_support"]),
    reason: z.string(),
});

async function main(prompt: string) {
    const intentRes = await createParsedCompletion(getModel(),{
        instructions: "Classify the customer complaint into the correct support department.",
        input: `User input: ${prompt}`,
        schema: PromtIntentSchema,
    });

    const extractedIntent = intentRes.data.intent
    const finalInstruction = PROMPT_INTENT[extractedIntent]

    console.log(`Selected intent: ${extractedIntent} because ${intentRes.data.reason}`)

    const finalRes = await createCompletion(getModel(), {
      instructions: finalInstruction,
      input: userPrompt
    })

    console.log(finalRes.text);

}

main(userPrompt);