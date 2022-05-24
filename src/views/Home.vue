<template>
  <div class="home">
    <FilterNav
      @filterChange="currentFilter = $event"
      :currentFilter="currentFilter"
    />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <Project
          @update="handleUpdate"
          @remove="handleDelete"
          :project="project"
        />
      </div>
    </div>
    <div v-else>
      <p>Данные загружаются ...</p>
    </div>
  </div>
</template>

<script>
import Project from "@/components/Project.vue"; // @ = Алиасы
import FilterNav from "@/components/FilterNav.vue";
export default {
  name: "Home",
  components: { Project, FilterNav },
  data() {
    return {
      projects: [],
      currentFilter: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => (this.projects = data));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id === id);
    },
    handleUpdate(id) {
      let project = this.projects.find((project) => project.id === id);
      project.complete = !project.complete;
    },
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === "completed") {
        return this.projects.filter((project) => project.complete);
      }
      if (this.currentFilter === "ongoing") {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects;
    },
  },
};
</script>
