<template>
    <section class="container mx-auto py-10 px-6">
      <h1 class="text-3xl font-bold text-center mb-8">Contactez-Nous</h1>
      <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label for="name" class="block text-gray-700 font-semibold mb-2">Nom</label>
          <input
            id="name"
            v-model="form.to_name"
            type="text"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-400"
            required
          />
        </div>
        <div>
          <label for="email" class="block text-gray-700 font-semibold mb-2">E-mail</label>
          <input
            id="email"
            v-model="form.from_name"
            type="email"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-400"
            required
          />
        </div>
        <div>
          <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-400"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  </template>
  <script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const form = ref({
  to_name: "",
  from_name: "",
  message: "",
});

function handleSubmit() {
  // not secure but nothing to do with it excepts spam my mail. which you can do using something else anyway.
  const serviceID = "service_olhz4dg";
  const templateID = "template_t24ddoj";
  const userID = "qilxyyXzs0_vBzMhp";

  emailjs
    .send(serviceID, templateID, form.value, userID)
    .then(() => {
      alert(`Merci, ${form.value.to_name}! Votre message a été envoyé.`);
      form.value = { to_name: "", from_name: "", message: "" }; // Reset form
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi du message :", error);
      alert("Une erreur est survenue. Réessayez plus tard.");
    });
}
</script>
