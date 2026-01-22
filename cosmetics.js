* =========================================
   TOPDOG COSMETICS MANAGER
   Gère l'apparence, les skins et les meutes.
   ========================================= */

const Cosmetics = {
    // Charge tout au démarrage
    init: function() {
        this.applyActiveSkin();
        this.applyActiveDog();
        
        // Écouteur pour la synchro automatique quand on revient sur l'onglet
        window.addEventListener('focus', () => {
            this.checkSync();
        });
    },

    // Applique le Skin (CSS)
    applyActiveSkin: function() {
        const activeId = localStorage.getItem('topdog_active_bg') || 'bg_default';
        const linkEl = document.getElementById('skin-stylesheet');
        
        // On cherche dans le catalogue
        const skinItem = CATALOG.skins.find(s => s.id === activeId);
        
        if (skinItem && skinItem.file) {
            // Petite vérif pour ne pas recharger inutilement
            if (!linkEl.href.includes(skinItem.file.split('?')[0])) {
                linkEl.href = skinItem.file;
            }
        } else {
            linkEl.href = ""; // Retour au défaut
        }
    },

    // Applique le Chien (Emoji)
    // Applique le Chien (Emoji) - VERSION BLINDÉE
    applyActiveDog: function() {
        const activeId = localStorage.getItem('topdog_active_dog') || 'dog_default';
        
        // On cherche dans le catalogue
        const dogItem = CATALOG.dogs.find(d => d.id === activeId);
        const emoji = dogItem ? dogItem.emoji : '🐶';

        // Injection CSS dynamique
        let style = document.getElementById('dog-pack-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'dog-pack-style';
            document.head.appendChild(style);
        }
        
        // ON FORCE L'EMOJI PAR DESSUS TOUT LE RESTE
        // On rend la règle ultra-puissante avec !important
        style.innerHTML = `
            .tile.nine::before { 
                content: '${emoji}' !important; 
                background: none !important;
                visibility: visible !important;
                opacity: 1 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 1.6em !important; 
            }
            /* Au cas où le chien serait affiché autrement (texte), on le cache */
            .tile.nine {
                color: transparent !important; 
            }
            .tile.nine::before {
                color: #fff !important; /* On remet la couleur du chien visible */
                text-shadow: none !important;
            }
        `;
    },
    // Vérifie si quelque chose a changé (Synchro)
    checkSync: function() {
        this.applyActiveSkin();
        this.applyActiveDog();

        // Synchro Argent aussi, tant qu'à faire
        if(typeof gameState !== 'undefined' && typeof updateHUD === 'function') {
            const savedMoney = parseInt(localStorage.getItem('topdog_wallet')) || 0;
            if(savedMoney !== gameState.bankroll) {
                gameState.bankroll = savedMoney;
                updateHUD();
            }
        }
    }
};

// Lancement automatique
document.addEventListener('DOMContentLoaded', () => {
    if(typeof CATALOG !== 'undefined') {
        Cosmetics.init();
    }
});
