import type { Dictionary } from "../types";

export const ptBR: Dictionary = {
  locale: "pt-BR",
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",
  meta: {
    title: "Vinicius Campanha Sartori — Solutions Engineer · Integração de Sistemas, Cloud e Automação",
    description:
      "Engenheiro de Computação (UNICAMP) atuando em desenho de soluções, integração de sistemas, cloud e automação — com visão de negócios e de pessoas construída no empreendedorismo e em anos de recrutamento de tecnologia.",
    keywords: [
      "Solutions Engineer",
      "Integração de sistemas",
      "Integração de APIs",
      "Soluções em nuvem",
      "Implementation Engineer",
      "Consultor técnico",
      "Engenheiro de Computação",
      "Automação",
      "AWS",
      "Supabase",
      "Next.js",
    ],
  },
  ids: {
    about: "sobre",
    capabilities: "competencias",
    work: "projetos",
    technology: "tecnologia",
    experience: "trajetoria",
    principles: "como-penso",
    contact: "contato",
  },
  nav: {
    skip: "Pular para o conteúdo",
    home: "Início",
    about: "Sobre",
    capabilities: "Competências",
    work: "Projetos",
    experience: "Trajetória",
    contact: "Contato",
    menu: "Menu",
    close: "Fechar",
    language: "Idioma",
    switchTo: "View in English",
  },
  hero: {
    role: "Solutions Engineer",
    roleSub: "Integração de Sistemas · Cloud e Automação",
    headline: "Conectando desafios de negócio a soluções tecnológicas.",
    supporting:
      "Engenheiro de Computação que combina tecnologia, pensamento sistêmico e visão de negócios para desenhar e implementar soluções digitais relevantes.",
    ctaPrimary: "Conheça meus projetos",
    ctaSecondary: "Vamos conversar",
    availability: "Disponível para novas oportunidades",
    availabilityDetail: "Soluções · Integração · Implantação",
    facts: [
      "Engenharia de Computação — UNICAMP",
      "Cofundador — Raiz Universitária",
      "7+ anos em recrutamento de tecnologia",
    ],
    diagramTitle: "Diagrama de contexto do sistema",
    diagramDescription:
      "Um diagrama de arquitetura que conecta Negócio a Aplicações e Dados, Aplicações a APIs, e APIs a Cloud, Automação e Infraestrutura.",
    figure: "FIG. 01 — CONTEXTO DO SISTEMA",
  },
  about: {
    label: "Sobre",
    code: "CONTEXTO",
    title: "Tecnologia é mais do que código. É entender como tudo se conecta.",
    lead:
      "Meu caminho não foi uma linha reta dentro do software — e é exatamente isso que define como eu trabalho com ele.",
    paragraphs: [
      "Sou formado em Engenharia de Computação pela UNICAMP, onde aprendi a enxergar a tecnologia como um conjunto de sistemas interdependentes: hardware, software e as restrições que os mantêm unidos. Aprofundei esse olhar com uma pós-graduação em Engenharia de Hardware e, mais tarde, um MBA em Gestão de Pessoas e Performance.",
      "Fui cofundador da Raiz Universitária, uma startup que realizou 80 eventos em cinco universidades, formou uma comunidade de mais de 10 mil estudantes e conquistou o terceiro lugar no Desafio UNICAMP de Inovação Tecnológica. Ali aprendi o que nenhum curso ensinou: transformar uma ideia em algo que as pessoas realmente usam, com recursos limitados e prazos reais.",
      "Depois vieram tecnologia, telecomunicações e desenvolvimento de negócios — e mais de sete anos em recrutamento especializado em tecnologia, incluindo a liderança de equipes de recrutamento. Esse trabalho me colocou em conversa constante com engenheiros e gestores de contratação sobre stacks, arquiteturas e o que um time realmente precisa. Foi onde aprendi a traduzir entre profundidade técnica e intenção de negócio.",
      "Hoje eu construo. Projetos independentes — uma plataforma operacional multi-inquilino, um site médico com conteúdo gerenciável, um portal de comunidade — são onde aplico engenharia, integração e visão de produto de ponta a ponta: da descoberta de requisitos às políticas de segurança do banco e aos pipelines de publicação.",
    ],
    factsTitle: "Em resumo",
    facts: [
      { k: "Graduação", v: "Engenharia de Computação — UNICAMP" },
      { k: "Pós-graduação", v: "Engenharia de Hardware" },
      { k: "MBA", v: "Gestão de Pessoas e Performance" },
      { k: "Empreendedorismo", v: "Cofundador, Raiz Universitária" },
      { k: "Recrutamento", v: "7+ anos em tecnologia, com liderança de equipe" },
      { k: "Agora", v: "Projetos independentes de tecnologia" },
    ],
  },
  capabilities: {
    label: "Competências",
    code: "MAPA DE COMPETÊNCIAS",
    title: "Quatro áreas onde a engenharia encontra o negócio.",
    intro:
      "A profundidade varia entre elas, e prefiro mostrar a afirmar — cada área indica de onde vem a experiência.",
    items: [
      {
        id: "architecture",
        title: "Arquitetura de Soluções",
        summary:
          "Entender requisitos, analisar restrições, desenhar arquiteturas e avaliar escolhas de tecnologia.",
        keywords: ["Requisitos", "Restrições", "Trade-offs", "Registro de decisões"],
        evidenceLabel: "Aplicado em",
        evidence:
          "Um plano técnico escrito, com decisões explícitas e aprovadas antes da implementação — plataforma de gestão condominial.",
      },
      {
        id: "integration",
        title: "Integração de Sistemas",
        summary:
          "APIs, webhooks, interoperabilidade entre sistemas, automação de fluxos e comunicação entre aplicações.",
        keywords: ["REST", "Webhooks", "Eventos", "Automação de fluxos"],
        evidenceLabel: "Aplicado em",
        evidence:
          "Um gatilho no banco que chama a API do GitHub para reconstruir e republicar um site estático quando o conteúdo muda — site médico.",
      },
      {
        id: "cloud",
        title: "Cloud e Infraestrutura",
        summary:
          "Computação em nuvem, automação de infraestrutura, contêineres, infraestrutura como código e fundamentos de cloud.",
        keywords: ["CI/CD", "Postgres gerenciado", "Hospedagem estática", "IaC"],
        evidenceLabel: "Aplicado em / em estudo",
        evidence:
          "CI/CD com GitHub Actions, hospedagem no GitHub Pages e na Vercel, Postgres gerenciado no Supabase. AWS, Terraform e Ansible: em estudo.",
      },
      {
        id: "business",
        title: "Tecnologia e Negócios",
        summary:
          "Descoberta de requisitos, gestão de stakeholders, visão de produto, análise de negócios e comunicação técnica.",
        keywords: ["Descoberta", "Stakeholders", "Produto", "Comunicação"],
        evidenceLabel: "Vem de",
        evidence:
          "A cofundação de uma startup, mais de sete anos traduzindo entre times de engenharia e o negócio, e a liderança de equipes de recrutamento.",
      },
    ],
  },
  work: {
    label: "Projetos",
    code: "CASOS",
    title: "Projetos que nasceram de um problema operacional — não de uma escolha de tecnologia.",
    intro:
      "Cada caso é documentado a partir do seu repositório: o que foi construído, como, e o que ainda está em andamento. O conceito está identificado como conceito.",
    viewCase: "Ver estudo de caso",
    status: "Situação",
    stack: "Stack",
    concept: "Conceito",
    built: "Construído",
  },
  technology: {
    label: "Tecnologia",
    code: "TAXONOMIA DA STACK",
    title: "Um mapa de ferramentas — e de como eu as conheço.",
    intro:
      "Sem barras de porcentagem. Cada ferramenta é marcada pela evidência por trás dela: aplicada nos projetos acima, ou em estudo e prática de laboratório.",
    applied: "Aplicado em projetos",
    study: "Estudo e laboratório",
    all: "Todas",
    filterLabel: "Filtrar por evidência",
    groups: [
      {
        id: "cloud",
        title: "Cloud e hospedagem",
        items: [
          { name: "AWS", status: "study" },
          { name: "GitHub Pages", status: "applied", evidence: "Site médico, plataforma condominial" },
          { name: "Vercel", status: "applied", evidence: "Portal de comunidade" },
        ],
      },
      {
        id: "infra",
        title: "Infraestrutura e automação",
        items: [
          { name: "CI/CD · GitHub Actions", status: "applied", evidence: "Pipelines de teste e publicação" },
          { name: "Linux", status: "applied", evidence: "Ambiente do dia a dia" },
          { name: "Docker", status: "applied", evidence: "Supabase local para testes de banco" },
          { name: "Terraform", status: "study" },
          { name: "Ansible", status: "study" },
        ],
      },
      {
        id: "integration",
        title: "Integração e desenvolvimento",
        items: [
          { name: "REST APIs", status: "applied", evidence: "PostgREST / RPC, API REST do GitHub" },
          { name: "Webhooks e eventos", status: "applied", evidence: "workflow_dispatch a partir de um gatilho no banco" },
          { name: "JavaScript / TypeScript", status: "applied", evidence: "Todos os projetos" },
          { name: "Next.js · React", status: "applied", evidence: "Site médico, portal de comunidade" },
          { name: "Node.js", status: "applied", evidence: "Scripts de build e verificação" },
          { name: "Python", status: "applied", evidence: "Ferramentas de teste, auditoria de segurança" },
        ],
      },
      {
        id: "data",
        title: "Dados e backend",
        items: [
          { name: "PostgreSQL", status: "applied", evidence: "Esquemas, views, funções, RLS" },
          { name: "Supabase", status: "applied", evidence: "Auth, Storage, Vault, pg_net" },
        ],
      },
      {
        id: "quality",
        title: "Qualidade",
        items: [
          { name: "Playwright", status: "applied", evidence: "Testes de navegador" },
          { name: "Vitest", status: "applied", evidence: "Testes de unidade" },
          { name: "pgTAP", status: "applied", evidence: "Testes de acesso negado (RLS)" },
        ],
      },
      {
        id: "observability",
        title: "Observabilidade",
        items: [
          { name: "Prometheus", status: "study" },
          { name: "Grafana", status: "study" },
        ],
      },
    ],
  },
  journey: {
    label: "Trajetória",
    code: "PERCURSO",
    title: "Um percurso entre engenharia, negócios e pessoas.",
    intro:
      "Não foi uma linha reta — são quatro capítulos, e cada um acrescentou uma camada à forma como entendo projetos de tecnologia.",
    contributionsLabel: "O que acrescentou",
    chapters: [
      {
        id: "entrepreneurship",
        index: "I",
        title: "Empreendedorismo",
        period: "Raiz Universitária",
        organizations: [{ name: "Raiz Universitária", role: "Cofundador" }],
        body:
          "Cofundar uma startup significou fazer um pouco de tudo — produto, operação, eventos, pessoas — e aprender a entregar com recursos limitados.",
        highlights: [
          { value: "80", label: "eventos" },
          { value: "5", label: "universidades" },
          { value: "10 mil+", label: "estudantes na comunidade" },
          { value: "3º", label: "lugar — Desafio UNICAMP de Inovação Tecnológica" },
        ],
        contributions: ["Execução com restrições", "Transformar ideia em adoção", "Liderança de time fundador"],
      },
      {
        id: "telecom",
        index: "II",
        title: "Tecnologia, telecom e negócios",
        period: "Trópico Telecomunicações",
        organizations: [{ name: "Trópico Telecomunicações" }],
        body:
          "Experiência em tecnologia, telecomunicações e desenvolvimento de negócios: ver de perto como produtos de infraestrutura encontram decisões comerciais.",
        contributions: ["Entendimento de negócio", "Contexto de infraestrutura", "Desenvolvimento de negócios"],
      },
      {
        id: "recruitment",
        index: "III",
        title: "Recrutamento de tecnologia e liderança",
        period: "7+ anos",
        organizations: [
          { name: "GoBots" },
          { name: "Share RH" },
          { name: "Pier Digital" },
          { name: "Page Outsourcing / Michael Page" },
          { name: "Share People Hub" },
        ],
        body:
          "Mais de sete anos em recrutamento especializado em tecnologia, incluindo a liderança de equipes de recrutamento. Não é engenharia de software — mas exige letramento técnico: entender stacks, arquiteturas e senioridade o suficiente para avaliar aderência, e traduzir entre o que os times de engenharia precisam e o que o negócio pode oferecer.",
        contributions: ["Comunicação técnica", "Gestão de stakeholders", "Descoberta de requisitos", "Liderança de equipe"],
      },
      {
        id: "independent",
        index: "IV",
        title: "Projetos independentes de tecnologia",
        period: "Agora",
        organizations: [{ name: "Projetos independentes" }],
        body:
          "Desenhar e construir aplicações reais de ponta a ponta — requisitos, modelagem de dados, políticas de segurança, integrações, testes e publicação.",
        contributions: ["Integração de sistemas", "Cloud e CI/CD", "Visão de produto"],
      },
    ],
  },
  principles: {
    label: "Como penso",
    code: "PRINCÍPIOS DE TRABALHO",
    title: "Quatro princípios que guiam meu trabalho.",
    items: [
      {
        title: "Entender antes de construir.",
        body:
          "Muitos projetos fracassam resolvendo muito bem o problema errado. Começo pelas pessoas, pelo processo e pelas restrições — e só depois pela stack.",
      },
      {
        title: "Arquitetura antes da implementação.",
        body:
          "Um plano curto com decisões explícitas custa menos do que reescrever. Registro o que decidimos, por quê, e o que nos faria mudar de ideia.",
      },
      {
        title: "Tecnologia alinhada ao negócio.",
        body:
          "Toda escolha técnica tem um custo, um risco e um responsável. A solução certa é a que o negócio consegue sustentar — não a mais impressionante.",
      },
      {
        title: "Pessoas fazem as soluções acontecerem.",
        body:
          "Os anos em recrutamento me ensinaram que sistemas são construídos, operados e usados por pessoas. Comunicação clara faz parte da arquitetura.",
      },
    ],
  },
  contact: {
    label: "Contato",
    code: "INTERFACE",
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
      decisions: "Decisões técnicas",
      implementation: "Implementação",
      technologies: "Tecnologias",
      status: "Situação atual",
      results: "Resultados documentados",
    },
    plannedDecisions: "Decisões de desenho (planejadas)",
    plannedImplementation: "Escopo planejado",
    candidateStack: "Stack candidata",
    next: "Próximo caso",
    figure: "FIG.",
    metaTitleSuffix: "Estudo de caso — Vinicius Campanha Sartori",
  },
  projects: [
    {
      id: "condominium",
      name: "Plataforma de Gestão Condominial",
      shortName: "Plataforma condominial",
      category: "Plataforma operacional · SaaS multi-inquilino",
      type: "Projeto independente",
      tagline:
        "Estoque, compras e operação do dia a dia para condomínios residenciais — com isolamento entre condomínios garantido pelo próprio banco de dados.",
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
      implementation: [
        "Quatro papéis: superadmin, síndico, gestor de estoque e morador.",
        "Estoque por lotes com validade, custo e origem; baixa automática FEFO / FIFO sem saldo negativo.",
        "Fluxo de compras: rascunho → aprovação do síndico → pedido → recebimento parcial ou total em vários lotes; notas fiscais em armazenamento privado.",
        "Serviços contratados e pagamentos, notas fiscais retroativas, comunicados com controle de leitura, atas, prestadores recomendados, torres e apartamentos.",
        "Painel e relatórios (Chart.js): itens críticos, vencimentos, compras pendentes, gastos e cobertura de estoque.",
        "22 migrations SQL versionadas, todas seguras para reexecução.",
        "Camadas de teste: auditoria estática de segurança, testes de unidade, testes de navegador com Playwright e Supabase simulado, cenários SQL e teste de concorrência em um Postgres descartável.",
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
      shortName: "Site médico",
      category: "Produto digital · Integração de sistemas",
      type: "Projeto independente",
      tagline:
        "Um site institucional estático e rápido que o próprio dono consegue atualizar — e que se publica sozinho por um pipeline orientado a eventos.",
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
      implementation: [
        "Páginas de início, sobre, áreas de atuação, consultas, publicações e privacidade; sitemap e robots gerados no build.",
        "Área administrativa com Supabase Auth e editor de avisos temporários com data de início e fim.",
        "Pipeline de CI: TypeScript, ESLint, testes de unidade (Vitest) e testes de navegação com Playwright em um build com base path simulado — depois build de produção e publicação.",
        "Testes de banco para RLS e validação dos avisos.",
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
      shortName: "Portal de comunidade",
      category: "Plataforma web · Controle de acesso",
      type: "Projeto independente",
      tagline:
        "Um portal de integrantes para a comunidade de uma república universitária fundada em 2007 — memória, networking e a operação da associação, com privacidade desde o desenho.",
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
      implementation: [
        "Solicitação, aprovação e convite de acesso; perfis com configurações de privacidade.",
        "Diretório, eventos, caixinha, loja com carrinho e PIX, comunicados e histórias.",
        "Um “museu” de fotos, divulgação de vagas e flyer por evento.",
        "Módulo da associação: adesão, mensalidades por PIX, livro-caixa e documentos.",
        "31 migrations versionadas; CI com lint, tipos, testes de unidade, build e testes de banco.",
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
      shortName: "Hub de integração",
      category: "Conceito · Demonstrador",
      type: "Conceito / demonstrador",
      tagline:
        "Um demonstrador para conectar aplicações de negócio por meio de APIs, webhooks e fluxos observáveis.",
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
      implementation: [
        "Endpoints de API REST e de webhooks.",
        "Automação de fluxos com etapas configuráveis.",
        "Conectores de aplicações.",
        "Logs de execução e painéis de monitoramento.",
        "Controle de acesso a conexões e segredos.",
      ],
      status: {
        label: "Conceito",
        detail: "Arquitetura e escopo definidos. A implementação ainda não foi publicada.",
      },
      results: [],
    },
  ],
};
