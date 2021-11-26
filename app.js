var titles = ["Backend Engineer", "FrontEnd Engineer", "PHP Developer","Vue.Js Developer","Jquery"];

new Vue({

  el: "#app",
  data: {
    msg: "Welcome",
    myData: []
  },
  methods: {
    sayHello() {
      this.msg = "Hello!"
    }
  },
  created() {
    //表示後にやりたいことはここに書ける
    axios
      .get('./data/profile.json')
      .then(response => {
        this.myData = response.data;
      })
      .catch((e) => {
        console.error(e)
      })
  },
  mounted: function () {
    new Typewriter("#typewriter", {
      strings: titles,
      autoStart: true,
      loop: true,
      deleteSpeed: 5,
    });
  },
})