Vue.component("contact-detail", {
  template: `<div class="row">
  <div class="container-fluid">
      <h1 class="section-header">{{ heading }}</h1>
      </div>
    <h2>Get in Touch</h2>
    <div class="contact__info">
      <p>
        Are you looking for a fast-performing and user-friendly website to
        represent your product or business? or looking for any kind of
        consultation? or want to ask questions? or have some advice for me
        or just want to say "Hi 👋" in any case feel free to Let me know. I
        will do my best to respond back. 😊 The quickest way to reach out to
        me is via an email.
      </p>
      <!-- Replace the email with yours -->
      <a href="mailto:rabineupane.com.np@gmail.com" class="btn">rabineupane.com.np@gmail.com</a>
    </div>
  </div>`,
  data() {
    return {
      contact: "",
      social: "",
      heading: "",
    };
  },
  created() {
    //表示後にやりたいことはここに書ける
    axios
      .get("./data/profile.json")
      .then((response) => {
        this.contact = response.data.contact;
        this.social = response.data.social;
        this.heading = response.data.main.headings.contact;
      })
      .catch((e) => {
        console.error(e);
      });
  },
});
