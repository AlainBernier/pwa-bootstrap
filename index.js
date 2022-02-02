if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(function (reg) {
      // registration worked
      console.log("Enregistrement réalisé avec succès. Scope is " + reg.scope);
    })
    .catch(function (error) {
      // registration failed
      console.log("Ah Non quelque chose cloche " + error);
    });
} else {
  console.log("serviceWorker non disponible dans ce navigateur");
}
//initialise la variable
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Empeche la mini bar sur mobile
  e.preventDefault();

  deferredPrompt = e;
  // notifie l'utilisateur qu'il peut installer l'app

  installationApp();

  console.log(`'beforeinstallprompt' évènement lancé pour installation`);

  const installAppButton = document.getElementById("installAppButton");
  appButton.addEventListener("click", function () {
    deferredPrompt.prompt();
  });
});

function installationApp() {
  console.log("Affiche le toast pour installation");
  const popup = document.getElementById("message");
  const toast = new bootstrap.Toast(popup, { delay: 10000 });
  toast.show();
}
