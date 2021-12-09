<template>
  <section class="informaion-container">
    <form @submit="submitInformation">
      <p>שם מלא</p>
      <input v-model="userInformation.name" type="text" placeholder="שם" />
      <p>אימייל</p>
      <input v-model="userInformation.mail" type="text" placeholder="מייל" />
      <p>טלפון</p>
      <input v-model="userInformation.phone" type="text" placeholder="טלפון" />
      <button
      type="submit"
      >שלח</button>
    </form>
  </section>
</template>

<script>
import itemService from "./../services/item.service";

export default {
  data() {
    return {
      userInformation: {
        mail: "",
        phone: "",
        name: "",
      },
    };
  },
  methods: {
    submitInformation(e) {
      e.preventDefault();
      console.log(this.userInformation);
      itemService.postDetails(this.userInformation);
    },
    toggleCategory() {
      const categorySelector = document.querySelector(".item-categories");
      categorySelector.classList.toggle("toggle-menu");
    },
  },
};
</script>
