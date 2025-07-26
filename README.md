# 📘 Goldbach Orbital Extended — Version 10¹⁸+

Ce projet explore une équation prédictive puissante pour estimer l'écart δ(E) entre les deux nombres premiers p et q tels que E = p + q (Conjecture de Goldbach), même pour des **nombres pairs très grands** (jusqu’à 10²⁰ voire plus).

## 🔢 Équation utilisée

```math
δ(E) = √E · loglog(E) / log(E)
```

Cette formule permet de prédire la distance entre E/2 et le plus proche des deux nombres premiers formant une paire (p, q). Une **correction locale** basée sur la densité des premiers affine la prédiction.

## 🧠 Fonctionnement du site

- L'utilisateur entre un **nombre pair E ≥ 4** (testé jusqu’à 10¹⁸).
- Le programme calcule δ(E) et δ corrigé.
- Il recherche autour de E/2 des candidats premiers p tels que q = E − p soit aussi premier.
- Une ou plusieurs paires (p, q) sont affichées à l’utilisateur.

## 📁 Fichiers du projet

- `index.html` : page principale (interface simple et efficace)
- `script.js` : moteur de calcul, optimisé pour les grands nombres (BigInt)
- `style.css` : mise en forme sobre
- `README.md` : ce fichier

## 🌍 Site en ligne

> Ce site est une **extension** du site précédent fonctionnant jusqu’à 10¹⁰ :  
> [Goldbach Orbital Predictor (version ≤ 10¹⁰)](https://bouchaib542.github.io/Goldbach-Orbital-Predictor/)

Ce nouveau site vise les **grands nombres pairs** jusqu’à 10¹⁸–10²⁰ (et plus, selon le navigateur). Il **n’affiche qu’une seule paire (p, q)** valide proche de la prédiction.

## 👤 Auteur

**Bahbouhi Bouchaib**  
Chercheur indépendant en mathématiques basé à Nantes, France  
Tous droits réservés – Méthode originale et gratuite.

## 📜 Licence

Projet en libre accès. Vous pouvez le cloner, le modifier, le partager — tant que la source est citée.

> “Toute paire de Goldbach mérite son δ prédictif.”
