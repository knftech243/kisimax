import React, { useEffect } from 'react';
import { ArrowLeft, AlertTriangle, ExternalLink, FileText, Scale, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import Footer from './Footer';

const UPDATED_AT = '19 septembre 2026';

const pageMeta = {
  'mentions-legales': {
    eyebrow: 'Informations légales',
    title: 'Mentions légales',
    description: "Informations relatives à l'éditeur, à la publication et à l'utilisation du site Kisimax.",
    icon: FileText,
  },
  confidentialite: {
    eyebrow: 'Vos données',
    title: 'Politique de confidentialité',
    description: 'Comment Kisimax collecte, utilise, conserve et protège vos données personnelles.',
    icon: ShieldCheck,
  },
  conditions: {
    eyebrow: "Règles d'utilisation",
    title: "Conditions d'utilisation",
    description: "Les conditions qui encadrent l'accès au site et les services proposés par Kisimax.",
    icon: Scale,
  },
};

export function getLegalPageKey(pathname) {
  const page = pathname.split('/').pop()?.toLowerCase() || '';
  if (page === 'mentions-legales.html') return 'mentions-legales';
  if (page === 'politique-confidentialite.html') return 'confidentialite';
  if (page === 'conditions-utilisation.html') return 'conditions';
  return null;
}

function Paragraph({ children }) {
  return <p className="text-[15px] leading-7 text-slate-600">{children}</p>;
}

function BulletList({ children }) {
  return <ul className="space-y-2.5 text-[15px] leading-7 text-slate-600">{children}</ul>;
}

function Bullet({ children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[11px] h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
      <span>{children}</span>
    </li>
  );
}

function LegalSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-slate-200 pb-9 last:border-b-0 last:pb-0">
      <h2 className="mb-4 text-xl font-extrabold tracking-[-0.3px] text-brand-ink sm:text-2xl">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function MissingInformationNotice() {
  return (
    <div className="flex gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
      <AlertTriangle className="mt-0.5 h-5 w-5 flex-none text-amber-600" />
      <div>
        <p className="font-bold">Informations administratives à compléter avant la mise en production</p>
        <p className="mt-1 text-sm leading-6 text-amber-900/80">
          La forme juridique, le RCCM, l'identification nationale, le NIF et l'adresse du siège n'étaient pas
          disponibles dans le projet. Ils doivent être renseignés et validés par le responsable de Kisimax.
        </p>
      </div>
    </div>
  );
}

const mentionsSections = [
  {
    id: 'editeur',
    title: '1. Éditeur du site',
    content: (
      <>
        <Paragraph>Le présent site est édité sous la marque Kisimax.</Paragraph>
        <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 sm:grid-cols-2">
          <p><strong className="text-brand-ink">Dénomination :</strong> Kisimax</p>
          <p><strong className="text-brand-ink">Forme juridique :</strong> À renseigner</p>
          <p><strong className="text-brand-ink">RCCM :</strong> À renseigner</p>
          <p><strong className="text-brand-ink">ID Nat. / NIF :</strong> À renseigner</p>
          <p><strong className="text-brand-ink">Siège social :</strong> À renseigner</p>
          <p><strong className="text-brand-ink">Responsable de publication :</strong> KISIMA NUMBI Franck, CEO de KNFtech</p>
          <p><strong className="text-brand-ink">Téléphone :</strong> +243 89 318 7299</p>
          <p><strong className="text-brand-ink">E-mail :</strong> contact@kisimax.tech</p>
        </div>
        <MissingInformationNotice />
      </>
    ),
  },
  {
    id: 'hebergement',
    title: '2. Hébergement',
    content: (
      <>
        <Paragraph>Le site Kisimax est hébergé par Hostinger.</Paragraph>
        <p className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
          Hébergeur : Hostinger — <a className="text-brand-green underline underline-offset-4" href="https://www.hostinger.com" target="_blank" rel="noopener noreferrer">www.hostinger.com</a>
        </p>
      </>
    ),
  },
  {
    id: 'propriete',
    title: '3. Propriété intellectuelle',
    content: (
      <Paragraph>
        La structure, les textes, les éléments graphiques, le logo, les interfaces et les contenus du site sont
        protégés par les règles applicables à la propriété intellectuelle. Toute reproduction, adaptation,
        diffusion ou exploitation substantielle sans autorisation écrite préalable de Kisimax est interdite,
        sauf exception prévue par la loi.
      </Paragraph>
    ),
  },
  {
    id: 'responsabilite',
    title: '4. Responsabilité',
    content: (
      <>
        <Paragraph>
          Kisimax s'efforce de fournir des informations exactes et à jour. Les présentations, tarifs indicatifs et
          démonstrations du site ne constituent pas, à eux seuls, une offre contractuelle définitive. Les modalités
          convenues dans un devis, un bon de commande ou un contrat prévalent.
        </Paragraph>
        <Paragraph>
          Kisimax ne peut garantir une disponibilité continue du site et peut suspendre temporairement son accès
          pour maintenance, sécurité ou cas de force majeure, sous réserve des dispositions impératives applicables.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'liens',
    title: '5. Liens et services tiers',
    content: (
      <Paragraph>
        Le site peut renvoyer vers des services tiers, notamment WhatsApp. Ces services disposent de leurs propres
        conditions et politiques. Kisimax n'exerce pas de contrôle sur leur contenu ni sur leurs pratiques.
      </Paragraph>
    ),
  },
  {
    id: 'droit',
    title: '6. Droit applicable et contact',
    content: (
      <>
        <Paragraph>
          Le site est soumis au droit de la République démocratique du Congo, notamment aux dispositions applicables
          du Code du numérique. Pour toute question : <a className="font-semibold text-brand-green underline underline-offset-4" href="mailto:contact@kisimax.tech">contact@kisimax.tech</a>.
        </Paragraph>
      </>
    ),
  },
];

const privacySections = [
  {
    id: 'responsable',
    title: '1. Responsable du traitement',
    content: (
      <>
        <Paragraph>
          Kisimax est responsable des traitements décrits dans la présente politique. Les informations
          administratives complètes de l'entité doivent être ajoutées aux mentions légales avant le lancement public.
        </Paragraph>
        <Paragraph>
          Pour toute question ou demande relative à vos données : <a className="font-semibold text-brand-green underline underline-offset-4" href="mailto:contact@kisimax.tech">contact@kisimax.tech</a>.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'donnees',
    title: '2. Données concernées',
    content: (
      <BulletList>
        <Bullet>Coordonnées et identité communiquées volontairement : nom, numéro WhatsApp, adresse e-mail et entreprise.</Bullet>
        <Bullet>Contenu des échanges : demandes, besoins commerciaux, rendez-vous, devis et suivi de la relation.</Bullet>
        <Bullet>Données techniques minimales pouvant figurer dans les journaux de sécurité de l'hébergeur : adresse IP, navigateur, date et heure de consultation.</Bullet>
        <Bullet>Données transmises aux services tiers lorsque vous cliquez sur WhatsApp, envoyez un e-mail ou chargez les polices Google Fonts.</Bullet>
      </BulletList>
    ),
  },
  {
    id: 'finalites',
    title: '3. Finalités et fondements',
    content: (
      <>
        <Paragraph>Les données sont utilisées pour répondre à vos demandes, organiser un rendez-vous, préparer une proposition, fournir les services demandés, assurer la sécurité et respecter les obligations légales.</Paragraph>
        <Paragraph>
          Conformément notamment aux articles 192 à 194 du Code du numérique congolais, Kisimax s'appuie sur votre
          consentement lorsqu'il est requis et sur les obligations légales applicables. Les données sont collectées
          pour des finalités déterminées, de façon proportionnée, transparente et sécurisée.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'destinataires',
    title: '4. Destinataires et transferts',
    content: (
      <>
        <Paragraph>
          Les données sont accessibles aux personnes autorisées de Kisimax et, uniquement lorsque nécessaire, à ses
          prestataires d'hébergement, de messagerie et de communication. Elles ne sont pas vendues.
        </Paragraph>
        <Paragraph>
          WhatsApp/Meta, Google Fonts et certains prestataires techniques peuvent traiter des données hors de la RDC.
          Leur utilisation est soumise à leurs propres politiques et aux règles applicables aux transferts de données.
          Kisimax doit documenter les prestataires effectivement retenus lors de la mise en production.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'conservation',
    title: '5. Durées de conservation',
    content: (
      <BulletList>
        <Bullet>Demandes sans suite : le temps nécessaire au traitement, puis au maximum 24 mois après le dernier échange.</Bullet>
        <Bullet>Relations clients : pendant la relation, puis durant les délais nécessaires au respect des obligations légales et à la défense des droits de Kisimax.</Bullet>
        <Bullet>Journaux techniques : pour une durée courte et proportionnée aux besoins de sécurité de l'hébergement.</Bullet>
      </BulletList>
    ),
  },
  {
    id: 'droits',
    title: '6. Vos droits',
    content: (
      <>
        <Paragraph>
          Dans les conditions prévues par la législation applicable, vous pouvez demander l'accès, la rectification
          ou l'effacement de vos données, vous opposer à certains traitements et retirer votre consentement pour
          l'avenir. Une vérification raisonnable de votre identité peut être demandée afin de protéger vos données.
        </Paragraph>
        <Paragraph>
          Adressez votre demande à <a className="font-semibold text-brand-green underline underline-offset-4" href="mailto:contact@kisimax.tech">contact@kisimax.tech</a>. Vous pouvez également saisir l'autorité congolaise compétente en matière de protection des données.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'cookies',
    title: '7. Cookies et services externes',
    content: (
      <>
        <Paragraph>
          Dans sa version actuelle, le site ne dépose pas de cookie publicitaire ou de mesure d'audience pour le
          compte de Kisimax. Il charge toutefois des polices depuis Google Fonts et propose des liens vers WhatsApp.
          Ces tiers peuvent recevoir des informations techniques lors de leur utilisation.
        </Paragraph>
        <Paragraph>
          Si des outils d'analyse, de publicité ou d'autres traceurs sont ajoutés, la présente politique et, lorsque
          nécessaire, un mécanisme de consentement seront mis à jour avant leur activation.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'securite',
    title: '8. Sécurité et mise à jour',
    content: (
      <Paragraph>
        Kisimax met en œuvre des mesures organisationnelles et techniques proportionnées aux risques. Aucun système
        n'étant totalement infaillible, tout incident suspect peut être signalé à l'adresse de contact. Cette politique
        peut évoluer pour refléter les services, prestataires et exigences légales applicables.
      </Paragraph>
    ),
  },
];

const termsSections = [
  {
    id: 'objet',
    title: '1. Objet et acceptation',
    content: (
      <Paragraph>
        Les présentes conditions encadrent l'accès au site Kisimax et l'utilisation des informations, démonstrations
        et moyens de contact qui y sont proposés. En utilisant le site, vous acceptez ces conditions. Les prestations
        payantes font l'objet de modalités complémentaires précisées dans un devis, un bon de commande ou un contrat.
      </Paragraph>
    ),
  },
  {
    id: 'services',
    title: '2. Services et tarifs',
    content: (
      <>
        <Paragraph>
          Kisimax propose des solutions d'organisation commerciale, de gestion de commandes, de suivi des paiements,
          de tableau de bord et, selon l'offre, d'accompagnement en communication.
        </Paragraph>
        <Paragraph>
          Les prix affichés « à partir de » sont indicatifs et exprimés en dollars américains par mois. Le périmètre,
          les délais, les taxes éventuelles, le mode de paiement, le renouvellement et les conditions de résiliation
          sont fixés dans la proposition acceptée par le client. En cas de contradiction, ce document contractuel prévaut.
        </Paragraph>
      </>
    ),
  },
  {
    id: 'utilisateur',
    title: "3. Obligations de l'utilisateur",
    content: (
      <BulletList>
        <Bullet>Fournir des informations exactes et disposer des droits nécessaires sur les données confiées à Kisimax.</Bullet>
        <Bullet>Utiliser le site et les services conformément à la loi, aux droits des tiers et à leur finalité professionnelle.</Bullet>
        <Bullet>Ne pas tenter de contourner la sécurité, perturber le service, introduire un code malveillant ou accéder sans autorisation à des données.</Bullet>
        <Bullet>Protéger ses accès et avertir rapidement Kisimax de toute utilisation non autorisée.</Bullet>
      </BulletList>
    ),
  },
  {
    id: 'donnees-clients',
    title: '4. Données des clients du commerçant',
    content: (
      <Paragraph>
        Le client reste responsable de la licéité des données qu'il collecte au moyen de ses activités et des
        instructions qu'il donne à Kisimax. Il lui appartient notamment d'informer ses propres clients, de recueillir
        les consentements nécessaires et de ne transmettre que les données utiles. Les responsabilités détaillées de
        Kisimax en qualité de prestataire ou sous-traitant doivent être précisées dans le contrat de service.
      </Paragraph>
    ),
  },
  {
    id: 'propriete',
    title: '5. Propriété intellectuelle',
    content: (
      <Paragraph>
        Kisimax et ses concédants conservent leurs droits sur le site, les méthodes, les interfaces, les modèles et les
        éléments fournis. Le client conserve ses droits sur ses contenus et données. Aucun transfert de propriété n'est
        accordé en dehors de ce qui est expressément prévu dans le contrat.
      </Paragraph>
    ),
  },
  {
    id: 'disponibilite',
    title: '6. Disponibilité et services tiers',
    content: (
      <Paragraph>
        Kisimax peut faire évoluer ou interrompre temporairement le site pour maintenance ou sécurité. Certaines
        fonctions reposent sur des services tiers, notamment WhatsApp, dont Kisimax ne contrôle ni la disponibilité ni
        les conditions. Les engagements de niveau de service éventuels sont uniquement ceux prévus au contrat.
      </Paragraph>
    ),
  },
  {
    id: 'responsabilite',
    title: '7. Responsabilité',
    content: (
      <Paragraph>
        Chaque partie répond des dommages directs et prévisibles résultant de ses manquements prouvés. Les limitations
        ou exclusions prévues dans un contrat ne s'appliquent pas lorsqu'elles sont interdites par une disposition
        impérative. Le client demeure responsable de ses décisions commerciales, de ses obligations comptables,
        fiscales et réglementaires ainsi que de la sauvegarde de ses informations essentielles.
      </Paragraph>
    ),
  },
  {
    id: 'resiliation',
    title: '8. Durée, suspension et résiliation',
    content: (
      <Paragraph>
        Les modalités de durée, renouvellement, suspension, résiliation, restitution ou suppression des données sont
        celles de l'offre ou du contrat accepté. Kisimax peut suspendre un accès en cas de risque de sécurité, usage
        illicite ou manquement grave, dans le respect des obligations applicables et après information lorsque cela est possible.
      </Paragraph>
    ),
  },
  {
    id: 'droit',
    title: '9. Droit applicable et différends',
    content: (
      <Paragraph>
        Les présentes conditions sont régies par le droit de la République démocratique du Congo. Les parties cherchent
        d'abord une solution amiable. À défaut, le différend relève des juridictions compétentes déterminées selon les
        règles applicables, sauf disposition impérative contraire.
      </Paragraph>
    ),
  },
  {
    id: 'contact',
    title: '10. Contact et modification',
    content: (
      <Paragraph>
        Toute question peut être adressée à <a className="font-semibold text-brand-green underline underline-offset-4" href="mailto:contact@kisimax.tech">contact@kisimax.tech</a>. Kisimax peut modifier ces conditions pour tenir compte de l'évolution du service ou de la loi. La date de mise à jour figure en haut de cette page.
      </Paragraph>
    ),
  },
];

const sectionsByPage = {
  'mentions-legales': mentionsSections,
  confidentialite: privacySections,
  conditions: termsSections,
};

export default function LegalPage({ pageKey }) {
  const meta = pageMeta[pageKey] || pageMeta['mentions-legales'];
  const sections = sectionsByPage[pageKey] || mentionsSections;
  const Icon = meta.icon;

  useEffect(() => {
    document.title = `${meta.title} | Kisimax`;
    window.scrollTo(0, 0);
  }, [meta.title]);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-brand-ink">
      <header className="sticky top-0 z-40 border-b border-brand-border/70 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Logo href="./index.html" />
          <a href="./index.html" className="inline-flex items-center gap-2 rounded-lg border border-brand-border bg-white px-4 py-2.5 text-sm font-bold text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-brand-border bg-gradient-to-br from-brand-greenSoft via-white to-[#FAFAF8]">
          <div className="mx-auto max-w-[1000px] px-5 py-14 sm:px-8 sm:py-20">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-greenBorder bg-white text-brand-green">
              <Icon className="h-6 w-6" />
            </div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-greenDark">{meta.eyebrow}</p>
            <h1 className="max-w-3xl text-4xl font-black tracking-[-1.2px] text-brand-ink sm:text-5xl">{meta.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{meta.description}</p>
            <p className="mt-6 text-sm font-semibold text-slate-500">Dernière mise à jour : {UPDATED_AT}</p>
          </div>
        </section>

        <div className="mx-auto grid max-w-[1000px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[220px_1fr] lg:py-16">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">Sur cette page</p>
            <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-brand-greenSoft hover:text-brand-greenDark lg:whitespace-normal">
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="space-y-9 rounded-2xl border border-slate-200 bg-white p-6 sm:p-9">
            {sections.map((section) => (
              <LegalSection key={section.id} id={section.id} title={section.title}>
                {section.content}
              </LegalSection>
            ))}

            <div className="rounded-xl border border-brand-greenBorder bg-brand-greenSoft/60 p-5">
              <p className="font-bold text-brand-ink">Références principales</p>
              <a
                href="https://are.gouv.cd/download/ordonnance-loi-23-010-du-13-mars-portant-code-du-numerique/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-greenDark underline underline-offset-4"
              >
                Ordonnance-loi n° 23/010 du 13 mars 2023 portant Code du numérique
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                Ces pages constituent une base informative adaptée au site actuel. Elles doivent être relues par un
                professionnel du droit et complétées avec les informations administratives et contractuelles réelles de Kisimax.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
