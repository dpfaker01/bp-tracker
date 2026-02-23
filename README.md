BP Tracker PWA - Complete Setup Guide
📁 Files Overview
You now have all the necessary files for a complete Progressive Web App (PWA):
bp_tracker_native.html - Main app (improved native version)
manifest.json - PWA manifest for installability
sw.js - Service Worker for offline functionality
🚀 Setup Instructions
Step 1: File Structure
Create this folder structure on your web server:
plain
Copy
/your-app-folder/
├── index.html              (rename bp_tracker_native.html)
├── manifest.json
├── sw.js
└── icons/                  (create this folder)
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    └── icon-512x512.png
Step 2: Generate Icons
You can generate PWA icons using these free tools:
PWABuilder Image Generator: https://www.pwabuilder.com/imageGenerator
Favicon.io: https://favicon.io/
App Icon Generator: https://appicon.co/
Upload a 512x512 PNG image of a heart/health logo and it will generate all required sizes.
Step 3: Update HTML Reference
In your index.html, the manifest is already linked in the <head>:
HTML
Preview
Copy
<link rel="manifest" href="./manifest.json">
Step 4: Deploy
Upload all files to your web server or hosting platform:
GitHub Pages
Netlify
Vercel
Firebase Hosting
Any static web host
Step 5: Install on Mobile
Open the app URL in Chrome (Android) or Safari (iOS)
Android: Tap menu → "Add to Home screen"
iOS: Tap share button → "Add to Home Screen"
🎯 Features Enabled
From manifest.json:
✅ Standalone display (no browser chrome)
✅ Portrait orientation lock
✅ Theme color matching app
✅ App shortcuts (long-press icon)
✅ Categories for app stores
✅ Maskable icons support
From sw.js:
✅ Offline functionality
✅ Static asset caching
✅ CDN resource caching
✅ Cache cleanup on update
✅ Background sync ready
✅ Push notification ready
✅ Skip waiting for instant updates
🔧 Testing PWA Features
Chrome DevTools:
Open DevTools (F12)
Go to "Application" tab
Check:
Manifest: Should show all details green
Service Workers: Should show "activated and is running"
Cache Storage: Should show cached files
Lighthouse: Run PWA audit for score
Online Testing:
PWABuilder: https://www.pwabuilder.com/
Web.dev Measure: https://web.dev/measure/
📱 Native App Behavior
The app now has:
❌ No pinch zoom (disabled via touch events)
❌ No double-tap zoom (300ms delay eliminated)
✅ Standalone mode (no browser UI)
✅ Splash screen (auto-generated from manifest)
✅ Offline support (works without internet)
✅ Background sync (ready for future features)
✅ Push notifications (ready for reminders)
🔄 Updating the App
When you update the app:
Change CACHE_NAME in sw.js (e.g., 'bp-tracker-v2.6')
Update version in manifest if needed
Deploy new files
Users will get the new version on next visit
🛠️ Customization
Change Theme Color:
Edit in both files:
manifest.json: "theme_color": "#4285f4"
index.html: <meta name="theme-color" content="#4285f4">
Change App Name:
manifest.json: "name" and "short_name"
Add More Shortcuts:
Edit shortcuts array in manifest.json
📋 Checklist
Before deploying, verify:
[ ] All files uploaded to server
[ ] Icons created and in /icons/ folder
[ ] HTTPS enabled (required for PWA)
[ ] Manifest validates in DevTools
[ ] Service Worker registers successfully
[ ] App works offline (test in DevTools)
[ ] Can install to home screen
🐛 Troubleshooting
Service Worker not registering?
Must be served over HTTPS (except localhost)
Check console for errors
Ensure sw.js is at root level
Icons not showing?
Verify exact paths in manifest
Check icon sizes are correct
Ensure PNG format
Offline not working?
Check Cache Storage in DevTools
Verify STATIC_ASSETS paths are correct
Look for errors in console
📚 Resources
MDN PWA Guide
Web.dev PWA Checklist
Google PWA Training
Your BP Tracker is now a fully installable, offline-capable native-like PWA! 🎉
