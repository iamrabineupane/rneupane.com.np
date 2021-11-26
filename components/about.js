Vue.component("my-detail", {
  template: `<div class="row">
    <h2>{{title}}</h2>
    <h4 class="tagline" :v-if="about.tagline !==''">{{about.tagline}}</h4>
    <div class="about__content">
      <div class="about__text">
     
      {{ aboutData }}
        <!-- Replace the below paragraph with info about yourself -->
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos id
          nostrum illo harum blanditiis, tenetur eum suscipit cupiditate
          in vel, ex quam quidem quos mollitia labore aut sunt eius
          ratione molestiae fuga veniam facere similique voluptate.
        </p>
        <!-- Provide a link to your resume -->
        <a href="#" class="btn">My Resume</a>
      </div>
    
      <div class="about__photo-container">
        <!-- Add a nice photo of yourself -->
        <img class="about__photo" src="./images/Rabi.jpg" alt="" />
      </div>
    </div>
    </div>`,

  data() {
    return {
      title: "About Me",
      aboutData: [],
      about: "",
      myName: "",
      facts: "",
      heading: "",
      titles: [],
    };
  },
  created() {
    //表示後にやりたいことはここに書ける
    axios
      .get("./data/profile.json")
      .then((response) => {
        this.aboutData = response.data.about;
        this.about = response.data.about;
        this.myName = response.data.main.name.first;
        this.facts = response.data.about.facts;
        this.heading = response.data.main.headings.about;
        this.titles = response.data.main.titles;
      })
      .catch((e) => {
        console.error(e);
      });
  },
 
});
