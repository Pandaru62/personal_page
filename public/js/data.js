// Menu title

const menu = [
    ['#bio', 'About me', 'A propos de Moi'],
    ['#skills', 'Skills', 'Compétences'],
    ['#portfolio', 'Portfolio', 'Portfolio'],
    ['#contact', 'Contact', 'Me contacter'],
    ['./CV_dev.pdf', 'Resume', 'Mon CV']
]

const buttons = [
    ['webSkills', 'My Web Skills', 'Mes Compétences Web'],
    ['readBio', 'Read my bio', 'Lire ma bio'],
    ['findMore', 'Find out more', 'Voir plus'],
    ['visitWebsite', 'Visit website', 'Visiter le site'],
    ['emailSend', 'Send me an e-mail', 'Envoyer un mail']
];

const titles = [
    ['h1Intro',
    `I'm Loris Buchelet, <br>former English teacher<br> and Web Developer in training.`,
    `Je suis Loris Buchelet, <br>ex-professeur d'anglais<br> et Développeur Web en formation`
    ],

    ['h2Intro', 
    `Welcome to my personal page where you'll find my skills, project and resume.<br>
    Check my github, LinkedIn Page and feel free to  <a href="mailto:loris.buchelet@gmail.com">send me an e-mail</a>.`, 
    `Bienvenue sur ma page personnelle : retrouvez mes compétences, projets et mon CV.<br>
    Accédez à mon github, ma page LinkedIn et  <a href="mailto:loris.buchelet@gmail.com">contactez-moi par mail</a>.`
    ],

    ['h2Skills',
    'My skills',
    'Mes compétences'
    ],

    ['h3Skills',
    'Web development, design and project management',
    'Développement web, design et gestion de projet'
    ],

    ['h2Portfolio',
    'Personal and professional projects',
    'Projets personnels et professionnels'
    ],

    ['h3Portfolio',
    'My portfolio',
    'Mon portfolio'
    ],

    ['h2Contact',
    'Do you want to have a chat?',
    'Envie de parler ?'
    ],

    ['h3Contact',
    'Send me an e-mail.',
    'Envoyez-moi un mail.'
    ],
];

const projects = [
    [   'Project 1: Arcadia Zoo',
        'Projet 1: Zoo Arcadia',
        'This project, designed for my Study graduate developer training, implements a zoo website with a login access to zoo employees.',
        'Ce projet, réalisé pour ma certification Studi Graduate Developpeur, donne accès à un site web pour un zoo accessible à des employés.'
    ],
    [   'Project 2: Teacher Tool',
        'Projet 2 : Teacher Tool',
        'This project, designed for my Study graduate developer training, implements a system for teachers to add and access students\' marks',
        'Ce projet, réalisé pour ma certification Studi Graduate Developpeur, permet aux enseignants d\'ajouter des compétences des élèves pour suivre leurs classes.'
    ],
    [   'Project 3: Shiny Hunting',
        'This project, designed for my Studi graduate developer training, implements a checking list for Shiny Pokemon hunters.',
        'Ce projet, réalisé pour ma certification Studi Graduate Developpeur, donne accès à un check list des Pokémon chromatiques.'
    ]
]

const bio = [
    ['Biographie indisponible'],
    [
        `
        	I’m Loris Buchelet. I was born in 1994 and raised in the North of France where I spent my childhood and teenage years in the countryside. I have always been very involved in my studies, and I’ve grown interested in IT since I was young. That’s, by the way, at the age of 12 that I first discovered front-end languages like HTML and CSS through free online lessons and tutorials.<br>

	My dad worked as a primary school teacher and most likely influenced me into becoming a teacher. Since I literally fell in love with English language, I quickly paved my own path to achieve my dream of becoming an English teacher. I never gave up on computer studies, yet, as it kept finding a position in my daily life. I passed my baccalaureate (or A-level) in 2012 with flying colours and moved to Lille where I started my English degree at university. Three years later, I wanted to be more confident and fluent in English, and applied for the assistantship programme. I managed to get a position as a French assistant in a school in Newbury, not so far from Oxford, in England. This enriching experience allowed me to become more independent and taught me so much more than English in the end.<br>

	Moving back to France in June 2016, I was 100% sure about becoming an English teacher, so I went back to uni to finish my studies. I passed the competitive exam (CAPES) and my Master’s degree and became a teacher, as planned.<br>

	I was of course proud of fulfilling my dream and took my new position very seriously and with pleasure. Teaching is indeed a thrilling job. I managed to use my IT knowledges to make my lessons more cheerful and enjoyable to the pupils. I even took part in e-twinning projects and went abroad with Erasmus+. Unfortunately, I slowly became aware that, despite its advantages, being a teacher had its dark sides and failed to make sense out of my work. After seven years as an English teacher, I realised it was time I left this position and started something new. I wanted to achieve a new dream: becoming a web developer. <br>

	As such, I watched and read tutorials and started making small personal projects on my own, thanks to Openclassrooms. After a tough year as a teacher in 2023, I was determined to make it my last year as a teacher. I immediately looked for an online training that would allow me to keep my job as a teacher for the rest of the school year while working from home on weekends or whenever I had free time. I started my training on Studi with one final goal set to September 2024 : passing my Developer Graduate.<br>
 
	2023-2024 has been hard-work since I had to switch from one rôle to another. Paradoxically enough this has been one of the best year I had ever had as a teacher, probably due to the fact I knew it was the last one! I’ve always been extremely organised, but those last months probably taught me how to become even more organised.<br>

	By the end of May 2024, the National Board of Education agreed to let me leave my position as a teacher. That’s how I signed a mutually agreed termination of contract set to end at the end of August. <br>

	L’année scolaire 2023-2024 a ainsi été riche en travail puisqu’il m’a fallu jongler entre ma casquette de professeur (un rôle que j’ai tenu jusqu’au bout en restant professionnel et en gardant à coeur la réussite de mes élèves) et celle d’étudiant, le soir et le week-end. Si je suis, de base, une personne organisée, j’ai dû l’être encore plus pendant ces mois de formation.<br>

	Today, I’m working and hoping to add this Graduate as a new line on my resume. The exam is planned at the end of September. I’m currently looking for a block release training to set a first food in a company while sharpening my skills in Web dev.

        `
    ],
    [
        `
        	Né en juin 1994 et élevé dans la Thiérache, j’ai passé mon enfance et mon adolescence à la campagne. Très scolaire, je me suis toujours impliqué à fond dans mes études. Je suis depuis le plus jeune âge intéressé par l’informatique et c’est d’ailleurs au collège que je me suis intéressé à l’étude du HTML et du CSS grâce à des cours et tutoriels en libre accès (le Site du Zéro, à l’époque). <br>

        Fils d’un professeur des écoles, j’ai été très vite inspiré par l’enseignement et mon parcours m’a rapidement fait découvrir la langue anglaise pour laquelle je suis tombé amoureux. C’est ainsi tout naturellement que je me suis peu à peu formé en ce sens, sans pour autant négliger l’informatique qui a toujours gardé un place à côté. Après l’obtention de mon bac ES, en 2012, je me dirige en licence LLCER spécialité Anglais à Lille III. En 2015, je passe un an en tant qu’assistant de langue à Newbury, dans la partie ouest de l’Angleterre, non loin d’Oxford. Cette expérience enrichissante m’apprend autant l’autonomie que le goût du voyage et de l’aventure, sans oublier évidemment le perfectionnement linguistique. A mon retour, je m’essaie deux semaines en tant que professeur contractuel en remplacement en juin dans un collège pour me conforter une dernière fois dans mon choix. Puis en septembre 2016, j’intègre le master MEEF afin de devenir professeur d’anglais et je décroche le CAPES en juillet 2017. <br>

        Fier de ma réussite, j’ai à cœur de transmettre cette discipline à mes élèves. L’enseignement est un métier passionnant. Je n’hésite pas à utiliser mes compétences informatiques pour dynamiser mes cours et je participe à des projets e-twinning et erasmus + pour consolider mes compétences et enrichir mon enseignement. Je me rends malheureusement compte, peu à peu, qu’en dépit des avantages qu’elle confère, j’ai de plus en plus de mal à trouver du sens dans cette profession souvent idéalisée à tort. Après de longs moments de remise en question, et après sept ans en tant que professeur d’anglais, je prends la décision de quitter l’éducation nationale afin de réaliser un autre rêve : celui de devenir développeur web. <br>

        C’est ainsi en 2022 après avoir suivi des tutoriels, réalisé des petits projets en autonomie, notamment grâce à OpenClassrooms, que je me remets plus sérieusement dans l’apprentissage du développement web. Après une année difficile, j’en arrive à une conclusion : « Cette rentrée sera ma dernière », ai-je affirmé en août 2023. Dans la dynamique de la rentrée, je fais mes recherches en parallèle : je souhaite profiter de ma dernière année en tant qu’enseignant tout en me lançant dans une formation pour obtenir un premier diplôme de développeur web. J’élimine ainsi les formations qui requièrent du présentiel et opte pour la plateforme Studi qui me permet de travailler à mon rythme tout en m’imposant un objectif d’un an pour décrocher un Graduate Développeur Flutter. <br>

        L’année scolaire 2023-2024 a ainsi été riche en travail puisqu’il m’a fallu jongler entre ma casquette de professeur (un rôle que j’ai tenu jusqu’au bout en restant professionnel et en gardant à coeur la réussite de mes élèves) et celle d’étudiant, le soir et le week-end. Si je suis, de base, une personne organisée, j’ai dû l’être encore plus pendant ces mois de formation. <br>

        Fin mai 2024, j’obtiens le feu vert du rectorat qui autorise mon départ de l’éducation nationale en donnant un avis favorable à ma demande de rupture conventionnelle. C’est pour moi le signe que je prends la bonne décision. Je signe cette rupture conventionnelle en juin 2024 et profite du mois de juillet pour finaliser mes projets. <br>

        Aujourd’hui, j’espère décrocher ce Graduate : je passe l’oral de validation fin septembre. En attendant, je suis à la recherche d’une alternance pour faire au plus vite mes premiers pas en entreprise et continuer à développer mes compétences dans le domaine du développement web.
        `
    ]
]