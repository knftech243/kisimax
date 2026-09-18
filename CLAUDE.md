# Kisimax — Plan de construction du système de gestion

## Vue d'ensemble

Kisimax vise à devenir un système de gestion simple pour les commerces et petites entreprises : ventes, stocks, clients, dettes, caisse, commandes, facturation et statistiques.

Site vitrine (marketing, WordPress/Elementor, existe déjà) : https://kisimax.cefirdc.org/
**L'outil de gestion lui-même n'existe pas encore — c'est l'objet de ce projet.**

### Contexte marché

Le site vitrine positionne Kisimax comme une offre d'agence pour commerçants à Kinshasa (RDC) :
- Douleur ciblée : la gestion par WhatsApp (commandes notées à la va-vite, clients relancés en retard ou jamais, confusion sur qui a payé quoi — Mobile Money, espèces, avance).
- Promesse : centraliser clients + commandes + paiements + tableau de bord au même endroit, sans compétence technique requise pour l'utilisateur final.
- Offres commerciales actuelles sur le site : "Le Moteur" (gestion boutique, 49$/mois) et "L'Accélérateur" (gestion + communication/identité visuelle, 79$/mois) — cela suggère un modèle multi-boutiques à terme, mais le MVP technique reste volontairement mono-boutique (voir Décisions).

## Règles de travail sur ce projet

- **Avant tout changement important** (stack, architecture, modèle de données, déploiement), un plan est proposé et validé avant d'agir.
- **Après chaque étape validée**, ce fichier `CLAUDE.md` est mis à jour : décisions prises (section Décisions d'architecture) et pièges rencontrés (section Journal des pièges).
- Le produit initial est extrêmement ciblé : gestion des ventes et du stock d'une boutique, avant d'étendre le périmètre.

## Décisions d'architecture

### 2026-09-18 — Stack technique

**Décision** : Node.js côté backend et frontend.
- Backend : NestJS + Prisma ORM + PostgreSQL.
- Frontend : React (Vite) + shadcn/ui + Tailwind CSS.

**Pourquoi** : stack unique en JavaScript/TypeScript (un seul langage backend/frontend), écosystème mature, 100% gratuit et open-source, léger à faire tourner sur un VPS 8 Go de RAM.

### 2026-09-18 — Périmètre du MVP : mono-boutique

**Décision** : la première version gère **une seule boutique par installation**, avec un périmètre strict : produits, stock, ventes, tableau de bord basique. Pas de multi-tenant (plusieurs boutiques clientes isolées sur une même plateforme) dans un premier temps, même si l'offre commerciale du site vitrine le suggère.

**Pourquoi** : livrer plus vite, valider l'outil avec un premier commerçant réel avant d'investir dans l'isolation multi-tenant (comptes, facturation des abonnements, sécurité inter-clients), qui est un chantier bien plus lourd.

### 2026-09-18 — Déploiement : Docker Compose sur Hostinger VPS KVM2

**Décision** : déploiement par conteneurs Docker Compose (app NestJS, PostgreSQL, Redis, Nginx en reverse proxy, Certbot pour le SSL). L'application vit sur un **sous-domaine dédié** (ex. `app.kisimax.cefirdc.org`), distinct du site vitrine WordPress existant, pour ne jamais interférer avec lui.

**Specs confirmées du VPS Hostinger KVM2** (source : hostinger.com, vérifié le 2026-09-18) :
- 2 vCPU (AMD EPYC)
- 8 Go RAM
- 100 Go stockage NVMe
- 8 To de bande passante/mois
- Sauvegardes hebdomadaires incluses, réseau 1 Gbps

**Pourquoi Docker Compose** : portable, reproductible en local, rollback simple, isolation propre entre services — largement dans les capacités du VPS (8 Go RAM est confortable pour cette stack).

### 2026-09-18 — Dépôt de code : GitHub

**Décision** : dépôt Git hébergé sur https://github.com/knftech243/kisimax.git

**Piège rencontré** : le connecteur MCP GitHub de cette session est en échec de connexion ("Incompatible auth server: does not support dynamic client registration") et `gh` (GitHub CLI) n'est pas installé sur la machine. Impossible de créer le dépôt ou de s'authentifier à GitHub depuis l'agent. L'utilisateur a donc créé le dépôt vide manuellement sur github.com, et le push doit être fait avec les identifiants Git déjà configurés sur la machine (ou validé explicitement à chaque fois).

## Stack technique détaillée (100% gratuite / open-source)

| Composant | Choix | Rôle |
|---|---|---|
| Langage | TypeScript | Backend + frontend |
| Backend | NestJS 10+ | API REST |
| ORM | Prisma | Accès PostgreSQL, migrations |
| Base de données | PostgreSQL 16 | Stockage principal |
| Cache / files d'attente | Redis | Cache, jobs asynchrones (ex. relances impayés) |
| Auth | Passport.js + JWT | Authentification utilisateurs boutique |
| Frontend | React + Vite | SPA |
| UI | shadcn/ui + Tailwind CSS | Composants, design system |
| Requêtes serveur (front) | React Query | Cache et synchronisation des données API |
| Gestionnaire de paquets | pnpm | Installation des dépendances |
| Conteneurisation | Docker + Docker Compose | Déploiement reproductible |
| Reverse proxy | Nginx | Routage + terminaison SSL |
| SSL | Certbot (Let's Encrypt) | Certificats gratuits, renouvelés automatiquement |
| CI (optionnel, plus tard) | GitHub Actions (tier gratuit) | Lint/tests automatiques |

Aucun composant payant requis pour faire tourner le MVP.

## Infrastructure cible

- Hébergement : Hostinger VPS KVM2 (voir specs ci-dessus).
- Le site vitrine WordPress reste tel quel sur son propre hébergement/vhost.
- L'application Kisimax tourne sur un sous-domaine dédié (à définir précisément à l'étape de déploiement, ex. `app.kisimax.cefirdc.org`), dans ses propres conteneurs Docker, derrière Nginx.
- Sauvegardes : s'appuyer d'abord sur les sauvegardes hebdomadaires incluses par Hostinger, puis évaluer un export PostgreSQL automatisé additionnel une fois en production.

## Roadmap par phases

Chaque phase ci-dessous fera l'objet d'un plan dédié, proposé et validé avant le début du développement.

1. **MVP mono-boutique** : produits & stock, ventes (encaissement simple), tableau de bord basique (CA du jour, meilleurs produits).
2. **Clients & commandes** : base clients, cycle de commande (nouvelle → à préparer → en livraison → livrée).
3. **Paiements, dettes/impayés, caisse** : suivi Mobile Money / espèces / avances, relance des impayés.
4. **Facturation & statistiques avancées** : génération de factures, rapports plus fins.
5. **Piste multi-tenant SaaS** : à envisager seulement après validation du mono-boutique par un premier client réel — correspondrait au modèle d'abonnement déjà affiché sur le site vitrine.

## Modèle de données prévisionnel (MVP, phase 1)

À affiner lors du plan de la phase 1, entités pressenties :
- `Utilisateur` (compte(s) de la boutique)
- `Produit` (nom, prix, catégorie)
- `MouvementStock` (entrée/sortie, quantité, produit, date)
- `Vente` (date, total, statut de paiement)
- `LigneVente` (produit, quantité, prix unitaire, vente associée)

## Journal des pièges rencontrés

- **2026-09-18** — Connecteur MCP GitHub indisponible dans cette session (échec d'authentification côté serveur MCP) et `gh` CLI absent de la machine → impossible de créer/gérer un dépôt GitHub par API depuis l'agent ; passage par création manuelle du dépôt sur github.com par l'utilisateur, puis Git en ligne de commande pour le reste.
- **2026-09-18** — `git` non trouvé au premier essai dans PowerShell alors qu'il est installé : le PATH de la session n'incluait pas le PATH système/utilisateur à jour. Rafraîchir `$env:PATH` depuis les variables d'environnement Machine/User résout le problème dans la session en cours.
- **2026-09-18** — `git push -u origin main` échoue avec `terminal prompts disabled` : aucun credential helper Git configuré sur la machine, donc pas d'authentification GitHub stockée, et le terminal non-interactif de l'agent ne peut pas gérer de prompt de login. **Action requise côté utilisateur** : lancer `git push -u origin main` une première fois depuis un terminal interactif normal (hors agent) pour s'authentifier (Git Credential Manager ou Personal Access Token) ; les pushs suivants passeront ensuite sans prompt.

## Prochaine étape immédiate

- Initialiser le dépôt Git local (`git init`, remote `origin` vers https://github.com/knftech243/kisimax.git), structure de dossiers minimale (`apps/api`, `apps/web`, `infra/`), `.gitignore`, premier commit.
- Ensuite : proposer un plan détaillé pour la **Phase 1 (MVP mono-boutique)** avant d'écrire le moindre code applicatif.
