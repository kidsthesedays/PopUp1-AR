# PopUp1-AR

A web-based AR experience built with Three.js and MindAR. Press **Next** to play hosted audio tracks, see a 3D object on a video space, and (in AR) pin that video space to a real-world image tag via camera tracking.

## Features

- **Click-through audio playback** — Preloaded AudioBuffers from same-origin URLs, Next cycles the playlist, gesture-gated AudioContext
- **3D object on a video space** — A video-textured plane with a 3D object on top, audio-reactive
- **Image-tag tracking for video playback** — Via MindAR. The whole stage pins to a recognized image tag

## Architecture

- **One URL, two render paths, shared content**
- MindAR owns its own renderer/scene/camera when active, so the app runs two paths that share the same `stage` group (video plane + 3D object + lights)
  - **AR path:** MindAR image tracking → `addAnchor` pins the stage to the tracked image
  - **Web path:** plain three.js, orbit-able, for devices with no camera or where MindAR fails
- Runtime picks the path; a **Start AR** button requests the camera. On failure it falls back to 3D mode

## Why MindAR (not WebXR)

- WebXR `immersive-ar` works on Android Chrome / Meta, but **not on iOS/iPad Safari** — Apple never shipped it
- Every iOS browser (Chrome, Firefox, etc.) is forced to use Apple's WebKit engine under the hood, so installing another browser does **not** rescue iPad users
- MindAR does image tracking via camera + TensorFlow.js in the browser — works in Safari/iOS/iPadOS and Chrome/Android

## Project Structure

```
PopUp1-AR/
├── index.html              # Main application
├── audio/                  # Audio tracks (track-01.mp3, track-02.mp3, etc.)
├── video/                  # Video overlays (overlay.webm)
├── targets/                # MindAR image targets (tag.mind)
├── models/                 # Optional glTF models (model.glb)
└── README.md
```

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kidsthesedays/PopUp1-AR.git
   cd PopUp1-AR
   ```

2. **Add your assets:**
   - Place audio files in `audio/` (e.g., `track-01.mp3`, `track-02.mp3`, `track-03.mp3`)
   - Place video overlay in `video/` (e.g., `overlay.webm`)
   - Optional: Place glTF model in `models/` (e.g., `model.glb`)

3. **Create MindAR target:**
   ```bash
   npx mind-ar-node-tools.createTarget --image-target ./path/to/your/tag.jpg --output ./targets/tag.mind
   ```
   - The tag image should be **feature-rich** (photo, detailed illustration)
   - Good target: high contrast, lots of corners, no symmetry, minimal empty space

4. **Serve with HTTPS:**
   ```bash
   # Using Python's http.server with SSL (requires cert)
   python3 -m http.server 8000 --bind 0.0.0.0
   # Or use a proper static host like Netlify, Vercel, or S3
   ```
   - **Note:** MindAR requires HTTPS for camera access

5. **Open in browser:**
   - Navigate to `https://localhost:8000` (or your deployed URL)
   - Click **Start AR** to begin image tracking
   - Click **Next Track** to cycle through audio

## Configuration

Edit the `CONFIG` object in `index.html` to customize:

```javascript
const CONFIG = {
    audioTracks: ['audio/track-01.mp3', 'audio/track-02.mp3', 'audio/track-03.mp3'],
    videoSrc: 'video/overlay.webm',
    targetSrc: 'targets/tag.mind',
    ALPHA_MODE: 'webm', // 'webm' for WebM VP9 with alpha, 'sideband' for RGB+alpha split
    modelSrc: null // 'models/model.glb' or null for procedural icosahedron
};
```

## Alpha-Channel Video

Two modes for transparent video:

- **`'webm'`** — WebM VP9 with alpha. Clean, one file, works in Chrome/Android
- **`'sideband'`** — Shader splits each frame into RGB (top half) + alpha mask (bottom half). Universal fallback for Safari/iOS where WebM-alpha is unreliable

## Deployment

- Any static host (Netlify / Vercel / S3)
- WebXR needs HTTPS; MindAR needs camera permission, which also requires HTTPS
- Self-host three.js + MindAR via importmap, or bundle with Vite for production

## Key Gotchas

- **Audio must start inside a user gesture.** Browsers block sound until a tap resumes the AudioContext
- **MindAR owns the renderer.** Can't share one renderer between MindAR and the 3D fallback — the code reparents the shared `stage` group instead
- **iOS Safari camera + audio both need a user gesture** to start. The Start AR / Next button covers both

## Next Steps

1. Swap procedural icosahedron for a real glTF model (one `GLTFLoader.load` call)
2. **Choose-your-own-adventure prompts** — data-shape change: playlist → graph of `{ audio, video, model, prompt?, choices?: [toIndex...] }`
3. Spatial audio — `PannerNode` positioned at the tracked object
4. User reaction recording — later, needs a backend

## License

MIT
