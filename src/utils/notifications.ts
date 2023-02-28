import { Plugins } from '@capacitor/core';

const { LocalNotifications } = Plugins;

export const createNotification = async (title: string, body: string) => {
  // Solicita permissão para enviar notificações
  await LocalNotifications.requestPermission();

  // Cria a notificação local
  await LocalNotifications.schedule({
    notifications: [
      {
        title,
        body,
        id: 1,
        schedule: { at: new Date(Date.now() + 1000 * 5) },
        sound: null,
        attachments: null,
        actionTypeId: "",
        extra: null
      }
    ]
  });
};