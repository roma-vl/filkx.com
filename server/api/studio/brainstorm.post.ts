export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const { concept } = await readBody(event)

    if (!concept) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Concept is required'
        })
    }

    if (!config.geminiApiKey) {
        // Fallback for demo if API key is missing
        return {
            title: "Project Concept",
            techStack: ["Nuxt 3", "Tailwind CSS", "Prisma", "PostgreSQL"],
            scalabilityPlan: "Horizontal scaling with Docker & Kubernetes. Specialized caching layers for high load.",
            roadmap: [
                "MVP Development (2-4 weeks)",
                "Beta Testing & Infrastructure setup",
                "Scale-up & Production launch"
            ],
            bottlenecks: "Complex data migrations and real-time synchronization."
        }
    }

    try {
        const response = await $fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${config.geminiApiKey}`, {
            method: 'POST',
            body: {
                contents: [{
                    parts: [{
                        text: `Act as a CTO and Software Architect. Analyze this SaaS project concept: "${concept}". 
                        Return EXACTLY a JSON object with these keys: 
                        "title" (short string), 
                        "techStack" (array of strings), 
                        "scalabilityPlan" (short paragraph), 
                        "roadmap" (array of 3 strings), 
                        "bottlenecks" (short string). 
                        Do not include any other text or markdown formatting.`
                    }]
                }]
            }
        })

        const text = (response as any).candidates[0].content.parts[0].text
        // Clean JSON from potential markdown backticks
        const cleanJson = text.replace(/```json|```/g, '').trim()
        return JSON.parse(cleanJson)
    } catch (e) {
        console.error("Gemini API Error:", e)
        // Technical fallback
        return {
            title: "Custom SaaS Solution",
            techStack: ["Modern Fullstack architecture"],
            scalabilityPlan: "Enterprise-grade scalable infrastructure.",
            roadmap: ["Definition", "Implementation", "Deployment"],
            bottlenecks: "Standard development risks."
        }
    }
})
