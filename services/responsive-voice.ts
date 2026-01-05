// ResponsiveVoice TTS Wrapper
// This wraps the global responsiveVoice object for type-safe usage

declare global {
    interface Window {
        responsiveVoice: {
            speak: (text: string, voice: string, options?: { onstart?: () => void; onend?: () => void; onerror?: () => void }) => void;
            cancel: () => void;
            isPlaying: () => boolean;
            voiceSupport: () => boolean;
        };
    }
}

// Vietnamese voice: "Vietnamese Female" or "Vietnamese Male"
const VOICE_NAME = 'Vietnamese Female';

export const speakWithResponsiveVoice = (
    text: string,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: () => void
): boolean => {
    console.log('[ResponsiveVoice] Attempting to speak...');
    console.log('[ResponsiveVoice] window.responsiveVoice exists:', !!window.responsiveVoice);

    // Check if ResponsiveVoice is loaded
    if (!window.responsiveVoice) {
        console.error('[ResponsiveVoice] Library NOT loaded! Check if script is in index.html');
        return false;
    }

    console.log('[ResponsiveVoice] voiceSupport():', window.responsiveVoice.voiceSupport());

    if (!window.responsiveVoice.voiceSupport()) {
        console.warn('[ResponsiveVoice] Voice not supported in this browser');
        return false;
    }

    // Cancel any ongoing speech
    window.responsiveVoice.cancel();

    console.log('[ResponsiveVoice] Speaking with voice:', VOICE_NAME);
    console.log('[ResponsiveVoice] Text:', text.substring(0, 80) + (text.length > 80 ? '...' : ''));

    try {
        window.responsiveVoice.speak(text, VOICE_NAME, {
            onstart: () => {
                console.log('[ResponsiveVoice] ✅ Speech STARTED');
                onStart?.();
            },
            onend: () => {
                console.log('[ResponsiveVoice] ✅ Speech ENDED');
                onEnd?.();
            },
            onerror: () => {
                console.error('[ResponsiveVoice] ❌ Speech ERROR');
                onError?.();
            }
        });
        return true;
    } catch (e) {
        console.error('[ResponsiveVoice] Exception:', e);
        return false;
    }
};

export const cancelResponsiveVoice = (): void => {
    if (window.responsiveVoice) {
        window.responsiveVoice.cancel();
    }
};

export const isResponsiveVoicePlaying = (): boolean => {
    return window.responsiveVoice?.isPlaying() || false;
};
