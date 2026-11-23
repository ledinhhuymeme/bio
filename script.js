/**
 * ==========================================================
 * CẤU HÌNH THÔNG TIN CÁ NHÂN & LINK CỦA BẠN TẠI ĐÂY
 * ==========================================================
 */
const BIO_CONFIG = {
    name: "Đình Huy",
    username: "@huy_dinhhh",
    bioLines: [
        "✨ Kết nối với mình qua các mạng xã hội bên dưới nhé!",
        "📸 Chia sẻ khoảnh khắc mỗi ngày trên Locket & IG",
        "🎵 Follow TikTok của mình để xem video mới nhất!",
        "💬 Nhắn tin trực tiếp qua Zalo & Facebook 24/7"
    ],
    status: "Online",
    avatar: "avatar.jpg",

    links: {
        facebook: {
            url: "https://www.facebook.com/share/1FgFbPsM9g/?mibextid=wwXIfr",
            subtitle: "Kết bạn & nhắn tin giao lưu"
        },
        instagram: {
            url: "https://www.instagram.com/huy_chuis?lqvp=aTQwbm82bDJ4aTE0&utm_source=qr",
            subtitle: "@huy_chuis • Khoảnh khắc thường ngày 📸"
        },
        tiktok: {
            url: "https://www.tiktok.com/@huy_cao_met8",
            subtitle: "@huy_cao_met8 • Follow kênh mình 🎵"
        },
        locket: {
            url: "https://locket.cam/huy_dinhhh",
            subtitle: "@huy_dinhhh • Add Locket xem ảnh trực tiếp 💛"
        },
        zalo: {
            // Link được mã hóa Base64 để không hiển thị số điện thoại trên giao diện hay thanh xem trước URL
            encodedUrl: "aHR0cHM6Ly96YWxvLm1lLzA3ODM1MzkwMDA=",
            subtitle: "Nhắn tin riêng trực tiếp cho mình 💬"
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Gắn dữ liệu cá nhân
    document.title = `${BIO_CONFIG.name} | Official Bio ✨`;
    document.getElementById("profile-name").textContent = BIO_CONFIG.name;
    document.getElementById("profile-handle").textContent = BIO_CONFIG.username;
    document.getElementById("status-text").textContent = BIO_CONFIG.status;
    document.getElementById("profile-avatar").src = BIO_CONFIG.avatar;
    document.getElementById("year").textContent = new Date().getFullYear();

    // 2. Đồng hồ thời gian thực (Vietnam Time)
    updateLiveClock();
    setInterval(updateLiveClock, 15000);

    // 3. Gắn link mạng xã hội (kèm cơ chế giấu số điện thoại cho Zalo)
    const openZalo = (e) => {
        if (e) e.preventDefault();
        window.open(atob(BIO_CONFIG.links.zalo.encodedUrl), "_blank", "noopener,noreferrer");
    };

    Object.keys(BIO_CONFIG.links).forEach((platform) => {
        const card = document.querySelector(`.link-card[data-platform="${platform}"]`);
        const data = BIO_CONFIG.links[platform];
        if (card && data) {
            const subEl = card.querySelector(".link-sub");
            if (subEl && data.subtitle) {
                subEl.textContent = data.subtitle;
            }
            if (data.encodedUrl) {
                card.removeAttribute("href");
                card.style.cursor = "pointer";
                card.addEventListener("click", openZalo);
            } else if (data.url) {
                card.href = data.url;
            }
        }
    });

    const dockZaloBtn = document.getElementById("dock-zalo-btn");
    if (dockZaloBtn) {
        dockZaloBtn.addEventListener("click", openZalo);
    }

    // 4. Đổi bảng màu Theme (Cyber Blue -> Sunset Pink -> Emerald Neon)
    const themes = ["cyber", "sunset", "emerald"];
    const themeNames = {
        cyber: "Giao diện Cyber Neon 💙",
        sunset: "Giao diện Sunset Glow 🔥",
        emerald: "Giao diện Emerald Aurora 💚"
    };
    let currentThemeIdx = 0;
    const themeBtn = document.getElementById("themeBtn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            currentThemeIdx = (currentThemeIdx + 1) % themes.length;
            const nextTheme = themes[currentThemeIdx];
            document.body.setAttribute("data-theme", nextTheme);
            showToast(themeNames[nextTheme]);
        });
    }

    // 5. Hiệu ứng chữ chạy Typewriter
    initTypewriter(BIO_CONFIG.bioLines);

    // 6. Hiệu ứng ánh sáng Spotlight & nghiêng 3D theo chuột
    initCardInteractions();

    // 7. Hiệu ứng bầu trời sao & sao băng (Starfield + Shooting Stars)
    initStarfield();

    // 8. Nút sao chép từng link
    document.querySelectorAll(".copy-small-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const platform = btn.getAttribute("data-copy-target");
            const linkData = BIO_CONFIG.links[platform];
            if (linkData && linkData.url) {
                copyToClipboard(linkData.url, `Đã sao chép link ${platform.toUpperCase()}! ✨`);
            }
        });
    });

    // 9. Nút chia sẻ trang Bio
    const shareBtn = document.getElementById("shareBtn");
    shareBtn.addEventListener("click", async () => {
        const shareUrl = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${BIO_CONFIG.name} - Bio Links`,
                    text: BIO_CONFIG.bioLines[0],
                    url: shareUrl
                });
            } catch {
                copyToClipboard(shareUrl, "Đã sao chép link trang Bio! 🔗");
            }
        } else {
            copyToClipboard(shareUrl, "Đã sao chép link trang Bio! 🔗");
        }
    });

    // 10. Nút mở mã QR Code
    const qrBtn = document.getElementById("qrBtn");
    const qrModal = document.getElementById("qrModal");
    const qrClose = document.getElementById("qrClose");
    const qrImage = document.getElementById("qrImage");

    qrBtn.addEventListener("click", () => {
        const currentUrl = window.location.href.startsWith("http")
            ? window.location.href
            : "https://ledinhhuymeme.github.io/bio/";
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(currentUrl)}`;
        qrModal.classList.add("active");
    });

    qrClose.addEventListener("click", () => qrModal.classList.remove("active"));
    qrModal.addEventListener("click", (e) => {
        if (e.target === qrModal) qrModal.classList.remove("active");
    });
});

function updateLiveClock() {
    const clockEl = document.getElementById("live-clock");
    if (!clockEl) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const mins = String(now.getMinutes()).padStart(2, "0");
    clockEl.textContent = `${hours}:${mins}`;
}

// Hiệu ứng gõ chữ tự động
function initTypewriter(lines) {
    const el = document.getElementById("typewriter-text");
    if (!el || !lines || !lines.length) return;

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

        let speed = isDeleting ? 26 : 52;

        if (!isDeleting && charIndex === currentLine.length) {
            speed = 2400;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            lineIndex = (lineIndex + 1) % lines.length;
            speed = 350;
        }

        setTimeout(tick, speed);
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
            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;
            card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        }
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
}

// Hiệu ứng bầu trời sao & sao băng (Starfield + Shooting Stars)
function initStarfield() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const stars = Array.from({ length: 55 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.5,
        vy: -Math.random() * 0.35 - 0.08,
        alpha: Math.random() * 0.7 + 0.2,
        twinkle: Math.random() * 0.02 + 0.005
    }));

    let shootingStar = null;

    function spawnShootingStar() {
        if (Math.random() < 0.012 && !shootingStar) {
            shootingStar = {
                x: Math.random() * width * 0.8,
                y: Math.random() * height * 0.35,
                len: Math.random() * 70 + 50,
                speed: Math.random() * 9 + 8,
                alpha: 1
            };
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        for (const s of stars) {
            s.y += s.vy;
            s.alpha += s.twinkle;
            if (s.alpha > 0.9 || s.alpha < 0.2) s.twinkle = -s.twinkle;
            if (s.y < -10) s.y = height + 10;

            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
            ctx.fill();
        }

        spawnShootingStar();
        if (shootingStar) {
            ctx.save();
            const grad = ctx.createLinearGradient(
                shootingStar.x,
                shootingStar.y,
                shootingStar.x - shootingStar.len,
                shootingStar.y - shootingStar.len * 0.6
            );
            grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.alpha})`);
            grad.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.strokeStyle = grad;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(shootingStar.x, shootingStar.y);
            ctx.lineTo(shootingStar.x - shootingStar.len, shootingStar.y - shootingStar.len * 0.6);
            ctx.stroke();
            ctx.restore();

            shootingStar.x += shootingStar.speed;
            shootingStar.y += shootingStar.speed * 0.6;
            shootingStar.alpha -= 0.022;

            if (shootingStar.alpha <= 0) {
                shootingStar = null;
            }
        }

        requestAnimationFrame(draw);
    }

    draw();
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
