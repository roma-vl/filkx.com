import { GoogleGenAI, Type } from "@google/genai"

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event)
    const concept = body.concept

    if (!concept) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Concept is required',
        })
    }

    try {
        const ai = new GoogleGenAI({ apiKey: config.geminiApiKey })
        // Using a more robust model for generation
        const model = ai.getGenerativeModel({ model: 'gemini-1.5-pro' })

        const prompt = `You are a high-end product strategist at Filkx Studio. Analyze this SaaS concept: "${concept}". 
    Provide a concise technical architecture, core features, scalability plan, potential bottlenecks, and a high-level development roadmap in JSON format.`

        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING },
                        techStack: { type: Type.ARRAY, items: { type: Type.STRING } },
                        coreFeatures: { type: Type.ARRAY, items: { type: Type.STRING } },
                        scalabilityPlan: { type: Type.STRING },
                        bottlenecks: { type: Type.STRING },
                        roadmap: { type: Type.ARRAY, items: { type: Type.STRING } },
                    },
                    required: ["title", "techStack", "coreFeatures", "scalabilityPlan", "bottlenecks", "roadmap"],
                },
            },
        })

        const response = JSON.parse(result.response.text())
        return response
    } catch (error) {
        console.error("Gemini brainstorming error:", error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to generate strategy. Please try again later.',
        })
    }
})
