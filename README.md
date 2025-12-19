🔍 Emoji Search Browser Extension

A sleek, efficient browser extension that enables instant search and one-click copying of emojis—designed for developers, content creators, and anyone who regularly communicates with emojis.

https://img.shields.io/badge/version-1.0.0-blue https://img.shields.io/badge/license-MIT-green https://img.shields.io/badge/platform-Firefox-orange
✨ Features

    ⚡ Instant Search: Real-time filtering of emojis by name, category, or keyword

    📋 One-Click Copy: Direct clipboard integration with a single click

    🎨 Clean Interface: Minimalist popup design focused on usability

    🔒 Privacy-First: No tracking, analytics, or external network requests

    🌐 Cross-Browser: Compatible with Firefox (Chrome-ready with minimal adjustments)

    📱 Responsive Design: Adapts to different screen sizes

🛠️ Tech Stack
Component	Technology
Core	Vanilla JavaScript (ES6+)
Manifest	WebExtensions Manifest V3
Storage	Local JSON database
UI	HTML5, CSS3 with Flexbox
Browser API	Clipboard API, WebExtensions API
📁 Project Structure
text

emoji-search-extension/
├── manifest.json              # Extension configuration
├── emojis.json               # Emoji database (2,000+ emojis)
├── icons/                    # Extension icons
│   ├── icon_16x16.png
│   ├── icon_48x48.png
│   └── icon_128x128.png
├── popup/                    # Popup interface
│   ├── popup.html           # Main popup structure
│   ├── popup.css            # Styling and animations
│   └── popup.js             # Core search and copy logic
└── README.md                # This file

🚀 Installation
From Firefox Add-ons Store

    Visit the Firefox Add-ons page (link pending approval)

    Click "Add to Firefox"

    Confirm installation when prompted

Development Installation
bash

# Clone the repository
git clone https://github.com/vinayakkamatcodes/emoji-search-extension.git
cd emoji-search-extension

# Load in Firefox
1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" in the sidebar
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file from the cloned directory

🎮 Usage

    Click the Emoji Search icon in your browser toolbar

    Type any keyword (e.g., "happy", "food", "animal") in the search box

    Browse through filtered results

    Click any emoji to automatically copy it to your clipboard

    Paste (Ctrl+V/Cmd+V) anywhere!

Example Searches

    fire → 🔥 🧯 🚒 🎆

    cat → 🐱 🐈 😸 🐾

    celebrate → 🎉 🥳 🎊 🏆

🧪 Development
Prerequisites

    Modern web browser (Firefox 109+ or Chrome 88+)

    Basic understanding of web extensions

    Text editor/IDE (VS Code recommended)

Building from Source
bash

# 1. Clone the repository
git clone https://github.com/vinayakkamatcodes/emoji-search-extension.git

# 2. Navigate to project directory
cd emoji-search-extension

# 3. Make changes as needed

# 4. Test in browser (see Installation section)

Architecture Overview

    popup.js: Handles search logic, DOM manipulation, and clipboard operations

    emojis.json: Structured emoji database with names, codes, and categories

    manifest.json: Extension metadata and permission declarations

    The extension uses event delegation for efficient emoji selection handling

Adding New Emojis

Edit emojis.json following the existing structure:
json

{
  "emoji": "🤖",
  "name": "robot",
  "keywords": ["robot", "android", "ai", "bot"],
  "category": "Smileys & People"
}

📋 Browser Compatibility
Browser	Status	Notes
Firefox	✅ Fully supported	Tested on Firefox 109+
Chrome/Edge	⚠️ Minor adjustments	Requires manifest adjustment
Safari	❌ Not tested	WebExtensions API differences
🔧 Customization
Changing Theme

Edit popup.css variables:
css

:root {
  --primary-color: #4f46e5;    /* Change to any hex color */
  --background-color: #ffffff;
  --text-color: #1f2937;
}

Adding Keyboard Shortcuts

Extend manifest.json:
json

"commands": {
  "_execute_action": {
    "suggested_key": {
      "default": "Ctrl+Shift+E",
      "mac": "Command+Shift+E"
    },
    "description": "Open Emoji Search"
  }
}

🤝 Contributing

Contributions are welcome! Here's how you can help:

    Fork the repository

    Create a feature branch (git checkout -b feature/amazing-feature)

    Commit your changes (git commit -m 'Add amazing feature')

    Push to the branch (git push origin feature/amazing-feature)

    Open a Pull Request

Areas for Contribution

    Additional emoji keywords and categories

    Improved search algorithms

    Dark/light theme toggle

    Recent/favorites functionality

    Translation/localization

🐛 Troubleshooting
Issue	Solution
Emoji doesn't copy	Ensure clipboard permission is granted in browser settings
Search not working	Clear browser cache and reload extension
Popup not opening	Restart browser or reinstall extension
Missing icons	Verify icons/ folder contains all required sizes
📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

    Emoji data sourced from unicode.org

    Icons designed with Figma

    Inspired by the need for faster emoji access in daily communication

📞 Support

    Issues: GitHub Issues

    Email: [Add your email here]

    Twitter: [Your Twitter handle]

<div align="center"> Made with ❤️ by Vinayak Kamat </div>

This extension respects your privacy—no data collection, no analytics, no tracking. Everything happens locally in your browser.
