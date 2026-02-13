// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Sanny hayati",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "I love you my dearest darling 💗",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['😘', '😘', '🥰', '💗', '💋'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you know that i love you lots and lots?",                                    // First interaction
            yesBtn: "I do i do!",                                             // Text for "Yes" button
            noBtn: "Nuh uh you dont..",                                               // Text for "No" button
            secretAnswer: "You so skibidi my rizzler!! 💗"           // Secret hover message
        },
        second: {
            text: "On a scale of 1-♾️, how much do you love me?",                          // For the love meter
            startText: "Thisss much!",                                   // Text before the percentage
            nextBtn: "Confirm"                                         // Text for the next button
        },
        third: {
            text: "Sigma sigma on the wall, Who’s the skibidiest cutie of them all? If the vibes are strong and the stars align, will you be my darling Valentine?", // The big question!
            yesBtn: "You may my rizzler!",                                             // Text for "Yes" button
            noBtn: "Ew no you farted..."                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WAH you must love me to the moon and back 🥺🌕💗",  // Shows when they go past 5000%
        high: "Woahh you super duper uper love me! 😘",              // Shows when they go past 1000%
        normal: "Aww you love me so much hayati"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yayyyyy thank you my lovee",
        message: "May we always have an amazing time when we're together my heart",
        emojis: "🫂💗🇲🇳✝️🇮🇶🤍💋"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dxbckfp3k/video/upload/v1770701881/M._spotdown.org_w2dq5q.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
