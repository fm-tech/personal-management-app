<template>
  <div class="container">
    <aside class="menu">
      <div class="menuSection"
        v-for="menu in menuList"
        v-bind:key="menu.id"
      >
        <p class="menu-label">{{menu.label}}</p>
        <ul class="menu-list"
         v-for="projects in menu.nestedContent"
         v-bind:key="projects.id"
        >
          <li>
              <a href="#">{{projects.label}}</a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: 1,
          label: "Projects",
          nestedContent: [
            {
              id: 1,
              label: "Dog Stuff",
              link: "/task?sortBy=DogStuff"
            },
            {
              id: 2,
              label: "Cat Stuff",
              link: "/task?sortBy=CatStuff"
            }
          ]
        },
        {
         id: 2,
         label: "Categories",
         nestedContent: [
             {
                id: 3,
                label: "Dog"
             },
             {
                id: 4,
                label: "Lizard"
             }
         ]
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>

</style>

