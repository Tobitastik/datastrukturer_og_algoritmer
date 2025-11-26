https://en.wikipedia.org/wiki/Sorting_algorithm#Exchange_sort

Exchange sort er en meget simpel men ret uoptimal sorteringsalgoritme.
Algoritmen gennemgår hvert element i listen og sammenligner det med alle de efterfølgende elementer. 
Hvis to elementer står i forkert rækkefølge byttes de. Herefter forsætter algoritmen med det nye element og sammenligner.

Hvis man for eksempel skal sortere listen fra lav til høj 
4,7,2,9
Starter man med at sammenligne 4 og 7, de skal ikke byttes.
Derefter sammenlignes 4 og 2, som skal byttes. 
Listen bliver nu 2,7,4,9 og man fortsætter så med at sammenligne 2 med 9.

Da hvert element skal sammenlignes med alle efterfølgende elementer, ender algoritmen med en tidskompleksitet på O(n²).