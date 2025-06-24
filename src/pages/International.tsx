import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, Award, Plane, BookOpen, Heart, MapPin, Calendar, Mail, ExternalLink } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const International: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState('all');

  const partnerships = [
    {
      country: 'États-Unis',
      university: 'Stanford University',
      type: 'Échange académique',
      programs: ['Master IA', 'Doctorat'],
      duration: '1-2 semestres',
      students: 15,
      flag: '🇺🇸',
    },
    {
      country: 'Allemagne',
      university: 'Technical University of Munich',
      type: 'Double diplôme',
      programs: ['Ingénierie', 'Sciences'],
      duration: '2 ans',
      students: 12,
      flag: '🇩🇪',
    },
    {
      country: 'Japon',
      university: 'University of Tokyo',
      type: 'Recherche collaborative',
      programs: ['Robotique', 'IA'],
      duration: '6 mois - 1 an',
      students: 8,
      flag: '🇯🇵',
    },
    {
      country: 'Canada',
      university: 'University of Toronto',
      type: 'Échange académique',
      programs: ['Informatique', 'Biotechnologies'],
      duration: '1 semestre',
      students: 10,
      flag: '🇨🇦',
    },
    {
      country: 'Singapour',
      university: 'National University of Singapore',
      type: 'Stage international',
      programs: ['Tous programmes'],
      duration: '3-6 mois',
      students: 20,
      flag: '🇸🇬',
    },
    {
      country: 'Suède',
      university: 'KTH Royal Institute of Technology',
      type: 'Projet de recherche',
      programs: ['Énergies renouvelables'],
      duration: '1 an',
      students: 6,
      flag: '🇸🇪',
    },
  ];

  const programs = [
    {
      id: 'erasmus',
      name: 'Programme Erasmus+',
      description: 'Échanges universitaires en Europe',
      destinations: 25,
      duration: '1-2 semestres',
      benefits: ['Bourse Erasmus', 'Reconnaissance des crédits', 'Support linguistique'],
      requirements: ['Niveau B2 en langue', 'Moyenne ≥ 12/20', 'Motivation'],
    },
    {
      id: 'double-diplome',
      name: 'Double Diplôme International',
      description: 'Obtenez deux diplômes en étudiant à l\'étranger',
      destinations: 8,
      duration: '1-2 ans',
      benefits: ['Double certification', 'Réseau international', 'Employabilité renforcée'],
      requirements: ['Excellence académique', 'Niveau C1 en langue', 'Entretien de sélection'],
    },
    {
      id: 'stage',
      name: 'Stages Internationaux',
      description: 'Expérience professionnelle à l\'international',
      destinations: 30,
      duration: '3-6 mois',
      benefits: ['Expérience professionnelle', 'Réseau professionnel', 'Indemnités de stage'],
      requirements: ['Niveau B2 en langue', 'CV et lettre de motivation', 'Entretien'],
    },
    {
      id: 'recherche',
      name: 'Mobilité de Recherche',
      description: 'Projets de recherche dans des laboratoires partenaires',
      destinations: 15,
      duration: '6 mois - 2 ans',
      benefits: ['Collaboration scientifique', 'Publications', 'Financement recherche'],
      requirements: ['Niveau Master/Doctorat', 'Projet de recherche', 'Accord du directeur'],
    },
  ];

  const testimonials = [
    {
      name: 'Alice Moreau',
      program: 'Erasmus+ - KTH Stockholm',
      year: '2023-2024',
      quote: 'Mon semestre en Suède m\'a ouvert l\'esprit et enrichi ma vision de l\'ingénierie durable.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
      country: '🇸🇪',
    },
    {
      name: 'Pierre Dubois',
      program: 'Double Diplôme - Stanford',
      year: '2022-2024',
      quote: 'Le double diplôme m\'a permis d\'acquérir une expertise unique en IA et d\'intégrer une startup de la Silicon Valley.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      country: '🇺🇸',
    },
    {
      name: 'Sophie Chen',
      program: 'Stage - NUS Singapour',
      year: '2023',
      quote: 'Mon stage à Singapour m\'a fait découvrir l\'écosystème tech asiatique et m\'a donné une perspective globale.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      country: '🇸🇬',
    },
  ];

  const events = [
    {
      title: 'Journée Internationale',
      date: '20 Mars 2025',
      description: 'Découverte des cultures du monde et présentation des programmes d\'échange',
      location: 'Campus ESST',
    },
    {
      title: 'Conférence Alumni International',
      date: '15 Avril 2025',
      description: 'Retours d\'expérience d\'anciens étudiants ayant étudié à l\'étranger',
      location: 'Amphithéâtre principal',
    },
    {
      title: 'Forum des Partenaires',
      date: '10 Mai 2025',
      description: 'Rencontres avec les représentants des universités partenaires',
      location: 'Hall d\'accueil',
    },
  ];

  const filteredPrograms = selectedProgram === 'all' 
    ? programs 
    : programs.filter(p => p.id === selectedProgram);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Relations Internationales</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ouvrez-vous au monde avec nos programmes d'échange et partenariats internationaux
            </p>
          </div>
        </div>
      </section>

      {/* International Stats */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-900">{partnerships.length}</div>
                <div className="text-neutral-600">Universités partenaires</div>
              </div>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary-900">
                  {partnerships.reduce((sum, p) => sum + p.students, 0)}
                </div>
                <div className="text-neutral-600">Étudiants en mobilité</div>
              </div>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success-900">30</div>
                <div className="text-neutral-600">Pays de destination</div>
              </div>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent-900">95%</div>
                <div className="text-neutral-600">Taux de satisfaction</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* International Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Programmes Internationaux
            </h2>
            <p className="text-xl text-neutral-600">
              Choisissez le programme qui correspond à vos ambitions
            </p>
          </div>

          {/* Program Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedProgram('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedProgram === 'all'
                  ? 'bg-primary-900 text-white shadow-lg'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Tous les programmes
            </button>
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedProgram === program.id
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {program.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPrograms.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-all duration-300" hover>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center">
                      <Globe size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">{program.name}</h3>
                      <p className="text-neutral-700">{program.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary-900">{program.destinations}</div>
                      <div className="text-sm text-neutral-600">Destinations</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-secondary-900">{program.duration}</div>
                      <div className="text-sm text-neutral-600">Durée</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Avantages</h4>
                    <div className="space-y-1">
                      {program.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-neutral-700">
                          <div className="w-1.5 h-1.5 bg-success-900 rounded-full"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Prérequis</h4>
                    <div className="space-y-1">
                      {program.requirements.map((requirement, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-neutral-700">
                          <div className="w-1.5 h-1.5 bg-primary-900 rounded-full"></div>
                          <span>{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">
                    En savoir plus
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* University Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Nos Partenaires Universitaires
            </h2>
            <p className="text-xl text-neutral-600">
              Un réseau mondial d'universités prestigieuses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300" hover>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{partnership.flag}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-neutral-900">{partnership.university}</h3>
                      <p className="text-sm text-neutral-600">{partnership.country}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">Type:</span>
                      <span className="font-medium text-neutral-900">{partnership.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">Durée:</span>
                      <span className="font-medium text-neutral-900">{partnership.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">Étudiants/an:</span>
                      <span className="font-medium text-neutral-900">{partnership.students}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Programmes</h4>
                    <div className="flex flex-wrap gap-2">
                      {partnership.programs.map((program, idx) => (
                        <span 
                          key={idx}
                          className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Témoignages d'Étudiants
            </h2>
            <p className="text-xl text-neutral-600">
              Découvrez les expériences de nos étudiants à l'international
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300" hover>
                <div className="space-y-4">
                  <div className="relative">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 text-2xl">
                      {testimonial.country}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.program}</p>
                    <p className="text-xs text-neutral-500">{testimonial.year}</p>
                  </div>
                  <p className="text-neutral-700 italic">"{testimonial.quote}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Événements Internationaux
            </h2>
            <p className="text-xl text-neutral-600">
              Participez à nos événements dédiés à l'international
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300" hover>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-primary-900">
                    <Calendar size={20} />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">{event.title}</h3>
                  <p className="text-neutral-700 text-sm">{event.description}</p>
                  <div className="flex items-center space-x-2 text-sm text-neutral-600">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <Button size="sm" className="w-full">
                    S'inscrire
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact International Office */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center" padding="lg">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                  Bureau des Relations Internationales
                </h2>
                <p className="text-neutral-700">
                  Notre équipe est là pour vous accompagner dans vos projets de mobilité internationale
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                  <p className="text-neutral-700">international@esst.edu</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Téléphone</h4>
                  <p className="text-neutral-700">+33 1 23 45 67 90</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Horaires</h4>
                  <p className="text-neutral-700">Lun-Ven: 9h-17h</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>
                  <Link to="/contact" className="flex items-center space-x-2">
                    <span>Prendre rendez-vous</span>
                    <ExternalLink size={16} />
                  </Link>
                </Button>
                <Button variant="outline">
                  Télécharger la brochure
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default International;