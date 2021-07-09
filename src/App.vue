<template>
  <Nav />
  <main>
    <About />
    <Experiences />
    <Education />
    <Certifications />
    <Services />
    <Skills />
    <Contact />
  </main>
  <nav id="controls">
    <PageControl />
    <ColorControl />
  </nav>
</template>

<script>
import About from "./components/About.vue";
import Certifications from "./components/Certifications.vue";
import Education from "./components/Education.vue";
import Experiences from "./components/Experiences.vue";
import Nav from "./components/Nav.vue";
import Services from "./components/Services.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";
import PageControl from "./components/PageControl.vue";
import ColorControl from "./components/ColorControl.vue";
import "./scss/main.scss";
import "./js/main.js";

export default {
  name: "App",
  components: {
    About,
    Certifications,
    Education,
    Experiences,
    Nav,
    Services,
    Skills,
    Contact,
    PageControl,
    ColorControl,
  },
  mounted() {
    const container = document.querySelector("main");
    const pages = container.querySelectorAll("main section");
    const prevPageButton = document.querySelector("#prev-page");
    const nextPageButton = document.querySelector("#next-page");

    let firstPage = 0;
    let lastPage = pages.length - 1;
    let currentPage = firstPage;
    pages[currentPage].classList.add("active");

    function removeActive() {
      container.querySelector(".active").classList.remove("active");
    }

    function activePage() {
      pages[currentPage].classList.add("active");
    }

    prevPageButton.addEventListener("click", () => {
      removeActive();
      if (currentPage > firstPage) {
        currentPage--;
      } else {
        currentPage = lastPage;
      }
      activePage();
    });

    nextPageButton.addEventListener("click", () => {
      removeActive();
      if (currentPage < lastPage) {
        currentPage++;
      } else {
        currentPage = firstPage;
      }
      activePage();
    });
  },
};
</script>
