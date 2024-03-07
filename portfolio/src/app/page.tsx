"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from 'emailjs-com';
import { useRef } from "react";

export default function Component() {
   const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current === null) {
    return;
    }

    emailjs.sendForm('service_j72dmtd', 'template_1wk1wpy', form.current, '90rnT-zB-nnALmqH9')
      .then((result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
      }, (error) => {
          console.log(error.text);
          alert("Erreur lors de l'envoi du message.");
      });
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex flex-col shrink-0">
        <div className="py-4 bg-gray-00 text-gray-50">
          <div className="container flex items-center justify-between px-4 md:px-6 space-y-2 md:space-y-0">
            <Link className="flex items-center space-2" href="#">
              <SquareIcon className="h-6 w-6" />
              <span className="font-semibold">Portfolio</span>
            </Link>
            <nav className="items-center gap-4 sm:gap-6 space-x-6">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#mes_projets">
                Projects
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#competence">
                Competence
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contacter">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="grid gap-12 lg:gap-24 bg-white text-gray-900"> {/* Changements ici pour le fond et le texte */}
        <div className="mx-auto max-w-6xl space-y-4 px-4 md:px-6" id="mes_projets">
          <br></br>
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Mes projets</h1>
            <br></br>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            J'aime me lancer dans différents projets dans le but d'apprendre des nouveaux techniques et améliorer mes compétences.
            </p>
          </div>
          <br></br>
          <div className="grid gap-12 md:gap-8 lg:gap-16">
            <div className="grid gap-4 md:grid-cols-3 md:gap-8">
              <div className="space-y-2">
                <img
                  alt="Project hero"
                  className="overflow-hidden rounded-xl object-cover aspect-video"
                  height="400"
                  src="/Go.jpg"
                  width="600"
                />
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Jeu de rôle</h3>
                  <p className="text-gray-500 dark:text-gray-400">Ce projet est un jeu de rôle simple développé en Go, où les joueurs peuvent explorer une carte, combattre des monstres, collecter des objets et améliorer leurs personnages.</p>
                  <Button><a  href="https://github.com/AurelienADVANCED/Projet-Jeu">Voir le projet</a></Button>
                </div>
              </div>
              <div className="space-y-2">
                <img
                  alt="Project hero"
                  className="overflow-hidden rounded-xl object-cover aspect-video"
                  height="400"
                  src="/Ecommerce.jpg"
                  width="600"
                />
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Site E-Commerce</h3>
                  <p className="text-gray-500 dark:text-gray-400">Le projet "Site d'E-commerce" est une réalisation étudiante visant à concevoir un site web complet de commerce électronique. En tant que développeur Full-Stack, j'ai dirigé le développement des composants Front-End avec Angular, ainsi que la mise en place du Back-End avec Java (Spring Boot) et Hibernate.</p>
                  <Button><a href="http://kebabstudio.com:8080/estiam/ecommerce">Voir le projet</a></Button>
                </div>
              </div>
              <div className="space-y-2">
                <img
                  alt="Project hero"
                  className="overflow-hidden rounded-xl object-cover aspect-video"
                  height="400"
                  src="/Discord.jpg"
                  width="600"
                />
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Bot discord</h3>
                  <p className="text-gray-500 dark:text-gray-400">Le Bot est un outil que j'ai développé pour simplifier la gestion des jeux sur Discord. Le bot, conçu pour être utilisé sur plusieurs serveurs à la fois, offre des fonctionnalités telles que la collecte de statistiques des utilisateurs, la gestion de bases de données et des actions automatisées pour améliorer l'expérience de jeu. En plus du bot, j'ai créé un site web connecté pour visualiser plus en détail les données collectées.</p>
                  <Button><a href="https://github.com/AurelienADVANCED/BotDiscordFelin">Voir le projet</a></Button>
                </div>
              </div>
            </div> 
            <div className="grid gap-4 md:grid-cols-3 md:gap-8">
              <div className="space-y-2">
                <img
                  alt="Project hero"
                  className="overflow-hidden rounded-xl object-cover aspect-video"
                  height="400"
                  src="/Microservice.jpg"
                  width="600"
                />
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Microservice</h3>
                  <p className="text-gray-500 dark:text-gray-400">Le projet "Architecture Microservices" est une initiative où j'ai conçu et mis en œuvre une infrastructure basée sur des microservices, en utilisant Nginx comme proxy inverse, Kubernetes pour l'orchestration des conteneurs et des sites Flask pour la logique métier. Le déploiement a été réalisé via Docker Compose pour faciliter la gestion des conteneurs.</p>
                  <Button><a href="https://github.com/AurelienADVANCED/Projet-E4-Microservice">Voir le projet</a></Button>
                </div>
              </div>
              <div className="space-y-2">
                <img
                  alt="Project hero"
                  className="overflow-hidden rounded-xl object-cover aspect-video"
                  height="400"
                  src="/Jeu.png"
                  width="600"
                />
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Town Tycoon: Build and Manage</h3>
                  <p className="text-gray-500 dark:text-gray-400">Town Tycoon: Build and Manage est un jeu de simulation captivant conçu pour les joueurs de tous âges, des plus jeunes aux plus grands. Dans TycoonLand, les joueurs peuvent réaliser leur rêve d'être un magnat en construisant et en gérant leur propre empire dans un monde virtuel plein de possibilités.</p>
                  <Button><a href="https://github.com/AurelienADVANCED/CityTycoon">Voir le projet</a></Button>
                </div>
              </div>
              
            </div> 
          </div>
        </div>
        <div className="grid gap-12 md:gap-8 lg:gap-16" id="competence">
          <div className="mx-auto max-w-6xl space-y-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Mes compétences</h2>
              <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Je suis compétent dans une variété de domaines. Voici quelques-unes de mes principales compétences.
              </p>
            </div>
            <br></br>
            <div className="grid gap-4 md:gap-8 justify-items-center">
              <div className="flex flex-col items-center gap-2">
                <CodeIcon className="h-10 w-10" />
                <span className="text-lg font-semibold">Web Development</span>
                <p className="text-center text-gray-500 dark:text-gray-400">
                Je déploie des sites sécurisés et réactifs en intégrant les dernières technologies et en mettant en place des mesures de sécurité avancées pour protéger les données sensibles des utilisateurs, tout en garantissant une expérience utilisateur fluide et homogène sur tous les appareils.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DatabaseIcon className="h-10 w-10" />
                <span className="text-lg font-semibold">Database Management</span>
                <p className="text-center text-gray-500 dark:text-gray-400">
                Je suis compétent dans la gestion de bases de données pour garantir que les données sont sécurisées et accessibles.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ComputerIcon className="h-10 w-10" />
                <span className="text-lg font-semibold">Développement logociel</span>
                <p className="text-center text-gray-500 dark:text-gray-400">
                Spécialiste en développement logiciel, je conçois et développe des solutions informatiques innovantes qui répondent aux besoins spécifiques des utilisateurs et des entreprises. Ma maîtrise des langages de programmation modernes, couplée à une approche méthodique de la résolution de problèmes, me permet de créer des applications performantes, évolutives et faciles à maintenir. Passionné par l'innovation technologique, je m'engage à utiliser les meilleures pratiques de développement et les derniers outils pour livrer des logiciels de haute qualité qui améliorent l'efficacité et enrichissent l'expérience utilisateur.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LinuxIcon className="h-10 w-10" /> 
                <span className="text-lg font-semibold">Maîtrise de Linux</span>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Expert en systèmes Linux, j'utilise efficacement cet environnement pour le développement et la gestion de serveurs. Ma connaissance approfondie des commandes Unix et des scripts shell me permet d'optimiser les processus et de sécuriser les systèmes d'exploitation.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GitHubIcon className="h-10 w-10" />
                <span className="text-lg font-semibold">GitHub/GitLab</span>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Apte à gérer des projets complexes sur GitHub et GitLab, je maîtrise le versionnage de code, les workflows de CI/CD et la collaboration en équipe. Je m'engage à adopter les meilleures pratiques de développement collaboratif pour garantir une qualité de code élevée et un développement efficace.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SecurityIcon className="h-10 w-10" />
                <span className="text-lg font-semibold">SonarQube/Snyk</span>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Expérimenté dans l'utilisation de SonarQube et Snyk pour assurer la qualité du code et la sécurité des applications. Je suis dédié à identifier et à corriger les vulnérabilités, garantissant ainsi que le logiciel est non seulement fonctionnel, mais également sécurisé contre les menaces potentielles.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-12 md:gap-8 lg:gap-16">
        <div className="space-y-4">
                <div className="text-center">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Professional Links</h2>
                  <br></br>
                  <div className="grid gap-4">
                    <Link className="text-lg font-semibold hover:underline underline-offset-4" href="https://www.linkedin.com/in/aurelien-rosello/" target="_blank">
                      LinkedIn
                    </Link>
                    <Link className="text-lg font-semibold hover:underline underline-offset-4" href="https://github.com/AurelienADVANCED" target="_blank">
                      GitHub
                    </Link>
                    <Link className="text-lg font-semibold hover:underline underline-offset-4" href="/CV.pdf" target="_blank">
                      CV
                    </Link>
                  </div>
                </div>
              </div>
          <div className="mx-auto max-w-3xl space-y-4 px-4 md:px-6" id="contacter">
            <div className="space-y-2 text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Me contacter</h2>
            </div>
            <br></br>
            <div className="mx-auto w-full max-w-[550px] space-y-2">
              
            <div className="mx-auto w-full max-w-[550px] space-y-2">
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input placeholder="Prenom" name="prenom" required type="text" />
          <Input placeholder="Nom" name="nom" required type="text" />
        </div>
        <Input className="max-w-none" placeholder="Email" name="email" required type="email" />
        <Textarea className="max-w-none" placeholder="Message" name="message" required />
        <Button type="submit">Envoyer</Button>
      </form>
      <br></br>
    </div>
              <br></br>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400"></p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function SmartphoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}

function SquareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}

function ComputerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="12" y1="17" x2="12" y2="21"></line>
      <line x1="9" y1="21" x2="15" y2="21"></line>
    </svg>
  );
}

function LinuxIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28" 
      viewBox="0 0 512 512" 
      stroke="currentColor" 
    >
      <rect fill="#fff" height="512" rx="15%" width="512"/>
      <g transform="matrix(2 0 0 2 256 256)">
        <path d="m-32-25c-3 7-24 29-22 51 8 92 36 30 78 53 0 0 75-42 15-110-17-24-2-43-13-59s-30-17-44-2 6 37-14 67"/>
        <path d="m42 21s9-18-8-31c16 17 6 32 6 32h-3c-1-35-10-16-23-78 15-17-14-32-14-4h-9c1-24-20-12-8 5-1 37-23 52-23 78-7-18 6-32 6-32s-18 15-7 37 31 17 17 27c22 15 56 5 55-27 1-8 22-5 24-3s-3-4-13-4m-56-78c-7-2-5-11-2-11s8 7 2 11m19 1c-5-7-1-14 4-13s5 13-4 13" fill="#eee"/>
        <g fill="#fc2" stroke="#333">
          <path d="m-41 31 21 30c11 7 5 35-25 21-17-5-31-4-33-13s4-10 3-14c-4-22 14-11 19-22s5-16 15-2m112 14c-4-6 0-17-14-16-6 12-23 24-24 0-10 0-3 24-7 35-9 27 17 29 28 16l26-18c2-3 5-6-9-17m-92-92c-3-6 11-14 16-14s12 4 19 6 4 9 2 10-13 10-21 10-10-8-16-12"/>
          <path d="m-21-48c8 6 17 11 35-3"/>
          </g>
          <path d="m-10-54c-2 0 1-2 2-1m7 1c1-1-1-2-3-1"/>
          </g>
    </svg>
  );
}



function GitHubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor" 
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.041-1.61-4.041-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}



function SecurityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 7l10 5 10-5M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
    </svg>
  );
}



