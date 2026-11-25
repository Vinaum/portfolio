import type { Dictionary } from "../types";

export const ptBR: Dictionary = {
  locale: "pt-BR",
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",
  meta: {
    title: "Vinicius Sartori | Solutions Engineer e Integração de Sistemas",
    description:
      "Vinicius Campanha Sartori — Engenheiro de Computação (UNICAMP) e Solutions Engineer: integração de sistemas, APIs, automação, cloud e formação de times.",
    keywords: [
      "Solutions Engineer",
      "Integração de sistemas",
      "Integração de APIs",
      "Soluções em nuvem",
      "Implementation Engineer",
      "Consultor técnico",
      "Engenheiro de Computação",
      "Automação",
      "Formação de times",
      "AWS",
      "Supabase",
      "Next.js",
    ],
  },
  ids: {
    about: "sobre",
    companies: "experiencia",
    capabilities: "competencias",
    work: "projetos",
    clients: "clientes",
    beyond: "alem-dos-negocios",
    learning: "aprendizado",
    contact: "contato",
  },
  nav: {
    skip: "Pular para o conteúdo",
    home: "Início",
    projects: "Projetos",
    capabilities: "Competências",
    experience: "Experiência",
    about: "Sobre",
    contact: "Contato",
    otherExperience: "Outras experiências",
    submenu: "Mostrar seções de",
    menu: "Menu",
    close: "Fechar",
    language: "Idioma",
    switchTo: "View in English",
  },
  hero: {
    role: "Solutions Engineer",
    roleSub: "Integração de Sistemas · Arquitetura de Soluções · Automação",
    headline: "Conectando tecnologia, negócios e pessoas em soluções que funcionam.",
    supporting:
      "Engenheiro de Computação pela UNICAMP. Desenho e integro soluções considerando o problema técnico, o contexto de negócio e as pessoas que vão construí-las e usá-las — uma visão formada em mais de sete anos avaliando talentos técnicos e liderando times.",
    ctaPrimary: "Conheça meus projetos",
    ctaSecondary: "Vamos conversar",
    availability: "Disponível para novas oportunidades",
    availabilityDetail: "Soluções · Integração · Implantação · Consultoria",
    facts: [
      "Engenharia de Computação — UNICAMP",
      "Cofundador — Raiz Universitária",
      "7+ anos em recrutamento de tecnologia",
    ],
    diagramTitle: "Diagrama de contexto do sistema",
    diagramDescription:
      "Um diagrama de arquitetura que conecta Pessoas e Negócio a Aplicações e Dados, Aplicações a APIs, e APIs a Cloud, Automação e Infraestrutura.",
  },
  about: {
    label: "Sobre, formação e liderança",
    title: "Boas soluções começam com a compreensão dos problemas. Grandes soluções dependem também das pessoas que as constroem.",
    lead:
      "Minha trajetória não foi linear — e é justamente esse o ponto. Engenharia, negócios e pessoas não são três carreiras separadas na minha história; são partes de uma mesma forma de trabalhar.",
    convergence: {
      label: "Como as peças convergem",
      steps: [
        { title: "Engenharia de Computação", body: "Pensamento sistêmico e base técnica." },
        { title: "Empreendedorismo", body: "Transformar uma ideia em algo que as pessoas usam." },
        { title: "Recrutamento de tecnologia", body: "Mais de sete anos lendo competências técnicas, maturidade e necessidades de times." },
        { title: "Liderança de times", body: "Desenvolver consultores e liderar equipes de até 17 pessoas." },
        { title: "Ensino", body: "Tornar conceitos técnicos acessíveis a iniciantes." },
        { title: "Associações e projetos sociais", body: "Coordenar pessoas e instituições em torno de um objetivo comum." },
        { title: "Soluções digitais", body: "Desenhar, integrar e publicar aplicações reais." },
      ],
      closing:
        "Minha atuação com soluções não é um recomeço. É o ponto em que a formação técnica, a experiência empresarial e o conhecimento sobre pessoas finalmente se encontram.",
    },
    education: {
      label: "Formação acadêmica",
      institution: "Universidade Estadual de Campinas",
      short: "UNICAMP",
      items: [
        { level: "Graduação", title: "Engenharia de Computação", institution: "UNICAMP" },
        { level: "Pós-graduação", title: "Engenharia de Hardware" },
        { level: "MBA", title: "Gestão de Pessoas e Performance" },
      ],
    },
    entrepreneurship: {
      label: "Empreendedorismo",
      name: "Raiz Universitária",
      role: "Cofundador",
      body: "Minha primeira lição sobre transformar uma ideia em algo que as pessoas realmente usam — com recursos limitados e prazos reais.",
      highlights: [
        { value: "80", label: "eventos" },
        { value: "5", label: "universidades" },
        { value: "10 mil+", label: "estudantes na comunidade" },
        { value: "3º", label: "lugar no Desafio UNICAMP de Inovação Tecnológica" },
      ],
    },
    leadership: {
      label: "Liderança",
      body:
        "No PageGroup e na Share People Hub liderei times de recrutamento: desenvolvendo e treinando consultores, cuidando da relação com clientes e conduzindo metas e indicadores. Eram times de recrutamento — não de engenharia — e me ensinaram como pessoas, competências e objetivos se encaixam.",
      stat: { value: "17", label: "consultores de recrutamento no maior time que liderei", note: "Times de recrutamento, não de engenharia de software." },
    },
  },
  companies: {
    label: "Experiência profissional",
    title: "Onde aprendi como empresas de tecnologia realmente funcionam.",
    intro:
      "Quatro empresas moldaram mais a minha visão: uma insurtech, uma empresa de IA aplicada e duas consultorias de recrutamento especializado.",
    roleLabel: "Função",
    responsibilitiesLabel: "Responsabilidades",
    skillsLabel: "Desenvolveu",
    featured: [
      {
        id: "pier",
        name: "Pier",
        sector: "Insurtech",
        description: "A primeira seguradora digital do Brasil autorizada pela Susep.",
        relationship: "Recrutador de tecnologia no time interno",
        responsibilities: [
          "Recrutamento de perfis técnicos",
          "Alinhamento de perfis com gestores técnicos",
          "Avaliação técnica e comportamental",
          "Atração de talentos e employer branding",
        ],
        skills: ["Avaliação técnica de talentos", "Gestão de stakeholders"],
      },
      {
        id: "gobots",
        name: "GoBots",
        sector: "IA aplicada · E-commerce",
        description: "Automação com IA para lojistas em marketplaces como Mercado Livre, Amazon, Shopee e Magalu.",
        relationship: "Gerente de Vendas",
        responsibilities: [
          "Prospecção e gestão do pipeline comercial",
          "Apresentação de um produto de IA a clientes empresariais",
          "Levantamento das necessidades do cliente antes da proposta",
        ],
        skills: ["Descoberta de negócio", "Apresentação de soluções"],
      },
      {
        id: "pagegroup",
        name: "PageGroup",
        brands: "Page Outsourcing · Michael Page",
        sector: "Recrutamento especializado",
        description: "Grupo de recrutamento do índice FTSE 250, com operações em mais de 30 países.",
        relationship: "Liderança de um time de consultores de recrutamento",
        responsibilities: [
          "Desenvolvimento e treinamento de consultores",
          "Recrutamento de tecnologia para empresas clientes",
          "Relacionamento com clientes",
          "Metas e indicadores do time",
        ],
        skills: ["Liderança e desenvolvimento de equipes", "Gestão de clientes"],
      },
      {
        id: "sharepeoplehub",
        name: "Share People Hub",
        brands: "antiga Share RH",
        sector: "Soluções em RH · Recrutamento",
        description: "Hub de soluções em RH fundado em 2015 em São Paulo.",
        relationship: "Liderança de diversas equipes e coordenação de projetos completos",
        responsibilities: [
          "Projetos completos de recrutamento, seleção e Education Recruiting",
          "Recrutamento de tecnologia",
          "Desenho de processos seletivos",
          "Desenvolvimento e treinamento de consultores",
          "Gestão de clientes e stakeholders",
        ],
        skills: ["Coordenação de projetos", "Desenho de processos", "Team Building"],
      },
    ],
    othersTitle: "Outras experiências",
    others: [
      { name: "Trópico Telecomunicações", area: "Tecnologia e telecom" },
      { name: "Projetos independentes de tecnologia", area: "Engenharia de soluções — veja Projetos" },
    ],
    trademarkNote: "Nomes e logotipos pertencem às respectivas empresas.",
  },
  clients: {
    label: "Clientes",
    title: "Empresas que já confiaram no meu trabalho.",
    intro: "Organizações com quem trabalhei ou para quem entreguei.",
    items: [],
    note: "Nomes e logotipos pertencem às respectivas empresas e identificam colaborações anteriores.",
  },
  capabilities: {
    label: "Competências em Solutions Engineering",
    title: "Tecnologia, negócio e pessoas — quatro pilares de uma mesma prática.",
    intro: "Cada pilar indica de onde vem a experiência. Em Cloud, cada item aparece como aplicado em projetos ou em estudo.",
    applied: "Aplicado",
    study: "Em estudo",
    studyNote: "Cursos e prática de laboratório — não experiência profissional.",
    items: [
      {
        id: "architecture",
        title: "Solutions Engineering & Architecture",
        summary: "Entender o problema primeiro e, depois, desenhar uma solução que o negócio consiga sustentar.",
        items: [
          { text: "Levantamento e análise de requisitos" },
          { text: "Desenho de soluções" },
          { text: "Arquitetura de sistemas" },
          { text: "Análise de viabilidade" },
          { text: "Decisões técnicas orientadas a objetivos de negócio" },
        ],
        evidenceLabel: "Aplicado em",
        evidence: "Um plano técnico escrito, com decisões explícitas aprovadas antes da implementação — plataforma de gestão condominial.",
      },
      {
        id: "integration",
        title: "Systems Integration & Automation",
        summary: "Conectar aplicações, dados e processos para que funcionem como um único sistema.",
        items: [
          { text: "APIs REST" },
          { text: "Webhooks e gatilhos orientados a eventos" },
          { text: "Integração entre sistemas e SaaS" },
          { text: "Automação de processos de negócio" },
          { text: "Modelagem e fluxo de dados" },
          { text: "Tratamento de erros e confiabilidade: idempotência, travas, validação" },
        ],
        evidenceLabel: "Aplicado em",
        evidence: "Um gatilho no banco que chama a API do GitHub para republicar um site; operações de estoque idempotentes e seguras contra concorrência.",
      },
      {
        id: "cloud",
        title: "Cloud & Infrastructure",
        summary: "Hospedagem, pipelines e segurança do que eu construo — com uma linha clara entre prática e estudo.",
        items: [
          { text: "Plataformas gerenciadas: Supabase, Vercel, GitHub Pages", status: "applied" },
          { text: "CI/CD com GitHub Actions", status: "applied" },
          { text: "Linux", status: "applied" },
          { text: "Segurança de aplicação: RLS, CSP, segredos em cofre", status: "applied" },
          { text: "Computação em nuvem na AWS", status: "study" },
          { text: "Infraestrutura como código: Terraform, Ansible", status: "study" },
          { text: "Observabilidade, SRE e FinOps", status: "study" },
          { text: "Platform Engineering (introdutório)", status: "study" },
        ],
        evidenceLabel: "Aplicado em / em estudo",
        evidence: "Pipelines e hospedagem dos três projetos implementados; AWS, IaC, SRE e FinOps por meio de cursos.",
      },
      {
        id: "people",
        title: "People & Team Building",
        summary:
          "Mais de sete anos em recrutamento especializado em tecnologia me deram uma visão ampla sobre competências técnicas, maturidade profissional, composição de equipes e necessidades reais das organizações.",
        items: [
          { text: "Construção e composição de times (Team Building)" },
          { text: "Avaliação técnica de talentos" },
          { text: "Liderança e desenvolvimento de equipes" },
          { text: "Gestão de stakeholders" },
          { text: "Colaboração entre áreas" },
          { text: "Comunicação técnica" },
          { text: "Alinhamento entre pessoas, tecnologia e negócio" },
        ],
        evidenceLabel: "Vem de",
        evidence:
          "Recrutamento de tecnologia, liderança de times de até 17 consultores de recrutamento, ensino de programação e cofundação de uma startup. Não é gestão de engenharia.",
      },
    ],
    people: {
      kicker: "Por que isso importa em soluções",
      message:
        "Compreender tecnologia é fundamental. Compreender as pessoas que desenvolvem, utilizam e sustentam essa tecnologia é igualmente importante.",
      perspective:
        "Ao olhar para uma solução, considero o problema técnico, o contexto de negócio, as pessoas envolvidas, as competências necessárias, a colaboração entre áreas — e se ela se sustenta no longo prazo.",
    },
  },
  work: {
    label: "Projetos selecionados",
    title: "Projetos que nasceram de um problema operacional — não de uma escolha de tecnologia.",
    intro:
      "Cada caso é documentado a partir do seu repositório: o que foi construído, como, e o que ainda está em andamento. O conceito está identificado como conceito.",
    viewCase: "Ver estudo de caso",
    status: "Situação",
    stack: "Stack",
    concept: "Conceito",
    built: "Construído",
  },
  beyond: {
    label: "Ensino e impacto social",
    title: "Explicar tecnologia e organizar pessoas em torno de um objetivo comum.",
    teaching: {
      label: "Ensino de programação",
      title: "Ensinando tecnologia, transformando pessoas.",
      body:
        "Durante alguns anos fui professor de programação em projetos sociais, ensinando pessoas sem conhecimento prévio — lógica, pensamento computacional, Scratch, Python e Java. O foco nunca foi só a linguagem: era tornar ideias técnicas compreensíveis para qualquer nível de conhecimento.",
      note: "Foi ali que aprendi a explicar tecnologia — muito antes de trabalhar com soluções.",
      tools: ["Lógica", "Pensamento computacional", "Scratch", "Python", "Java"],
      skills: [
        "Explicar conceitos complexos em linguagem simples",
        "Adaptar a metodologia ao nível de cada aluno",
        "Resolução estruturada de problemas",
        "Desenvolver pessoas e compartilhar conhecimento",
      ],
    },
    association: {
      label: "Liderança e impacto social",
      role: "Presidente",
      organization: "Associação de Repúblicas da UNICAMP",
      body:
        "Como presidente, liderei uma organização associativa, articulei diferentes repúblicas e representei a associação institucionalmente. Em parceria com o CORI, órgão de relações internacionais da UNICAMP, participei da articulação de uma iniciativa que ajudou a viabilizar moradia para diversos universitários refugiados vindos do Haiti.",
      partner: "Em parceria com o CORI · UNICAMP",
      points: ["Liderança institucional", "Articulação entre associação e universidade", "Responsabilidade coletiva", "Impacto social"],
    },
  },
  learning: {
    label: "Formação complementar",
    title: "Estudo contínuo, por área.",
    intro: "Cursos livres concluídos na Alura, com o histórico completo disponível para consulta.",
    note: "Cursos livres concluídos na Alura entre 2017 e 2026 — não são certificações profissionais.",
    recordLink: "Consultar histórico completo",
    introductory: "introdutório",
    courseOne: "1 curso",
    courseMany: "{n} cursos",
    more: "+{n} cursos",
    areas: {
      devops: "DevOps e Cloud",
      programming: "Programação",
      security: "Cibersegurança",
      business: "Negócios, Gestão e Produto",
      ai: "Inteligência Artificial",
      frontend: "Front-end",
    },
  },
  contact: {
    label: "Contato",
    headline: "Tem um desafio que vale a pena resolver?",
    body:
      "Estou aberto a posições em Solutions Engineering, Integração, Implantação e Consultoria Técnica — e a conversas sobre problemas que valem a pena resolver.",
    email: "Vamos conversar",
    linkedin: "Conecte-se no LinkedIn",
    github: "Explore o GitHub",
    emailHint: "Abre o seu cliente de e-mail",
    figureFrom: "DESAFIO",
    figureTo: "SOLUÇÃO",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    built: "Desenhado e construído com Next.js, TypeScript e SVG feito à mão.",
    top: "Voltar ao topo",
  },
  caseStudy: {
    back: "Todos os projetos",
    work: "Projetos",
    type: "Tipo",
    status: "Situação",
    stack: "Stack",
    repository: "Repositório",
    viewRepo: "Ver no GitHub",
    noRepo: "Ainda não publicado",
    conceptNotice:
      "Este é um conceito e demonstrador. Tudo abaixo descreve o desenho pretendido — nada aqui é apresentado como entregue.",
    sections: {
      context: "Contexto",
      problem: "Problema",
      objective: "Objetivo",
      solution: "Solução proposta",
      architecture: "Arquitetura",
      flow: "Fluxo",
      contribution: "Minha contribuição",
      decisions: "Decisões técnicas e trade-offs",
      security: "Segurança e controle de acesso",
      delivery: "Testes e publicação",
      implementation: "Implementação",
      technologies: "Tecnologias",
      status: "Situação atual",
      results: "Resultados documentados",
      limitations: "Limitações e próximos passos",
    },
    planned: "planejado",
    redirectNotice: "Esta página mudou de endereço:",
    plannedDecisions: "Decisões de desenho (planejadas)",
    plannedImplementation: "Escopo planejado",
    candidateStack: "Stack candidata",
    next: "Próximo caso",
    metaTitleSuffix: "Estudo de caso | Vinicius Sartori",
    conceptTitleSuffix: "Conceito | Vinicius Sartori",
  },
  projects: [
    {
      id: "condominium",
      name: "Plataforma de Gestão Condominial",
      shortName: "Gestão Condominial",
      category: "Plataforma operacional · SaaS multi-inquilino",
      type: "Projeto independente",
      tagline:
        "Estoque, compras e operação do dia a dia para condomínios residenciais — com isolamento entre condomínios garantido pelo próprio banco de dados.",
      seoDescription:
        "Estudo de caso: plataforma multi-inquilino de gestão condominial em Supabase — isolamento por RLS, escrita só via RPC, estoque por lotes e aprovação de compras.",
      context:
        "Um condomínio residencial controlava o estoque de manutenção e as compras com um primeiro aplicativo de estoque. Ele funcionava, mas guardava o saldo como um número editável, não tinha trilha de aprovação e havia crescido além do desenho original.",
      problem:
        "Os saldos podiam se afastar da realidade, as compras não tinham histórico de aprovação e registros mudavam sem deixar rastro. O síndico precisava de controle, a comissão de visibilidade e os moradores de informação — cada um com permissões diferentes, em mais de um condomínio.",
      objective:
        "Evoluir o aplicativo para uma plataforma operacional em que o estoque sempre derive de registros verificáveis, as compras sigam um fluxo de aprovação e cada papel veja exatamente o que deve ver.",
      solution:
        "Uma aplicação web estática em módulos ES puros, apoiada no Supabase. Toda mudança de estoque passa por funções no banco que rodam em uma única transação; o navegador não tem permissão de escrita direta em lotes, movimentações ou auditoria. A Row Level Security isola cada condomínio.",
      architectureCaption:
        "O cliente nunca grava estoque diretamente: ele chama funções RPC que validam papel, condomínio e saldo dentro de uma única transação.",
      flowTitle: "Fluxo de compras e estoque",
      flowCaption:
        "A compra é separada do recebimento. Recebimentos criam lotes; saídas consomem o lote que vence primeiro (FEFO) ou o mais antigo (FIFO).",
      contribution:
        "Projeto independente: requisitos e um plano técnico escrito, submetido à aprovação do cliente, modelo de dados, políticas de segurança, implementação, testes e publicação.",
      decisions: [
        {
          title: "Estoque é resultado, nunca um campo",
          body: "O saldo de um item é a soma dos seus lotes, calculada em uma view. Não existe número de estoque editável à mão.",
        },
        {
          title: "Um livro-razão imutável",
          body: "Movimentações nunca são alteradas nem apagadas. Erros se corrigem com estorno ou ajuste justificado, que referenciam o registro original.",
        },
        {
          title: "O banco é a última linha de defesa",
          body: "Permissões, saldo suficiente, condomínio e quantidades positivas são validados no banco. Chaves estrangeiras compostas (item + condomínio) impedem referências cruzadas entre condomínios.",
        },
        {
          title: "Operações idempotentes e seguras contra concorrência",
          body: "Operações sensíveis levam chave de idempotência e trava, para que um clique duplo nunca duplique uma movimentação.",
        },
        {
          title: "Sem build, dependências fixadas",
          body: "Módulos ES puros combinam com hospedagem estática. Bibliotecas de terceiros ficam em vendor/ com soma SHA-256, sob uma política de segurança de conteúdo rígida — sem eval e sem scripts em linha.",
        },
        {
          title: "Convivência antes da virada",
          body: "As tabelas novas convivem com o modelo antigo, e o aplicativo atual continua funcionando. Remover o legado é uma migration separada, que exige aprovação explícita.",
        },
      ],
      security: [
        "Row Level Security isola cada condomínio; chaves estrangeiras compostas impedem referências cruzadas entre condomínios.",
        "Quatro papéis, com permissões garantidas no banco — não apenas na interface.",
        "O navegador não grava lotes, movimentações nem auditoria diretamente; toda mudança passa por funções RPC.",
        "Política de segurança de conteúdo rígida, bibliotecas em vendor/ com soma SHA-256 e escape de todo texto do usuário — uma auditoria automática bloqueia HTML sem escape.",
        "Notas fiscais em armazenamento privado.",
      ],
      delivery: [
        "Hospedagem estática compatível com GitHub Pages: módulos ES puros, sem etapa de build.",
        "22 migrations SQL versionadas, todas seguras para reexecução.",
        "Auditoria estática de segurança, testes de unidade, testes de navegador com Playwright e Supabase simulado, cenários SQL e teste de concorrência em um Postgres descartável.",
      ],
      implementation: [
        "Quatro papéis: superadmin, síndico, gestor de estoque e morador.",
        "Estoque por lotes com validade, custo e origem; baixa automática FEFO / FIFO sem saldo negativo.",
        "Fluxo de compras: rascunho → aprovação do síndico → pedido → recebimento parcial ou total em vários lotes; notas fiscais em armazenamento privado.",
        "Serviços contratados e pagamentos, notas fiscais retroativas, comunicados com controle de leitura, atas, prestadores recomendados, torres e apartamentos.",
        "Painel e relatórios (Chart.js): itens críticos, vencimentos, compras pendentes, gastos e cobertura de estoque.",
      ],
      limitations: [
        "A nova versão ainda roda em paralelo à antiga; a virada — incluindo uma migration irreversível que remove o legado — está pendente.",
        "Plano gratuito do Supabase: o projeto pausa por inatividade, o armazenamento é limitado a 1 GB e o envio de convites por e-mail tem limite por hora.",
        "A conferência física de estoque ficou fora desta rodada (a tabela de ajustes já a suporta).",
        "Ainda não há métricas de uso publicadas.",
      ],
      status: {
        label: "Em desenvolvimento ativo",
        detail: "A nova versão roda em paralelo à antiga. A virada definitiva é uma etapa separada e planejada.",
      },
      results: [
        "As funcionalidades acima estão implementadas na nova versão do aplicativo.",
        "Uma suíte de testes automatizados que nunca toca o banco de produção.",
        "Modelo de permissões, mapa de testes e roteiro da virada documentados.",
      ],
    },
    {
      id: "medical",
      name: "Site Profissional Médico e Plataforma de Conteúdo",
      shortName: "Plataforma Institucional Médica",
      category: "Produto digital · Integração de sistemas",
      type: "Projeto independente",
      tagline:
        "Um site institucional estático e rápido que o próprio dono consegue atualizar — e que se publica sozinho por um pipeline orientado a eventos.",
      seoDescription:
        "Estudo de caso: site médico estático em Next.js no GitHub Pages, republicado automaticamente por um gatilho do Supabase que aciona o GitHub Actions.",
      context:
        "Um médico especialista precisava de um site institucional: áreas de atuação, consultas, publicações e contatos — escrito dentro das regras de publicidade do Conselho Federal de Medicina.",
      problem:
        "Hospedagem estática é rápida, barata e segura, mas um site estático costuma exigir um desenvolvedor para cada mudança de texto. O consultório precisava atualizar contatos e avisos temporários por conta própria, sem manter um servidor.",
      objective:
        "Manter o site totalmente estático no GitHub Pages e, ao mesmo tempo, oferecer um pequeno painel administrativo cujas mudanças sejam publicadas automaticamente.",
      solution:
        "Um export estático em Next.js cujo conteúdo editável fica no Supabase. No build, o site incorpora um snapshot da tabela de conteúdo. Quando algo muda no painel, um gatilho no banco chama a API do GitHub para disparar o workflow de publicação, que reconstrói e republica o site.",
      architectureCaption:
        "Salvar no painel nunca espera pelo deploy: o gatilho faz uma chamada HTTP assíncrona e o GitHub Actions cuida do resto.",
      flowTitle: "Pipeline de publicação de conteúdo",
      flowCaption:
        "De uma mudança no painel a uma nova versão estática no ar — sem ninguém rodar um deploy à mão.",
      contribution:
        "Projeto independente: arquitetura, implementação, pipeline de publicação, testes e publicação. O conteúdo e as aprovações vêm do consultório.",
      decisions: [
        {
          title: "Estático por padrão",
          body: "output: export com base path configurável, para que o mesmo build funcione em um subcaminho do GitHub Pages ou em domínio próprio.",
        },
        {
          title: "Publicação orientada a eventos",
          body: "Um gatilho no Postgres usa pg_net para chamar o workflow_dispatch de forma assíncrona. O token do GitHub fica no Supabase Vault, nunca no código.",
        },
        {
          title: "Falhar alto no CI",
          body: "Se o snapshot de conteúdo não puder ser lido durante o build no CI, o build é interrompido em vez de publicar dados desatualizados. Localmente, usa os valores do código.",
        },
        {
          title: "Validação no banco",
          body: "Os blocos de conteúdo são validados por uma função SQL — campos permitidos, tipos, formato de telefone — e protegidos por RLS. O painel é uma conveniência, não a proteção.",
        },
        {
          title: "Trava de publicação",
          body: "Uma verificação bloqueia a publicação enquanto houver marcadores de conteúdo pendente no build; a indexação só é liberada por uma flag explícita.",
        },
        {
          title: "Rebuilds agendados",
          body: "Dois builds agendados por dia atualizam o conteúdo e mantêm ativo o banco do plano gratuito.",
        },
      ],
      security: [
        "Os blocos de conteúdo são validados por uma função SQL e protegidos por RLS; só administradores autenticados editam.",
        "O token do GitHub fica no Supabase Vault, nunca no repositório.",
        "Trava de publicação: o build falha enquanto houver marcadores de conteúdo pendente, e a indexação só é liberada por uma flag explícita.",
      ],
      delivery: [
        "Export estático para o GitHub Pages com base path configurável.",
        "CI a cada push: TypeScript, ESLint, testes de unidade com Vitest e testes de navegação com Playwright, depois build e publicação.",
        "Rebuilds disparados por mudanças de conteúdo (gatilho no banco → workflow_dispatch) e duas vezes por dia, por agendamento.",
        "Testes de banco para RLS e validação dos avisos.",
      ],
      implementation: [
        "Páginas de início, sobre, áreas de atuação, consultas, publicações e privacidade; sitemap e robots gerados no build.",
        "Área administrativa com Supabase Auth e editor de avisos temporários com data de início e fim.",
      ],
      limitations: [
        "Ainda não está no ar: textos finais, contatos, foto e publicações confirmadas dependem do consultório.",
        "Dados estruturados, imagem de compartilhamento e favicon finais entram com o conteúdo real.",
        "A política de privacidade ainda será redigida, com revisão da LGPD.",
        "Uma mudança de conteúdo precisa de um novo build estático para aparecer — minutos, não segundos.",
      ],
      status: {
        label: "Pré-lançamento",
        detail: "A base técnica está concluída. Faltam o conteúdo final e as aprovações do consultório antes da publicação.",
      },
      results: [
        "Pipeline de publicação implementado de ponta a ponta: painel → banco → GitHub Actions → GitHub Pages.",
        "Uma barreira automática de qualidade a cada push: tipos, lint, testes de unidade e de navegador.",
      ],
    },
    {
      id: "community",
      name: "Portal de Comunidade e Associação",
      shortName: "Portal da Comunidade",
      category: "Plataforma web · Controle de acesso",
      type: "Projeto independente",
      tagline:
        "Um portal de integrantes para a comunidade de uma república universitária fundada em 2007 — memória, networking e a operação da associação, com privacidade desde o desenho.",
      seoDescription:
        "Estudo de caso: portal de integrantes em Next.js e Supabase, com controle de acesso em três camadas, privacidade por seção e testes pgTAP de RLS.",
      context:
        "Uma república universitária fundada em 2007 reúne gerações de ex-moradores espalhados por cidades e carreiras. A comunidade queria um único lugar para sua memória, sua rede e sua associação.",
      problem:
        "Reunir integrantes de épocas diferentes exige cuidado com dados pessoais: quem pode ver quem, o que cada pessoa escolhe compartilhar e quem pode administrar dinheiro e conteúdo.",
      objective:
        "Um portal com solicitação e aprovação de acesso, controles de privacidade por seção e módulos para eventos, finanças da associação e a história da comunidade.",
      solution:
        "Uma aplicação Next.js (App Router) com Supabase Auth, PostgreSQL com RLS e Storage. A segurança funciona em três camadas: um proxy que renova a sessão e barra acessos anônimos, verificações de permissão no servidor nos layouts e a RLS como autoridade final.",
      architectureCaption:
        "Três camadas independentes de controle de acesso — se uma falhar, a próxima ainda segura. O banco tem a palavra final.",
      flowTitle: "Ciclo de acesso",
      flowCaption: "Ninguém entra por padrão: o acesso é solicitado, analisado e concedido por convite.",
      contribution:
        "Projeto independente com desenvolvimento assistido por IA: defini escopo, modelo de acesso e regras de privacidade, e conduzi, revisei, testei e publiquei uma implementação escrita em grande parte com o Claude, assistente de programação com IA.",
      decisions: [
        {
          title: "Defesa em profundidade",
          body: "Barreira de rotas no proxy, checagem de permissão nos layouts do servidor e RLS no Postgres. Cada camada assume que a anterior pode falhar.",
        },
        {
          title: "Organizado por domínio",
          body: "O código é agrupado por funcionalidade — acesso, perfis, eventos, associação, loja, museu, vagas — cada uma com suas actions, schemas Zod e componentes.",
        },
        {
          title: "Privacidade por seção do perfil",
          body: "Cada integrante escolhe a visibilidade de cada parte do perfil, incluindo vários períodos de moradia e redes sociais.",
        },
        {
          title: "Testar que o acesso é negado",
          body: "Testes pgTAP garantem que acessos não autorizados falham. O CI os executa na imagem oficial do Supabase.",
        },
        {
          title: "Testes de banco sem Docker",
          body: "Um shim imita objetos do Supabase (auth.users, auth.uid(), storage) em um Postgres 16 comum, para que os testes de RLS rodem também localmente.",
        },
      ],
      security: [
        "Três camadas independentes: barreira de rotas no proxy, checagem de permissão no servidor e RLS como autoridade final.",
        "Acesso por solicitação, análise e convite — ninguém entra por padrão.",
        "Cada integrante escolhe a visibilidade de cada seção do próprio perfil.",
        "Imagens enviadas são reprocessadas no servidor: o que não é imagem é recusado, o tamanho é limitado e o arquivo convertido para WebP.",
        "Testes pgTAP garantem que acessos não autorizados são negados.",
      ],
      delivery: [
        "31 migrations versionadas.",
        "CI: lint, tipos, testes de unidade com Vitest, build e testes de banco com pgTAP na imagem oficial do Supabase.",
        "Testes de RLS locais em Postgres 16 comum, por meio de um shim — sem Docker.",
        "Hospedagem na Vercel.",
      ],
      implementation: [
        "Solicitação, aprovação e convite de acesso; perfis com configurações de privacidade.",
        "Diretório, eventos, caixinha, loja com carrinho e PIX, comunicados e histórias.",
        "Um “museu” de fotos, divulgação de vagas e flyer por evento.",
        "Módulo da associação: adesão, mensalidades por PIX, livro-caixa e documentos.",
      ],
      limitations: [
        "A Etapa 3 (MVP) ainda está em andamento.",
        "O backup automático ainda não foi implementado; está previsto para uma etapa posterior.",
        "A publicação do módulo de loja depende de uma decisão sobre a hospedagem.",
        "Parte da limpeza de dados antigos roda conforme o uso, e não por agendamento, até o plano permitir pg_cron.",
      ],
      status: {
        label: "MVP em andamento",
        detail: "A Etapa 3 (MVP) está em andamento; os módulos acima estão marcados como prontos no repositório.",
      },
      results: [
        "Módulos acima implementados e cobertos pelo CI.",
        "Testes de acesso negado no nível do banco para dados restritos.",
      ],
    },
    {
      id: "integration-hub",
      name: "Hub de Integração de Negócios",
      shortName: "Business Integration Hub",
      category: "Conceito · Demonstrador",
      type: "Conceito / demonstrador",
      tagline:
        "Um demonstrador para conectar aplicações de negócio por meio de APIs, webhooks e fluxos observáveis.",
      seoDescription:
        "Conceito: desenho de um hub de integração — APIs REST, webhooks assinados, fluxos idempotentes com fila, logs e monitoramento. Ainda não implementado.",
      context:
        "Pequenas e médias empresas costumam conectar suas ferramentas com scripts improvisados e automações ponto a ponto. Quando algo falha, é difícil saber onde.",
      problem:
        "Integrações ponto a ponto se multiplicam sem log compartilhado, retentativas ou controle de acesso — e ficam invisíveis até quebrarem.",
      objective:
        "Desenhar um hub que receba eventos, os encaminhe por fluxos configuráveis e registre cada execução — para praticar e demonstrar padrões de integração de ponta a ponta.",
      solution:
        "Um gateway de entrada que autentica e normaliza eventos, uma fila entre a recepção e a execução, um motor de workflows com retentativas, um log de execução com status por etapa, monitoramento e controle de acesso a conexões e segredos.",
      architectureCaption: "Arquitetura pretendida. Linhas tracejadas indicam caminhos de observabilidade e controle.",
      flowTitle: "Ciclo de vida pretendido de um evento",
      flowCaption: "Todo evento recebido é verificado, deduplicado, enfileirado, executado com retentativas e registrado.",
      contribution:
        "Concepção e desenho de arquitetura. Nenhum código foi publicado ainda.",
      decisions: [
        {
          title: "Idempotência em todo evento recebido",
          body: "Provedores de webhook reenviam. Uma chave de deduplicação por evento impede que uma retentativa execute o fluxo duas vezes.",
        },
        {
          title: "Webhooks assinados",
          body: "Verificação de assinatura HMAC antes de qualquer coisa ser aceita no sistema.",
        },
        {
          title: "Separar recepção de execução",
          body: "Uma fila (padrão outbox) para que destinos lentos ou com falha nunca bloqueiem a recepção de novos eventos.",
        },
        {
          title: "Observável desde o desenho",
          body: "Logs estruturados de execução e métricas desde o primeiro dia, e não adicionados depois do primeiro incidente.",
        },
      ],
      security: [
        "Verificação de assinatura HMAC em todo webhook recebido.",
        "Segredos guardados em um cofre, nunca nas definições de fluxo.",
        "Acesso às conexões por papel, com conectores de privilégio mínimo.",
      ],
      delivery: [
        "Serviços em contêineres (Docker) com pipeline de CI/CD.",
        "Métricas no Prometheus e painéis no Grafana.",
      ],
      implementation: [
        "Endpoints de API REST e de webhooks.",
        "Automação de fluxos com etapas configuráveis.",
        "Conectores de aplicações.",
        "Logs de execução e painéis de monitoramento.",
        "Controle de acesso a conexões e segredos.",
      ],
      limitations: [
        "Não implementado: esta página descreve apenas o desenho pretendido.",
        "A stack candidata ainda não foi validada na prática.",
      ],
      status: {
        label: "Conceito",
        detail: "Arquitetura e escopo definidos. A implementação ainda não foi publicada.",
      },
      results: [],
    },
  ],
};
