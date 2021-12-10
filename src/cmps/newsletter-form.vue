<template>
  <section class="informaion-container">
    <form @submit="submitInformation">
      <p>הרשמה לניוזלטר</p>
      <input v-model="userInformation.name" type="text" placeholder="שם מלא*" />
      <input
        v-model="userInformation.mail"
        type="text"
        placeholder="דואר אלקטרוני*"
      />
      <input v-model="userInformation.phone" type="text" placeholder="טלפון*" />
      <button type="submit">שלח</button>
    </form>
  </section>
</template>

<script>
import itemService from "../services/item.service";

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
      const isMailValid = this.validateMail(this.userInformation.mail);
      const isPhoneValid = this.validatePhone(this.userInformation.phone);
      const isNameValid = this.userInformation.name !== "" ? true : false;
      if (!isMailValid || !isPhoneValid || !isNameValid) return;
      itemService.postDetails(this.userInformation);
      this.userInformation = {
        mail: "",
        phone: "",
        name: "",
      };
      alert("הרשמה התקבלה!");
    },
    validatePhone(phone) {
    if ((/^\d{3,11}$/).test(phone) ){
        return true;
      }
      alert("הכנס מספרים בלבד.");
      return false;
    },
    validateMail(mail) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }
      alert("כתובת מייל לא תקנית.");
      return false;
    },
    toggleCategory() {
      const categorySelector = document.querySelector(".item-categories");
      categorySelector.classList.toggle("toggle-menu");
    },
  },
};
</script>
