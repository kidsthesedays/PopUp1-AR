// ============================================
// PopUp1-AR Configuration File
// Cybernetica Co-incidence Generator Narrative
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
        autoAdvance: false,
        
        // Preload all audio files at startup
        preloadAudio: true
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
// Cybernetica Co-incidence Generator - Sequential Journey
//
// Audio can be:
//   - String: URL to audio file (e.g., 'audio/chapter1.mp3')
//   - Object: { type: 'tone', frequency: 440, duration: 3, wave: 'sine' }
//   - Object: { type: 'silence', duration: 2 }
//   - Object: { type: 'sequence', notes: [{freq: 440, dur: 0.5}, ...] }
//

const AUDIO_TREE = {
    // Starting node
    start: {
        id: 'start',
        title: 'Co-incidence Generator',
        subtitle: 'A Cybernetica Experience',
        text: 'Welcome to the Co-incidence Generator. Press Next to begin your journey through the forest of possibilities.',
        audio: { type: 'silence', duration: 0.1 },
        next: 'falling',
        color: '#007aff'
    },
    
    // 1 - Falling
    falling: {
        id: 'falling',
        title: '1: Falling',
        subtitle: 'The Descent Begins',
        text: 'You step into the forest. The ground gives way beneath you, and you begin to fall - not with fear, but with curiosity. The trees whisper as you descend into the unknown.',
        audio: 'audio/1-Falling.mp3',
        next: 'offPath',
        color: '#007aff'
    },
    
    // 2 - Off Path Respect
    offPath: {
        id: 'offPath',
        title: '2: Off Path - Respect',
        subtitle: 'Honoring the Unseen',
        text: 'The forest does not judge. It simply is. You find yourself off the beaten path, learning to respect the intelligence of nature itself.',
        audio: 'audio/2-offPath-Respect.mp3',
        next: 'birdWatching',
        color: '#34c759'
    },
    
    // 3 - Bird Watching
    birdWatching: {
        id: 'birdWatching',
        title: '3: Bird Watching',
        subtitle: 'The Observers',
        text: 'Above you, the birds move in patterns. They are not just watching you - they are communicating about you. A murmuration of knowledge passes through the flock.',
        audio: 'audio/3-BirdWatching.mp3',
        next: 'othersWatching',
        color: '#ff9500'
    },
    
    // 4 - Others Watching Tree Translate
    othersWatching: {
        id: 'othersWatching',
        title: '4: Others Watching Tree Translate',
        subtitle: 'The Language of Trees',
        text: 'The trees themselves are translating. Not just the wind through leaves, but something deeper - a conversation in frequencies you can almost understand.',
        audio: 'audio/4-OthersWatchingTreeTranslate.mp3',
        next: 'slowMoWalk',
        color: '#ffcc00'
    },
    
    // 5 - Slow Motion Walk
    slowMoWalk: {
        id: 'slowMoWalk',
        title: '5: Slow Motion Walk',
        subtitle: 'Time Expands',
        text: 'Every step takes minutes. Every breath, an eternity. You walk in slow motion, feeling the texture of time itself stretching and bending around you.',
        audio: 'audio/5-SlowMoWalk.mp3',
        next: 'pathwayAB',
        color: '#333366'
    },
    
    // 7 - Pathway AB Test
    pathwayAB: {
        id: 'pathwayAB',
        title: '7: Pathway A/B Test',
        subtitle: 'The Choice Point',
        text: 'Two paths emerge. Not left or right, but A and B. The forest tests you. Both paths are valid. Both paths are watched.',
        audio: 'audio/7-pathwayABtest.mp3',
        next: 'offTrack',
        color: '#8844aa'
    },
    
    // 7 - Off Track
    offTrack: {
        id: 'offTrack',
        title: '7: Off Track',
        subtitle: 'Get Lost, Bring Back Our Tech',
        text: 'You chose to leave the path entirely. The forest thickens. You are lost, but not alone. A piece of technology waits to be returned.',
        audio: 'audio/7-offTrack-getlost-bringbackourtech.mp3',
        next: 'mushroomMycelium',
        color: '#cc3333'
    },
    
    // 9 - Mushroom Mycelium Internet Tree Hugging
    mushroomMycelium: {
        id: 'mushroomMycelium',
        title: '9: Mushroom Mycelium',
        subtitle: 'Internet Tree Hugging',
        text: 'Beneath your feet, the mycelium pulses like fiber optic cables. The forest is a living internet, connecting every tree, every plant, every being.',
        audio: 'audio/9-MushroomMycelumInternetTreeHugging.mp3',
        next: 'treeBeing',
        color: '#aa44cc'
    },
    
    // 9 - Tree Being Job Panels
    treeBeing: {
        id: 'treeBeing',
        title: '9: Tree Being',
        subtitle: 'Job Panels',
        text: 'The trees present their credentials. Bark resumes, leaf portfolios, root references. They are applying for the position of your attention.',
        audio: 'audio/9-TreeBeingJobPanels.mp3',
        next: 'returnLucy',
        color: '#44aa44'
    },
    
    // 10 - Return Lucy
    returnLucy: {
        id: 'returnLucy',
        title: '10: Return Lucy',
        subtitle: 'The Homecoming',
        text: 'Lucy was here all along. The journey through the forest was the journey back to yourself. The Co-incidence Generator completes its cycle.',
        audio: 'audio/10-ReturnLucy.mp3',
        next: 'ending',
        color: '#00aaff'
    },
    
    // Ending
    ending: {
        id: 'ending',
        title: 'The End',
        subtitle: 'Or the Beginning',
        text: 'You stand, changed. The forest watches as you leave. But you carry it with you now - in your breath, your thoughts, your new understanding.',
        audio: { type: 'sequence', notes: [
            { freq: 220, dur: 0.5, wave: 'sine' },
            { freq: 0, dur: 0.2 },
            { freq: 277.18, dur: 0.5, wave: 'sine' },
            { freq: 0, dur: 0.2 },
            { freq: 330, dur: 0.5, wave: 'sine' },
            { freq: 0, dur: 0.2 },
            { freq: 440, dur: 1.5, wave: 'sine' }
        ]},
        next: 'start',
        color: '#ffffff',
        background: '#000000',
        // Feedback form link (replace with real Google Form URL)
        feedbackUrl: 'https://example.com/feedback-placeholder'
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
    backButton: 'Back',
    playButton: 'Play',
    pauseButton: 'Pause',
    feedbackButton: 'Give Feedback',
    restartButton: 'Restart',
    
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
