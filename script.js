/**
 * ==========================================================
 * CẤU HÌNH THÔNG TIN CÁ NHÂN & LINK CỦA BẠN TẠI ĐÂY
 * Chỉ cần thay đổi nội dung trong ngoặc kép "" bên dưới
 * ==========================================================
 */
const BIO_CONFIG = {
    name: "Đình Huy",
    username: "@huy_dinhhh",
    bio: "✨ Kết nối với mình qua các mạng xã hội bên dưới nhé!",
    status: "Active now",
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
            subtitle: "@huy_cao_met8 • Follow TikTok 🎵"
        },
        locket: {
            url: "https://locket.cam/huy_dinhhh",
            subtitle: "@huy_dinhhh • Add Locket xem ảnh 💛"
        }
    }
};

// Áp dụng cấu hình lên giao diện
document.addEventListener("DOMContentLoaded", () => {
    document.title = `${BIO_CONFIG.name} | Bio Links ✨`;
    document.getElementById("profile-name").textContent = BIO_CONFIG.name;
    document.getElementById("profile-handle").textContent = BIO_CONFIG.username;
    document.getElementById("profile-bio").textContent = BIO_CONFIG.bio;
    document.getElementById("status-text").textContent = BIO_CONFIG.status;
    document.getElementById("profile-avatar").src = BIO_CONFIG.avatar;
    document.getElementById("year").textContent = new Date().getFullYear();

    // Gắn link cho từng thẻ
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

    // Nút copy từng link mạng xã hội
    const copyBtns = document.querySelectorAll(".copy-small-btn");
    copyBtns.forEach((btn) => {
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

    // Nút chia sẻ trang Bio
    const shareBtn = document.getElementById("shareBtn");
    shareBtn.addEventListener("click", async () => {
        const shareUrl = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${BIO_CONFIG.name} - Bio Links`,
                    text: BIO_CONFIG.bio,
                    url: shareUrl
                });
            } catch {
                copyToClipboard(shareUrl, "Đã sao chép link trang Bio! 🔗");
            }
        } else {
            copyToClipboard(shareUrl, "Đã sao chép link trang Bio! 🔗");
        }
    });
});

// Hàm copy vào clipboard và hiện thông báo Toast
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

