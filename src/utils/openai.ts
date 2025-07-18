import { AzureKeyCredential, OpenAIClient, ChatChoice} from '@azure/openai'
import axios from 'axios'

interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

export const getOnYourData = async (message: string): Promise<ChatChoice[]> => {
    const endpoint = process.env.AZURE_OPENAI_API_ENDPOINT!
    const azureApiKey = process.env.AZURE_OPENAI_API_KEY!
    const deploymentName = process.env.AZURE_OPENAI_API_DEPLOYMENT_ID!

    console.log(endpoint, azureApiKey, deploymentName)

    const apiUrl = 'https://api-web-dev-chat.azurewebsites.net/conversation'
    const requestData = {
        messages: [
            {
                role: 'user',
                content: message
            }
        ]
    }

    const res = await axios.post(apiUrl, requestData)

    const content = `
    # 質問
    ${message}

    # 回答
    ${res.data}
    `

    const messages: ChatMessage[] = [
        {
            role: 'system',
            content: 'You are a helpful assistant.'
        },
        {
            role: 'user',
            content
        }
    ]

    const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey))
    const result = await client.getChatCompletions(deploymentName, messages)

    return result.choices
}