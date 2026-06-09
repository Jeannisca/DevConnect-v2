import "../src/assets/css/index.css";


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header> 
    <nav class="navbar">
      <div class="navbar__logo">
        <img src="./assets/img/logoipsum-custom-logo(1).svg" alt="DevConnect Logo">
      </div>
    </nav>
  </header>
  <main>
    <section class="hero">
      <h1 class="hero__titre">Bienvenue sur DevConnect</h1>
      <h2 class="hero__soustitre">Le portail  de portfolio des développeurs</h2>
      <p class="hero__description">Explorez notre vivier de talents et découvrez des professionnels fiables en </br>  explorant leur portfolio.</p>
      <a href="./src/pages/developpeurs.html" class="bouton_lien">
          <button class="hero__button">Explorer</button>
      </a>
      <div class="Domain"> 
        <p>Front-end, Back-end, Full-stack</p>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="footer__left">
      <div class="logo">
        <img src="./assets/img/logoipsum-custom-logo(1).svg" alt="DevConnect Logo">
      </div>
      <p>votre plateforme de référence</p>
      <p>© 2024 DevConnect. Tous droits réservés.</p>
    </div>
    <div class="footer__right">
      <div class="lieux_contact"> 
        <p>Libreville, Gabon</p>
        <p> num: +241 xx xx xx xx</p>
        <p> num: +241 xx xx xx xx</p>
      </div>
      <div class="copyright"> 
        <div class="social_media">
          <img src="./assets/img/github logo.png" alt="GitHub">
        </div>
      </div>
    </div>
  </footer>
 
`;
