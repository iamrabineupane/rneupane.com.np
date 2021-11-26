Vue.component('work-detail', {
  template: ` <div class="row">
    <h2>My Work</h2>
    <div class="work__boxes">

      <!-- Each div with the work__box class is a project. -->

      <div class="work__box">
        <div class="work__text">
          <h3>Portfolio Template</h3>
          <p>
            A free Open Source Portfolio for anyone to use for free.
          </p>
          <ul class="work__list">
            <li>HTML</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>Parcel</li>
          </ul>

          <div class="work__links">
            <a href="https://rabineupane.com.np" target="_blank" class="link__text">
              Visit Site <span>&rarr;</span>
            </a>
            <a href="hthttps://rabineupane.com.np" title="View Source Code" target="_blank">
              <img src="./images/github.svg" class="work__code" alt="GitHub">
            </a>
          </div>
        </div>
        <div class="work__image-box">
          <img src="./images/project-1.png" class="work__image" alt="Project 1" />
        </div>
      </div>

      <div class="work__box">
        <div class="work__text">
          <h3>Calculator</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            eius.
          </p>
          <ul class="work__list">
            <li>React</li>
            <li>Next.js</li>
            <li>Node</li>
            <li>MongoDB</li>
          </ul>

          <div class="work__links">
            <a href="#" class="link__text">
              Visit Site <span>&rarr;</span>
            </a>
            <a href="#">
              <img src="./images/github.svg" class="work__code" title="View Source Code" alt="GitHub">
            </a>
          </div>
        </div>
        <div class="work__image-box">
          <img src="./images/project-2.png" class="work__image" alt="Project 1" />
        </div>
      </div>

      <div class="work__box">
        <div class="work__text">
          <h3>Notificator</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            eius.
          </p>
          <ul class="work__list">
            <li>React</li>
            <li>Next.js</li>
            <li>Node</li>
            <li>MongoDB</li>
          </ul>

          <div class="work__links">
            <a href="#" class="link__text">
              Visit Site <span>&rarr;</span>
            </a>
            <a href="#">
              <img src="./images/github.svg" class="work__code" title="View Source Code" alt="GitHub">
            </a>
          </div>
        </div>
        <div class="work__image-box">
          <img src="./images/project-3.png" class="work__image" alt="Project 3" />
        </div>
      </div>
    </div>
  </div>
  `
})