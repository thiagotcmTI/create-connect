const sessions = {
  sports: [
    { english: "Horse riding is an elegant sport.", portuguese: "Andar a cavalo é um esporte elegante.", audio: "horse_riding.mp3" },
    { english: "Fishing is a peaceful hobby.", portuguese: "Pescar é um hobby tranquilo.", audio: "fishing.mp3" },
    { english: "I play badminton with my friends.", portuguese: "Eu jogo badminton com meus amigos.", audio: "badminton.mp3" },
    { english: "Ice skating is popular in winter.", portuguese: "Patinar no gelo é popular no inverno.", audio: "ice_skating.mp3" },
    { english: "I love rock climbing on weekends.", portuguese: "Eu adoro escalar nos finais de semana.", audio: "rock_climbing.mp3" },
    { english: "Skiing is a thrilling winter sport.", portuguese: "Esquiar é um esporte de inverno emocionante.", audio: "skiing.mp3" },
    { english: "Boxing requires strength and skill.", portuguese: "O boxe exige força e habilidade.", audio: "boxing.mp3" },
    { english: "Archery is an ancient sport.", portuguese: "O arco e flecha é um esporte antigo.", audio: "archery.mp3" },
    { english: "I go kayaking on the river.", portuguese: "Eu faço caiaque no rio.", audio: "kayaking.mp3" },
    { english: "Table tennis is a fast-paced game.", portuguese: "Tênis de mesa é um jogo rápido.", audio: "table_tennis.mp3" },
    { english: "I am learning how to snowboard.", portuguese: "Estou aprendendo a fazer snowboard.", audio: "snowboard.mp3" },
    { english: "The marathon is a long-distance race.", portuguese: "A maratona é uma corrida de longa distância.", audio: "marathon.mp3" },
    { english: "Gymnastics is very challenging.", portuguese: "A ginástica é muito desafiadora.", audio: "gymnastics.mp3" },
    { english: "Rowing builds teamwork skills.", portuguese: "Remar desenvolve habilidades de trabalho em equipe.", audio: "rowing.mp3" },
    { english: "I play squash after work.", portuguese: "Eu jogo squash depois do trabalho.", audio: "squash.mp3" },
    { english: "Wrestling is a competitive sport.", portuguese: "A luta é um esporte competitivo.", audio: "wrestling.mp3" },
    { english: "Baseball is very popular in the USA.", portuguese: "O beisebol é muito popular nos EUA.", audio: "baseball.mp3" },
    { english: "I enjoy hiking in the mountains.", portuguese: "Eu gosto de caminhar nas montanhas.", audio: "hiking.mp3" },
    { english: "Skateboarding is a cool activity.", portuguese: "Andar de skate é uma atividade legal.", audio: "skateboarding.mp3" },
    { english: "Diving in the ocean is amazing.", portuguese: "Mergulhar no oceano é incrível.", audio: "diving.mp3" },
    { english: "Fencing is an Olympic sport.", portuguese: "A esgrima é um esporte olímpico.", audio: "fencing.mp3" },
    { english: "I jog in the park every morning.", portuguese: "Eu corro no parque todas as manhãs.", audio: "jogging.mp3" },
    { english: "Weightlifting is very demanding.", portuguese: "Levantamento de peso é muito exigente.", audio: "weightlifting.mp3" },
    { english: "Cricket is popular in India.", portuguese: "O críquete é popular na Índia.", audio: "cricket.mp3" },
    { english: "Parkour is an urban sport.", portuguese: "Parkour é um esporte urbano.", audio: "parkour.mp3" },
    { english: "I tried bowling last weekend.", portuguese: "Eu tentei jogar boliche no último final de semana.", audio: "bowling.mp3" },
    { english: "Judo is a martial art.", portuguese: "Judô é uma arte marcial.", audio: "judo.mp3" },
    { english: "Sailing requires good navigation skills.", portuguese: "Navegar exige boas habilidades de navegação.", audio: "sailing.mp3" },
    { english: "Motocross is an adrenaline-filled sport.", portuguese: "Motocross é um esporte cheio de adrenalina.", audio: "motocross.mp3" },
    { english: "I learned to play chess last year.", portuguese: "Eu aprendi a jogar xadrez no ano passado.", audio: "chess.mp3" },
    { english: "Field hockey is a team sport.", portuguese: "O hóquei em campo é um esporte de equipe.", audio: "field_hockey.mp3" },
    { english: "Rugby is very physical.", portuguese: "O rugby é muito físico.", audio: "rugby.mp3" },
    { english: "Table football is fun at parties.", portuguese: "Futebol de mesa é divertido em festas.", audio: "table_football.mp3" },
    { english: "Pole vaulting is an athletic event.", portuguese: "O salto com vara é um evento atlético.", audio: "pole_vaulting.mp3" },
    { english: "Kite surfing is popular at the beach.", portuguese: "O kitesurf é popular na praia.", audio: "kite_surfing.mp3" },
    { english: "I practice karate for self-defense.", portuguese: "Eu pratico caratê para autodefesa.", audio: "karate.mp3" },
    { english: "Swimming keeps me fit and healthy.", portuguese: "Nadar me mantém em forma e saudável.", audio: "swimming_fitness.mp3" },
    { english: "Hunting is a traditional activity.", portuguese: "A caça é uma atividade tradicional.", audio: "hunting.mp3" },
    { english: "I love playing soccer.", portuguese: "Eu adoro jogar futebol.", audio: "soccer.mp3" },
    { english: "Basketball is a great sport.", portuguese: "O basquete é um ótimo esporte.", audio: "basketball.mp3" },
    { english: "I enjoy swimming every summer.", portuguese: "Eu adoro nadar todo verão.", audio: "swimming.mp3" },
    { english: "Tennis requires a lot of concentration.", portuguese: "O tênis exige muita concentração.", audio: "tennis.mp3" },
    { english: "Cycling is a fun outdoor activity.", portuguese: "Ciclismo é uma atividade divertida ao ar livre.", audio: "cycling.mp3" },
    { english: "Running is great for your health.", portuguese: "Correr é ótimo para a saúde.", audio: "running.mp3" },
    { english: "I practice yoga every morning.", portuguese: "Eu pratico yoga todas as manhãs.", audio: "yoga.mp3" },
    { english: "Golf is a relaxing sport.", portuguese: "O golfe é um esporte relaxante.", audio: "golf.mp3" },
    { english: "I learned to surf last year.", portuguese: "Eu aprendi a surfar no ano passado.", audio: "surf.mp3" },
    { english: "Table tennis is very fast-paced.", portuguese: "O tênis de mesa é muito dinâmico.", audio: "table_tennis.mp3" },
    { english: "Volleyball is popular on beaches.", portuguese: "O voleibol é popular nas praias.", audio: "volleyball.mp3" },
    { english: "Rock climbing is challenging but rewarding.", portuguese: "Escalada é desafiadora, mas gratificante.", audio: "rock_climbing.mp3" },
    { english: "Skiing is my favorite winter sport.", portuguese: "Esquiar é meu esporte de inverno favorito.", audio: "skiing.mp3" },
    { english: "Snowboarding looks so cool.", portuguese: "Snowboarding parece muito legal.", audio: "snowboarding.mp3" },
    { english: "I joined a local baseball team.", portuguese: "Eu entrei em um time local de beisebol.", audio: "baseball.mp3" },
    { english: "Horseback riding is very elegant.", portuguese: "Andar a cavalo é muito elegante.", audio: "horseback_riding.mp3" },
    { english: "Archery requires precision.", portuguese: "O arco e flecha exige precisão.", audio: "archery.mp3" },
    { english: "Hiking is a great way to explore nature.", portuguese: "Caminhar é uma ótima forma de explorar a natureza.", audio: "hiking.mp3" },
    { english: "Fishing is very relaxing.", portuguese: "Pescar é muito relaxante.", audio: "fishing.mp3" },
    { english: "Wrestling is both intense and strategic.", portuguese: "A luta livre é intensa e estratégica.", audio: "wrestling.mp3" },
    { english: "Cricket is very popular in India.", portuguese: "O críquete é muito popular na Índia.", audio: "cricket.mp3" },
    { english: "I started fencing classes.", portuguese: "Comecei aulas de esgrima.", audio: "fencing.mp3" },
    { english: "Rowing is an excellent team activity.", portuguese: "Remar é uma excelente atividade em equipe.", audio: "rowing.mp3" },
    { english: "Badminton is played indoors and outdoors.", portuguese: "O badminton é jogado em ambientes internos e externos.", audio: "badminton.mp3" },
    { english: "I’ve always wanted to try ice skating.", portuguese: "Sempre quis tentar patinar no gelo.", audio: "ice_skating.mp3" },
    { english: "Field hockey is similar to ice hockey.", portuguese: "O hóquei em campo é semelhante ao hóquei no gelo.", audio: "field_hockey.mp3" },
    { english: "Water polo is a demanding water sport.", portuguese: "O polo aquático é um esporte aquático exigente.", audio: "water_polo.mp3" },
    { english: "I train in martial arts twice a week.", portuguese: "Eu treino artes marciais duas vezes por semana.", audio: "martial_arts.mp3" },
    { english: "Judo originated in Japan.", portuguese: "O judô teve origem no Japão.", audio: "judo.mp3" },
    { english: "Boxing matches are intense.", portuguese: "As lutas de boxe são intensas.", audio: "boxing.mp3" },
    { english: "Skateboarding is part of the Olympics.", portuguese: "O skate é parte das Olimpíadas.", audio: "skateboarding.mp3" },
    { english: "The triathlon is a test of endurance.", portuguese: "O triatlo é um teste de resistência.", audio: "triathlon.mp3" },
    { english: "Karate teaches discipline.", portuguese: "O karatê ensina disciplina.", audio: "karate.mp3" },
    { english: "Scuba diving lets you explore underwater.", portuguese: "O mergulho autônomo permite explorar o fundo do mar.", audio: "scuba_diving.mp3" },
    { english: "Bungee jumping is for thrill-seekers.", portuguese: "O bungee jump é para os aventureiros.", audio: "bungee_jumping.mp3" },
    { english: "I’m training for a marathon.", portuguese: "Estou treinando para uma maratona.", audio: "marathon.mp3" },
    { english: "Dancing is both an art and a sport.", portuguese: "Dançar é tanto uma arte quanto um esporte.", audio: "dancing.mp3" },
    { english: "I took gymnastics as a child.", portuguese: "Eu fiz ginástica quando criança.", audio: "gymnastics.mp3" },
    { english: "Darts require focus and accuracy.", portuguese: "Os dardos exigem foco e precisão.", audio: "darts.mp3" },
    { english: "I like to kayak on weekends.", portuguese: "Eu gosto de andar de caiaque nos fins de semana.", audio: "kayak.mp3" },
    { english: "Parkour combines creativity and movement.", portuguese: "O parkour combina criatividade e movimento.", audio: "parkour.mp3" },
    { english: "Handball is a fast-paced game.", portuguese: "O handebol é um jogo rápido.", audio: "handball.mp3" },
    { english: "Ultimate frisbee is gaining popularity.", portuguese: "O frisbee ultimate está ganhando popularidade.", audio: "ultimate_frisbee.mp3" },
    { english: "Snooker requires great precision.", portuguese: "O snooker exige muita precisão.", audio: "snooker.mp3" },
    { english: "Bocce is a relaxing lawn game.", portuguese: "O bocce é um jogo de gramado relaxante.", audio: "bocce.mp3" },
    { english: "I recently joined a ping pong club.", portuguese: "Eu recentemente entrei para um clube de ping pong." },
  ],

  work: [
    { english: "I need to finish this report by tomorrow.", portuguese: "Eu preciso terminar esse relatório até amanhã.", audio: "work1.mp3" },
    { english: "My colleague is a great team player.", portuguese: "Meu colega é um ótimo membro de equipe.", audio: "work2.mp3" },
    { english: "We have a meeting this afternoon.", portuguese: "Temos uma reunião esta tarde.", audio: "work3.mp3" },
    { english: "I have to answer some emails.", portuguese: "Eu preciso responder alguns e-mails.", audio: "work4.mp3" },
    { english: "This project is very important for the company.", portuguese: "Este projeto é muito importante para a empresa.", audio: "work5.mp3" },
    { english: "I have a presentation to prepare for tomorrow.", portuguese: "Tenho uma apresentação para preparar para amanhã.", audio: "work6.mp3" },
    { english: "She works in the marketing department.", portuguese: "Ela trabalha no departamento de marketing.", audio: "work7.mp3" },
    { english: "My boss approved the project proposal.", portuguese: "Meu chefe aprovou a proposta do projeto.", audio: "work8.mp3" },
    { english: "We have a lot of tasks to complete today.", portuguese: "Temos muitas tarefas para completar hoje.", audio: "work9.mp3" },
    { english: "I usually take a short coffee break in the morning.", portuguese: "Costumo fazer uma pequena pausa para o café pela manhã.", audio: "work10.mp3" },
    { english: "I enjoy working with my colleagues.", portuguese: "Eu gosto de trabalhar com meus colegas.", audio: "colleagues.mp3" },
    { english: "My job gives me a sense of purpose.", portuguese: "Meu trabalho me dá um senso de propósito.", audio: "purpose.mp3" },
    { english: "I like to stay organized at work.", portuguese: "Eu gosto de me manter organizado no trabalho.", audio: "organized.mp3" },
    { english: "Teamwork is essential in the workplace.", portuguese: "O trabalho em equipe é essencial no ambiente de trabalho.", audio: "teamwork.mp3" },
    { english: "I enjoy taking on new challenges at work.", portuguese: "Eu gosto de enfrentar novos desafios no trabalho.", audio: "challenges.mp3" },
    { english: "My job allows me to learn new skills.", portuguese: "Meu trabalho me permite aprender novas habilidades.", audio: "new_skills.mp3" },
    { english: "I work in a fast-paced environment.", portuguese: "Eu trabalho em um ambiente de ritmo acelerado.", audio: "fast_paced.mp3" },
    { english: "Having a good work-life balance is important.", portuguese: "Ter um bom equilíbrio entre trabalho e vida pessoal é importante.", audio: "work_life_balance.mp3" },
    { english: "I enjoy collaborating on projects with my team.", portuguese: "Eu gosto de colaborar em projetos com minha equipe.", audio: "collaborating.mp3" },
    { english: "Work gives me the opportunity to be creative.", portuguese: "O trabalho me dá a oportunidade de ser criativo.", audio: "creative.mp3" },
    { english: "I like to set goals to stay motivated at work.", portuguese: "Eu gosto de estabelecer metas para me manter motivado no trabalho.", audio: "goals.mp3" },
    { english: "My job requires strong problem-solving skills.", portuguese: "Meu trabalho exige fortes habilidades de resolução de problemas.", audio: "problem_solving.mp3" },
    { english: "I enjoy working on long-term projects.", portuguese: "Eu gosto de trabalhar em projetos de longo prazo.", audio: "long_term_projects.mp3" },
    { english: "I have a passion for what I do at work.", portuguese: "Eu tenho paixão pelo que faço no trabalho.", audio: "passion.mp3" },
    { english: "My work allows me to help others.", portuguese: "Meu trabalho me permite ajudar os outros.", audio: "help_others.mp3" },
    { english: "I enjoy meeting deadlines and achieving goals.", portuguese: "Eu gosto de cumprir prazos e alcançar metas.", audio: "deadlines.mp3" },
    { english: "I work in a creative field.", portuguese: "Eu trabalho em uma área criativa.", audio: "creative_field.mp3" },
    { english: "I find satisfaction in completing tasks at work.", portuguese: "Eu encontro satisfação em concluir tarefas no trabalho.", audio: "tasks.mp3" },
    { english: "My job helps me develop professionally.", portuguese: "Meu trabalho me ajuda a me desenvolver profissionalmente.", audio: "professionally.mp3" },
    { english: "I enjoy working in a collaborative environment.", portuguese: "Eu gosto de trabalhar em um ambiente colaborativo.", audio: "collaborative_environment.mp3" },
    { english: "My job requires attention to detail.", portuguese: "Meu trabalho exige atenção aos detalhes.", audio: "attention_to_detail.mp3" },
    { english: "I feel accomplished when I finish a project at work.", portuguese: "Eu me sinto realizado quando termino um projeto no trabalho.", audio: "accomplished.mp3" },
    { english: "I enjoy the problem-solving aspect of my job.", portuguese: "Eu gosto do aspecto de resolução de problemas do meu trabalho.", audio: "problem_solving_aspect.mp3" },
    { english: "I have a flexible work schedule.", portuguese: "Eu tenho um horário de trabalho flexível.", audio: "flexible_schedule.mp3" },
    { english: "My job allows me to work remotely.", portuguese: "Meu trabalho me permite trabalhar remotamente.", audio: "remote_work.mp3" },
    { english: "I enjoy working in a fast-paced environment.", portuguese: "Eu gosto de trabalhar em um ambiente de ritmo acelerado.", audio: "fast_paced_work.mp3" },
    { english: "My work requires excellent communication skills.", portuguese: "Meu trabalho exige excelentes habilidades de comunicação.", audio: "communication_skills.mp3" },
    { english: "I like to collaborate with my colleagues on new ideas.", portuguese: "Eu gosto de colaborar com meus colegas em novas ideias.", audio: "collaborating_ideas.mp3" },
    { english: "I appreciate the feedback I receive at work.", portuguese: "Eu aprecio o feedback que recebo no trabalho.", audio: "feedback.mp3" },
    { english: "I enjoy finding innovative solutions to problems at work.", portuguese: "Eu gosto de encontrar soluções inovadoras para problemas no trabalho.", audio: "innovative_solutions.mp3" },
    { english: "My job allows me to meet interesting people.", portuguese: "Meu trabalho me permite conhecer pessoas interessantes.", audio: "interesting_people.mp3" },
    { english: "I am proud of the work I do.", portuguese: "Eu tenho orgulho do trabalho que faço.", audio: "proud.mp3" },
    { english: "I enjoy managing multiple tasks at once.", portuguese: "Eu gosto de gerenciar várias tarefas ao mesmo tempo.", audio: "multiple_tasks.mp3" },
    { english: "My work requires me to stay organized.", portuguese: "Meu trabalho exige que eu me mantenha organizado.", audio: "organized_work.mp3" },
    { english: "I enjoy taking on leadership roles at work.", portuguese: "Eu gosto de assumir papéis de liderança no trabalho.", audio: "leadership_roles.mp3" },
    { english: "My job requires critical thinking and creativity.", portuguese: "Meu trabalho exige pensamento crítico e criatividade.", audio: "critical_thinking.mp3" },
    { english: "I am always looking for ways to improve at work.", portuguese: "Eu estou sempre procurando maneiras de melhorar no trabalho.", audio: "improve_at_work.mp3" },
    { english: "I enjoy learning new things through my job.", portuguese: "Eu gosto de aprender coisas novas através do meu trabalho.", audio: "learning_through_job.mp3" },
    { english: "My work challenges me to grow professionally.", portuguese: "Meu trabalho me desafia a crescer profissionalmente.", audio: "grow_professionally.mp3" },


  ],

  travel: [
    { english: "I love exploring new cities around the world.", portuguese: "Adoro explorar novas cidades ao redor do mundo.", audio: "travel1.mp3" },
    { english: "My dream is to visit Japan someday.", portuguese: "Meu sonho é visitar o Japão algum dia.", audio: "travel2.mp3" },
    { english: "Pack your bags; we’re going on an adventure!", portuguese: "Faça as malas; vamos em uma aventura!", audio: "travel3.mp3" },
    { english: "The flight was delayed due to bad weather.", portuguese: "O voo foi atrasado devido ao mau tempo.", audio: "travel4.mp3" },
    { english: "We stayed in a beautiful hotel by the beach.", portuguese: "Ficamos em um lindo hotel à beira da praia.", audio: "travel5.mp3" },
    { english: "Always carry your passport when traveling abroad.", portuguese: "Sempre leve seu passaporte ao viajar para o exterior.", audio: "travel6.mp3" },
    { english: "We need a map to find the museum.", portuguese: "Precisamos de um mapa para encontrar o museu.", audio: "travel7.mp3" },
    { english: "I prefer traveling by train to driving long distances.", portuguese: "Prefiro viajar de trem a dirigir longas distâncias.", audio: "travel8.mp3" },
    { english: "They rented a car to explore the countryside.", portuguese: "Eles alugaram um carro para explorar o interior.", audio: "travel9.mp3" },
    { english: "Traveling is the best way to learn about different cultures.", portuguese: "Viajar é a melhor forma de aprender sobre diferentes culturas.", audio: "travel10.mp3" },
    { english: "I love traveling to new places.", portuguese: "Eu adoro viajar para novos lugares.", audio: "traveling.mp3" },
    { english: "Exploring different cultures is exciting.", portuguese: "Explorar diferentes culturas é empolgante.", audio: "cultures.mp3" },
    { english: "I enjoy visiting historical landmarks.", portuguese: "Eu gosto de visitar marcos históricos.", audio: "landmarks.mp3" },
    { english: "Traveling broadens your perspective.", portuguese: "Viajar amplia sua perspectiva.", audio: "perspective.mp3" },
    { english: "I dream of visiting every continent.", portuguese: "Eu sonho em visitar todos os continentes.", audio: "continents.mp3" },
    { english: "Adventure awaits in every new destination.", portuguese: "A aventura espera em cada novo destino.", audio: "adventure.mp3" },
    { english: "I like to travel with my friends.", portuguese: "Eu gosto de viajar com meus amigos.", audio: "friends.mp3" },
    { english: "A long road trip is one of my favorite ways to travel.", portuguese: "Uma longa viagem de carro é uma das minhas maneiras favoritas de viajar.", audio: "road_trip.mp3" },
    { english: "I love the thrill of exploring new cities.", portuguese: "Eu adoro a emoção de explorar novas cidades.", audio: "cities.mp3" },
    { english: "Traveling to the beach is so relaxing.", portuguese: "Viajar para a praia é tão relaxante.", audio: "beach.mp3" },
    { english: "I enjoy traveling by train.", portuguese: "Eu gosto de viajar de trem.", audio: "train.mp3" },
    { english: "Traveling allows me to meet new people.", portuguese: "Viajar me permite conhecer novas pessoas.", audio: "new_people.mp3" },
    { english: "The mountains are my favorite travel destination.", portuguese: "As montanhas são meu destino favorito de viagem.", audio: "mountains.mp3" },
    { english: "I love taking photos while traveling.", portuguese: "Eu adoro tirar fotos enquanto viajo.", audio: "photos.mp3" },
    { english: "The food in different countries is amazing.", portuguese: "A comida em diferentes países é incrível.", audio: "food.mp3" },
    { english: "I like to visit museums when I travel.", portuguese: "Eu gosto de visitar museus quando viajo.", audio: "museums.mp3" },
    { english: "Traveling gives me a sense of freedom.", portuguese: "Viajar me dá uma sensação de liberdade.", audio: "freedom.mp3" },
    { english: "I enjoy planning my trips in advance.", portuguese: "Eu gosto de planejar minhas viagens com antecedência.", audio: "planning.mp3" },
    { english: "My dream is to travel around the world.", portuguese: "Meu sonho é viajar ao redor do mundo.", audio: "world.mp3" },
    { english: "I love visiting famous landmarks.", portuguese: "Eu adoro visitar pontos turísticos famosos.", audio: "famous_landmarks.mp3" },
    { english: "Traveling helps me escape from daily routine.", portuguese: "Viajar me ajuda a escapar da rotina diária.", audio: "escape_routine.mp3" },
    { english: "I enjoy exploring new beaches.", portuguese: "Eu gosto de explorar novas praias.", audio: "new_beaches.mp3" },
    { english: "A weekend getaway is always refreshing.", portuguese: "Uma escapadela de fim de semana é sempre revigorante.", audio: "getaway.mp3" },
    { english: "I like traveling to the countryside.", portuguese: "Eu gosto de viajar para o interior.", audio: "countryside.mp3" },
    { english: "I love discovering hidden gems in different countries.", portuguese: "Eu adoro descobrir joias escondidas em diferentes países.", audio: "hidden_gems.mp3" },
    { english: "A road trip is the best way to explore a country.", portuguese: "Uma viagem de carro é a melhor maneira de explorar um país.", audio: "explore_country.mp3" },
    { english: "I enjoy traveling to remote islands.", portuguese: "Eu gosto de viajar para ilhas remotas.", audio: "remote_islands.mp3" },
    { english: "Traveling allows me to relax and recharge.", portuguese: "Viajar me permite relaxar e recarregar as energias.", audio: "relax_recharge.mp3" },
    { english: "I love visiting exotic destinations.", portuguese: "Eu adoro visitar destinos exóticos.", audio: "exotic_destinations.mp3" },
    { english: "Traveling to the mountains is always an adventure.", portuguese: "Viajar para as montanhas é sempre uma aventura.", audio: "mountain_adventure.mp3" },
    { english: "I enjoy taking long walks in new cities.", portuguese: "Eu gosto de fazer longas caminhadas em novas cidades.", audio: "city_walks.mp3" },
    { english: "Exploring new cultures is one of the best parts of traveling.", portuguese: "Explorar novas culturas é uma das melhores partes de viajar.", audio: "new_cultures.mp3" },
    { english: "I love traveling with my family.", portuguese: "Eu adoro viajar com minha família.", audio: "family.mp3" },
    { english: "Visiting different countries helps me learn about their history.", portuguese: "Visitar diferentes países me ajuda a aprender sobre sua história.", audio: "history.mp3" },
    { english: "Traveling is a great way to learn new languages.", portuguese: "Viajar é uma ótima maneira de aprender novas línguas.", audio: "languages.mp3" },
    { english: "I love going on adventures while traveling.", portuguese: "Eu adoro viver aventuras enquanto viajo.", audio: "adventures.mp3" },
    { english: "A trip to a new city is always exciting.", portuguese: "Uma viagem para uma nova cidade é sempre empolgante.", audio: "exciting_trip.mp3" },
    { english: "I enjoy traveling for both relaxation and exploration.", portuguese: "Eu gosto de viajar tanto para relaxar quanto para explorar.", audio: "relaxation_exploration.mp3" },
    { english: "Traveling is a great way to make memories.", portuguese: "Viajar é uma ótima maneira de criar memórias.", audio: "memories.mp3" },
    { english: "I love experiencing different traditions while traveling.", portuguese: "Eu adoro vivenciar diferentes tradições enquanto viajo.", audio: "traditions.mp3" },


  ],

  history: [
    { english: "The museum has ancient artifacts from Egypt.", portuguese: "O museu tem artefatos antigos do Egito.", audio: "history1.mp3" },
    { english: "He is studying the history of the Roman Empire.", portuguese: "Ele está estudando a história do Império Romano.", audio: "history2.mp3" },
    { english: "World War II changed the course of history.", portuguese: "A Segunda Guerra Mundial mudou o curso da história.", audio: "history3.mp3" },
    { english: "The Renaissance was a time of great cultural growth.", portuguese: "O Renascimento foi um período de grande crescimento cultural.", audio: "history4.mp3" },
    { english: "Who was the first president of the United States?", portuguese: "Quem foi o primeiro presidente dos Estados Unidos?", audio: "history5.mp3" },
    { english: "The Great Wall of China is a historical landmark.", portuguese: "A Grande Muralha da China é um marco histórico.", audio: "history6.mp3" },
    { english: "I love reading about medieval history.", portuguese: "Eu adoro ler sobre a história medieval.", audio: "history7.mp3" },
    { english: "The Industrial Revolution transformed society.", portuguese: "A Revolução Industrial transformou a sociedade.", audio: "history8.mp3" },
    { english: "They visited the ruins of an ancient castle.", portuguese: "Eles visitaram as ruínas de um castelo antigo.", audio: "history9.mp3" },
    { english: "History teaches us valuable lessons about the future.", portuguese: "A história nos ensina lições valiosas sobre o futuro.", audio: "history10.mp3" },
    { english: "I love studying history.", portuguese: "Eu adoro estudar história.", audio: "history.mp3" },
    { english: "The history of ancient civilizations is fascinating.", portuguese: "A história das civilizações antigas é fascinante.", audio: "ancient_civilizations.mp3" },
    { english: "History helps us understand the present.", portuguese: "A história nos ajuda a entender o presente.", audio: "understand_present.mp3" },
    { english: "I enjoy reading about historical events.", portuguese: "Eu gosto de ler sobre eventos históricos.", audio: "historical_events.mp3" },
    { english: "The history of wars is often tragic.", portuguese: "A história das guerras é frequentemente trágica.", audio: "wars.mp3" },
    { english: "Learning about the past is important.", portuguese: "Aprender sobre o passado é importante.", audio: "learning_past.mp3" },
    { english: "The Renaissance was a period of great cultural growth.", portuguese: "O Renascimento foi um período de grande crescimento cultural.", audio: "renaissance.mp3" },
    { english: "I enjoy visiting historical landmarks.", portuguese: "Eu gosto de visitar marcos históricos.", audio: "landmarks.mp3" },
    { english: "The history of the Roman Empire is very interesting.", portuguese: "A história do Império Romano é muito interessante.", audio: "roman_empire.mp3" },
    { english: "I like to learn about famous historical figures.", portuguese: "Eu gosto de aprender sobre figuras históricas famosas.", audio: "historical_figures.mp3" },
    { english: "The history of the world is full of great stories.", portuguese: "A história do mundo está cheia de grandes histórias.", audio: "world_history.mp3" },
    { english: "I read historical books in my free time.", portuguese: "Eu leio livros históricos no meu tempo livre.", audio: "historical_books.mp3" },
    { english: "The American Revolution changed the course of history.", portuguese: "A Revolução Americana mudou o curso da história.", audio: "american_revolution.mp3" },
    { english: "History is full of lessons for the future.", portuguese: "A história está cheia de lições para o futuro.", audio: "lessons.mp3" },
    { english: "The Industrial Revolution transformed societies.", portuguese: "A Revolução Industrial transformou as sociedades.", audio: "industrial_revolution.mp3" },
    { english: "I enjoy watching documentaries about history.", portuguese: "Eu gosto de assistir documentários sobre história.", audio: "documentaries.mp3" },
    { english: "Ancient Egypt has a rich and mysterious history.", portuguese: "O Egito Antigo tem uma história rica e misteriosa.", audio: "ancient_egypt.mp3" },
    { english: "World War II was a significant event in history.", portuguese: "A Segunda Guerra Mundial foi um evento significativo na história.", audio: "world_war_ii.mp3" },
    { english: "The history of art is deeply connected to history itself.", portuguese: "A história da arte está profundamente conectada à própria história.", audio: "art_history.mp3" },
    { english: "I love exploring the history of different cultures.", portuguese: "Eu adoro explorar a história de diferentes culturas.", audio: "different_cultures.mp3" },
    { english: "Medieval history is full of interesting tales.", portuguese: "A história medieval está cheia de contos interessantes.", audio: "medieval_history.mp3" },
    { english: "The history of science has shaped modern society.", portuguese: "A história da ciência moldou a sociedade moderna.", audio: "science_history.mp3" },
    { english: "I like to learn about the history of my country.", portuguese: "Eu gosto de aprender sobre a história do meu país.", audio: "country_history.mp3" },
    { english: "The history of exploration is full of brave adventurers.", portuguese: "A história da exploração está cheia de aventureiros corajosos.", audio: "exploration_history.mp3" },
    { english: "The French Revolution was a turning point in history.", portuguese: "A Revolução Francesa foi um ponto de virada na história.", audio: "french_revolution.mp3" },
    { english: "History helps us learn from our mistakes.", portuguese: "A história nos ajuda a aprender com nossos erros.", audio: "learn_from_mistakes.mp3" },
    { english: "The history of the arts is fascinating.", portuguese: "A história das artes é fascinante.", audio: "arts_history.mp3" },
    { english: "The fall of the Berlin Wall marked a new chapter in history.", portuguese: "A queda do Muro de Berlim marcou um novo capítulo na história.", audio: "berlin_wall.mp3" },
    { english: "I enjoy studying ancient history.", portuguese: "Eu gosto de estudar história antiga.", audio: "ancient_history.mp3" },
    { english: "The history of the space race is incredible.", portuguese: "A história da corrida espacial é incrível.", audio: "space_race.mp3" },
    { english: "I like to explore the history of different religions.", portuguese: "Eu gosto de explorar a história de diferentes religiões.", audio: "religions_history.mp3" },
    { english: "The history of the Vikings is full of mystery.", portuguese: "A história dos vikings é cheia de mistério.", audio: "vikings_history.mp3" },
    { english: "The history of technology has changed our lives.", portuguese: "A história da tecnologia mudou nossas vidas.", audio: "technology_history.mp3" },
    { english: "The history of literature is rich and diverse.", portuguese: "A história da literatura é rica e diversificada.", audio: "literature_history.mp3" },
    { english: "The Cold War had a lasting impact on history.", portuguese: "A Guerra Fria teve um impacto duradouro na história.", audio: "cold_war.mp3" },
    { english: "History shows us how civilizations rise and fall.", portuguese: "A história nos mostra como as civilizações surgem e caem.", audio: "rise_and_fall.mp3" },
    { english: "I enjoy learning about the history of architecture.", portuguese: "Eu gosto de aprender sobre a história da arquitetura.", audio: "architecture_history.mp3" },
    { english: "The history of the Olympics is fascinating.", portuguese: "A história das Olimpíadas é fascinante.", audio: "olympics_history.mp3" },
    { english: "Studying history helps us understand our roots.", portuguese: "Estudar história nos ajuda a entender nossas raízes.", audio: "understand_roots.mp3" },


  ],

  music: [
    { english: "I enjoy listening to classical music.", portuguese: "Eu gosto de ouvir música clássica.", audio: "music1.mp3" },
    { english: "He plays the guitar in a band.", portuguese: "Ele toca guitarra em uma banda.", audio: "music2.mp3" },
    { english: "I love listening to music.", portuguese: "Eu adoro ouvir música.", audio: "music.mp3" },
    { english: "Music makes me feel alive.", portuguese: "A música me faz sentir vivo.", audio: "alive.mp3" },
    { english: "I enjoy singing my favorite songs.", portuguese: "Eu gosto de cantar minhas músicas favoritas.", audio: "singing.mp3" },
    { english: "The rhythm of the song is amazing.", portuguese: "O ritmo da música é incrível.", audio: "rhythm.mp3" },
    { english: "I can’t stop dancing to the music.", portuguese: "Eu não consigo parar de dançar ao som da música.", audio: "dancing.mp3" },
    { english: "I love playing the guitar.", portuguese: "Eu adoro tocar violão.", audio: "guitar.mp3" },
    { english: "Music brings people together.", portuguese: "A música une as pessoas.", audio: "together.mp3" },
    { english: "I listen to music every day.", portuguese: "Eu escuto música todos os dias.", audio: "everyday.mp3" },
    { english: "My favorite genre is rock.", portuguese: "Meu gênero favorito é rock.", audio: "rock.mp3" },
    { english: "Music helps me relax.", portuguese: "A música me ajuda a relaxar.", audio: "relax.mp3" },
    { english: "I love attending live concerts.", portuguese: "Eu adoro ir a shows ao vivo.", audio: "concert.mp3" },
    { english: "The melody is so beautiful.", portuguese: "A melodia é tão bonita.", audio: "melody.mp3" },
    { english: "I enjoy listening to classical music.", portuguese: "Eu gosto de ouvir música clássica.", audio: "classical.mp3" },
    { english: "Jazz is a genre full of creativity.", portuguese: "O jazz é um gênero cheio de criatividade.", audio: "jazz.mp3" },
    { english: "Music makes every moment better.", portuguese: "A música torna cada momento melhor.", audio: "better.mp3" },
    { english: "I love playing piano.", portuguese: "Eu adoro tocar piano.", audio: "piano.mp3" },
    { english: "My favorite band is amazing.", portuguese: "Minha banda favorita é incrível.", audio: "band.mp3" },
    { english: "I love the sound of drums.", portuguese: "Eu adoro o som da bateria.", audio: "drums.mp3" },
    { english: "Listening to music makes me happy.", portuguese: "Ouvir música me deixa feliz.", audio: "happy.mp3" },
    { english: "Music is the language of the soul.", portuguese: "A música é a linguagem da alma.", audio: "soul.mp3" },
    { english: "I love exploring new music genres.", portuguese: "Eu adoro explorar novos gêneros musicais.", audio: "new_genres.mp3" },
    { english: "The beat of this song is incredible.", portuguese: "O ritmo dessa música é incrível.", audio: "beat.mp3" },
    { english: "I like listening to music while working.", portuguese: "Eu gosto de ouvir música enquanto trabalho.", audio: "working.mp3" },
    { english: "The lyrics of this song are so deep.", portuguese: "A letra dessa música é tão profunda.", audio: "lyrics.mp3" },
    { english: "I enjoy playing music with my friends.", portuguese: "Eu gosto de tocar música com meus amigos.", audio: "friends.mp3" },
    { english: "Music is a great way to express emotions.", portuguese: "A música é uma ótima maneira de expressar emoções.", audio: "express.mp3" },
    { english: "I love listening to music on long drives.", portuguese: "Eu adoro ouvir música em viagens longas.", audio: "long_drives.mp3" },
    { english: "This song brings back so many memories.", portuguese: "Essa música traz tantas memórias.", audio: "memories.mp3" },
    { english: "I enjoy discovering new artists.", portuguese: "Eu gosto de descobrir novos artistas.", audio: "artists.mp3" },
    { english: "Music helps me focus when studying.", portuguese: "A música me ajuda a me concentrar quando estou estudando.", audio: "studying.mp3" },
    { english: "The guitar solo in this song is amazing.", portuguese: "O solo de guitarra dessa música é incrível.", audio: "guitar_solo.mp3" },
    { english: "I love listening to music with headphones.", portuguese: "Eu adoro ouvir música com fones de ouvido.", audio: "headphones.mp3" },
    { english: "This band has a unique sound.", portuguese: "Essa banda tem um som único.", audio: "unique_sound.mp3" },
    { english: "I love the sound of the violin.", portuguese: "Eu adoro o som do violino.", audio: "violin.mp3" },
    { english: "I like to sing along to my favorite songs.", portuguese: "Eu gosto de cantar junto com minhas músicas favoritas.", audio: "sing_along.mp3" },
    { english: "I listen to music to boost my mood.", portuguese: "Eu escuto música para melhorar meu humor.", audio: "mood_boost.mp3" },
    { english: "This song has such a catchy melody.", portuguese: "Essa música tem uma melodia tão pegajosa.", audio: "catchy_melody.mp3" },
    { english: "I love attending music festivals.", portuguese: "Eu adoro ir a festivais de música.", audio: "festivals.mp3" },
    { english: "Music is the soundtrack of my life.", portuguese: "A música é a trilha sonora da minha vida.", audio: "soundtrack.mp3" },
    { english: "I enjoy listening to music with friends.", portuguese: "Eu gosto de ouvir música com amigos.", audio: "friends_music.mp3" },


  ],

  comida: [
    { english: "I love eating pizza.", portuguese: "Eu adoro comer pizza.", audio: "pizza.mp3" },
    { english: "The pasta tastes amazing.", portuguese: "A massa está incrível.", audio: "pasta.mp3" },
    { english: "This dessert is my favorite.", portuguese: "Essa sobremesa é minha favorita.", audio: "dessert.mp3" },
    { english: "I enjoy cooking at home.", portuguese: "Eu gosto de cozinhar em casa.", audio: "cooking.mp3" },
    { english: "This dish is full of flavors.", portuguese: "Esse prato está cheio de sabores.", audio: "dish.mp3" },
    { english: "I can’t resist a good burger.", portuguese: "Não consigo resistir a um bom hambúrguer.", audio: "burger.mp3" },
    { english: "Salads are always refreshing.", portuguese: "Saladas são sempre refrescantes.", audio: "salad.mp3" },
    { english: "I love spicy food.", portuguese: "Eu adoro comida picante.", audio: "spicy.mp3" },
    { english: "Sushi is a delicious treat.", portuguese: "Sushi é uma deliciosa iguaria.", audio: "sushi.mp3" },
    { english: "A warm soup is comforting.", portuguese: "Uma sopa quente é reconfortante.", audio: "soup.mp3" },
    { english: "I enjoy a nice cup of coffee.", portuguese: "Eu gosto de uma boa xícara de café.", audio: "coffee.mp3" },
    { english: "Nothing beats fresh fruit.", portuguese: "Nada supera uma fruta fresca.", audio: "fruit.mp3" },
    { english: "Breakfast is my favorite meal.", portuguese: "O café da manhã é minha refeição favorita.", audio: "breakfast.mp3" },
    { english: "Cheese makes everything better.", portuguese: "Queijo torna tudo melhor.", audio: "cheese.mp3" },
    { english: "I enjoy trying new recipes.", portuguese: "Eu gosto de experimentar novas receitas.", audio: "recipe.mp3" },
    { english: "I love a good steak.", portuguese: "Eu adoro um bom bife.", audio: "steak.mp3" },
    { english: "Fresh vegetables are so tasty.", portuguese: "Verduras frescas são tão saborosas.", audio: "vegetables.mp3" },
    { english: "A good dessert makes everything sweeter.", portuguese: "Uma boa sobremesa torna tudo mais doce.", audio: "sweet.mp3" },
    { english: "I like to cook with herbs.", portuguese: "Eu gosto de cozinhar com ervas.", audio: "herbs.mp3" },
    { english: "Italian food is always a great choice.", portuguese: "Comida italiana é sempre uma ótima escolha.", audio: "italian.mp3" },
    { english: "Baking bread is a joy.", portuguese: "Assar pão é uma alegria.", audio: "bread.mp3" },
    { english: "I love a good cup of hot chocolate.", portuguese: "Eu adoro uma boa xícara de chocolate quente.", audio: "chocolate.mp3" },
    { english: "Grilled chicken is always delicious.", portuguese: "Frango grelhado é sempre delicioso.", audio: "grilled_chicken.mp3" },
    { english: "Nothing beats a fresh salad.", portuguese: "Nada supera uma salada fresca.", audio: "fresh_salad.mp3" },
    { english: "I enjoy making homemade pizza.", portuguese: "Eu gosto de fazer pizza caseira.", audio: "homemade_pizza.mp3" },
    { english: "I love cooking with fresh ingredients.", portuguese: "Eu adoro cozinhar com ingredientes frescos.", audio: "fresh_ingredients.mp3" },
    { english: "Pasta with tomato sauce is a classic.", portuguese: "Massa com molho de tomate é um clássico.", audio: "pasta_tomato.mp3" },
    { english: "A bowl of soup is perfect on a cold day.", portuguese: "Uma tigela de sopa é perfeita em um dia frio.", audio: "bowl_of_soup.mp3" },
    { english: "I love to snack on fruits.", portuguese: "Eu adoro petiscar frutas.", audio: "fruit_snack.mp3" },
    { english: "Mexican food is so flavorful.", portuguese: "Comida mexicana é tão saborosa.", audio: "mexican_food.mp3" },
    { english: "Desserts always make a meal complete.", portuguese: "Sobremesas sempre completam uma refeição.", audio: "meal_complete.mp3" },
    { english: "Sushi is a healthy and delicious choice.", portuguese: "Sushi é uma escolha saudável e deliciosa.", audio: "healthy_sushi.mp3" },
    { english: "A homemade pie is the best treat.", portuguese: "Uma torta caseira é a melhor iguaria.", audio: "homemade_pie.mp3" },
    { english: "I love trying different cuisines.", portuguese: "Eu adoro experimentar diferentes culinárias.", audio: "different_cuisines.mp3" },
  ],


  social: [
    { english: "How are you doing today?", portuguese: "Como você está hoje?", audio: "social1.mp3" },
    { english: "I enjoy meeting new people.", portuguese: "Eu gosto de conhecer novas pessoas.", audio: "social2.mp3" },
    { english: "Do you want to hang out later?", portuguese: "Você quer sair mais tarde?", audio: "social3.mp3" },
    { english: "What are your hobbies?", portuguese: "Quais são seus hobbies?", audio: "social4.mp3" },
    { english: "Let’s go to the park.", portuguese: "Vamos ao parque.", audio: "social5.mp3" },
    { english: "Do you like going to parties?", portuguese: "Você gosta de ir a festas?", audio: "social6.mp3" },
    { english: "I love spending time with my friends.", portuguese: "Eu adoro passar tempo com meus amigos.", audio: "social7.mp3" },
    { english: "We should have dinner together sometime.", portuguese: "Devemos jantar juntos algum dia.", audio: "social8.mp3" },
    { english: "What’s your favorite place to relax?", portuguese: "Qual é o seu lugar favorito para relaxar?", audio: "social9.mp3" },
    { english: "I enjoy talking about books.", portuguese: "Eu gosto de conversar sobre livros.", audio: "social10.mp3" },
    { english: "It was great to see you again.", portuguese: "Foi ótimo ver você novamente.", audio: "social11.mp3" },
    { english: "Let’s keep in touch.", portuguese: "Vamos manter contato.", audio: "social12.mp3" },
    { english: "How was your weekend?", portuguese: "Como foi seu fim de semana?", audio: "social13.mp3" },
    { english: "Do you want to join us?", portuguese: "Você quer se juntar a nós?", audio: "social14.mp3" },
    { english: "I enjoy discussing movies.", portuguese: "Eu gosto de discutir filmes.", audio: "social15.mp3" },
    { english: "What kind of music do you like?", portuguese: "Que tipo de música você gosta?", audio: "social16.mp3" },
    { english: "I’ll call you tomorrow.", portuguese: "Eu te ligo amanhã.", audio: "social17.mp3" },
    { english: "It’s nice to meet you.", portuguese: "É um prazer conhecer você.", audio: "social18.mp3" },
    { english: "What do you usually do on weekends?", portuguese: "O que você costuma fazer nos finais de semana?", audio: "social19.mp3" },
    { english: "Let’s go out for coffee.", portuguese: "Vamos sair para tomar um café.", audio: "social20.mp3" },
    { english: "Do you like playing board games?", portuguese: "Você gosta de jogar jogos de tabuleiro?", audio: "social21.mp3" },
    { english: "I’ll see you at the party.", portuguese: "Vejo você na festa.", audio: "social22.mp3" },
    { english: "Have a great evening!", portuguese: "Tenha uma ótima noite!", audio: "social23.mp3" },
    { english: "I’d like to introduce you to my friend.", portuguese: "Gostaria de apresentar você ao meu amigo.", audio: "social24.mp3" },
    { english: "What’s the best way to contact you?", portuguese: "Qual é a melhor maneira de entrar em contato com você?", audio: "social25.mp3" },
    { english: "Do you want to watch a movie with me?", portuguese: "Você quer assistir a um filme comigo?", audio: "social26.mp3" },
    { english: "Let’s plan a trip together.", portuguese: "Vamos planejar uma viagem juntos.", audio: "social27.mp3" },
    { english: "I’d love to hear your opinion.", portuguese: "Eu adoraria ouvir sua opinião.", audio: "social28.mp3" },
    { english: "Can you recommend a good book?", portuguese: "Você pode recomendar um bom livro?", audio: "social29.mp3" },
    { english: "Do you enjoy cooking?", portuguese: "Você gosta de cozinhar?", audio: "social30.mp3" },
    { english: "What’s your favorite restaurant?", portuguese: "Qual é o seu restaurante favorito?", audio: "social31.mp3" },
    { english: "It’s been a pleasure talking to you.", portuguese: "Foi um prazer conversar com você.", audio: "social32.mp3" },
    { english: "Would you like to go for a walk?", portuguese: "Você gostaria de dar um passeio?", audio: "social33.mp3" },
    { english: "Can you teach me how to play this game?", portuguese: "Você pode me ensinar como jogar este jogo?", audio: "social34.mp3" },
    { english: "Let’s organize a picnic.", portuguese: "Vamos organizar um piquenique.", audio: "social35.mp3" },
    { english: "Thank you for inviting me.", portuguese: "Obrigado por me convidar.", audio: "social36.mp3" },
    { english: "What’s your favorite drink?", portuguese: "Qual é a sua bebida favorita?", audio: "social37.mp3" },
    { english: "Do you have any pets?", portuguese: "Você tem animais de estimação?", audio: "social38.mp3" },
    { english: "It’s been too long since we last met.", portuguese: "Faz muito tempo desde que nos encontramos pela última vez.", audio: "social39.mp3" },
    { english: "I enjoy volunteering on weekends.", portuguese: "Eu gosto de fazer trabalho voluntário nos finais de semana.", audio: "social40.mp3" },
    { english: "Have you ever been to a concert?", portuguese: "Você já foi a um show?", audio: "social41.mp3" },
    { english: "Let’s make plans for next weekend.", portuguese: "Vamos fazer planos para o próximo final de semana.", audio: "social42.mp3" },
    { english: "What’s your favorite holiday tradition?", portuguese: "Qual é sua tradição favorita de feriado?", audio: "social43.mp3" },
    { english: "Do you prefer the beach or the mountains?", portuguese: "Você prefere a praia ou as montanhas?", audio: "social44.mp3" },
    { english: "Let’s work on this project together.", portuguese: "Vamos trabalhar neste projeto juntos.", audio: "social45.mp3" },
    { english: "Do you like art museums?", portuguese: "Você gosta de museus de arte?", audio: "social46.mp3" },
    { english: "What’s the most exciting trip you’ve taken?", portuguese: "Qual foi a viagem mais emocionante que você já fez?", audio: "social47.mp3" },
    { english: "Let’s celebrate your birthday!", portuguese: "Vamos comemorar seu aniversário!", audio: "social48.mp3" },
    { english: "I’m glad we had this conversation.", portuguese: "Estou feliz por termos tido esta conversa.", audio: "social49.mp3" },],
}


// Variáveis globais
let currentSession = [];
let currentPhraseIndex = 0;
let progress = 0;
let isWrittenCorrect = false;
let isSpeechCorrect = false;
let playbackRate = 1; // Velocidade padrão: 1x
let sessionNameAtual = "";

// Elementos HTML
const englishPhrase = document.getElementById("english-phrase");
const translation = document.getElementById("translation");
const feedback = document.getElementById("feedback");
const progressBar = document.querySelector(".progress");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const phraseInput = document.getElementById("phrase-input");
const checkAnswerButton = document.getElementById("check-answer");
const startSpeechButton = document.getElementById("start-speech-button");
const listenButton = document.getElementById("listen-button");
const sessionSelection = document.getElementById("session-selection");
const exerciseSection = document.getElementById("exercise-section");
const spokenPhraseOutput = document.getElementById("spoken-phrase"); // Exibe a frase falada pelo usuário

// Elementos do controle de velocidade (botão Speed e dropdown)
const speedDropdown = document.getElementById("speed-dropdown");
const speedOptions = document.getElementById("speed-options");

// Salva o progresso no localStorage
function salvarProgresso(sessao) {
  const progressoAtual = {
    currentPhraseIndex,
    progress
  };
  localStorage.setItem(`progresso_${sessao}`, JSON.stringify(progressoAtual));
}

// Carrega o progresso do localStorage
function carregarProgresso(sessao) {
  const salvo = localStorage.getItem(`progresso_${sessao}`);
  if (salvo) {
    const { currentPhraseIndex: fraseSalva, progress: progressoSalvo } = JSON.parse(salvo);
    currentPhraseIndex = fraseSalva;
    progress = progressoSalvo;
  } else {
    currentPhraseIndex = 0;
    progress = 0;
  }
}

// Função para calcular similaridade usando Levenshtein Distance
function calculateLevenshteinDistance(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // Deletion
        matrix[i][j - 1] + 1, // Insertion
        matrix[i - 1][j - 1] + cost // Substitution
      );
    }
  }

  return matrix[a.length][b.length];
}

// Função para limpar e normalizar texto (remoção de pontuação, espaços extras)
function cleanAndNormalize(phrase) {
  return phrase
    .replace(/[^\w\s]/g, '') // Remove pontuação
    .replace(/\s+/g, ' ') // Substitui múltiplos espaços por um único
    .trim()
    .toLowerCase();
}

// Função para comparar frases de forma exata
function arePhrasesExactMatch(userPhrase, correctPhrase) {
  const normalizedUser = cleanAndNormalize(userPhrase);
  const normalizedCorrect = cleanAndNormalize(correctPhrase);
  return normalizedUser === normalizedCorrect;
}

// Função para carregar frases da sessão selecionada
function loadSession(sessionName) {
  sessionNameAtual = sessionName; // salva globalmente
  currentSession = sessions[sessionName];
  carregarProgresso(sessionName);
  loadPhrase(currentPhraseIndex);
  updateProgressBar();
  exerciseSection.style.display = 'block';
  sessionSelection.style.display = 'none';
  salvarProgresso(sessionName);
}

// Função para carregar a frase da sessão
function loadPhrase(index) {
  const phrase = currentSession[index];
  englishPhrase.textContent = phrase.english;
  translation.textContent = phrase.portuguese;
  phraseInput.value = "";
  feedback.textContent = "";
  spokenPhraseOutput.textContent = ""; // Limpar a exibição da fala
  isWrittenCorrect = false;
  isSpeechCorrect = false;
}

// Função para verificar a resposta escrita
function checkAnswer() {
  const userAnswer = phraseInput.value.trim();
  const correctAnswer = currentSession[currentPhraseIndex].english;

  if (arePhrasesExactMatch(userAnswer, correctAnswer)) {
    feedback.textContent = "Correto! 🎉";
    feedback.style.color = "green";
    isWrittenCorrect = true;
  } else {
    feedback.textContent = `Tente novamente. Sua resposta: "${userAnswer}"`;
    feedback.style.color = "red";
    isWrittenCorrect = false;
  }
}

// Função para atualizar a barra de progresso
function updateProgressBar() {
  const percentage = (progress / currentSession.length) * 100;
  progressBar.style.width = `${percentage}%`;
}

// Função para passar para a próxima frase
function nextPhrase() {
  if (isWrittenCorrect && isSpeechCorrect) {
    if (currentPhraseIndex < currentSession.length - 1) {
      currentPhraseIndex++;
      progress++;
      updateProgressBar();
      loadPhrase(currentPhraseIndex);
      salvarProgresso(sessionNameAtual);
    } else {
      alert("Você completou todas as frases da sessão!");
    }
  } else {
    feedback.textContent = "Por favor, corrija a escrita e a fala antes de avançar.";
    feedback.style.color = "orange";
  }
}

function prevPhrase() {
  if (currentPhraseIndex > 0) {
    currentPhraseIndex--;
    progress--;
    updateProgressBar();
    loadPhrase(currentPhraseIndex);
    salvarProgresso(sessionNameAtual);
  }
}


// Função para reproduzir o áudio da frase em inglês usando Web Speech API
function playAudio() {
  const phrase = currentSession[currentPhraseIndex].english;

  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = "en-US";
  utterance.rate = playbackRate;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
}

// Função para ajustar a velocidade de reprodução
function setPlaybackRate(rate) {
  playbackRate = rate;
  feedback.textContent = `Velocidade ajustada para ${rate}x.`;
  feedback.style.color = "blue";
}

// Função de reconhecimento de fala
function startSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    feedback.textContent = "Seu navegador não suporta reconhecimento de voz.";
    feedback.style.color = "red";
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;

  feedback.textContent = "Estou ouvindo...";

  recognition.start();

  recognition.onresult = (event) => {
    const spokenPhrase = event.results[0][0].transcript.trim();
    spokenPhraseOutput.textContent = spokenPhrase; // Exibir a frase falada
    const correctPhrase = currentSession[currentPhraseIndex].english;

    if (arePhrasesExactMatch(spokenPhrase, correctPhrase)) {
      feedback.textContent = "Fala correta! 🎉";
      feedback.style.color = "green";
      isSpeechCorrect = true;
    } else {
      feedback.textContent = `Você disse: "${spokenPhrase}". Tente novamente.`;
      feedback.style.color = "red";
      isSpeechCorrect = false;
    }
  };

  recognition.onerror = () => {
    feedback.textContent = "Erro no reconhecimento de fala. Tente novamente.";
    feedback.style.color = "red";
  };
}

// Eventos dos botões
document.getElementById("sports-btn").addEventListener("click", () => loadSession('sports'));
document.getElementById("work-btn").addEventListener("click", () => loadSession('work'));
document.getElementById("travel-btn").addEventListener("click", () => loadSession('travel'));
document.getElementById("history-btn").addEventListener("click", () => loadSession('history'));
document.getElementById("music-btn").addEventListener("click", () => loadSession('music'));
document.getElementById("food-btn").addEventListener("click", () => loadSession('comida'));
document.getElementById("social-btn").addEventListener("click", () => loadSession('social'));

checkAnswerButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextPhrase);
prevButton.addEventListener("click", prevPhrase);
listenButton.addEventListener("click", playAudio);

// Adicionar evento para o dropdown de velocidade
speedDropdown.addEventListener("click", () => {
  // Alterna a visibilidade do dropdown
  speedOptions.style.display = speedOptions.style.display === "block" ? "none" : "block";
});

// Adicionar eventos para as opções de velocidade no dropdown
const speedOptionButtons = document.querySelectorAll(".speed-option");
speedOptionButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const rate = parseFloat(e.target.getAttribute("data-rate"));
    setPlaybackRate(rate); // Ajusta a velocidade de reprodução
    speedOptions.style.display = "none"; // Fecha o dropdown após selecionar a velocidade
  });
});

startSpeechButton.addEventListener("click", startSpeechRecognition);










