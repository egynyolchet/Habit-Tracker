# Habit Tracker

Statikus, böngészőben futó szokáskövető alkalmazás. Mivel sima `HTML`, `CSS` és `JavaScript`, könnyen publikálható GitHub Pages-re.

## Megosztás barátokkal GitHub Pages-en

1. Hozz létre egy új GitHub repository-t.
2. Töltsd fel ebbe a mappába a projekt fájljait.
3. A repository alapértelmezett branch-e legyen `main`.
4. A GitHubon nyisd meg:
   `Settings` -> `Pages`
5. A `Build and deployment` résznél válaszd:
   `Source: GitHub Actions`
6. Pushold a kódot a `main` branch-re.
7. A workflow lefut, és a GitHub Pages ad egy publikus linket, amit elküldhetsz a barátaidnak.

## Fontos

Az app jelenleg `localStorage`-t használ, ezért mindenki a saját böngészőjében külön adatokat lát és külön nevet ment. Vagyis megosztható ugyanazzal a linkkel, de nem közös adatbázist használ.
