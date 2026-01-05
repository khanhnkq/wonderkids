import axios from 'axios';

const GOOGLE_TTS_API_KEY = import.meta.env.VITE_GOOGLE_TTS_API_KEY;
const BASE_URL = 'https://texttospeech.googleapis.com/v1';

// Voice: vi-VN-Wavenet-A (Female), vi-VN-Wavenet-B (Male), vi-VN-Wavenet-C (Female), vi-VN-Wavenet-D (Male)
// Using vi-VN-Wavenet-A for a natural female voice
const VOICE_NAME = 'vi-VN-Wavenet-A';
const LANGUAGE_CODE = 'vi-VN';

export const speakWithGoogleTTS = async (text: string): Promise<string | null> => {
    // Debug logging
    console.log(`[Google TTS] Key Status: ${GOOGLE_TTS_API_KEY ? 'Loaded' : 'MISSING'}`);

    if (!GOOGLE_TTS_API_KEY) {
        console.warn('Google TTS API Key is missing from .env.local (VITE_GOOGLE_TTS_API_KEY)');
        return null;
    }

    try {
        const response = await axios.post(
            `${BASE_URL}/text:synthesize?key=${GOOGLE_TTS_API_KEY}`,
            {
                input: { text: text },
                voice: {
                    languageCode: LANGUAGE_CODE,
                    name: VOICE_NAME,
                    ssmlGender: 'FEMALE'
                },
                audioConfig: {
                    audioEncoding: 'MP3',
                    speakingRate: 1.0,
                    pitch: 0.0
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        // Google TTS returns base64 encoded audio
        const audioContent = response.data.audioContent;
        if (!audioContent) {
            console.error('No audio content in response');
            return null;
        }

        // Convert base64 to blob URL
        const byteCharacters = atob(audioContent);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(blob);

        return audioUrl;

    } catch (error: any) {
        console.error('Google TTS Error:', error);
        if (error.response) {
            console.error('Response Status:', error.response.status);
            console.error('Response Data:', error.response.data);
        }
        return null;
    }
};
