const one = {
  template: `
    <div id="one">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Name">
        </div>
      </div>
      <div class="field">
        <label class="label">Comment</label>
        <div class="control">
          <textarea class="textarea" placeholder="Comment"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button @click="submit" class="button is-primary">Submit</button>
        </div>
      </div>
    </div>
  `,
  
}
new Vue({
  el: "#one",
  methods: {
      submit(){
          alert(123);
      }
  },
});