Vue.component('footer-detail', {
    template: `<div id="footer_details" class="row">
                    <!-- Update the links to point to your accounts -->
                    <ul class="footer__social-links">
                    <li class="footer__social-link-item">
                        <a href="https://twitter.com/ibar_arogya" title="Link to Twitter Profile">
                        <img src="./images/twitter.svg" class="footer__social-image" alt="Twitter">
                        </a>
                    </li>
                    <li class="footer__social-link-item">
                        <a href="https://github.com/a-moksh" title="Link to Github Profile">
                        <img src="./images/github.svg" class="footer__social-image" alt="Github">
                        </a>
                    </li>
                    </ul>

                    <p>
                        &copy; 2021 -  Template designed & developed by <a href="https://rabineupane.com.np" class="link">Rabi Neupane</a>.
                    </p>
                </div>`,
    data() {
        return {
            msg: 'test'
        }
    }
})