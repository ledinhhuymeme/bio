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
        "🎵 Follow TikTok của mình để xem video mới nhất!"
    ],
    status: "Online",
    avatar: "avatar.jpg",

    links: {
        facebook: {
            url: "https://www.facebook.com/share/1FgFbPsM9g/?mibextid=wwXIfr",
            subtitle: "Kết bạn & nhắn tin cho mình"
        },
        instagram: {
            url: "https://www.instagram.com/huy_chuis?lqvp=aTQwbm82bDJ4aTE0&utm_source=qr",
            subtitle: "@huy_chuis • Daily stories 📸"
        },
        tiktok: {
            url: "https://www.tiktok.com/@huy_cao_met8",
            subtitle: "@huy_cao_met8 • Follow kênh mình 🎵"
        },
        locket: {
            url: "https://locket.cam/huy_dinhhh",
            subtitle: "@huy_dinhhh • Add Locket xem ảnh 💛"
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

    // 2. Gắn link mạng xã hội
    Object.keys(BIO_CONFIG.links).forEach((platform) => {
        const card = document.querySelector(`.link-card[data-platform="${platform}"]`);
        const data = BIO_CONFIG.links[platform];
        if (card && data) {
            card.href = data.url;
            const subEl = card.querySelector(".link-sub");
            if (subEl && data.subtitle) {
                subEl.textContent = data.subtitle;
            }
        }
    });

    // 3. Hiệu ứng chữ chạy Typewriter
    initTypewriter(BIO_CONFIG.bioLines);

    // 4. Hiệu ứng ánh sáng Spotlight & nghiêng 3D theo chuột
    initCardInteractions();

    // 5. Hiệu ứng hạt sao lơ lửng (Canvas Particles)
    initParticles();

    // 6. Nút sao chép từng link
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

    // 7. Nút chia sẻ trang Bio
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

    // 8. Nút mở mã QR Code
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

        let speed = isDeleting ? 28 : 55;

        if (!isDeleting && charIndex === currentLine.length) {
            speed = 2400; // Dừng lại đọc khi gõ xong
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
            const rotateX = ((y - centerY) / centerY) * -3.5;
            const rotateY = ((x - centerX) / centerX) * 3.5;
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
