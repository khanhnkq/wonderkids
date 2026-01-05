import axios from 'axios';

const AZURE_KEY = import.meta.env.VITE_AZURE_SPEECH_KEY;
const AZURE_REGION = import.meta.env.VITE_AZURE_SPEECH_REGION; // e.g., "eastus"

// Voice: vi-VN-HoaiMyNeural (Female) or vi-VN-NamMinhNeural (Male)
const VOICE_NAME = 'vi-VN-HoaiMyNeural';

export const speakWithAzure = async (text: string): Promise<string | null> => {
    // Debug logging
    console.log(`[Azure TTS] Key Status: ${AZURE_KEY ? 'Loaded' : 'MISSING'}`);
    console.log(`[Azure TTS] Region: ${AZURE_REGION || 'MISSING'}`);

    if (!AZURE_KEY || !AZURE_REGION) {
        console.warn('Azure Speech Key or Region is missing from .env.local');
        return null;
    }

    try {
        // 1. Get Access Token
        // Endpoint: https://<region>.api.cognitive.microsoft.com/sts/v1.0/issuetoken
        const tokenResponse = await axios.post(
            `https://${AZURE_REGION}.api.cognitive.microsoft.com/sts/v1.0/issuetoken`,
            null,
            {
                headers: {
                    'Ocp-Apim-Subscription-Key': AZURE_KEY
                }
            }
        );
        const accessToken = tokenResponse.data;

        // 2. Synthesize Speech
        // Endpoint: https://<region>.tts.speech.microsoft.com/cognitiveservices/v1
        const ssml = `
            <speak version='1.0' xml:lang='vi-VN'>
                <voice xml:lang='vi-VN' xml:gender='Female' name='${VOICE_NAME}'>
                    ${text}
                </voice>
            </speak>
        `;

        const ttsResponse = await axios.post(
            `https://${AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
            ssml,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
                    'Content-Type': 'application/ssml+xml'
                },
                responseType: 'blob'
            }
        );

        const audioUrl = URL.createObjectURL(ttsResponse.data);
        return audioUrl;

    } catch (error: any) {
        console.error('Azure TTS Error:', error);
        if (error.response) {
            console.error('Response Status:', error.response.status);
            if (error.response.data instanceof Blob) {
                const errText = await error.response.data.text();
                console.error('Response Data:', errText);
            }
        }
        return null;
    }
};
