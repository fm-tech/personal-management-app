<template>
  <div class="container">
    <!-- Grid -->
    <!-- Removed Grid -->
     
        <!-- Card -->
        <div class="card"
          v-for="todo in toDoList"
          v-bind:key="todo.id"  
        >
          <header
          @click="toggleHide()"
          class="card-header ">
            <p 
            class="card-header-title"

            >{{todo.title}}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content"
              v-bind:class="{'is-hidden': isActive}"
          >
            <div class="content">
                {{todo.content}}
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Completed</a>
          </footer>
        </div>
        <!-- Card End -->

        <!--Add To-do -->
        <div class="box">
  <article class="media">
    <div class="media-left">
      <input class="button" type="submit" value="Add">
    </div>
    <div class="media-content">
      <input class="input" type="text" placeholder="Text input">
    </div>
  </article>
</div>
        
  </div>
</template>

<script>
export default {
  data () {
      return {
          isActive: false,
          toDoList: [
              { 
                id: 1,
                title: "Bathe Sasha",
                content: "Likes Honey Oatmeal Shampoo"            
              },
              {
                id: 2,
                title: "Bathe Nala",  
                content: "Needs to teeth cleaning"   
              },
              {
                id: 3,
                title: "Clip Boomer's nails",
                content: "He is very skiddish be careful with this baby"
              }
          ]
      }
  },
  methods: {
    toggleHide() {
      this.isActive = !this.isActive
    }
  }
};
</script>

<style lang="scss" scoped>
    .card {
        margin: 1.5em;
    }

</style>