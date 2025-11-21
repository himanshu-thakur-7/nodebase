import prisma from "@/lib/db";
import {inngest} from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import {createOpenAI} from "@ai-sdk/openai";
import {createAnthropic} from "@ai-sdk/anthropic";

const google = createGoogleGenerativeAI();
const openai = createOpenAI();
const anthropic = createAnthropic();

export const execute = inngest.createFunction(
    {id: "execute-ai"},
    {event: "execute/ai"},
    async ({event,step})=>{
        const {steps: geministeps} = await step.ai.wrap("gemini-generative-text",
            generateText,
            {
                model: google("gemini-2.5-flash"),
                system:"You are a helpful assistant",
                prompt: "Name the Indian captain who won the world cup in 2011?"
            }
        )
        const {steps: openaiSteps} = await step.ai.wrap("openai-generative-text",
            generateText,
            {
                model: openai("gpt-4"),
                system:"You are a helpful assistant",
                prompt: "Name the Indian captain who won the world cup in 2011?"
            }
        )
         const {steps: anthropicSteps} = await step.ai.wrap("anthropic-generative-text",
            generateText,
            {
                model: anthropic("claude-sonnet-4-0"),
                system:"You are a helpful assistant",
                prompt: "Name the Indian captain who won the world cup in 2011?"
            }
        )
        return {
            geministeps,
            openaiSteps,
            anthropicSteps
        };
    }
)