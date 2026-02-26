const productsData = [
    { id: 1, name: "AED Defibrillators", desc: "Critical life-saving cardiac equipment.", categoryId: "diagnostic", image: "1.png" },
    { id: 2, name: "ECG Machines (3 & 12 Ch)", desc: "Accurate cardiac monitoring systems.", categoryId: "diagnostic", image: "2.png" },
    { id: 3, name: "Patient Monitors", desc: "Multi-parameter ICU and ward monitors.", categoryId: "diagnostic", image: "3.png" },
    { id: 4, name: "Stethoscopes & Exam", desc: "Clinical examination essentials.", categoryId: "diagnostic", image: "4.png" },
    { id: 5, name: "Electric ICU Beds", desc: "Advanced multi-function bed systems.", categoryId: "furniture", image: "5.png" },
    { id: 6, name: "Mobility Aids", desc: "Manual Wheelchairs, Walkers, Crutches.", categoryId: "furniture", image: "6.png" },
    { id: 7, name: "Ward Essentials", desc: "Semi-Fowler Beds & Commode Chairs.", categoryId: "furniture", image: "7.png" },
    { id: 8, name: "IFT Machines", desc: "Interferential Therapy for pain relief.", categoryId: "physiotherapy", image: "8.png" },
    { id: 9, name: "Ultrasound Therapy", desc: "Deep tissue healing equipment.", categoryId: "physiotherapy", image: "9.png" },
    { id: 10, name: "Protective Gear", desc: "Surgical Gloves & Face Masks.", categoryId: "consumables", image: "10.png" },
    { id: 11, name: "Injection & IV", desc: "Syringes & IV Cannulas.", categoryId: "consumables", image: "11.png" },
    { id: 12, name: "Wound Care", desc: "Gauze, Bandages & Alcohol Swabs.", categoryId: "consumables", image: "12.png" },
    { id: 13, name: "ECG Electrodes", desc: "Monitoring consumables in bulk.", categoryId: "consumables", image: "13.png" },
    { id: 14, name: "ECG Machine (3-Ch)", desc: "Capital Equipment - Aknamed B2B", categoryId: "diagnostic", image: "product-14.png" },
    { id: 15, name: "ECG Machine (12-Ch)", desc: "Capital Equipment - Medikabazaar (Refurb)", categoryId: "diagnostic", image: "product-15.png" },
    { id: 16, name: "Patient Monitor (Basic)", desc: "Capital Equipment - Low-Cost Competitor", categoryId: "diagnostic", image: "product-16.png" },
    { id: 17, name: "Patient Monitor (Advanced)", desc: "Capital Equipment - Aknamed B2B", categoryId: "diagnostic", image: "product-17.png" },
    { id: 18, name: "Stethoscope (Premium)", desc: "Instrument - Medikabazaar", categoryId: "diagnostic", image: "product-18.png" },
    { id: 19, name: "Stethoscope (Standard)", desc: "Instrument - Aknamed B2B", categoryId: "diagnostic", image: "product-19.png" },
    { id: 20, name: "Pulse Oximeter", desc: "Instrument - Aknamed B2B", categoryId: "diagnostic", image: "product-20.png" },
    { id: 21, name: "Glucose Monitor", desc: "Instrument - Aknamed B2B", categoryId: "diagnostic", image: "product-21.png" }
];

document.addEventListener('DOMContentLoaded', () => {
    const categories = ['diagnostic', 'furniture', 'physiotherapy', 'consumables'];
    
    categories.forEach(cat => {
        const grid = document.getElementById(`grid-${cat}`);
        if (!grid) return;
        
        const catProducts = productsData.filter(p => p.categoryId === cat);
        grid.innerHTML = catProducts.map(p => `
            <div class="product-card">
                <div class="product-img-wrap" style="height: 120px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                    <img src="public/images/products/${p.image}" alt="${p.name}" style="max-height: 100%; max-width: 100%; object-fit: contain;">
                </div>
                <h4>${p.name}</h4>
                <p class="text-sm">${p.desc}</p>
            </div>
        `).join('');
    });
});
