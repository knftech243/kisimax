import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Cookie,
  FileCheck2,
  HelpCircle,
  LifeBuoy,
  LockKeyhole,
  Mail,
  MessageCircle,
  RefreshCcw,
} from 'lucide-react';
import Logo from './Logo';
import Footer from './Footer';

const UPDATED_AT = '19 septembre 2026';
const WHATSAPP_URL = 'https://wa.me/243893187299?text=Bonjour%20Kisimax,%20je%20souhaite%20obtenir%20plus%20d%27informations.';

const pages = {
  'a-propos': {
    icon: Building2,
    eyebrow: 'Qui sommes-nous ?',
    title: 'À propos de Kisimax',
    description: 'Une solution conçue pour aider les commerçants à reprendre le contrôle de leurs clients, commandes et ventes.',
    intro: "Kisimax est une initiative portée par KNFtech et dirigée par KISIMA NUMBI Franck. Notre objectif est simple : rendre les outils de gestion accessibles aux boutiques qui grandissent grâce à WhatsApp, sans leur imposer une technologie compliquée.",
    sections: [
      {
        id: 'mission',
        title: 'Notre mission',
        paragraphs: [
          "Transformer le désordre quotidien des messages, cahiers et paiements dispersés en un système clair que le commerçant peut utiliser depuis son téléphone.",
          "Kisimax réunit les informations essentielles au même endroit afin de limiter les oublis, accélérer le suivi et donner une vision plus fiable de l'activité.",
        ],
      },
      {
        id: 'probleme',
        title: 'Le problème que nous résolvons',
        bullets: [
          'Des commandes importantes disparaissent dans les conversations WhatsApp.',
          'Les paiements, avances et frais de livraison sont difficiles à suivre.',
          'Les clients intéressés ne sont pas relancés au bon moment.',
          "Le chiffre d'affaires réel reste flou faute d'un tableau de bord simple.",
        ],
      },
      {
        id: 'approche',
        title: 'Notre approche',
        paragraphs: [
          "Nous commençons par comprendre le fonctionnement réel de la boutique. Nous configurons ensuite un système adapté, accompagnons la prise en main et privilégions des écrans simples plutôt que des fonctions inutiles.",
        ],
        bullets: ['Simplicité avant tout', 'Accompagnement humain', 'Outils adaptés au contexte local', 'Amélioration continue à partir des usages réels'],
      },
      {
        id: 'equipe',
        title: 'Direction et contact',
        paragraphs: [
          'Responsable de publication : KISIMA NUMBI Franck, CEO de KNFtech.',
          'Kisimax est joignable à contact@kisimax.tech et au +243 89 318 7299.',
        ],
      },
    ],
  },
  contact: {
    icon: LifeBuoy,
    eyebrow: 'Nous contacter',
    title: 'Contact et assistance',
    description: "Une question sur Kisimax, une demande de démonstration ou besoin d'aide ? Notre équipe vous répond directement.",
    intro: "Choisissez le canal qui vous convient. Pour nous aider à répondre rapidement, indiquez votre nom, votre boutique, l'offre concernée et une courte description de votre demande.",
    contactCards: true,
    sections: [
      {
        id: 'commercial',
        title: 'Demandes commerciales',
        paragraphs: [
          "Pour découvrir Kisimax, obtenir un devis ou choisir entre Le Moteur et L'Accélérateur, contactez-nous par WhatsApp ou par e-mail. L'envoi d'un message ne vaut pas commande : les engagements définitifs figurent dans la proposition acceptée.",
        ],
      },
      {
        id: 'assistance',
        title: 'Assistance client',
        bullets: [
          "Décrivez le problème et l'action que vous tentiez d'effectuer.",
          "Ajoutez une capture d'écran si elle ne contient pas de données sensibles inutiles.",
          "Ne communiquez jamais votre mot de passe, votre code PIN ou un code de validation.",
          "Objectif de première réponse : dans un délai maximal de 72 heures, sauf urgence de sécurité traitée prioritairement.",
        ],
      },
      {
        id: 'reclamation',
        title: 'Réclamation',
        paragraphs: [
          "Une réclamation doit préciser la prestation concernée, la date, les faits et la solution souhaitée. Envoyez-la à contact@kisimax.tech avec l'objet « Réclamation ». Un accusé de réception ou une première réponse sera transmis dans les meilleurs délais.",
        ],
      },
      {
        id: 'donnees',
        title: 'Demandes concernant vos données',
        paragraphs: [
          "Pour exercer un droit d'accès, de rectification, d'opposition ou d'effacement, écrivez à contact@kisimax.tech avec l'objet « Données personnelles ». Une vérification raisonnable de votre identité peut être demandée.",
        ],
      },
    ],
  },
  faq: {
    icon: HelpCircle,
    eyebrow: 'Questions fréquentes',
    title: 'Tout comprendre avant de commencer',
    description: 'Les réponses essentielles sur les offres, la configuration, les données et le fonctionnement de Kisimax.',
    sections: [
      { id: 'pour-qui', title: 'À qui Kisimax est-il destiné ?', paragraphs: ["Kisimax s'adresse principalement aux boutiques et commerçants professionnels qui reçoivent leurs commandes par WhatsApp et souhaitent mieux organiser leurs clients, ventes, paiements et livraisons."] },
      { id: 'offres', title: 'Quelle différence entre les deux offres ?', paragraphs: ["Le Moteur, à partir de 19 $ par mois, couvre le système de gestion de la boutique. L'Accélérateur, à partir de 49 $ par mois, ajoute un accompagnement en communication et des ressources visuelles. Le périmètre définitif figure dans le devis."] },
      { id: 'installation', title: "Combien de temps faut-il pour commencer ?", paragraphs: ["Le délai dépend de la taille du catalogue, des données à reprendre et des personnalisations demandées. Une estimation est communiquée avant validation de la commande."] },
      { id: 'technique', title: 'Faut-il être fort en informatique ?', paragraphs: ["Non. Kisimax est conçu pour être utilisé sans code ni formules complexes. Une formation de prise en main est prévue selon l'offre acceptée."] },
      { id: 'donnees', title: 'Peut-on reprendre mes données existantes ?', paragraphs: ["Une reprise peut être étudiée à partir de fichiers ou listes exploitables. Sa faisabilité, son périmètre et son coût éventuel sont confirmés après analyse."] },
      { id: 'paiement', title: 'Comment fonctionne le paiement ?', paragraphs: ["Les moyens de paiement, la devise, les taxes éventuelles, la date d'échéance et le renouvellement sont indiqués dans le devis, le bon de commande ou le contrat transmis au client."] },
      { id: 'resiliation', title: 'Puis-je résilier mon abonnement ?', paragraphs: ["Oui, selon le préavis et la date d'effet précisés dans l'offre acceptée. Une demande peut être envoyée à contact@kisimax.tech. Consultez également la politique de remboursement et de résiliation."] },
      { id: 'securite', title: 'Comment mes données sont-elles protégées ?', paragraphs: ["Kisimax applique des principes de limitation des accès, minimisation des données et protection de l'infrastructure. Les mesures correspondant au service effectivement souscrit sont précisées dans la documentation contractuelle."] },
      { id: 'support', title: "Comment obtenir de l'aide ?", paragraphs: ["Écrivez sur WhatsApp au +243 89 318 7299 ou à contact@kisimax.tech. Ne transmettez jamais de mot de passe ou de code PIN."] },
    ],
  },
  securite: {
    icon: LockKeyhole,
    eyebrow: 'Confiance numérique',
    title: 'Sécurité chez Kisimax',
    description: "Nos principes pour protéger le site, les accès et les données confiées dans le cadre des services Kisimax.",
    intro: "Cette page présente les engagements généraux de sécurité. Les garanties techniques exactes, niveaux de service et responsabilités applicables à chaque client sont précisés dans son contrat et dans la documentation du service déployé.",
    sections: [
      { id: 'perimetre', title: 'Périmètre actuel', paragraphs: ["Le présent site vitrine ne contient pas de formulaire et n'encaisse aucun paiement directement. Les prises de contact sont redirigées vers WhatsApp ou l'adresse e-mail de Kisimax. Le site est hébergé par Hostinger."] },
      { id: 'principes', title: 'Principes de protection', bullets: ['Limiter les données collectées à ce qui est utile.', 'Accorder les accès selon les responsabilités et les retirer lorsqu’ils ne sont plus nécessaires.', 'Maintenir les composants et dépendances à jour selon le niveau de risque.', 'Protéger les échanges et les accès administratifs avec des mécanismes adaptés.', 'Conserver des sauvegardes lorsque le service contractuel le prévoit et vérifier leur restauration.'] },
      { id: 'responsabilites', title: 'Responsabilités partagées', paragraphs: ["Le client doit protéger ses appareils, mots de passe et accès, limiter les comptes autorisés et informer Kisimax rapidement en cas de suspicion. Kisimax ne demandera jamais un mot de passe, un code PIN Mobile Money ou un code de validation par message."] },
      { id: 'incident', title: 'Signaler un incident', paragraphs: ["Signalez sans délai tout accès suspect, fuite potentielle ou vulnérabilité à contact@kisimax.tech avec l'objet « Sécurité ». N'exploitez pas une faille au-delà de ce qui est strictement nécessaire pour la constater et ne consultez pas les données d'autrui."] },
      { id: 'prestataires', title: 'Prestataires et transferts', paragraphs: ["Certains services peuvent dépendre de prestataires techniques. Kisimax documente les prestataires effectivement utilisés et encadre leur accès selon le service fourni. Les détails utiles sont communiqués contractuellement ou dans la politique de confidentialité."] },
      { id: 'donnees', title: 'Traitement des données clients', paragraphs: ["Lorsqu'un commerçant confie à Kisimax des données concernant ses propres clients, les rôles, instructions, mesures de sécurité, durées de conservation et modalités de restitution doivent être définis dans une annexe de traitement des données adaptée au projet."] },
    ],
  },
  cgs: {
    icon: FileCheck2,
    eyebrow: 'Cadre contractuel',
    title: 'Conditions générales de service',
    description: 'Le cadre général applicable aux prestations professionnelles proposées par Kisimax.',
    intro: "Ces conditions s'adressent principalement aux clients professionnels. Elles complètent le devis, le bon de commande ou le contrat accepté. En cas de contradiction, les conditions particulières signées prévalent.",
    sections: [
      { id: 'prestataire', title: '1. Prestataire et contact', paragraphs: ["Les services sont proposés sous la marque Kisimax, sous la responsabilité de KISIMA NUMBI Franck, CEO de KNFtech. Contact : contact@kisimax.tech — +243 89 318 7299. Les autres informations administratives figurent dans les mentions légales et doivent être complétées avant commercialisation."] },
      { id: 'objet', title: '2. Objet et documents contractuels', paragraphs: ["Les présentes conditions régissent la configuration, la mise à disposition et l'accompagnement associés aux services Kisimax. Le contrat est composé, par ordre de priorité, des conditions particulières ou du devis accepté, du bon de commande, des présentes conditions et des annexes applicables."] },
      { id: 'offres', title: '3. Offres', bullets: ["Le Moteur — à partir de 19 $ par mois : organisation des clients, commandes, paiements et indicateurs selon le périmètre convenu.", "L'Accélérateur — à partir de 49 $ par mois : services du Moteur complétés par des prestations de communication définies au devis.", 'Toute personnalisation, reprise de données, intégration ou prestation non expressément incluse fait l’objet d’une estimation séparée.'] },
      { id: 'commande', title: '4. Formation du contrat', paragraphs: ["Les échanges sur le site ou WhatsApp ne constituent pas seuls une commande définitive. Le client peut vérifier le périmètre, le prix, les délais et corriger ses informations avant d'accepter la proposition. Kisimax confirme l'acceptation et transmet une copie électronique des documents contractuels applicables."] },
      { id: 'prix', title: '5. Prix, taxes et paiement', paragraphs: ["Les prix définitifs, la devise, les taxes, frais éventuels, moyens de paiement et échéances figurent sur la proposition commerciale et la facture. Sauf indication contraire, les abonnements sont payables d'avance. Tout retard peut entraîner une suspension après notification, sous réserve des règles impératives applicables."] },
      { id: 'activation', title: '6. Activation et collaboration', paragraphs: ["Le délai commence lorsque les éléments nécessaires et le paiement convenu ont été reçus. Le client fournit des informations exactes, désigne un interlocuteur et valide les livrables dans les délais convenus. Un retard imputable au client peut décaler la mise en service."] },
      { id: 'utilisation', title: '7. Utilisation acceptable', bullets: ['Utiliser le service dans le cadre d’une activité licite.', 'Ne pas contourner les protections ni perturber le service.', 'Disposer des droits et consentements nécessaires sur les données importées.', 'Protéger ses identifiants et signaler rapidement tout accès non autorisé.'] },
      { id: 'donnees', title: '8. Données et confidentialité', paragraphs: ["Le client reste responsable des données qu'il collecte dans le cadre de son commerce. Kisimax traite les données uniquement pour fournir le service et selon les instructions documentées. Une annexe de traitement des données peut préciser les rôles, mesures, sous-traitants, durées et modalités de restitution."] },
      { id: 'support', title: '9. Support et maintenance', paragraphs: ["Les canaux, horaires, délais indicatifs et opérations de maintenance sont ceux précisés dans l'offre. Kisimax peut intervenir sans préavis en cas d'urgence de sécurité, en informant le client dès que raisonnablement possible."] },
      { id: 'duree', title: '10. Durée, renouvellement et résiliation', paragraphs: ["La durée initiale, le renouvellement et le préavis figurent dans la proposition acceptée. La résiliation prend effet selon ces conditions et n'efface pas les sommes déjà dues. Les règles complémentaires sont détaillées dans la politique de remboursement et de résiliation."] },
      { id: 'propriete', title: '11. Propriété intellectuelle', paragraphs: ["Kisimax conserve ses droits sur ses méthodes, modèles, interfaces et outils. Le client conserve ses droits sur ses contenus et données. La licence d'utilisation accordée au client est limitée à la durée et au périmètre du contrat."] },
      { id: 'responsabilite', title: '12. Responsabilité et force majeure', paragraphs: ["Chaque partie répond des dommages directs et prévisibles causés par ses manquements prouvés. Aucune limitation ne s'applique lorsqu'elle est interdite par une règle impérative. Aucune partie n'est responsable d'un retard causé par un événement extérieur raisonnablement incontrôlable, sous réserve d'en informer l'autre et d'en limiter les effets."] },
      { id: 'droit', title: '13. Droit applicable et différends', paragraphs: ["Le contrat est régi par le droit de la République démocratique du Congo. Les parties recherchent d'abord une solution amiable. À défaut, les juridictions compétentes sont déterminées selon les règles applicables."] },
    ],
    legalNotice: true,
  },
  remboursements: {
    icon: RefreshCcw,
    eyebrow: 'Gestion de votre abonnement',
    title: 'Remboursement et résiliation',
    description: 'Comment demander une annulation, mettre fin à un service ou contester une prestation.',
    intro: "Cette politique complète les conditions générales de service. Le devis ou contrat accepté peut prévoir des modalités particulières qui prévalent lorsqu'elles sont plus précises et conformes à la loi.",
    sections: [
      { id: 'demande', title: '1. Comment présenter une demande', paragraphs: ["Envoyez votre demande à contact@kisimax.tech avec l'objet « Résiliation » ou « Remboursement ». Indiquez votre identité, votre boutique, l'offre concernée, la date de commande et le motif. Kisimax confirme la réception et examine la demande."] },
      { id: 'avant-demarrage', title: '2. Avant le démarrage du service', paragraphs: ["Lorsqu'une annulation intervient avant tout travail, activation ou engagement de frais spécifiques, les sommes reçues peuvent être remboursées, déduction faite des frais non récupérables clairement acceptés par le client. Les règles impératives applicables restent prioritaires."] },
      { id: 'apres-demarrage', title: '3. Après le démarrage', paragraphs: ["La partie du service déjà exécutée ou la période d'abonnement déjà commencée reste normalement due. Si Kisimax ne fournit pas une prestation essentielle convenue et ne corrige pas le manquement après notification et délai raisonnable, le client peut demander une correction, un avoir ou un remboursement proportionné."] },
      { id: 'resiliation', title: '4. Résiliation d’un abonnement', paragraphs: ["La demande doit être envoyée avant la prochaine échéance et prend effet selon le préavis prévu dans l'offre acceptée. Sauf accord contraire, la résiliation arrête les renouvellements futurs mais n'annule pas rétroactivement la période déjà fournie."] },
      { id: 'non-professionnel', title: '5. Clients non professionnels', paragraphs: ["Kisimax s'adresse principalement aux professionnels. Si une prestation est exceptionnellement conclue avec un non-professionnel, les droits de rétractation, délais et remboursements impératifs prévus par le Code du numérique congolais s'appliquent sans restriction."] },
      { id: 'restitution', title: '6. Données en fin de service', paragraphs: ["Les modalités d'export, de restitution et de suppression sont définies dans le contrat et l'annexe de traitement des données. Le client doit demander son export avant l'expiration du délai annoncé et conserver ses propres copies nécessaires."] },
      { id: 'delai', title: '7. Traitement et remboursement', paragraphs: ["Kisimax communique sa décision et, lorsqu'un remboursement est dû, indique le montant, le moyen utilisé et le délai d'exécution. Les délais impératifs prévus par la loi applicable sont respectés."] },
    ],
    legalNotice: true,
  },
  cookies: {
    icon: Cookie,
    eyebrow: 'Navigation et traceurs',
    title: 'Politique relative aux cookies',
    description: 'Les technologies utilisées lors de votre navigation sur le site Kisimax.',
    intro: "Dans sa version actuelle, Kisimax n'utilise pas de cookie publicitaire ou de mesure d'audience pour son propre compte. Cette page sera mise à jour avant l'activation de tout nouvel outil de suivi.",
    sections: [
      { id: 'definition', title: "Qu'est-ce qu'un cookie ?", paragraphs: ["Un cookie est un petit fichier ou identifiant enregistré ou lu sur un appareil lors de la consultation d'un service en ligne. Des technologies similaires peuvent servir à assurer une fonction, mémoriser un choix, mesurer l'audience ou personnaliser une publicité."] },
      { id: 'actuel', title: 'Technologies utilisées actuellement', bullets: ["Le site vitrine ne dépose pas de cookie publicitaire ou analytique déclaré par Kisimax.", 'Les polices Google Fonts sont chargées depuis les serveurs de Google, qui peuvent recevoir des données techniques telles que l’adresse IP et le navigateur.', "Les liens WhatsApp ne transmettent des informations à WhatsApp/Meta qu'au moment où l'utilisateur ouvre ce service, selon les règles du tiers.", "L'hébergeur Hostinger peut traiter des journaux techniques nécessaires à la sécurité et à la fourniture du site."] },
      { id: 'necessaires', title: 'Cookies strictement nécessaires', paragraphs: ["Si des cookies techniques deviennent nécessaires au fonctionnement, à la sécurité ou à la conservation d'un choix, ils seront limités à cette finalité et documentés ici."] },
      { id: 'consentement', title: 'Outils soumis au consentement', paragraphs: ["Tout futur outil de publicité, profilage ou mesure d'audience non strictement nécessaire sera désactivé avant consentement lorsque la législation l'exige. Le visiteur pourra accepter, refuser ou modifier son choix aussi simplement."] },
      { id: 'gestion', title: 'Gérer vos choix', paragraphs: ["Vous pouvez aussi configurer votre navigateur pour bloquer ou supprimer les cookies. Le blocage de cookies techniques peut affecter certaines fonctions si elles sont ajoutées ultérieurement."] },
      { id: 'contact', title: 'Contact', paragraphs: ["Pour toute question sur les cookies ou services tiers : contact@kisimax.tech."] },
    ],
  },
};

export function getResourcePageKey(pathname) {
  const filename = pathname.split('/').pop()?.toLowerCase() || '';
  const routes = {
    'a-propos.html': 'a-propos',
    'contact.html': 'contact',
    'faq.html': 'faq',
    'securite.html': 'securite',
    'conditions-generales-service.html': 'cgs',
    'remboursement-resiliation.html': 'remboursements',
    'politique-cookies.html': 'cookies',
  };
  return routes[filename] || null;
}

function PageSection({ section }) {
  return (
    <section id={section.id} className="scroll-mt-28 border-b border-slate-200 pb-9 last:border-0 last:pb-0">
      <h2 className="mb-4 text-xl font-extrabold tracking-[-0.3px] text-brand-ink sm:text-2xl">{section.title}</h2>
      <div className="space-y-4">
        {section.paragraphs?.map((paragraph, index) => (
          <p key={index} className="text-[15px] leading-7 text-slate-600">{paragraph}</p>
        ))}
        {section.bullets && (
          <ul className="space-y-2.5 text-[15px] leading-7 text-slate-600">
            {section.bullets.map((bullet, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-[11px] h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function ContactCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-brand-greenBorder bg-brand-greenSoft/50 p-5 transition-colors hover:bg-brand-greenSoft">
        <MessageCircle className="mb-4 h-6 w-6 text-brand-green" />
        <p className="font-extrabold text-brand-ink">WhatsApp</p>
        <p className="mt-1 text-sm text-slate-600">+243 89 318 7299</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-greenDark">Ouvrir la conversation <ArrowRight className="h-4 w-4" /></span>
      </a>
      <a href="mailto:contact@kisimax.tech" className="group rounded-xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-brand-greenBorder hover:bg-brand-greenSoft/40">
        <Mail className="mb-4 h-6 w-6 text-brand-green" />
        <p className="font-extrabold text-brand-ink">E-mail</p>
        <p className="mt-1 text-sm text-slate-600">contact@kisimax.tech</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-greenDark">Écrire à Kisimax <ArrowRight className="h-4 w-4" /></span>
      </a>
    </div>
  );
}

export default function ResourcePage({ pageKey }) {
  const page = pages[pageKey] || pages.faq;
  const Icon = page.icon;

  useEffect(() => {
    document.title = `${page.title} | Kisimax`;
    window.scrollTo(0, 0);
  }, [page.title]);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-brand-ink">
      <header className="sticky top-0 z-40 border-b border-brand-border/70 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Logo href="./index.html" />
          <a href="./index.html" className="inline-flex items-center gap-2 rounded-lg border border-brand-border bg-white px-4 py-2.5 text-sm font-bold text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green">
            <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-brand-border bg-gradient-to-br from-brand-greenSoft via-white to-[#FAFAF8]">
          <div className="mx-auto max-w-[1000px] px-5 py-14 sm:px-8 sm:py-20">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-greenBorder bg-white text-brand-green"><Icon className="h-6 w-6" /></div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-greenDark">{page.eyebrow}</p>
            <h1 className="max-w-4xl text-4xl font-black tracking-[-1.2px] text-brand-ink sm:text-5xl">{page.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{page.description}</p>
            <p className="mt-6 text-sm font-semibold text-slate-500">Dernière mise à jour : {UPDATED_AT}</p>
          </div>
        </section>

        <div className="mx-auto grid max-w-[1000px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[220px_1fr] lg:py-16">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">Sur cette page</p>
            <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
              {page.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-brand-greenSoft hover:text-brand-greenDark lg:whitespace-normal">{section.title}</a>
              ))}
            </nav>
          </aside>

          <article className="space-y-9 rounded-2xl border border-slate-200 bg-white p-6 sm:p-9">
            <p className="rounded-xl border border-brand-greenBorder bg-brand-greenSoft/50 p-5 text-[15px] font-medium leading-7 text-brand-ink">{page.intro}</p>
            {page.contactCards && <ContactCards />}
            {page.sections.map((section) => <PageSection key={section.id} section={section} />)}
            {page.legalNotice && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
                Ce document constitue une base contractuelle générale. Les informations administratives manquantes et les modalités commerciales définitives doivent être complétées puis validées par un professionnel du droit avant commercialisation.
              </div>
            )}
            <div className="flex flex-col gap-3 rounded-xl bg-brand-night p-6 text-white sm:flex-row sm:items-center sm:justify-between">
              <div><p className="font-extrabold">Besoin d'une précision ?</p><p className="mt-1 text-sm text-slate-300">Notre équipe répond à vos questions.</p></div>
              <a href="./contact.html" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-green px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-greenDark">Nous contacter <ArrowRight className="h-4 w-4" /></a>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
