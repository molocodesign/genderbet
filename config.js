// ── KONFIGURACJA ──────────────────────────────────────────────
// UWAGA: sprawdź databaseURL w konsoli Firebase — na zrzucie był ucięty.
// Powinien wyglądać dokładnie tak jak niżej.

export const firebaseConfig = {
  apiKey: "AIzaSyBIrxW5ez4JbsvlSeHKUCbMigHTuj_bvaY",
  authDomain: "genderbet-f5a38.firebaseapp.com",
  databaseURL: "https://genderbet-f5a38-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "genderbet-f5a38",
  storageBucket: "genderbet-f5a38.firebasestorage.app",
  messagingSenderId: "401209723391",
  appId: "1:401209723391:web:c48ef1ca689ab8dacd3fca"
};

// Lista gości — dopisuj imiona w tej tablicy
export const GOSCIE = ["Michał", "Gosia"];

// Podpowiadane kwoty i minimum
export const KWOTY = [20, 50, 100];
export const MIN_KWOTA = 10;

// Link do płatności
export const REVOLUT = "https://revolut.me/michaelsaint";

// Nazwy stron
export const STRONY = {
  p: { label: "Dziewczynka", icon: "♀" },
  b: { label: "Chłopiec", icon: "♂" }
};

export const fmt = n => Math.round(n).toLocaleString("pl-PL");
