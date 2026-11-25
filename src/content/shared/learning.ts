/**
 * Selected free courses from the public Alura record (source of truth):
 * https://cursos.alura.com.br/user/vinaum/fullCertificate/2821a3600c4baf11ae98fc34662b45d5
 *
 * Titles are kept exactly as issued (in Portuguese). Only items the record lists as
 * completed are included. Introductory "first steps" courses are flagged as such.
 * Hours are intentionally not summed: the record repeats some trails.
 */
export const aluraRecordUrl =
  "https://cursos.alura.com.br/user/vinaum/fullCertificate/2821a3600c4baf11ae98fc34662b45d5";

export type LearningAreaId = "devops" | "programming" | "security" | "business" | "ai" | "frontend";

export interface Course {
  title: string;
  intro?: boolean;
  trail?: boolean;
}

export const learningAreas: { id: LearningAreaId; trail?: string; courses: Course[] }[] = [
  {
    id: "devops",
    courses: [
      { title: "Infraestrutura como código: preparando máquinas na AWS com Ansible e Terraform" },
      { title: "SRE: entenda a confiabilidade dos sistemas" },
      { title: "FinOps: gerenciando custos de cloud" },
      { title: "Linux I: conhecendo e utilizando o terminal" },
      { title: "Linux II: programas, processos e pacotes" },
      { title: "Certificação Linux LPI Essentials parte 1: Evolution and Distributions" },
      { title: "Redes parte 1: conceitos e prática" },
      { title: "Carreira Platform Engineering: Boas-vindas e primeiros passos", intro: true },
    ],
  },
  {
    id: "programming",
    courses: [
      { title: "Python: começando com a linguagem" },
      { title: "Java JRE e JDK: compile e execute o seu programa" },
      { title: "Java OO: entendendo a Orientação a Objetos" },
      { title: "Java Polimorfismo: entenda herança e interfaces" },
      { title: "Go: a linguagem do Google" },
      { title: "Go: Orientação a Objetos" },
      { title: "Pensamento computacional: fundamentos da computação e lógica de programação" },
      { title: "Lógica de programação: mergulhe em programação com JavaScript" },
      { title: "Lógica de programação: explore funções e listas" },
      { title: "Arquitetura de computadores: por trás de como seu programa funciona" },
      { title: "Git e GitHub: compartilhando e colaborando em projetos" },
    ],
  },
  {
    id: "security",
    trail: "Segurança Ofensiva",
    courses: [
      { title: "Pentest: explorando vulnerabilidades em aplicações web" },
      { title: "Pentest: investigando vulnerabilidades em um servidor de aplicações web" },
      { title: "Pentest: combinando vulnerabilidades e acessando o Shell" },
    ],
  },
  {
    id: "business",
    courses: [
      { title: "Product Manager: uma jornada em gestão de produto" },
      { title: "Management 3.0: gerencie o ambiente, não as pessoas" },
      { title: "Gestão Ágil: liderando a mudança em um ambiente de agilidade" },
      { title: "Scrum: agilidade em seu projeto" },
      { title: "Kanban parte 1: fundamentos essenciais" },
      { title: "Kanban parte 2: métricas e práticas avançadas" },
      { title: "Lean Startup: primeiros passos da sua Startup enxuta" },
      { title: "COBIT 5 Foundations Parte 1: Governança Corporativa" },
      { title: "RH 4.0: Digital Agile & Transforming Business Partner", trail: true },
    ],
  },
  {
    id: "ai",
    courses: [{ title: "Carreira Engenharia de IA: Boas-vindas e primeiros passos", intro: true }],
  },
  {
    id: "frontend",
    courses: [
      { title: "HTTP: Entendendo a web por baixo dos panos" },
      { title: "HTML5 e CSS3 parte 1: crie uma página da Web" },
    ],
  },
];
