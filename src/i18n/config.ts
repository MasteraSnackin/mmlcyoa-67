import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Copy Chat Logs': 'Copy Chat Logs',
      'Restart Chat': 'Restart Chat',
      'Export Chat': 'Export Chat',
      'Dark Mode': 'Dark Mode',
      'Language': 'Language',
      'Chat Restarted': 'Chat Restarted',
      'Chat has been reset': 'The chat has been reset to the beginning.',
      'Chat logs copied': 'Chat logs copied!',
      'Chat history copied': 'The chat history has been copied to your clipboard.',
      'Failed to copy': 'Failed to copy',
      'Could not copy logs': 'Could not copy chat logs to clipboard.',
      'Chat exported': 'Chat exported!',
      'Chat history downloaded': 'The chat history has been downloaded as a text file.',
      'Game Master': 'Game Master',
      'Player': 'Player',
      'Interactive Adventure Quest': 'Interactive Adventure Quest',
      'Quick Choices': 'Quick Choices',
      'Custom Response': 'Custom Response',
      'Voice Input': 'Voice Input',
      'Choose Action': 'Choose Action',
      'Start Recording': 'Start Recording',
      'Stop Recording': 'Stop Recording',
      'Type a message...': 'Type a message...'
    },
  },
  es: {
    translation: {
      'Copy Chat Logs': 'Copiar registros',
      'Restart Chat': 'Reiniciar chat',
      'Export Chat': 'Exportar chat',
      'Dark Mode': 'Modo oscuro',
      'Language': 'Idioma',
      'Chat Restarted': 'Chat Reiniciado',
      'Chat has been reset': 'El chat se ha reiniciado al principio.',
      'Chat logs copied': '¡Registros copiados!',
      'Chat history copied': 'El historial del chat se ha copiado al portapapeles.',
      'Failed to copy': 'Error al copiar',
      'Could not copy logs': 'No se pudieron copiar los registros del chat.',
      'Chat exported': '¡Chat exportado!',
      'Chat history downloaded': 'El historial del chat se ha descargado como archivo de texto.',
      'Game Master': 'Maestro del Juego',
      'Player': 'Jugador',
      'Interactive Adventure Quest': 'Aventura Interactiva',
      'Quick Choices': 'Opciones Rápidas',
      'Custom Response': 'Respuesta Personalizada',
      'Voice Input': 'Entrada de Voz',
      'Choose Action': 'Elegir Acción',
      'Start Recording': 'Comenzar Grabación',
      'Stop Recording': 'Detener Grabación',
      'Type a message...': 'Escribe un mensaje...'
    },
  },
  fr: {
    translation: {
      'Copy Chat Logs': 'Copier les journaux',
      'Restart Chat': 'Redémarrer le chat',
      'Export Chat': 'Exporter le chat',
      'Dark Mode': 'Mode sombre',
      'Language': 'Langue',
      'Chat Restarted': 'Chat Redémarré',
      'Chat has been reset': 'Le chat a été réinitialisé au début.',
      'Chat logs copied': 'Journaux copiés !',
      'Chat history copied': "L'historique du chat a été copié dans le presse-papiers.",
      'Failed to copy': 'Échec de la copie',
      'Could not copy logs': 'Impossible de copier les journaux du chat.',
      'Chat exported': 'Chat exporté !',
      'Chat history downloaded': "L'historique du chat a été téléchargé sous forme de fichier texte.",
      'Game Master': 'Maître du Jeu',
      'Player': 'Joueur',
      'Interactive Adventure Quest': 'Quête Aventure Interactive',
      'Quick Choices': 'Choix Rapides',
      'Custom Response': 'Réponse Personnalisée',
      'Voice Input': 'Entrée Vocale',
      'Choose Action': 'Choisir une Action',
      'Start Recording': "Commencer l'Enregistrement",
      'Stop Recording': "Arrêter l'Enregistrement",
      'Type a message...': 'Écrivez un message...'
    },
  },
  de: {
    translation: {
      'Copy Chat Logs': 'Chat-Protokolle kopieren',
      'Restart Chat': 'Chat neustarten',
      'Export Chat': 'Chat exportieren',
      'Dark Mode': 'Dunkelmodus',
      'Language': 'Sprache',
      'Chat Restarted': 'Chat Neugestartet',
      'Chat has been reset': 'Der Chat wurde auf den Anfang zurückgesetzt.',
      'Chat logs copied': 'Chat-Protokolle kopiert!',
      'Chat history copied': 'Der Chat-Verlauf wurde in die Zwischenablage kopiert.',
      'Failed to copy': 'Kopieren fehlgeschlagen',
      'Could not copy logs': 'Chat-Protokolle konnten nicht kopiert werden.',
      'Chat exported': 'Chat exportiert!',
      'Chat history downloaded': 'Der Chat-Verlauf wurde als Textdatei heruntergeladen.',
      'Game Master': 'Spielleiter',
      'Player': 'Spieler',
      'Interactive Adventure Quest': 'Interaktive Abenteuerquest',
      'Quick Choices': 'Schnellauswahl',
      'Custom Response': 'Benutzerdefinierte Antwort',
      'Voice Input': 'Spracheingabe',
      'Choose Action': 'Aktion wählen',
      'Start Recording': 'Aufnahme starten',
      'Stop Recording': 'Aufnahme stoppen',
      'Type a message...': 'Nachricht eingeben...'
    },
  },
  it: {
    translation: {
      'Copy Chat Logs': 'Copia log chat',
      'Restart Chat': 'Riavvia chat',
      'Export Chat': 'Esporta chat',
      'Dark Mode': 'Modalità scura',
      'Language': 'Lingua',
      'Chat Restarted': 'Chat Riavviata',
      'Chat has been reset': 'La chat è stata reimpostata all\'inizio.',
      'Chat logs copied': 'Log chat copiati!',
      'Chat history copied': 'La cronologia della chat è stata copiata negli appunti.',
      'Failed to copy': 'Copia fallita',
      'Could not copy logs': 'Impossibile copiare i log della chat.',
      'Chat exported': 'Chat esportata!',
      'Chat history downloaded': 'La cronologia della chat è stata scaricata come file di testo.',
      'Game Master': 'Game Master',
      'Player': 'Giocatore',
      'Interactive Adventure Quest': 'Avventura Interattiva',
      'Quick Choices': 'Scelte Rapide',
      'Custom Response': 'Risposta Personalizzata',
      'Voice Input': 'Input Vocale',
      'Choose Action': 'Scegli Azione',
      'Start Recording': 'Avvia Registrazione',
      'Stop Recording': 'Ferma Registrazione',
      'Type a message...': 'Scrivi un messaggio...'
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;