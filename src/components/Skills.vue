<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="title">{{ skills.title }}</h2>

      <div class="skills">
        {% for skill in skills.skills %}
        <abbr class="skill" title="{{ skill.description }}">{{ skill.name }}</abbr>
        {% endfor %}
      </div>
    </div>
  </section>
</template>