<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> Home </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <Ion-Button @click="createNotification">Criar Notificação</Ion-Button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { createNotification } from "@/utils/notifications";

export default {
  name: "Tab2Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
  },

  methods: {
    createNotification() {
      createNotification("Título da notificação", "Corpo da notificação");
    },
  },
};
</script>
