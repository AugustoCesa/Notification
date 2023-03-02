import { Plugins } from "@capacitor/core";
import { onMounted } from "vue";

const { LocalNotifications } = Plugins;

export const createNotification = async (title: string, body: string) => {
  await LocalNotifications.requestPermission();

  const notification =  LocalNotifications.schedule({
    notifications: [
      {
        title,
        body,
        id: 1,
        schedule: { at: new Date(Date.now() + 1000 * 5) },
        sound: null,
        attachments: null,
        actionTypeId: "",
        extra: null,
      },

    ],
  });
  onMounted(notification)
};
