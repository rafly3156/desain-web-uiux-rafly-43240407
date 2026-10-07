/* ==========================================================================
   NAKHERA FARM - E-Commerce & Edukasi Budidaya Lobster Air Tawar
   JavaScript Dynamic Interactions & Purchase Order Flow
   Author: Muhammad Rafly Putra Mulyana (NIM: 43240407)
   ========================================================================== */

let cartCount = 0;

// Data Transaksi Dummy Awal
let transactions = [
    {
        id: "PO-2026-001",
        name: "Resto SeaFood Bahari",
        product: "Lobster Konsumsi (Grade A)",
        qty: "25 kg",
        total: "Rp 4.500.000",
        status: "Disetujui",
        statusClass: "status-disetujui"
    },
    {
        id: "PO-2026-002",
        name: "Bpk. Hendra - Cirebon",
        product: "Indukan Red Claw (1 Set)",
        qty: "2 Set",
        total: "Rp 700.000",
        status: "Diproses",
        statusClass: "status-diproses"
    },
    {
        id: "PO-2026-003",
        name: "CV. Aquafarming Jaya",
        product: "Vertical Farming Starter Kit",
        qty: "1 Unit",
        total: "Rp 2.500.000",
        status: "Pengiriman",
        statusClass: "status-pengiriman"
    },
    {
        id: "PO-2026-004",
        name: "Mitra Lobster Kuningan",
        product: "Burayak Benih (2-3 Inci)",
        qty: "500 Ekor",
        total: "Rp 1.750.000",
        status: "Selesai",
        statusClass: "status-selesai"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTransactionTable();
    initCheckoutForm();
});

// 1. Navigasi & Mobile Menu
function initNavigation() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }
}

// 2. Function Tambah Ke Purchase Order dari Katalog
function selectProductForOrder(productName, priceText) {
    cartCount++;
    updateCartDisplay();
    showToast(`"${productName}" berhasil ditambahkan ke formulir PO!`);

    const productSelect = document.getElementById('productSelect');
    const qtyInput = document.getElementById('productQty');
    
    if (productSelect) {
        productSelect.value = productName;
    }
    
    if (qtyInput && (!qtyInput.value || qtyInput.value == 0)) {
        qtyInput.value = 1;
    }

    // Smooth Scroll ke Section Checkout
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
        checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function updateCartDisplay() {
    const cartCountEl = document.getElementById('cartCount');
    const summaryCartCountEl = document.getElementById('summaryCartCount');

    if (cartCountEl) cartCountEl.textContent = cartCount;
    if (summaryCartCountEl) summaryCartCountEl.textContent = cartCount;
}

// 3. Toast Alert Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');

    if (toast && toastMsg) {
        toastMsg.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }
}

// 4. Validasi Form & Submit via WhatsApp + Tambah ke Tabel Transaksi
function initCheckoutForm() {
    const checkoutForm = document.getElementById('checkoutForm');
    if (!checkoutForm) return;

    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        const name = document.getElementById('fullName');
        const phone = document.getElementById('phoneNumber');
        const product = document.getElementById('productSelect');
        const qty = document.getElementById('productQty');
        const address = document.getElementById('address');

        // Validasi Nama
        if (!name || !name.value.trim()) {
            showError('nameError');
            isValid = false;
        } else {
            hideError('nameError');
        }

        // Validasi Telepon
        if (!phone || !phone.value.trim()) {
            showError('phoneError');
            isValid = false;
        } else {
            hideError('phoneError');
        }

        // Validasi Produk
        if (!product || !product.value) {
            showError('productError');
            isValid = false;
        } else {
            hideError('productError');
        }

        // Validasi Jumlah
        if (!qty || !qty.value || qty.value <= 0) {
            showError('qtyError');
            isValid = false;
        } else {
            hideError('qtyError');
        }

        // Validasi Alamat
        if (!address || !address.value.trim()) {
            showError('addressError');
            isValid = false;
        } else {
            hideError('addressError');
        }

        if (isValid) {
            // Hitung estimasi harga
            let estimatedTotal = calculateEstimatedPrice(product.value, parseInt(qty.value));
            
            // Tambahkan data ke tabel transaksi secara realtime
            const newPOId = `PO-2026-0${transactions.length + 1}`;
            const newTransaction = {
                id: newPOId,
                name: name.value.trim(),
                product: product.value,
                qty: `${qty.value} Item`,
                total: estimatedTotal,
                status: "Diproses",
                statusClass: "status-diproses"
            };

            transactions.unshift(newTransaction);
            renderTransactions('All');
            showToast(`Pesanan ${newPOId} berhasil diajukan & dicatat! Redirecting ke WhatsApp...`);

            // Redirect ke WhatsApp
            const waNumber = '6281234567890';
            const message = `Halo Nakhera Farm, saya ingin mengajukan Purchase Order (PO):%0A%0A` +
                `*No. PO:* ${newPOId}%0A` +
                `*Nama Pemesan:* ${encodeURIComponent(name.value.trim())}%0A` +
                `*WhatsApp:* ${encodeURIComponent(phone.value.trim())}%0A` +
                `*Produk:* ${encodeURIComponent(product.value)}%0A` +
                `*Jumlah:* ${encodeURIComponent(qty.value)}%0A` +
                `*Estimasi Total:* ${encodeURIComponent(estimatedTotal)}%0A` +
                `*Alamat:* ${encodeURIComponent(address.value.trim())}%0A%0A` +
                `Mohon konfirmasi ketersediaan stok & nomor rekening pembayaran. Terima kasih!`;

            setTimeout(() => {
                window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
            }, 1000);
        }
    });
}

function calculateEstimatedPrice(productName, qty) {
    let pricePerUnit = 0;
    if (productName.includes("Konsumsi")) pricePerUnit = 180000;
    else if (productName.includes("Indukan")) pricePerUnit = 350000;
    else if (productName.includes("Burayak")) pricePerUnit = 3500;
    else if (productName.includes("Starter Kit")) pricePerUnit = 2500000;
    else pricePerUnit = 100000;

    let total = pricePerUnit * qty;
    return 'Rp ' + total.toLocaleString('id-ID');
}

function showError(elementId) {
    const el = document.getElementById(elementId);
    if (el) el.classList.add('show');
}

function hideError(elementId) {
    const el = document.getElementById(elementId);
    if (el) el.classList.remove('show');
}

// 5. Tabel Transaksi & Filter Logic
function initTransactionTable() {
    renderTransactions('All');

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const filterValue = e.target.getAttribute('data-filter');
            renderTransactions(filterValue);
        });
    });
}

function renderTransactions(filter) {
    const tableBody = document.getElementById('transactionTableBody');
    if (!tableBody) return;

    let filteredData = transactions;
    if (filter !== 'All') {
        filteredData = transactions.filter(t => t.status === filter);
    }

    if (filteredData.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 24px;">Tidak ada transaksi dengan status ini.</td></tr>`;
        return;
    }

    tableBody.innerHTML = filteredData.map(t => `
        <tr>
            <td><strong>${t.id}</strong></td>
            <td>${t.name}</td>
            <td>${t.product}</td>
            <td>${t.qty}</td>
            <td style="color: var(--accent-orange); font-weight: 600;">${t.total}</td>
            <td><span class="status-badge ${t.statusClass}">${t.status}</span></td>
            <td><button class="btn btn-secondary btn-sm" onclick="showToast('Detail PO ${t.id} terverifikasi')">Detail</button></td>
        </tr>
    `).join('');
}