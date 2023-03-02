<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> Home </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <Ion-Button @click="executeNotification">Criar Notificação</Ion-Button>
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

  setup() {
    const executeNotification = () => {
      console.log('test')
      createNotification("Título da notificação", "Corpo da notificação");
    };

    return{
      executeNotification
    }
  },
};
</script>
