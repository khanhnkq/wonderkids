import axios from 'axios';

const ELEVENLABS_API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY;
const BASE_URL = 'https://api.elevenlabs.io/v1';

// Voice ID: '21m00Tcm4TlvDq8ikWAM' (Rachel) or 'MF3mGyEYCl7XYWbV9V6O' (Elli - Cute/Young)
// Using 'MF3mGyEYCl7XYWbV9V6O' (Elli) as a placeholder for a cuter voice, or 'EXAVITQu4vr4xnSDxMaL' (Bella)
// Let's use 'MF3mGyEYCl7XYWbV9V6O' (Elli) for a young/friendly vibe, or standard '21m00Tcm4TlvDq8ikWAM'.
// Actually, let's use a standard one '21m00Tcm4TlvDq8ikWAM' (Rachel) first as it's reliable, user can change ID.
const VOICE_ID = '21m00Tcm4TlvDq8ikWAM';

export const speakWithElevenLabs = async (text: string): Promise<string | null> => {
    const key = ELEVENLABS_API_KEY;

    // Detailed Debugging
    if (!key) {
        console.error('CRITICAL: ElevenLabs API Key is UNDEFINED. Check .env.local for VITE_ELEVENLABS_API_KEY');
        return null;
    }

    console.log(`[ElevenLabs] Key found. Length: ${key.length}`);
    if (key.trim() !== key) {
        console.warn('[ElevenLabs] WARNING: Key has leading/trailing spaces! I will trim it.');
    }

    const cleanKey = key.trim();
    console.log(`[ElevenLabs] Using key: ${cleanKey.substring(0, 5)}...${cleanKey.substring(cleanKey.length - 4)}`);

    if (!cleanKey) return null;

    try {
        const response = await axios.post(
            `${BASE_URL}/text-to-speech/${VOICE_ID}`,
            {
                text: text,
                model_id: "eleven_multilingual_v2", // Important for Vietnamese
                voice_settings: {
                    stability: 0.5,
                    similarity_boost: 0.75,
                }
            },
            {
                headers: {
                    'Accept': 'audio/mpeg',
                    'xi-api-key': ELEVENLABS_API_KEY,
                    'Content-Type': 'application/json',
                },
                responseType: 'blob' // Important to get binary audio data
            }
        );

        // Create a URL for the audio blob
        const audioUrl = URL.createObjectURL(response.data);
        return audioUrl;

    } catch (error: any) {
        if (error.response && error.response.data instanceof Blob) {
            // Decode Blob to see the actual JSON error message
            const errorText = await error.response.data.text();
            console.error('ElevenLabs API Error Details:', errorText);
            try {
                const errorJson = JSON.parse(errorText);
                if (errorJson.detail?.status === "quota_exceeded") {
                    console.warn("ElevenLabs Quota Exceeded!");
                }
            } catch (e) { /* ignore json parse error */ }
        } else {
            console.error('ElevenLabs TTS Error:', error);
        }
        return null;
    }
};
