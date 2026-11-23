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
            shareBtn: "Chia sẻ",
            qrBtn: "Mã QR",
            bioLines: [
                "✨ Kết nối với mình qua các mạng xã hội bên dưới nhé!",
                "📸 Chia sẻ khoảnh khắc mỗi ngày trên Locket & IG",
                "🎵 Follow TikTok của mình để xem video mới nhất!"
            ],
            statViews: "Lượt ghé thăm",
            statChannels: "Kênh kết nối",
            statOnline: "Trực tuyến",
            momentTag: "📸 KHOẢNH KHẮC NỔI BẬT",
            momentCaption: "\"Giữa núi đồi bình yên & tự do ⛰️☁️\"",
            sectionTitle: "KẾT NỐI MẠNG XÃ HỘI",
            sectionSub: "Chạm để mở hoặc sao chép nhanh",
            subtitles: {
                facebook: "Kết bạn & nhắn tin cho mình",
                instagram: "@huy_chuis • Stories mỗi ngày 📸",
                tiktok: "@huy_cao_met8 • Follow kênh mình 🎵",
                locket: "@huy_dinhhh • Add Locket xem ảnh 💛",
                zalo: "Nhắn tin trực tiếp cho mình 💬",
                gmail: "huyledinh21@gmail.com"
            },
            miniQrTitle: "Quét trên điện thoại",
            miniQrSub: "Mở nhanh trang Bio",
            footerCrafted: "Thiết kế với ✨",
            qrModalTitle: "Quét mã QR Bio",
            qrModalSub: "Mở camera điện thoại để truy cập nhanh",
            toastCopiedPlatform: (p) => `Đã sao chép ${p.toUpperCase()}! ✨`,
            toastCopiedBio: "Đã sao chép link trang Bio! 🔗",
            toastLangSwitched: "Đã chuyển sang Tiếng Việt 🇻🇳"
        },
        en: {
            status: "Online",
            shareBtn: "Share",
            qrBtn: "QR Code",
            bioLines: [
                "✨ Connect with me on my social channels below!",
                "📸 Sharing daily moments on Locket & Instagram",
                "🎵 Follow my TikTok for the latest videos!"
            ],
            statViews: "Total Visits",
            statChannels: "Channels",
            statOnline: "Available",
            momentTag: "📸 FEATURED MOMENT",
            momentCaption: "\"Peaceful & free among the mountains ⛰️☁️\"",
            sectionTitle: "SOCIAL NETWORKS",
            sectionSub: "Tap to open or quick copy link",
            subtitles: {
                facebook: "Add friend & message me",
                instagram: "@huy_chuis • Daily stories 📸",
                tiktok: "@huy_cao_met8 • Follow my channel 🎵",
                locket: "@huy_dinhhh • Add Locket for live pics 💛",
                zalo: "Direct message me on Zalo 💬",
                gmail: "huyledinh21@gmail.com"
            },
            miniQrTitle: "Scan on mobile",
            miniQrSub: "Quickly open Bio page",
            footerCrafted: "Crafted with ✨",
            qrModalTitle: "Scan Bio QR Code",
            qrModalSub: "Open your phone camera to access quickly",
            toastCopiedPlatform: (p) => `Copied ${p.toUpperCase()} link! ✨`,
            toastCopiedBio: "Copied Bio page link! 🔗",
            toastLangSwitched: "Switched to English 🇬🇧"
        }
    }
};

let currentLang = localStorage.getItem("huydinh_bio_lang") || "vi";
let typewriterTimer = null;

document.addEventListener("DOMContentLoaded", () => {
    // 1. Gắn dữ liệu cá nhân cố định
    document.title = `${BIO_CONFIG.name} | Official Bio ✨`;
    document.getElementById("profile-name").textContent = BIO_CONFIG.name;
    document.getElementById("profile-handle").textContent = BIO_CONFIG.username;
    document.getElementById("profile-avatar").src = BIO_CONFIG.avatar;
    document.getElementById("year").textContent = new Date().getFullYear();

    // 2. Gắn link mạng xã hội
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

    // 3. Áp dụng ngôn ngữ ban đầu (VI hoặc EN)
    applyLanguage(currentLang, false);

    // 4. Sự kiện nút chuyển đổi ngôn ngữ VI / EN
    const langBtn = document.getElementById("langBtn");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "vi" ? "en" : "vi";
            localStorage.setItem("huydinh_bio_lang", currentLang);
            applyLanguage(currentLang, true);
        });
    }

    // 5. Hiệu ứng ánh sáng Spotlight & nghiêng 3D theo chuột
    initCardInteractions();

    // 6. Hiệu ứng hạt sao lơ lửng (Canvas Particles)
    initParticles();

    // 7. Nút sao chép từng link
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

    // 8. Bộ đếm lượt ghé thăm trực tiếp (Live Visitor Counter)
    initVisitorCounter();

    // 9. Đồng hồ thời gian thực (Live Clock trên Desktop)
    initLiveClock();

    // 10. Nút chia sẻ trang Bio
    const shareBtn = document.getElementById("shareBtn");
    shareBtn.addEventListener("click", async () => {
        const shareUrl = window.location.href.split("?")[0];
        const dict = BIO_CONFIG.i18n[currentLang];
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${BIO_CONFIG.name} - Bio Links`,
                    text: dict.bioLines[0],
                    url: shareUrl
                });
            } catch {
                copyToClipboard(shareUrl, dict.toastCopiedBio);
            }
        } else {
            copyToClipboard(shareUrl, dict.toastCopiedBio);
        }
    });

    // 11. Nút mở mã QR Code
    const qrBtn = document.getElementById("qrBtn");
    const miniQrCard = document.getElementById("miniQrCard");
    const qrModal = document.getElementById("qrModal");
    const qrClose = document.getElementById("qrClose");
    const qrImage = document.getElementById("qrImage");

    function openQrModal() {
        const currentUrl = window.location.href.startsWith("http")
            ? window.location.href.split("?")[0]
            : "https://ledinhhuymeme.github.io/bio/";
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(currentUrl)}`;
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

    // Cập nhật trạng thái nút VI / EN
    document.querySelectorAll(".lang-opt").forEach((el) => {
        el.classList.toggle("active", el.getAttribute("data-lang") === lang);
    });

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setText("status-text", dict.status);
    setText("qr-btn-label", dict.qrBtn);
    setText("share-btn-label", dict.shareBtn);
    setText("stat-label-views", dict.statViews);
    setText("stat-label-channels", dict.statChannels);
    setText("stat-label-online", dict.statOnline);
    setText("moment-tag", dict.momentTag);
    setText("moment-caption", dict.momentCaption);
    setText("section-title", dict.sectionTitle);
    setText("section-sub", dict.sectionSub);
    setText("mini-qr-title", dict.miniQrTitle);
    setText("mini-qr-sub", dict.miniQrSub);
    setText("footer-crafted", dict.footerCrafted);
    setText("qr-modal-title", dict.qrModalTitle);
    setText("qr-modal-sub", dict.qrModalSub);

    // Cập nhật mô tả từng thẻ mạng xã hội
    Object.keys(dict.subtitles).forEach((platform) => {
        const card = document.querySelector(`.link-card[data-platform="${platform}"]`);
        if (card) {
            const subEl = card.querySelector(".link-sub");
            if (subEl) subEl.textContent = dict.subtitles[platform];
        }
    });

    // Khởi động lại hiệu ứng gõ chữ với ngôn ngữ mới
    initTypewriter(dict.bioLines);

    if (showNotification) {
        showToast(dict.toastLangSwitched);
    }
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

// Hiệu ứng gõ chữ tự động (hỗ trợ reset khi đổi ngôn ngữ)
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

// Hiệu ứng Spotlight & 3D Tilt nhẹ trên máy tính
function initCardInteractions() {
    const card = document.getElementById("main-card");
    if (!card) return;

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        if (window.innerWidth > 768) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -2.5;
            const rotateY = ((x - centerX) / centerX) * 2.5;
            card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        }
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
}

// Hiệu ứng hạt phát sáng lơ lửng (Fireflies / Stars)
function initParticles() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 42 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.6,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.45 - 0.1,
        alpha: Math.random() * 0.65 + 0.2
    }));

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
        requestAnimationFrame(draw);
    }

    draw();
}

// Bộ đếm lượt ghé thăm trực tiếp
function initVisitorCounter() {
    const countEl = document.getElementById("visitor-count");
    if (!countEl) return;

    const baseViews = 1280;
    const storageKey = "huydinh_bio_views";
    let localBonus = parseInt(localStorage.getItem(storageKey) || "4", 10) + 1;
    localStorage.setItem(storageKey, localBonus.toString());

    const targetCount = baseViews + localBonus;
    animateCount(countEl, targetCount);

    fetch("https://api.counterapi.dev/v1/ledinhhuymeme_bio/visits/up")
        .then((res) => res.json())
        .then((data) => {
            if (data && typeof data.count === "number") {
                animateCount(countEl, baseViews + data.count);
            }
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
