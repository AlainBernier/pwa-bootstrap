
// Fonction pour demander permission afficher notifications
function meNotifier() {
    Notification.requestPermission().then(function (result) {
        console.log("permission donnée");
    });
}

// Lance Background sync au retour de connexion 
if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.ready.then(function(reg) {
        return reg.sync.register('mon-tag');
    });
};

