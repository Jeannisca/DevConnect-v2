import "../src/assets/css/index.css";


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header> 
    <nav>
      <img class="logo" src="./src/assets/img/custom-logo.svg" alt="DevConnect Logo">
    </nav>
  </header>
  <main>
    <section class="hero">
      <h1 class="hero__titre">Bienvenue sur DevConnect</h1>
      <h2 class="hero__soustitre">Le portail de portfolios des développeurs</h2>
      <p class="hero__description">Explorez notre vivier de talents et découvrez des professionnels fiables en</br>explorant leur portfolio.</p>
      <a class="hero__button" href="./src/pages/developpeurs.html">Explorer</a>
    </section>
    <div class="all__domains"> 
      <p class="domain">Front-end</p>
      <p class="domain">Back-end</p>
      <p class="domain">Full-stack</p>
    </div>
  </main>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__top__left">
        <img class="logo" src="./src/assets/img/custom-logo.svg" alt="DevConnect Logo">
        <p class="slogan">Votre plateforme de référence</p>
      </div>
      <div class="footer__top__right">
        <div class="location">
          <img src="./src/assets/img/map-pin-2-fill.svg" alt="localisation">
          <p class="region">Libreville, Gabon</p>
        </div>
        <p class="call_number">num: +241 xx xx xx xx</p>
        <p class="call_number">num: +241 xx xx xx xx</p>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="copyright">© 2024 DevConnect · Tous droits réservés.</p>
      <img class="social_media" src="./src/assets/img/github-fill.svg" alt="GitHub">
    </div>
  </footer>
`;
