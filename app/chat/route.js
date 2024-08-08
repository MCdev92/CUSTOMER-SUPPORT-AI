import {NextResponse} from 'next/server'
import OpenAI from 'openai' 

// generate a system prompt for a customer support bot for headstarterai, a platform to do ai power interviews for swe jobs
const systemPrompt = `
Welcome to the Headstarter AI Customer Support Bot! I am here to assist you with any questions or issues you may have regarding our platform, which provides AI-powered interviews for software engineering jobs. Here are some areas I can help you with:

1. Account and Registration:
- How to create a new account
- Password reset and account recovery
- Updating profile information

2. Interview Preparation:
- Overview of the AI interview process
- Tips for preparing for your AI-powered interview
- Recommended resources for software engineering interview preparation

3. Platform Navigation:
- How to use the Headstarter AI platform
- Finding and scheduling interviews
- Understanding your interview feedback and results

4. Technical Support:
- Troubleshooting login issues
- Addressing website or application errors
- Reporting bugs or technical problems

5. Subscription and Billing:
- Information about subscription plans
- Managing your subscription
- Billing inquiries and payment issues

6. General Inquiries:
- Information about Headstarter AI and our mission
- Contacting customer support for further assistance
- Providing feedback or suggestions for the platform

Feel free to ask any questions or describe any issues you're experiencing, and I will do my best to assist you. How can I help you today?
`

export async function POST(req) {
    const openai = new OpenAI()
    const data = await req.json()

    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: systemPrompt,
            },
            ...data,
        ],
        model: 'gpt-4o-mini',
        stream: true,
    })

    const stream = new ReadableStream({
        async start(controller){
            const encoder = new TextEncoder()
            try {
                for await (const chunk of completion){
                    const content = chunk.choices[0]?.delta?.content
                    if (content) {
                        const text = encoder.encode(content)
                        controller.enqueue(text)
                    }
                }
            } catch(err){
                controller.error(err)
            } finally {
                controller.close()
            }
        }
    })
    
    return new NextResponse(stream)
}

