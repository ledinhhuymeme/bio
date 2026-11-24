/**
 * ==========================================================
 * CẤU HÌNH THÔNG TIN CÁ NHÂN & ĐA NGÔN NGỮ (VI / EN)
 * ==========================================================
 */
const BIO_CONFIG = {
    name: "Huy Đình",
    username: "@huy_dinhhh",
    avatar: "avatar.jpg",

    links: {
        facebook: {
            url: "https://www.facebook.com/share/1FgFbPsM9g/?mibextid=wwXIfr"
        },
        instagram: {
            url: "https://www.instagram.com/huy_chuis?lqvp=aTQwbm82bDJ4aTE0&utm_source=qr"
        },
        tiktok: {
            url: "https://www.tiktok.com/@huy_cao_met8"
        },
        locket: {
            url: "https://locket.cam/huy_dinhhh"
        },
        zalo: {
            // Link được mã hóa Base64 để không hiển thị số điện thoại trên giao diện hay thanh xem trước URL
            encodedUrl: "aHR0cHM6Ly96YWxvLm1lLzA3ODM1MzkwMDA="
        },
        gmail: {
            url: "mailto:huyledinh21@gmail.com",
            copyText: "huyledinh21@gmail.com"
        }
    },

    i18n: {
        vi: {
            status: "Trực tuyến",
            themeBtn: "Đổi màu",
            shareBtn: "Chia sẻ",
            qrBtn: "Mã QR",
            ctaSaveContact: "Lưu Danh Bạ",
            ctaSendMail: "Gửi Email",
            bioLines: [
                "✨ Kết nối với mình qua các mạng xã hội bên dưới nhé!",
                "📸 Chia sẻ khoảnh khắc mỗi ngày trên Locket & IG",
                "🎵 Follow TikTok của mình để xem video mới nhất!"
            ],
            statViews: "Lượt ghé thăm",
            statChannels: "Kênh kết nối",
            statOnline: "Trực tuyến",
            catDonateTag: "🐱 GÓC NUÔI MÈO",
            catDonateTitle: "Ủng hộ cho chú mèo ít cá 😄",
            catDonateSub: "Chạm vào để phóng to mã MoMo / VietQR 🐟✨",
            catDonateBtn: "Mở mã QR 💛",
            sectionTitle: "KẾT NỐI MẠNG XÃ HỘI",
            sectionSub: "Chạm để mở hoặc sao chép nhanh",
            otherSectionTitle: "CÁC MỤC KHÁC",
            otherSectionBadge: "✨ Tiện ích & Dịch vụ",
            orderBioTag: "💎 NHẬN LÀM BIO",
            orderBioVal: "Muốn làm Bio xịn • Liên hệ mình",
            footerOrderBtn: "💎 Nhận làm Bio: Liên hệ mình",
            subtitles: {
                facebook: "Kết bạn & nhắn tin cho mình",
                instagram: "@huy_chuis • Stories mỗi ngày 📸",
                tiktok: "@huy_cao_met8 • Follow kênh mình 🎵",
                locket: "@huy_dinhhh • Add Locket xem ảnh 💛",
                zalo: "Nhắn tin trực tiếp cho mình 💬",
                gmail: "huyledinh21@gmail.com"
            },
            musicPaused: "TẠM DỪNG • CHẠM ĐỂ BẬT NHẠC 🎧",
            musicPlaying: "ĐANG PHÁT NHẠC NỀN 🎵",
            miniQrTitle: "Quét trên điện thoại",
            miniQrSub: "Mở nhanh trang Bio",
            footerCrafted: "Thiết kế với ✨",
            qrModalTitle: "Quét mã QR Bio",
            qrModalSub: "Mở camera điện thoại để truy cập nhanh",
            toastCopiedPlatform: (p) => `Đã sao chép ${p.toUpperCase()}! ✨`,
            toastCopiedBio: "Đã sao chép link trang Bio! 🔗",
            toastLangSwitched: "Đã chuyển sang Tiếng Việt 🇻🇳",
            toastContactSaved: "Đã tải danh bạ của Huy Đình! 📇",
            toastThemeChanged: (name) => `Đã đổi giao diện: ${name} 🎨`
        },
        en: {
            status: "Online",
            themeBtn: "Theme",
            shareBtn: "Share",
            qrBtn: "QR Code",
            ctaSaveContact: "Save Contact",
            ctaSendMail: "Send Email",
            bioLines: [
                "✨ Connect with me on my social channels below!",
                "📸 Sharing daily moments on Locket & Instagram",
                "🎵 Follow my TikTok for the latest videos!"
            ],
            statViews: "Total Visits",
            statChannels: "Channels",
            statOnline: "Available",
            catDonateTag: "🐱 FEED THE CAT",
            catDonateTitle: "Ủng hộ cho chú mèo ít cá 😄",
            catDonateSub: "Tap to zoom MoMo / VietQR code 🐟✨",
            catDonateBtn: "Open QR 💛",
            sectionTitle: "SOCIAL NETWORKS",
            sectionSub: "Tap to open or quick copy link",
            otherSectionTitle: "OTHER SECTIONS",
            otherSectionBadge: "✨ Widgets & Services",
            orderBioTag: "💎 GET A CUSTOM BIO",
            orderBioVal: "Want a pro Bio? • Contact me",
            footerOrderBtn: "💎 Want a custom Bio? Contact me",
            subtitles: {
                facebook: "Add friend & message me",
                instagram: "@huy_chuis • Daily stories 📸",
                tiktok: "@huy_cao_met8 • Follow my channel 🎵",
                locket: "@huy_dinhhh • Add Locket for live pics 💛",
                zalo: "Direct message me on Zalo 💬",
                gmail: "huyledinh21@gmail.com"
            },
            musicPaused: "PAUSED • TAP TO PLAY MUSIC 🎧",
            musicPlaying: "NOW PLAYING BGM 🎵",
            miniQrTitle: "Scan on mobile",
            miniQrSub: "Quickly open Bio page",
            footerCrafted: "Crafted with ✨",
            qrModalTitle: "Scan Bio QR Code",
            qrModalSub: "Open your phone camera to access quickly",
            toastCopiedPlatform: (p) => `Copied ${p.toUpperCase()} link! ✨`,
            toastCopiedBio: "Copied Bio page link! 🔗",
            toastLangSwitched: "Switched to English 🇬🇧",
            toastContactSaved: "Downloaded Huy Đình's Contact Card! 📇",
            toastThemeChanged: (name) => `Switched theme: ${name} 🎨`
        }
    }
};

const THEMES = [
    { id: "aurora", vi: "Tím Cực Quang", en: "Cyber Aurora" },
    { id: "emerald", vi: "Xanh Ngọc Lục", en: "Emerald Neon" },
    { id: "sunset", vi: "Hoàng Hôn Vàng", en: "Sunset Gold" }
];

let currentLang = localStorage.getItem("huydinh_bio_lang") || "vi";
let currentThemeIndex = parseInt(localStorage.getItem("huydinh_bio_theme_idx") || "0", 10);
let typewriterTimer = null;
let isMusicPlaying = false;

document.addEventListener("DOMContentLoaded", () => {
    // 1. Gắn dữ liệu cá nhân cố định
    const basePageTitle = `${BIO_CONFIG.name} | Official Bio ✨`;
    document.title = basePageTitle;
    window.addEventListener("blur", () => {
        document.title = `⚡ Kết nối với ${BIO_CONFIG.name} nhé!`;
    });
    window.addEventListener("focus", () => {
        document.title = basePageTitle;
    });
    document.getElementById("profile-name").textContent = BIO_CONFIG.name;
    document.getElementById("profile-handle").textContent = BIO_CONFIG.username;
    document.getElementById("profile-avatar").src = BIO_CONFIG.avatar;
    document.getElementById("year").textContent = new Date().getFullYear();

    // 2. Áp dụng Theme đã lưu
    if (isNaN(currentThemeIndex) || currentThemeIndex >= THEMES.length) currentThemeIndex = 0;
    document.body.setAttribute("data-theme", THEMES[currentThemeIndex].id);

    // 3. Sự kiện đổi màu giao diện (Theme Switcher)
    const themeBtn = document.getElementById("themeBtn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
            const themeObj = THEMES[currentThemeIndex];
            document.body.setAttribute("data-theme", themeObj.id);
            localStorage.setItem("huydinh_bio_theme_idx", currentThemeIndex.toString());
            const dict = BIO_CONFIG.i18n[currentLang];
            showToast(dict.toastThemeChanged(themeObj[currentLang]));
        });
    }

    // 4. Gắn link mạng xã hội
    Object.keys(BIO_CONFIG.links).forEach((platform) => {
        const card = document.querySelector(`.link-card[data-platform="${platform}"]`);
        const data = BIO_CONFIG.links[platform];
        if (card && data) {
            if (data.encodedUrl) {
                card.removeAttribute("href");
                card.style.cursor = "pointer";
                card.addEventListener("click", (e) => {
                    e.preventDefault();
                    window.open(atob(data.encodedUrl), "_blank", "noopener,noreferrer");
                });
            } else if (data.url) {
                card.href = data.url;
            }
        }
    });

    // 5. Áp dụng ngôn ngữ ban đầu (VI hoặc EN)
    applyLanguage(currentLang, false);

    // 6. Sự kiện nút chuyển đổi ngôn ngữ VI / EN
    const langBtn = document.getElementById("langBtn");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "vi" ? "en" : "vi";
            localStorage.setItem("huydinh_bio_lang", currentLang);
            applyLanguage(currentLang, true);
        });
    }

    // 7. Trình phát nhạc nền Lo-Fi Chill (Web Audio Synthesizer - không lo lỗi bản quyền hay mất mạng)
    initChillMusicPlayer();

    // 9. Hiệu ứng ánh sáng Spotlight & nghiêng 3D theo chuột
    initCardInteractions();

    // 10. Hiệu ứng hạt sao lơ lửng (Canvas Particles)
    initParticles();

    // 11. Nút sao chép từng link
    document.querySelectorAll(".copy-small-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const platform = btn.getAttribute("data-copy-target");
            const linkData = BIO_CONFIG.links[platform];
            if (linkData) {
                const textToCopy = linkData.copyText || linkData.url;
                if (textToCopy) {
                    const dict = BIO_CONFIG.i18n[currentLang];
                    copyToClipboard(textToCopy, dict.toastCopiedPlatform(platform));
                }
            }
        });
    });

    // 12. Bộ đếm lượt ghé thăm trực tiếp (Live Visitor Counter)
    initVisitorCounter();

    // 13. Đồng hồ thời gian thực (Live Clock trên Desktop)
    initLiveClock();

    // 13b. Nút Thả Tim tương tác (Floating Hearts Reaction)
    initHeartReactions();

    // 13c. Xem ảnh phóng to (Photo Lightbox khi bấm vào Avatar hoặc Featured Moment)
    initPhotoLightbox();

    // 13d. Cập nhật thời tiết thực tế (Live Weather Pill)
    initLiveWeather();

    // 13e. Hiệu ứng vệt sáng lấp lánh theo con trỏ chuột (Cursor Sparkle Trail)
    initCursorSparkles();

    // 13f. Lời chào thông minh theo khung giờ & Hộp thư gửi lời nhắn nhanh
    initSmartGreeting();
    initSecretMessageModal();

    // 13g. Hiệu ứng trang trí & Mưa Banana 3D tương tác (Banana Vibe)
    initBananaEffects();

    // 13h. Hộp trạng thái Mood / Vibe tương tác & Xem ảnh Chill Moment
    initExtraBentoWidgets();

    // 14. Nút chia sẻ trang Bio (dùng luôn link ngắn https://is.gd/huydinh_bio)
    const OFFICIAL_SHORT_URL = "https://is.gd/huydinh_bio";
    const shareBtn = document.getElementById("shareBtn");
    shareBtn.addEventListener("click", async () => {
        const dict = BIO_CONFIG.i18n[currentLang];
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${BIO_CONFIG.name} - Bio Links`,
                    text: dict.bioLines[0],
                    url: OFFICIAL_SHORT_URL
                });
            } catch {
                copyToClipboard(OFFICIAL_SHORT_URL, dict.toastCopiedBio);
            }
        } else {
            copyToClipboard(OFFICIAL_SHORT_URL, dict.toastCopiedBio);
        }
    });

    // 15. Nút mở mã QR Code
    const qrBtn = document.getElementById("qrBtn");
    const miniQrCard = document.getElementById("miniQrCard");
    const qrModal = document.getElementById("qrModal");
    const qrClose = document.getElementById("qrClose");
    const qrImage = document.getElementById("qrImage");

    function openQrModal() {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(OFFICIAL_SHORT_URL)}`;
        qrModal.classList.add("active");
    }

    qrBtn.addEventListener("click", openQrModal);
    if (miniQrCard) {
        miniQrCard.addEventListener("click", openQrModal);
    }

    qrClose.addEventListener("click", () => qrModal.classList.remove("active"));
    qrModal.addEventListener("click", (e) => {
        if (e.target === qrModal) qrModal.classList.remove("active");
    });
});

// Hàm cập nhật toàn bộ giao diện theo ngôn ngữ (VI / EN)
function applyLanguage(lang, showNotification) {
    const dict = BIO_CONFIG.i18n[lang] || BIO_CONFIG.i18n.vi;
    document.documentElement.lang = lang;

    document.querySelectorAll(".lang-opt").forEach((el) => {
        el.classList.toggle("active", el.getAttribute("data-lang") === lang);
    });

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setText("status-text", dict.status);
    setText("theme-btn-label", dict.themeBtn);
    setText("qr-btn-label", dict.qrBtn);
    setText("share-btn-label", dict.shareBtn);
    setText("cta-save-contact", dict.ctaSaveContact);
    setText("cta-send-mail", dict.ctaSendMail);
    setText("stat-label-views", dict.statViews);
    setText("stat-label-channels", dict.statChannels);
    setText("stat-label-online", dict.statOnline);
    setText("cat-donate-tag", dict.catDonateTag);
    setText("cat-donate-title", dict.catDonateTitle);
    setText("cat-donate-sub", dict.catDonateSub);
    setText("cat-donate-btn", dict.catDonateBtn);
    setText("section-title", dict.sectionTitle);
    setText("section-sub", dict.sectionSub);
    setText("other-section-title", dict.otherSectionTitle);
    setText("other-section-badge", dict.otherSectionBadge);
    setText("order-bio-tag", dict.orderBioTag);
    setText("order-bio-val", dict.orderBioVal);
    setText("footerOrderBioBtn", dict.footerOrderBtn);
    setText("music-status-label", isMusicPlaying ? dict.musicPlaying : dict.musicPaused);
    setText("mini-qr-title", dict.miniQrTitle);
    setText("mini-qr-sub", dict.miniQrSub);
    setText("footer-crafted", dict.footerCrafted);
    setText("qr-modal-title", dict.qrModalTitle);
    setText("qr-modal-sub", dict.qrModalSub);

    Object.keys(dict.subtitles).forEach((platform) => {
        const card = document.querySelector(`.link-card[data-platform="${platform}"]`);
        if (card) {
            const subEl = card.querySelector(".link-sub");
            if (subEl) subEl.textContent = dict.subtitles[platform];
        }
    });

    initTypewriter(dict.bioLines);

    if (showNotification) {
        showToast(dict.toastLangSwitched);
    }
}

// Tải file danh bạ vCard (.vcf) 1 chạm (không lộ số điện thoại)
function downloadVCard() {
    const vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "FN:Huy Đình",
        "N:Đình;Huy;;;",
        "EMAIL;TYPE=INTERNET:huyledinh21@gmail.com",
        "URL:https://ledinhhuymeme.github.io/bio/",
        "NOTE:Official Bio Links - Facebook, Instagram (@huy_chuis), TikTok (@huy_cao_met8), Locket (@huy_dinhhh)",
        "END:VCARD"
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Huy_Dinh_Contact.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    const dict = BIO_CONFIG.i18n[currentLang];
    showToast(dict.toastContactSaved);
}

// Trình phát nhạc nền MP3 tự động phát khi vào trang Bio
function initChillMusicPlayer() {
    const playerBar = document.getElementById("musicPlayerBtn");
    const audio = document.getElementById("bgmAudio");
    const vinyl = document.getElementById("vinyl-disc");
    const eq = document.getElementById("equalizer");
    const playSvg = document.getElementById("playSvg");
    const pauseSvg = document.getElementById("pauseSvg");
    const statusLabel = document.getElementById("music-status-label");
    const progressFill = document.getElementById("musicProgressFill");
    const progressWrap = document.getElementById("musicProgressWrap");
    const timeEl = document.getElementById("music-time");
    const lyricEl = document.getElementById("music-lyric");
    const muteBtn = document.getElementById("musicMuteBtn");
    const volOnSvg = document.getElementById("volOnSvg");
    const volOffSvg = document.getElementById("volOffSvg");
    const avatarContainer = document.querySelector(".avatar-container");
    const enterOverlay = document.getElementById("enterOverlay");

    if (!playerBar || !audio) return;

    // Đặt âm lượng nhạc nền mặc định nhỏ, êm dịu (25%)
    audio.volume = 0.25;

    // Lời bài hát đồng bộ theo từng giây của file bgm.mp3 (We Don't Talk Anymore - Slowed & Reverb)
    const syncedLyrics = [
        { time: 0, text: "♪ We don't talk anymore... (Slowed & Reverb)" },
        { time: 11, text: "♪ Like we used to do..." },
        { time: 16, text: "♪ We don't love anymore..." },
        { time: 21, text: "♪ What was all of it for?" },
        { time: 24, text: "♪ I just heard you found the one you've been looking..." },
        { time: 29, text: "♪ I wish I would have known that wasn't me..." },
        { time: 33, text: "♪ 'Cause even after all this time I still wonder..." },
        { time: 36, text: "♪ Why I can't move on, just the way you did so easily..." },
        { time: 40, text: "♪ Don't wanna know, kind of dress you're wearing tonight..." },
        { time: 44, text: "♪ If he's holding onto you so tight, the way I did before..." },
        { time: 48, text: "♪ I overdosed, should've known your love was a game..." },
        { time: 52, text: "♪ Now I can't get you out of my brain..." },
        { time: 55, text: "♪ Oh, it's such a shame... that we don't talk anymore ✨" }
    ];

    let currentLyricText = "";

    function formatTime(sec) {
        if (!sec || isNaN(sec)) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? "0" + s : s}`;
    }

    audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
            const pct = (audio.currentTime / audio.duration) * 100;
            if (progressFill) progressFill.style.width = `${pct}%`;
            if (timeEl) timeEl.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;

            // Cập nhật câu hát theo giây hiện tại
            if (lyricEl) {
                let activeLine = syncedLyrics[0].text;
                for (let i = 0; i < syncedLyrics.length; i++) {
                    if (audio.currentTime >= syncedLyrics[i].time) {
                        activeLine = syncedLyrics[i].text;
                    }
                }
                if (activeLine !== currentLyricText) {
                    currentLyricText = activeLine;
                    lyricEl.style.opacity = "0";
                    setTimeout(() => {
                        lyricEl.textContent = activeLine;
                        lyricEl.style.opacity = "1";
                    }, 140);
                }
            }
        }
    });

    if (muteBtn) {
        muteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            audio.muted = !audio.muted;
            if (volOnSvg && volOffSvg) {
                volOnSvg.style.display = audio.muted ? "none" : "block";
                volOffSvg.style.display = audio.muted ? "block" : "none";
            }
        });
    }

    const volSlider = document.getElementById("musicVolSlider");
    if (volSlider) {
        volSlider.value = "0.25";
        volSlider.addEventListener("click", (e) => e.stopPropagation());
        volSlider.addEventListener("input", (e) => {
            e.stopPropagation();
            const val = parseFloat(e.target.value);
            audio.volume = val;
            audio.muted = val === 0;
            if (volOnSvg && volOffSvg) {
                volOnSvg.style.display = audio.muted ? "none" : "block";
                volOffSvg.style.display = audio.muted ? "block" : "none";
            }
        });
    }

    if (progressWrap) {
        progressWrap.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!audio.duration) return;
            const rect = progressWrap.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            audio.currentTime = (clickX / rect.width) * audio.duration;
        });
    }

    function updatePlayerUI(playing) {
        isMusicPlaying = playing;
        const dict = BIO_CONFIG.i18n[currentLang];
        if (playing) {
            vinyl.classList.remove("paused");
            eq.classList.remove("paused");
            if (avatarContainer) avatarContainer.classList.add("music-playing");
            playSvg.style.display = "none";
            pauseSvg.style.display = "block";
            statusLabel.textContent = dict.musicPlaying;
        } else {
            vinyl.classList.add("paused");
            eq.classList.add("paused");
            if (avatarContainer) avatarContainer.classList.remove("music-playing");
            playSvg.style.display = "block";
            pauseSvg.style.display = "none";
            statusLabel.textContent = dict.musicPaused;
        }
    }

    // Đảm bảo lúc đang ở màn kính mờ "Vào Bio ✨" nhạc tắt hoàn toàn (silent 100%).
    // Chỉ khi người dùng bấm nút "Vào Bio ✨" mới bắt đầu phát nhạc từ giây 0:00!
    audio.pause();
    audio.currentTime = 0;

    function enterBioAndPlayMusic(e) {
        if (e) e.stopPropagation();
        if (enterOverlay && !enterOverlay.classList.contains("hidden")) {
            enterOverlay.classList.add("hidden");
        }
        audio.muted = false;
        audio.currentTime = 0;
        if (volOnSvg && volOffSvg) {
            volOnSvg.style.display = "block";
            volOffSvg.style.display = "none";
        }
        audio.play().then(() => {
            updatePlayerUI(true);
        }).catch(() => {
            updatePlayerUI(false);
        });
    }

    const enterBtn = document.getElementById("enterBtn");
    if (enterBtn) {
        enterBtn.addEventListener("click", enterBioAndPlayMusic);
    }
    if (enterOverlay) {
        enterOverlay.addEventListener("click", enterBioAndPlayMusic);
    }

    // Bấm vào nút Play/Pause hoặc thanh nhạc để Bật / Tắt chủ động
    function togglePlayPause(e) {
        if (e) e.stopPropagation();
        if (audio.paused) {
            audio.play().then(() => updatePlayerUI(true)).catch(() => {});
        } else {
            audio.pause();
            updatePlayerUI(false);
        }
    }

    const toggleIconBtn = document.getElementById("musicToggleIcon");
    if (toggleIconBtn) {
        toggleIconBtn.addEventListener("click", togglePlayPause);
    }
    playerBar.addEventListener("click", togglePlayPause);
}

// Đồng hồ thời gian thực (Việt Nam GMT+7)
function initLiveClock() {
    const clockEl = document.getElementById("live-clock");
    if (!clockEl) return;

    function updateClock() {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
    }
    updateClock();
    setInterval(updateClock, 1000);
}

// Hiệu ứng gõ chữ tự động
function initTypewriter(lines) {
    const el = document.getElementById("typewriter-text");
    if (!el || !lines || !lines.length) return;

    if (typewriterTimer) {
        clearTimeout(typewriterTimer);
    }

    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
        const currentLine = lines[lineIndex];
        if (isDeleting) {
            charIndex--;
            el.textContent = currentLine.substring(0, charIndex);
        } else {
            charIndex++;
            el.textContent = currentLine.substring(0, charIndex);
        }

        let speed = isDeleting ? 26 : 50;

        if (!isDeleting && charIndex === currentLine.length) {
            speed = 2300;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            lineIndex = (lineIndex + 1) % lines.length;
            speed = 320;
        }

        typewriterTimer = setTimeout(tick, speed);
    }

    tick();
}

// Hiệu ứng Spotlight & 3D Tilt siêu mượt (Sử dụng nội suy quán tính Lerp 60FPS không bị khựng/cấn)
function initCardInteractions() {
    const card = document.getElementById("main-card");
    if (!card) return;

    let targetRX = 0;
    let targetRY = 0;
    let currentRX = 0;
    let currentRY = 0;
    let rafId = null;

    function updateSmoothTilt() {
        currentRX += (targetRX - currentRX) * 0.12;
        currentRY += (targetRY - currentRY) * 0.12;

        if (Math.abs(targetRX - currentRX) > 0.01 || Math.abs(targetRY - currentRY) > 0.01) {
            card.style.transform = `rotateX(${currentRX.toFixed(2)}deg) rotateY(${currentRY.toFixed(2)}deg) translateZ(0)`;
            rafId = requestAnimationFrame(updateSmoothTilt);
        } else {
            card.style.transform = targetRX === 0 && targetRY === 0
                ? "translateZ(0)"
                : `rotateX(${targetRX.toFixed(2)}deg) rotateY(${targetRY.toFixed(2)}deg) translateZ(0)`;
            rafId = null;
        }
    }

    card.addEventListener("mousemove", (e) => {
        if (window.innerWidth <= 920) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        targetRX = ((y - centerY) / centerY) * -1.4;
        targetRY = ((x - centerX) / centerX) * 1.4;

        if (!rafId) {
            rafId = requestAnimationFrame(updateSmoothTilt);
        }
    }, { passive: true });

    card.addEventListener("mouseleave", () => {
        targetRX = 0;
        targetRY = 0;
        if (!rafId) {
            rafId = requestAnimationFrame(updateSmoothTilt);
        }
    }, { passive: true });
}

// Hiệu ứng hạt phát sáng lơ lửng + Sao băng (Tối ưu GPU 60FPS siêu mượt)
function initParticles() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }, { passive: true });

    const particleCount = window.innerWidth < 768 ? 18 : 28;
    const particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.9 + 0.6,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.38 - 0.08,
        alpha: Math.random() * 0.6 + 0.2
    }));

    const meteors = [];
    function spawnMeteor() {
        if (meteors.length < 1 && Math.random() < 0.012) {
            meteors.push({
                x: Math.random() * width * 0.8 + width * 0.1,
                y: -20,
                len: 65 + Math.random() * 45,
                speed: 8 + Math.random() * 5,
                alpha: 1
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.y < -10) p.y = height + 10;
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
            ctx.fill();
        }

        spawnMeteor();
        for (let i = meteors.length - 1; i >= 0; i--) {
            const m = meteors[i];
            m.x -= m.speed;
            m.y += m.speed * 0.65;
            m.alpha -= 0.016;

            if (m.alpha <= 0 || m.y > height + 100 || m.x < -100) {
                meteors.splice(i, 1);
                continue;
            }

            const grad = ctx.createLinearGradient(m.x, m.y, m.x + m.len, m.y - m.len * 0.65);
            grad.addColorStop(0, `rgba(56, 189, 248, ${m.alpha})`);
            grad.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.beginPath();
            ctx.moveTo(m.x, m.y);
            ctx.lineTo(m.x + m.len, m.y - m.len * 0.65);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            ctx.stroke();
        }

        requestAnimationFrame(draw);
    }

    draw();
}

// Bộ đếm lượt ghé thăm trực tiếp (Đồng bộ Cloud xuyên thiết bị 24/7)
const CLOUD_APP_KEY = "4st2bgq2";
const NTFY_INBOX_TOPIC = "huydinh21_bio_inbox_956";
const NTFY_HEARTS_TOPIC = "huydinh21_bio_hearts_956";

function initVisitorCounter() {
    const countEl = document.getElementById("visitor-count");
    if (!countEl) return;

    const storageKey = "huydinh_bio_views_cache";
    let currentViews = parseInt(localStorage.getItem(storageKey) || "1290", 10);
    animateCount(countEl, currentViews);

    fetch(`https://keyvalue.immanuel.co/api/KeyVal/GetValue/${CLOUD_APP_KEY}/visits`, { cache: "no-store" })
        .then((res) => res.json())
        .then((val) => {
            let cloudViews = parseInt(val, 10);
            if (isNaN(cloudViews) || cloudViews < 1280) cloudViews = currentViews;
            const nextViews = cloudViews + 1;
            localStorage.setItem(storageKey, nextViews.toString());
            animateCount(countEl, nextViews);
            fetch(`https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${CLOUD_APP_KEY}/visits/${nextViews}`, { method: "POST" }).catch(() => {});
        })
        .catch(() => {});
}

function animateCount(el, target) {
    const duration = 1200;
    const start = Math.max(0, target - 45);
    const startTime = performance.now();

    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * eased);
        el.textContent = current.toLocaleString("en-US");
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

// Nút Thả Tim tương tác đồng bộ Cloud thời gian thực giữa mọi thiết bị (Dual-Cloud: KeyVal + Ntfy Live Stream)
function initHeartReactions() {
    const heartBtn = document.getElementById("heartBtn");
    const heartCountEl = document.getElementById("heart-count");
    if (!heartBtn || !heartCountEl) return;

    const storageKey = "huydinh_bio_hearts_cache";
    let totalHearts = parseInt(localStorage.getItem(storageKey) || "3642", 10);
    if (totalHearts < 3640) totalHearts = 3642;
    heartCountEl.textContent = totalHearts.toLocaleString("en-US");

    function setHearts(newVal) {
        if (!isNaN(newVal) && newVal > totalHearts) {
            totalHearts = newVal;
            localStorage.setItem(storageKey, totalHearts.toString());
            heartCountEl.textContent = totalHearts.toLocaleString("en-US");
        }
    }

    // 1. Tải số tim từ cả 2 nguồn Cloud để đảm bảo không bao giờ mất
    async function syncHeartsFromCloud() {
        try {
            const res = await fetch(`https://keyvalue.immanuel.co/api/KeyVal/GetValue/${CLOUD_APP_KEY}/hearts`, { cache: "no-store" });
            const val = await res.json();
            setHearts(parseInt(val, 10));
        } catch {}

        try {
            const res2 = await fetch(`https://ntfy.sh/${NTFY_HEARTS_TOPIC}/json?poll=1&since=0`, { cache: "no-store" });
            const text = await res2.text();
            const lines = text.trim().split("\n");
            for (const line of lines) {
                if (!line) continue;
                try {
                    const obj = JSON.parse(line);
                    if (obj.event === "message" && obj.message) {
                        setHearts(parseInt(obj.message, 10));
                    }
                } catch {}
            }
        } catch {}
    }

    syncHeartsFromCloud();

    // 2. Kết nối luồng trực tiếp (Real-time EventSource) để máy khác bấm tim là máy bạn nhảy số ngay lập tức!
    if (window.EventSource) {
        try {
            const es = new EventSource(`https://ntfy.sh/${NTFY_HEARTS_TOPIC}/sse`);
            es.onmessage = (evt) => {
                try {
                    const data = JSON.parse(evt.data);
                    if (data && data.message) {
                        setHearts(parseInt(data.message, 10));
                    }
                } catch {}
            };
        } catch {}
    }

    const emojis = ["❤️", "🍌", "💖", "✨", "🔥", "💛"];

    heartBtn.addEventListener("click", async (e) => {
        totalHearts++;
        localStorage.setItem(storageKey, totalHearts.toString());
        heartCountEl.textContent = totalHearts.toLocaleString("en-US");

        const rect = heartBtn.getBoundingClientRect();
        const originX = e.clientX || rect.left + rect.width / 2;
        const originY = e.clientY || rect.top + rect.height / 2;

        for (let i = 0; i < 3; i++) {
            const heart = document.createElement("span");
            heart.className = "floating-heart";
            heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            heart.style.left = `${originX}px`;
            heart.style.top = `${originY}px`;
            heart.style.setProperty("--dx", `${(Math.random() - 0.5) * 70}px`);
            heart.style.setProperty("--rot", `${(Math.random() - 0.5) * 40}deg`);
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1100);
        }

        // Lưu đồng thời lên cả 2 Cloud (KeyVal + Ntfy Live Stream)
        const countToSave = totalHearts;
        fetch(`https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${CLOUD_APP_KEY}/hearts/${countToSave}`, { method: "POST" }).catch(() => {});
        fetch(`https://ntfy.sh/${NTFY_HEARTS_TOPIC}`, {
            method: "POST",
            body: countToSave.toString()
        }).catch(() => {});
    });
}

// Xem ảnh phóng to (Photo Lightbox cho cả ảnh Chú Mèo QR & Avatar)
function initPhotoLightbox() {
    const photoModal = document.getElementById("photoModal");
    const photoClose = document.getElementById("photoClose");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const avatarContainer = document.querySelector(".avatar-container");
    const catDonateCard = document.getElementById("catDonateCard");

    if (!photoModal) return;

    if (catDonateCard) {
        // Chỉ duy nhất khung ảnh chú mèo nghiêng & nổi 3D theo góc chuột, còn khung thẻ ngoài và chữ đứng yên
        const catFigure = document.getElementById("cat3dFigure");
        let catRX = 4, catRY = 10, curCatRX = 4, curCatRY = 10, catRaf = null;

        function animateCatFrame3D() {
            curCatRX += (catRX - curCatRX) * 0.16;
            curCatRY += (catRY - curCatRY) * 0.16;

            if (catFigure) {
                catFigure.style.transform = `perspective(550px) translate3d(0, -5px, 34px) rotateX(${curCatRX.toFixed(2)}deg) rotateY(${curCatRY.toFixed(2)}deg) scale(1.06)`;
            }

            if (Math.abs(catRX - curCatRX) > 0.05 || Math.abs(catRY - curCatRY) > 0.05) {
                catRaf = requestAnimationFrame(animateCatFrame3D);
            } else {
                catRaf = null;
            }
        }

        catDonateCard.addEventListener("mousemove", (e) => {
            if (!catFigure) return;
            const r = catFigure.getBoundingClientRect();
            const x = e.clientX - (r.left + r.width / 2);
            const y = e.clientY - (r.top + r.height / 2);

            catRX = Math.max(-18, Math.min(18, (y / (r.height / 2)) * -14));
            catRY = Math.max(-22, Math.min(22, (x / (r.width / 2)) * 16));
            if (!catRaf) catRaf = requestAnimationFrame(animateCatFrame3D);
        }, { passive: true });

        catDonateCard.addEventListener("mouseleave", () => {
            if (catRaf) {
                cancelAnimationFrame(catRaf);
                catRaf = null;
            }
            if (catFigure) {
                catFigure.style.transform = "";
            }
        }, { passive: true });

        catDonateCard.addEventListener("click", () => {
            if (lightboxImg) lightboxImg.src = "donate_qr.jpg";
            if (lightboxCaption) lightboxCaption.textContent = "Ủng hộ cho chú mèo ít cá 😄🐟 (Quét mã VietQR / MoMo)";
            const dlBtn = document.getElementById("lightboxDownloadBtn");
            const galTabs = document.getElementById("lightboxGalleryTabs");
            if (dlBtn) {
                dlBtn.style.display = "inline-flex";
                dlBtn.href = "donate_qr.jpg";
            }
            if (galTabs) galTabs.style.display = "none";
            photoModal.classList.add("active");
        });
    }

    function openGalleryAt(photoSrc, captionText) {
        if (lightboxImg) lightboxImg.src = photoSrc;
        if (lightboxCaption) lightboxCaption.textContent = captionText;
        const dlBtn = document.getElementById("lightboxDownloadBtn");
        const galTabs = document.getElementById("lightboxGalleryTabs");
        if (dlBtn) dlBtn.style.display = "none";
        if (galTabs) {
            galTabs.style.display = "flex";
            galTabs.querySelectorAll(".lb-tab").forEach((t) => {
                t.classList.toggle("active", t.getAttribute("data-photo") === photoSrc);
            });
        }
        photoModal.classList.add("active");
    }

    if (avatarContainer) {
        avatarContainer.addEventListener("click", () => {
            openGalleryAt("avatar.jpg", "\"Giữa núi đồi bình yên & tự do ⛰️☁️\" — Huy Đình");
        });
    }

    const coverBanner = document.getElementById("coverBanner");
    if (coverBanner) {
        coverBanner.addEventListener("click", (e) => {
            if (e.target.closest(".top-bar")) return;
            openGalleryAt("bg.jpg", "Mirror Flash Vibe ⚡ — Huy Đình (@huy_dinhhh)");
        });
    }

    const galTabs = document.getElementById("lightboxGalleryTabs");
    if (galTabs) {
        galTabs.querySelectorAll(".lb-tab").forEach((tab) => {
            tab.addEventListener("click", () => {
                const src = tab.getAttribute("data-photo");
                const cap = tab.getAttribute("data-cap");
                if (src) openGalleryAt(src, cap || "");
            });
        });
    }

    if (photoClose) photoClose.addEventListener("click", () => photoModal.classList.remove("active"));

    photoModal.addEventListener("click", (e) => {
        if (e.target === photoModal) photoModal.classList.remove("active");
    });
}

// Thời tiết thực tế theo thời gian thực (Open-Meteo API - Hà Nội / Việt Nam)
function initLiveWeather() {
    const tempEl = document.getElementById("weather-temp");
    const iconEl = document.getElementById("weather-icon");
    if (!tempEl || !iconEl) return;

    fetch("https://api.open-meteo.com/v1/forecast?latitude=21.0285&longitude=105.8542&current_weather=true")
        .then((res) => res.json())
        .then((data) => {
            if (data && data.current_weather) {
                const temp = Math.round(data.current_weather.temperature);
                const code = data.current_weather.weathercode;
                tempEl.textContent = `${temp}°C`;
                if (code === 0) iconEl.textContent = "☀️";
                else if (code <= 3) iconEl.textContent = "⛅";
                else if (code <= 67) iconEl.textContent = "🌧️";
                else iconEl.textContent = "⛈️";
            }
        })
        .catch(() => {});
}

// Hiệu ứng hạt sáng chạy theo chuột (Chỉ chạy trên máy tính, tần suất nhẹ mượt không gây khựng)
function initCursorSparkles() {
    if (window.innerWidth <= 920) return;
    let lastSpawn = 0;
    window.addEventListener("mousemove", (e) => {
        const now = performance.now();
        if (now - lastSpawn < 95) return;
        lastSpawn = now;

        const sparkle = document.createElement("span");
        sparkle.className = "cursor-sparkle";
        sparkle.style.left = `${e.clientX}px`;
        sparkle.style.top = `${e.clientY}px`;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 550);
    }, { passive: true });
}

// Hiệu ứng Mưa Banana 3D khi bấm vào huy hiệu Banana
function initBananaEffects() {
    const bananaBtn = document.getElementById("bananaShowerBtn");
    const bananaChip = document.getElementById("bananaVibeChip");

    function triggerBananaBurst(originX, originY) {
        const items = ["🍌", "🍌", "✨", "💛", "🍌"];
        for (let i = 0; i < 16; i++) {
            const b = document.createElement("span");
            b.className = "banana-burst-particle";
            b.textContent = items[i % items.length];
            b.style.left = `${originX}px`;
            b.style.top = `${originY}px`;
            const angle = (Math.PI * 2 * i) / 16 + (Math.random() - 0.5) * 0.3;
            const dist1 = 50 + Math.random() * 75;
            const dist2 = dist1 + 35 + Math.random() * 55;
            b.style.setProperty("--bx", `${Math.cos(angle) * dist1}px`);
            b.style.setProperty("--by", `${Math.sin(angle) * dist1 - 45}px`);
            b.style.setProperty("--bx2", `${Math.cos(angle) * dist2}px`);
            b.style.setProperty("--by2", `${Math.sin(angle) * dist2 + 75}px`);
            b.style.setProperty("--brot", `${(Math.random() - 0.5) * 240}deg`);
            b.style.setProperty("--brot2", `${(Math.random() - 0.5) * 540}deg`);
            document.body.appendChild(b);
            setTimeout(() => b.remove(), 1150);
        }
        showToast("🍌 Banana Vibe Activated! ✨");
    }

    [bananaBtn, bananaChip].forEach((el) => {
        if (!el) return;
        el.addEventListener("click", (e) => {
            e.stopPropagation();
            const r = el.getBoundingClientRect();
            triggerBananaBurst(e.clientX || r.left + r.width / 2, e.clientY || r.top + r.height / 2);
        });
    });
}

// Hộp trạng thái Mood / Vibe tương tác & Bộ sưu tập ảnh tự chuyển (Auto-Cycling Photo Gallery)
function initExtraBentoWidgets() {
    const miniMomentBox = document.getElementById("miniMomentBox");
    const miniThumb = document.getElementById("miniGalleryThumb");
    const miniTitle = document.getElementById("miniGalleryTitle");
    const photoModal = document.getElementById("photoModal");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const dlBtn = document.getElementById("lightboxDownloadBtn");
    const galTabs = document.getElementById("lightboxGalleryTabs");

    const galleryPhotos = [
        { src: "avatar.jpg", label: "Núi đồi tự do ⛰️", cap: "\"Giữa núi đồi bình yên & tự do ⛰️☁️\" — Huy Đình" },
        { src: "bg.jpg", label: "Mirror Flash ⚡", cap: "Mirror Flash Vibe ⚡ — Huy Đình (@huy_dinhhh)" }
    ];
    let galIdx = 0;

    setInterval(() => {
        galIdx = (galIdx + 1) % galleryPhotos.length;
        if (miniThumb) {
            miniThumb.style.opacity = "0.3";
            setTimeout(() => {
                miniThumb.src = galleryPhotos[galIdx].src;
                miniThumb.style.opacity = "1";
            }, 220);
        }
        if (miniTitle) miniTitle.textContent = galleryPhotos[galIdx].label;
    }, 4500);

    if (miniMomentBox && photoModal) {
        miniMomentBox.addEventListener("click", () => {
            const currentItem = galleryPhotos[galIdx];
            if (lightboxImg) lightboxImg.src = currentItem.src;
            if (lightboxCaption) lightboxCaption.textContent = currentItem.cap;
            if (dlBtn) dlBtn.style.display = "none";
            if (galTabs) {
                galTabs.style.display = "flex";
                galTabs.querySelectorAll(".lb-tab").forEach((t) => {
                    t.classList.toggle("active", t.getAttribute("data-photo") === currentItem.src);
                });
            }
            photoModal.classList.add("active");
        });
    }

    const moodBox = document.getElementById("moodCycleBox");
    const moodEmoji = document.getElementById("moodEmoji");
    const moodText = document.getElementById("moodText");

    const moods = [
        { emoji: "🔥", text: "Full năng lượng • Bấm đổi" },
        { emoji: "🎧", text: "Đang chill nhạc Slowed 🎵" },
        { emoji: "🍌", text: "Banana Vibe • Vui vẻ ✨" },
        { emoji: "⛰️", text: "Thích đi phượt & ngắm cảnh" },
        { emoji: "🕷️", text: "Spider-Verse Mode ⚡" }
    ];
    let moodIdx = 0;

    if (moodBox) {
        moodBox.addEventListener("click", (e) => {
            moodIdx = (moodIdx + 1) % moods.length;
            if (moodEmoji) moodEmoji.textContent = moods[moodIdx].emoji;
            if (moodText) moodText.textContent = moods[moodIdx].text;
            const r = moodBox.getBoundingClientRect();
            spawnConfettiBurst(e.clientX || r.left + r.width / 2, e.clientY || r.top + r.height / 2);
        });
    }

    // Nút mở hộp thoại "Nhận làm Bio - Liên hệ cho Huy Đình"
    const orderBioBox = document.getElementById("orderBioBox");
    const footerOrderBioBtn = document.getElementById("footerOrderBioBtn");
    const orderBioModal = document.getElementById("orderBioModal");
    const orderBioClose = document.getElementById("orderBioClose");
    const orderViaZaloBtn = document.getElementById("orderViaZaloBtn");
    const orderViaInboxBtn = document.getElementById("orderViaInboxBtn");

    function openOrderBioModal() {
        if (orderBioModal) orderBioModal.classList.add("active");
    }

    if (orderBioBox) orderBioBox.addEventListener("click", openOrderBioModal);
    if (footerOrderBioBtn) footerOrderBioBtn.addEventListener("click", openOrderBioModal);
    if (orderBioClose && orderBioModal) {
        orderBioClose.addEventListener("click", () => orderBioModal.classList.remove("active"));
        orderBioModal.addEventListener("click", (e) => {
            if (e.target === orderBioModal) orderBioModal.classList.remove("active");
        });
    }

    if (orderViaZaloBtn) {
        orderViaZaloBtn.addEventListener("click", () => {
            // Mở thẳng Zalo của Huy Đình (vẫn ẩn số điện thoại)
            const encodedZalo = BIO_CONFIG.links.zalo.encodedUrl;
            if (encodedZalo) {
                window.open(atob(encodedZalo), "_blank", "noopener,noreferrer");
            }
        });
    }

    if (orderViaInboxBtn) {
        orderViaInboxBtn.addEventListener("click", () => {
            if (orderBioModal) orderBioModal.classList.remove("active");
            const secretModal = document.getElementById("secretMsgModal");
            const secretContent = document.getElementById("secretContent");
            if (secretModal) {
                secretModal.classList.add("active");
                if (secretContent) {
                    secretContent.value = "Mình muốn đặt làm 1 trang Bio giống của bạn! Tư vấn giúp mình qua SĐT/FB/Zalo: ";
                    secretContent.focus();
                }
            }
        });
    }

    // Sân khấu Người Nhện Chibi 5K đu dây tơ đàn hồi mềm mại (Elastic Bezier Web + Squash & Stretch Physics)
    const spideyStage = document.getElementById("spideySwingStage");
    const spideyBeam = document.getElementById("spideyShootBeam");
    const chibiActor = document.getElementById("chibiSpideyActor");
    const chibiBody = document.getElementById("chibiSpideyBody");
    const webCanvas = document.getElementById("spideyWebCanvas");

    if (spideyStage && chibiActor && chibiBody && webCanvas) {
        const wCtx = webCanvas.getContext("2d");
        let stageW = (webCanvas.width = spideyStage.clientWidth || 500);
        let stageH = (webCanvas.height = spideyStage.clientHeight || 132);

        window.addEventListener("resize", () => {
            stageW = webCanvas.width = spideyStage.clientWidth || 500;
            stageH = webCanvas.height = spideyStage.clientHeight || 132;
        }, { passive: true });

        let phase = 0;
        let boostVel = 0;
        let flipAngle = 0;

        function animateChibiSpidey() {
            phase += 0.032 + boostVel;
            boostVel *= 0.94;
            if (flipAngle > 0.5) {
                flipAngle *= 0.86;
            } else {
                flipAngle = 0;
            }

            // Quỹ đạo đu võng hình cung tròn mềm mại + nhịp nhún lò xo tự nhiên (không bị cứng như con lắc)
            const anchorX = stageW * 0.28;
            const anchorY = -6;
            const swingX = anchorX + Math.sin(phase) * 62;
            const swingY = 16 + Math.cos(phase * 2) * 9 - boostVel * 90;

            // Độ nghiêng thân người + độ co giãn đàn hồi (Squash & Stretch) theo vận tốc đu
            const tiltDeg = Math.cos(phase) * -14 + flipAngle;
            const stretchX = 1 + Math.sin(phase * 2) * 0.045;
            const stretchY = 1 - Math.sin(phase * 2) * 0.045;

            chibiActor.style.transform = `translate3d(${(swingX - 44).toFixed(1)}px, ${swingY.toFixed(1)}px, 0)`;
            chibiBody.style.transform = `rotate(${tiltDeg.toFixed(1)}deg) scale(${stretchX.toFixed(3)}, ${stretchY.toFixed(3)})`;

            // Vẽ sợi dây tơ uốn cong đàn hồi (Quadratic Bezier Curve) nối từ trần xuống tay Chibi Spider-Man
            wCtx.clearRect(0, 0, stageW, stageH);
            const handX = swingX - 18;
            const handY = swingY + 46;
            const ctrlX = (anchorX + handX) / 2 + Math.cos(phase) * 24;
            const ctrlY = (anchorY + handY) / 2 + 14;

            wCtx.beginPath();
            wCtx.moveTo(anchorX, anchorY);
            wCtx.quadraticCurveTo(ctrlX, ctrlY, handX, handY);
            const grad = wCtx.createLinearGradient(anchorX, anchorY, handX, handY);
            grad.addColorStop(0, "rgba(56, 189, 248, 0.25)");
            grad.addColorStop(0.5, "rgba(255, 255, 255, 0.95)");
            grad.addColorStop(1, "rgba(244, 63, 94, 0.85)");
            wCtx.strokeStyle = grad;
            wCtx.lineWidth = 2.4;
            wCtx.shadowColor = "#38bdf8";
            wCtx.shadowBlur = 8;
            wCtx.stroke();

            requestAnimationFrame(animateChibiSpidey);
        }

        requestAnimationFrame(animateChibiSpidey);

        spideyStage.addEventListener("click", (e) => {
            // Bấm vào để Chibi Spider-Man nhào lộn 360 độ mềm mại và bắn tơ!
            boostVel = 0.14;
            flipAngle = 360;

            if (spideyBeam) {
                spideyBeam.classList.remove("shooting");
                void spideyBeam.offsetWidth;
                spideyBeam.classList.add("shooting");
            }
            const r = spideyStage.getBoundingClientRect();
            const clickX = e.clientX || r.left + r.width / 2;
            const clickY = e.clientY || r.top + r.height / 2;
            spawnConfettiBurst(clickX, clickY);

            const webEmojis = ["🕸️", "🕷️", "⚡", "✨"];
            for (let i = 0; i < 5; i++) {
                const w = document.createElement("span");
                w.className = "floating-heart";
                w.textContent = webEmojis[i % webEmojis.length];
                w.style.left = `${clickX}px`;
                w.style.top = `${clickY}px`;
                w.style.setProperty("--dx", `${(Math.random() - 0.5) * 90}px`);
                w.style.setProperty("--rot", `${(Math.random() - 0.5) * 80}deg`);
                document.body.appendChild(w);
                setTimeout(() => w.remove(), 1100);
            }
        });
    }
}

// Lời chào thông minh theo khung giờ trong ngày
function initSmartGreeting() {
    const badge = document.getElementById("greeting-badge");
    if (!badge) return;
    const hour = new Date().getHours();
    let text = "✨ Chúc một ngày tốt lành!";
    if (hour >= 5 && hour < 11) text = "🌅 Chào buổi sáng năng lượng!";
    else if (hour >= 11 && hour < 14) text = "☀️ Buổi trưa vui vẻ nhé!";
    else if (hour >= 14 && hour < 18) text = "🌤️ Buổi chiều chill nhé!";
    else if (hour >= 18 && hour < 23) text = "🌙 Buổi tối thư giãn nhé!";
    else text = "🌌 Cú đêm nghe nhạc chill 🎧";
    badge.textContent = text;
}

// Hộp thư gửi lời nhắn & Xem trực tiếp tin nhắn ngay trên trang Bio (Không cần kích hoạt Gmail!)
function initSecretMessageModal() {
    const triggerBtn = document.getElementById("secretMsgBtn");
    const modal = document.getElementById("secretMsgModal");
    const closeBtn = document.getElementById("secretMsgClose");
    const senderInput = document.getElementById("secretSender");
    const contentInput = document.getElementById("secretContent");
    const submitBtn = document.getElementById("secretSubmitBtn");
    const inboxList = document.getElementById("inboxList");
    const inboxCountBadge = document.getElementById("inboxCountBadge");
    const privateInboxWall = document.getElementById("privateInboxWall");
    const ownerUnlockToggle = document.getElementById("ownerUnlockToggle");
    const ownerPinBox = document.getElementById("ownerPinBox");
    const ownerPinInput = document.getElementById("ownerPinInput");
    const ownerPinSubmit = document.getElementById("ownerPinSubmit");
    const ownerLockBtn = document.getElementById("ownerLockBtn");
    const ownerRefreshBtn = document.getElementById("ownerRefreshBtn");
    const ownerClearAllBtn = document.getElementById("ownerClearAllBtn");

    if (!triggerBtn || !modal) return;

    if (ownerRefreshBtn) {
        ownerRefreshBtn.addEventListener("click", () => {
            loadCloudMessages();
            showToast("Đã làm mới hộp thư! 📬");
        });
    }

    // Mã PIN riêng của Huy Đình: "21" hoặc "9000" (băm kiểm tra để người lạ không nhìn thấy)
    let isOwnerUnlocked = sessionStorage.getItem("huydinh_owner_unlocked") === "1";

    function updateOwnerInboxVisibility() {
        if (isOwnerUnlocked) {
            if (privateInboxWall) privateInboxWall.style.display = "block";
            if (ownerPinBox) ownerPinBox.style.display = "none";
            if (ownerUnlockToggle) ownerUnlockToggle.style.display = "none";
            loadCloudMessages();
        } else {
            if (privateInboxWall) privateInboxWall.style.display = "none";
            if (ownerUnlockToggle) ownerUnlockToggle.style.display = "inline-block";
        }
    }

    if (ownerUnlockToggle) {
        ownerUnlockToggle.addEventListener("click", () => {
            if (ownerPinBox) {
                const isHidden = ownerPinBox.style.display === "none";
                ownerPinBox.style.display = isHidden ? "flex" : "none";
                if (isHidden && ownerPinInput) ownerPinInput.focus();
            }
        });
    }

    function checkOwnerPin() {
        const pin = (ownerPinInput ? ownerPinInput.value : "").trim();
        // Chỉ chấp nhận duy nhất mã PIN "956" (lưu dưới dạng mã hóa Base64 "OTU2" để ẩn trong code)
        if (btoa(pin) === "OTU2") {
            isOwnerUnlocked = true;
            sessionStorage.setItem("huydinh_owner_unlocked", "1");
            if (ownerPinInput) ownerPinInput.value = "";
            updateOwnerInboxVisibility();
            showToast("Chào Huy Đình! Đã mở khóa hộp thư riêng 🔓");
        } else {
            showToast("Mã PIN không đúng! ❌");
        }
    }

    if (ownerPinSubmit) {
        ownerPinSubmit.addEventListener("click", checkOwnerPin);
    }
    if (ownerPinInput) {
        ownerPinInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") checkOwnerPin();
        });
    }
    if (ownerLockBtn) {
        ownerLockBtn.addEventListener("click", () => {
            isOwnerUnlocked = false;
            sessionStorage.removeItem("huydinh_owner_unlocked");
            updateOwnerInboxVisibility();
            showToast("Đã khóa hộp thư riêng! 🔒");
        });
    }

    // Hệ thống lưu trữ tin nhắn Đám Mây Kép (Ntfy JSON Stream + Multi-Slot KeyVal + LocalStorage)
    // Hỗ trợ XÓA từng tin nhắn hoặc XÓA TẤT CẢ đồng bộ trên mọi thiết bị!
    const LOCAL_KEY = "huydinh_bio_inbox_messages_v2";
    const DELETED_KEY = "huydinh_bio_deleted_msg_ids";

    function encodeUrlSafeBase64(obj) {
        const jsonStr = JSON.stringify(obj);
        const bytes = new TextEncoder().encode(jsonStr);
        let binary = "";
        bytes.forEach((b) => (binary += String.fromCharCode(b)));
        return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }

    function getDeletedIds() {
        try {
            const raw = localStorage.getItem(DELETED_KEY);
            if (raw) {
                const arr = JSON.parse(raw);
                if (Array.isArray(arr)) return new Set(arr);
            }
        } catch {}
        return new Set();
    }

    function saveDeletedIds(setObj) {
        try {
            localStorage.setItem(DELETED_KEY, JSON.stringify(Array.from(setObj)));
        } catch {}
    }

    function getMsgKey(m) {
        return m.id || `${m.sender}_${m.text}_${m.time}`;
    }

    function getLocalMessages() {
        try {
            const raw = localStorage.getItem(LOCAL_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    const deleted = getDeletedIds();
                    return parsed.filter((m) => m && !deleted.has(getMsgKey(m)));
                }
            }
        } catch {}
        return [];
    }

    function mergeMessages(listA, listB, deletedSet) {
        const deleted = deletedSet || getDeletedIds();
        const map = new Map();
        [...listA, ...listB].forEach((m) => {
            if (!m || !m.text) return;
            const key = getMsgKey(m);
            m.id = key;
            if (!deleted.has(key)) {
                map.set(key, m);
            }
        });
        return Array.from(map.values());
    }

    function renderInbox(messages) {
        if (!inboxList) return;
        const deleted = getDeletedIds();
        const visibleMsgs = (messages || []).filter((m) => m && !deleted.has(getMsgKey(m)));

        if (visibleMsgs.length === 0) {
            inboxList.innerHTML = `<p class="inbox-empty">Chưa có tin nhắn nào.</p>`;
            if (inboxCountBadge) inboxCountBadge.textContent = "0 tin nhắn";
            return;
        }
        if (inboxCountBadge) inboxCountBadge.textContent = `${visibleMsgs.length} tin nhắn`;

        inboxList.innerHTML = visibleMsgs
            .slice()
            .reverse()
            .map((m) => {
                const key = getMsgKey(m).replace(/"/g, "&quot;");
                const safeSender = (m.sender || "Ẩn danh").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                const safeText = (m.text || "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                const safeTime = (m.time || "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                return `
                    <div class="inbox-item">
                        <div class="inbox-item-top">
                            <span class="inbox-sender">⚡ ${safeSender}</span>
                            <div class="inbox-item-actions">
                                <span class="inbox-time">${safeTime}</span>
                                <button type="button" class="inbox-del-btn" data-del-id="${key}" title="Xóa tin nhắn này">&times;</button>
                            </div>
                        </div>
                        <p class="inbox-text">${safeText}</p>
                    </div>
                `;
            })
            .join("");

        // Gắn sự kiện xóa từng tin nhắn
        inboxList.querySelectorAll(".inbox-del-btn").forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                e.stopPropagation();
                const targetId = btn.getAttribute("data-del-id");
                if (targetId) {
                    await deleteMessageById(targetId);
                }
            });
        });
    }

    // Xóa 1 tin nhắn & đồng bộ lệnh xóa lên Cloud để mọi thiết bị khác cũng xóa theo
    async function deleteMessageById(targetId) {
        const deleted = getDeletedIds();
        deleted.add(targetId);
        saveDeletedIds(deleted);

        const remaining = getLocalMessages().filter((m) => getMsgKey(m) !== targetId);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(remaining));
        renderInbox(remaining);
        showToast("Đã xóa tin nhắn! 🗑️");

        try {
            await fetch(`https://ntfy.sh/${NTFY_INBOX_TOPIC}`, {
                method: "POST",
                body: JSON.stringify({ action: "delete", targetId: targetId })
            });
        } catch {}
    }

    // Xóa tất cả tin nhắn & đồng bộ lệnh xóa lên Cloud
    if (ownerClearAllBtn) {
        ownerClearAllBtn.addEventListener("click", async () => {
            const current = getLocalMessages();
            if (current.length === 0) {
                showToast("Hộp thư đang trống rồi! ✨");
                return;
            }
            const deleted = getDeletedIds();
            const allIds = current.map((m) => getMsgKey(m));
            allIds.forEach((id) => deleted.add(id));
            saveDeletedIds(deleted);

            localStorage.setItem(LOCAL_KEY, JSON.stringify([]));
            renderInbox([]);
            showToast("Đã xóa toàn bộ tin nhắn trong hộp thư! 🗑️");

            try {
                await fetch(`https://ntfy.sh/${NTFY_INBOX_TOPIC}`, {
                    method: "POST",
                    body: JSON.stringify({ action: "clear_all", targetIds: allIds })
                });
            } catch {}
        });
    }

    async function fetchCloudMessagesList() {
        const deleted = getDeletedIds();
        let rawMsgs = [];

        try {
            const res = await fetch(`https://ntfy.sh/${NTFY_INBOX_TOPIC}/json?poll=1&since=0`, { cache: "no-store" });
            const text = await res.text();
            const lines = text.trim().split("\n");
            for (const line of lines) {
                if (!line) continue;
                try {
                    const pkt = JSON.parse(line);
                    if (pkt.event === "message" && pkt.message) {
                        const msgData = JSON.parse(pkt.message);
                        if (msgData.action === "delete" && msgData.targetId) {
                            deleted.add(msgData.targetId);
                        } else if (msgData.action === "clear_all" && Array.isArray(msgData.targetIds)) {
                            msgData.targetIds.forEach((id) => deleted.add(id));
                        } else if (msgData && msgData.text) {
                            msgData.id = msgData.id || pkt.id || `${msgData.sender}_${msgData.text}_${msgData.time}`;
                            rawMsgs.push(msgData);
                        }
                    }
                } catch {}
            }
        } catch {}

        saveDeletedIds(deleted);
        const combined = mergeMessages(getLocalMessages(), rawMsgs, deleted);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(combined));
        return combined;
    }

    async function loadCloudMessages() {
        renderInbox(getLocalMessages());
        const list = await fetchCloudMessagesList();
        renderInbox(list);
    }

    // Lắng nghe cả tin nhắn mới VÀ lệnh xóa tin nhắn theo thời gian thực (Real-time SSE)
    if (window.EventSource) {
        try {
            const inboxEs = new EventSource(`https://ntfy.sh/${NTFY_INBOX_TOPIC}/sse`);
            inboxEs.onmessage = (evt) => {
                try {
                    const pkt = JSON.parse(evt.data);
                    if (pkt && pkt.message) {
                        const msgData = JSON.parse(pkt.message);
                        const deleted = getDeletedIds();
                        if (msgData.action === "delete" && msgData.targetId) {
                            deleted.add(msgData.targetId);
                            saveDeletedIds(deleted);
                            const remaining = getLocalMessages();
                            localStorage.setItem(LOCAL_KEY, JSON.stringify(remaining));
                            if (isOwnerUnlocked) renderInbox(remaining);
                        } else if (msgData.action === "clear_all" && Array.isArray(msgData.targetIds)) {
                            msgData.targetIds.forEach((id) => deleted.add(id));
                            saveDeletedIds(deleted);
                            const remaining = getLocalMessages();
                            localStorage.setItem(LOCAL_KEY, JSON.stringify(remaining));
                            if (isOwnerUnlocked) renderInbox(remaining);
                        } else if (msgData && msgData.text) {
                            msgData.id = msgData.id || pkt.id || `${msgData.sender}_${msgData.text}_${msgData.time}`;
                            const updated = mergeMessages(getLocalMessages(), [msgData], deleted);
                            localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
                            if (isOwnerUnlocked) {
                                renderInbox(updated);
                            }
                        }
                    }
                } catch {}
            };
        } catch {}
    }

    triggerBtn.addEventListener("click", () => {
        modal.classList.add("active");
        updateOwnerInboxVisibility();
    });

    if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });

    document.querySelectorAll(".quick-msg-chip").forEach((chip) => {
        chip.addEventListener("click", () => {
            if (contentInput) contentInput.value = chip.textContent;
        });
    });

    if (submitBtn) {
        submitBtn.addEventListener("click", async () => {
            const msg = (contentInput ? contentInput.value : "").trim();
            const sender = (senderInput ? senderInput.value : "").trim() || "Ẩn danh";
            if (!msg) {
                showToast("Hãy nhập nội dung tin nhắn trước nhé! ✍️");
                return;
            }

            const btnTextEl = document.getElementById("secret-submit-text");
            const originalText = btnTextEl ? btnTextEl.textContent : "Gửi tin nhắn ⚡";
            if (btnTextEl) btnTextEl.textContent = "Đang gửi... ⏳";
            submitBtn.disabled = true;

            const nowStr = new Date().toLocaleTimeString("vi-VN", {
                hour: "2-digit",
                minute: "2-digit",
                day: "2-digit",
                month: "2-digit"
            });

            const newMsgObj = {
                id: `msg_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
                sender: sender,
                text: msg,
                time: nowStr
            };

            // 1. Lưu ngay vào bộ nhớ máy và cập nhật giao diện
            const updatedLocal = mergeMessages(getLocalMessages(), [newMsgObj]);
            localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedLocal));

            // 2. Bắn trực tiếp gói JSON qua POST body lên Ntfy Cloud Stream (không giới hạn độ dài, hỗ trợ mọi dấu tiếng Việt & emoji)
            try {
                await fetch(`https://ntfy.sh/${NTFY_INBOX_TOPIC}`, {
                    method: "POST",
                    body: JSON.stringify(newMsgObj)
                });
            } catch {}

            // 3. Lưu thêm bản ghi riêng lẻ vào KeyVal slot làm bản sao lưu thứ 2
            try {
                const slotKey = `m_${Date.now()}`;
                const singleB64 = encodeUrlSafeBase64(newMsgObj);
                if (singleB64.length < 240) {
                    fetch(`https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${CLOUD_APP_KEY}/${slotKey}/${singleB64}`, { method: "POST" }).catch(() => {});
                }
            } catch {}

            if (isOwnerUnlocked) {
                renderInbox(updatedLocal);
            }

            if (contentInput) contentInput.value = "";
            if (senderInput) senderInput.value = "";
            if (btnTextEl) btnTextEl.textContent = originalText;
            submitBtn.disabled = false;

            const btnRect = submitBtn.getBoundingClientRect();
            spawnConfettiBurst(btnRect.left + btnRect.width / 2, btnRect.top + btnRect.height / 2);
            trigger3dSentAnimation();
        });
    }
}

// Hiệu ứng Hologram 3D khi gửi tin nhắn thành công
let sent3dTimer = null;
function trigger3dSentAnimation() {
    const overlay = document.getElementById("sent3dOverlay");
    if (!overlay) {
        showToast("Đã gửi tin nhắn thành công tới Huy Đình! ⚡");
        return;
    }
    overlay.classList.remove("active");
    void overlay.offsetWidth; // Reset animation
    overlay.classList.add("active");
    spawnConfettiBurst(window.innerWidth / 2, window.innerHeight / 2);

    if (sent3dTimer) clearTimeout(sent3dTimer);
    sent3dTimer = setTimeout(() => {
        overlay.classList.remove("active");
    }, 2450);
}

// Hiệu ứng pháo hoa Confetti (Tông màu Spider-Man Đỏ - Xanh Dương - Trắng Tơ Nhện)
function spawnConfettiBurst(x, y) {
    const colors = ["#ef4444", "#3b82f6", "#ffffff", "#38bdf8", "#dc2626"];
    for (let i = 0; i < 22; i++) {
        const piece = document.createElement("span");
        piece.className = "confetti-piece";
        piece.style.left = `${x}px`;
        piece.style.top = `${y}px`;
        piece.style.background = colors[i % colors.length];
        const angle = (Math.PI * 2 * i) / 22;
        const dist = 45 + Math.random() * 65;
        piece.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
        piece.style.setProperty("--ty", `${Math.sin(angle) * dist - 20}px`);
        piece.style.setProperty("--trot", `${(Math.random() - 0.5) * 520}deg`);
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 950);
    }
}

// Sao chép vào clipboard
function copyToClipboard(text, message) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(message);
    }).catch(() => {
        const input = document.createElement("input");
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        showToast(message);
    });
}

let toastTimeout;
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2400);
}
