*Kalkulator* jest prostą aplikacją z interfejsem graficznym do wykonywania podstawowych obliczeń.

Program można uruchomić poprzez link: 
lub poprzez pobranie repozytorium lokalnie na swój komputer i uruchomienie pliku index.html

Użyte technologie:
- HTML
- CSS
- Javascript

Funkcje kalkulatora:
- dodawanie (+)
- odejmowanie (-)
- mnożenie (×)
- dzielenie (÷)
- usuwanie zawartości (C)
- usuwanie (DEL)
- wynik (=)
- liczby ujemne (+/-)
- historia ostatnich działań (last operations)
- cofanie ostatniej operacji (undo)
- czyszczenie historii kalkulatora (clear)

Zapezpieczenia:
- Program blokuje dodawanie więcej niż jednego znaku '.'.
- Kalkulator zabezpiecza przed dzieleniem przez '0': Przy próbie wykonania niepoprawnego działania pojawia się alert z informacją, a ekran zostaje wyczyszczony. 
- Program usuwa zbędne zera dodane przed liczbą.

Historia:
- Historia ostatnich działań jest zapisywana w panelu po prawej stronie.
- Przycisk czyszczenia histori: za pomocą przycisku "Wyczyść" usuwamy cały zapis historii.
- W przypadku większej ilości rekordów pojawia się pasek przewijania.
- Błędne rekordy związane z dzieleniem przez '0' nie zapisują się w historii.

Modernizacja kodu w przyszłości:
- umożliwienie użytkownikowi swobodnej zmiany znaku bez konieczności używania przycisku usuwania.
- w przypadku wykonania błędnej operacji np. dzielenia przez '0' użytkownik będzie mógł cofnąć wyświetlany wynik do momentu przed wystąpieniem błędu.
- funkcja cofania więcej niż jednej operacji.
- dodanie więcej funkcji wykonywanych operacji takich jak np. potęgowanie, czy pierwiastkowanie.
- wystylizowanie lepszego graficznie alertu wskazującego na wykonanie błędnej operacji.
- dodanie funkcji zaokrąglania liczb niecałkowitych do dwóch miejsc po przecinku.
- wykluczenie usuwania '0' przed liczbą niecałkowitą np. gdy użytkownik wybiera liczbę '0.1'.