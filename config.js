// ============================================
// PopUp1-AR Configuration File
// Separate content from code for easy editing
// ============================================

// ============================================
// APP SETTINGS
// ============================================

const APP_CONFIG = {
    // Default mode: 'audio' or 'ar'
    // 'audio' = audio-only mode (default)
    // 'ar' = full AR experience
    defaultMode: 'audio',
    
    // Show test mode toggle button on first load?
    showTestModeToggle: true,
    
    // LocalStorage key for remembering test mode preference
    testModeStorageKey: 'popup1-ar-test-mode',
    
    // Audio context settings
    audio: {
        // Master volume (0.0 to 1.0)
        masterVolume: 0.5,
        
        // Enable spatial audio (panning based on object position)
        spatialAudio: true,
        
        // Auto-play next track when current finishes
        autoAdvance: false
    },
    
    // AR settings (only used in AR mode)
    ar: {
        // Video overlay file
        videoSrc: 'video/overlay.webm',
        
        // MindAR image target file
        targetSrc: 'targets/tag.mind',
        
        // Alpha channel mode: 'webm' or 'sideband'
        alphaMode: 'webm',
        
        // Optional glTF model (null for procedural icosahedron)
        modelSrc: null,
        
        // Fallback to 3D mode if AR fails
        fallbackTo3D: true
    }
};

// ============================================
// AUDIO TREE / NARRATIVE STRUCTURE
// ============================================
//
// Each node in the tree represents a screen/state with:
//   - id: Unique identifier for this node
//   - title: Display title
//   - subtitle: Optional subtitle text
//   - audio: Audio file URL or tone configuration
//   - text: Optional on-screen text content
//   - options: Array of next node IDs (for branching)
//   - next: Default next node ID (if no options specified)
//   - color: Theme color for this node
//   - background: Optional background color/image
//
// Audio can be:
//   - String: URL to audio file (e.g., 'audio/chapter1.mp3')
//   - Object: { type: 'tone', frequency: 440, duration: 3, wave: 'sine' }
//   - Object: { type: 'silence', duration: 2 }
//   - Object: { type: 'sequence', notes: [{freq: 440, dur: 0.5}, ...] }
//
// If no audio specified, uses silence
//

const AUDIO_TREE = {
    // Starting node
    start: {
        id: 'start',
        title: 'Co-incidence Generator ',
        subtitle: 'Click "Next" to begin the journey',
        text: 'Welcome to the experience. Press Next to start.',
        audio: { type: 'silence', duration: 0.1 },
        next: 'chapter1',
        color: '#007aff'
    },
    
    // Chapter 1
    chapter1: {
        id: 'chapter1',
        title: 'Chapter 1: The Beginning',
        subtitle: 'A new adventure unfolds',
        text: 'In the beginning, there was only silence. Then, a single note emerged from the void.',
        audio:  'audio/1-Falling.mp3',
        next: 'chapter2',
        color: '#007aff'
    },
    
    // Chapter 2
    chapter2: {
        id: 'chapter2',
        title: 'Chapter 2: The Journey',
        subtitle: 'The path forward',
        text: 'The note grew, splitting into harmony. Two voices now sang together.',
        audio: { type: 'sequence', notes: [
            { freq: 220, dur: 0.8, wave: 'sine' },
            { freq: 277.18, dur: 0.8, wave: 'sine' },
            { freq: 330, dur: 1.4, wave: 'sine' }
        ]},
        next: 'chapter3',
        color: '#34c759'
    },
    
    // Chapter 3
    chapter3: {
        id: 'chapter3',
        title: 'Chapter 3: The Discovery',
        subtitle: 'Something new appears',
        text: 'The harmony resolved into a single, pure tone. But this was different. This was a choice.',
        audio: { type: 'tone', frequency: 330, duration: 4, wave: 'sine' },
        options: ['choice_a', 'choice_b'],
        color: '#ff9500'
    },
    
    // Choice A - The Light Path
    choice_a: {
        id: 'choice_a',
        title: 'The Light Path',
        subtitle: 'You chose brightness',
        text: 'The light surrounded you, warm and welcoming. The tone ascended, lifting your spirit.',
        audio: { type: 'sequence', notes: [
            { freq: 330, dur: 0.5, wave: 'sine' },
            { freq: 440, dur: 0.5, wave: 'sine' },
            { freq: 550, dur: 0.5, wave: 'sine' },
            { freq: 660, dur: 2, wave: 'sine' }
        ]},
        next: 'ending',
        color: '#ffcc00'
    },
    
    // Choice B - The Shadow Path
    choice_b: {
        id: 'choice_b',
        title: 'The Shadow Path',
        subtitle: 'You embraced the dark',
        text: 'The shadows enveloped you, cool and mysterious. The tone descended, grounding your soul.',
        audio: { type: 'sequence', notes: [
            { freq: 330, dur: 0.5, wave: 'sine' },
            { freq: 220, dur: 0.5, wave: 'sine' },
            { freq: 165, dur: 0.5, wave: 'sine' },
            { freq: 110, dur: 2, wave: 'sine' }
        ]},
        next: 'ending',
        color: '#333366'
    },
    
    // Ending
    ending: {
        id: 'ending',
        title: 'The End',
        subtitle: 'For now...',
        text: 'Your journey has reached its conclusion. But every ending is a new beginning. Press Next to start again.',
        audio: { type: 'sequence', notes: [
            { freq: 220, dur: 0.3, wave: 'sine' },
            { freq: 0, dur: 0.1 }, // silence
            { freq: 277.18, dur: 0.3, wave: 'sine' },
            { freq: 0, dur: 0.1 },
            { freq: 330, dur: 0.3, wave: 'sine' },
            { freq: 0, dur: 0.1 },
            { freq: 440, dur: 1, wave: 'sine' }
        ]},
        next: 'start',
        color: '#ffffff',
        background: '#000000'
    }
};

// ============================================
// UI TEXT
// ============================================

const UI_TEXT = {
    // Buttons
    nextButton: 'Next',
    nextButtonAR: 'Next Track',
    startARButton: 'Start AR',
    testModeButton: 'Test Mode',
    backButton: 'Back to Audio',
    
    // Mode labels
    audioModeLabel: 'Audio Mode',
    arModeLabel: 'AR Mode',
    web3DLabel: 'Web 3D',
    
    // Info messages
    arNotAvailable: 'AR Not Available',
    arNotAvailableDescription: 'Camera access denied or not supported. Using 3D fallback mode.',
    cameraRequired: 'Camera access is required for AR mode',
    
    // Loading
    loading: 'Loading...',
    loadingAudio: 'Loading audio...'
};

// ============================================
// THEME / STYLING
// ============================================

const THEME = {
    // Colors
    primary: '#007aff',
    secondary: '#34c759',
    accent: '#ff9500',
    background: '#000000',
    text: '#ffffff',
    textSecondary: '#888888',
    
    // Fonts
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    
    // Spacing
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
        xlarge: '48px'
    },
    
    // Border radius
    borderRadius: {
        small: '4px',
        medium: '8px',
        large: '12px',
        pill: '50px'
    }
};

// ============================================
// EXPORT
// ============================================

// Export all configurations for use in index.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APP_CONFIG, AUDIO_TREE, UI_TEXT, THEME };
}
