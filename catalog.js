/* ==========================================
   LE CATALOGUE DU MARCHAND
   Modifie les prix et les descriptions ici.
   ========================================== */

const CATALOG = [
    // L'original (Gratuit)
    { 
        id: 'bg_default', 
        name: 'Original Dark', 
        icon: '⚫', 
        price: 0, 
        desc: 'L\'ambiance classique du TopDog.' 
    },

    // Niveau 1 : Millionnaire (1M)
    { 
        id: 'bg_night', 
        name: 'Néon City', 
        icon: '🌃', 
        price: 1000000, 
        desc: 'Le premier signe de richesse. Course nocturne.' 
    },

    // Niveau 2 : Multi-Millionnaire (10M)
    { 
        id: 'bg_cyber', 
        name: 'Cyber Matrix', 
        icon: '🤖', 
        price: 10000000, 
        desc: 'Interface futuriste pour l\'élite technologique.' 
    },

    // Niveau 3 : Milliardaire (100M)
    { 
        id: 'bg_gold', 
        name: 'Luxe Doré', 
        icon: '🏆', 
        price: 100000000, 
        desc: 'Le statut ultime. Tout est en or massif.' 
    },

    // Niveau 4 : L'INTOUCHABLE (1 Milliard !)
    { 
        id: 'bg_diamond', 
        name: 'Diamant Pur', 
        icon: '💎', 
        price: 1000000000, 
        desc: 'Seuls les dieux du pari peuvent se l\'offrir.' 
    }
];
