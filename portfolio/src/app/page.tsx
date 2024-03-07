import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Component() {
  
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
      <main className="grid gap-12 lg:gap-24">
        <div className="mx-auto max-w-6xl space-y-4 px-4 md:px-6" id="mes_projets">
          <br></br>
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Mes projets</h1>
            <br></br>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I love to create beautiful and useful things. Here are some of my favorite projects.
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
                  <Button><a href="https://github.com/AurelienADVANCED/Projet-Jeu">Voir le projet</a></Button>
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
                En tant que développeur web spécialisé, je déploie des sites sécurisés et réactifs en intégrant les dernières technologies et en mettant en place des mesures de sécurité avancées pour protéger les données sensibles des utilisateurs, tout en garantissant une expérience utilisateur fluide et homogène sur tous les appareils.
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
                <SmartphoneIcon className="h-10 w-10" />
                <span className="text-lg font-semibold">Mobile Development</span>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  I create mobile apps that are responsive and user-friendly.
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
                    <Link className="text-lg font-semibold hover:underline underline-offset-4" href="/cv.pdf" target="_blank" download>
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
              
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Prenom" required type="text" />
                  <Input placeholder="Nom" required type="text" />
                </div>
                <Input className="max-w-none" placeholder="Email" required type="email" />
                <Textarea className="max-w-none" placeholder="Message" required />
                <Button type="submit">Envoyer</Button>
                
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
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


function SmileIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}

interface SquareIconProps extends React.SVGProps<SVGSVGElement> {}

function SquareIcon(props: SquareIconProps) {
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
  );
}
