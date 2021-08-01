# **Polskie miejscowości**
![CC License](https://i.imgur.com/TDSGCl2.png "CC License")

Miejscowości pochodzą z PRNG (Państwowego Rejestru Nazw Geograficznych), zbiór zawiera wyłącznie miasta oraz wsie Polski, ogółem 43989 rekordów. Zbiór w formie pliku JSON. Aktualność na dzień 11.05.2021.

## Instalacja
``npm install --save polskie-miejscowosci``

## Użycie
**ES6**

``import data from 'polskie-miejscowosci'``

## Opis
Zbiór jest w formie pliku JSON zawierającego tablicę obiektów zawierających następujące informacje:
- Nazwa miejscowości,
- Rodzaj miejscowości (wieś/miasto),
- Położenie na mapie - długość geograficzna (forma dziesiętna),
- Położenie na mapie - szerokość geograficzna (forma dziesiętna),
- Województwo,
- Powiat,
- Gmina

```json
 [{
    	"Id":"16121",
    	"Name":"Kraków",
    	"Type":"city",
    	"Province":"małopolskie",
    	"District":"Kraków",
    	"Commune":"Kraków-gmina miejska",
    	"Latitude":50.0617,
		"Longitude":19.9375
    },
	...
]
```

## Licencja
Repozytorium jest objęte licencją [Creative Commons](https://creativecommons.org/licenses/by/3.0/ "Creative Commons").
