import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText, CheckCircle, Clock, Users, Award, Download, Mail, Phone, MapPin } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Admission: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState('licence');

  const admissionProcess = {
    licence: [
      {
        step: 1,
        title: 'Candidature en ligne',
        description: 'Créez votre dossier sur Parcoursup',
        deadline: '11 Mars 2025',
        status: 'open',
      },
      {
        step: 2,
        title: 'Constitution du dossier',
        description: 'Téléchargez vos documents requis',
        deadline: '3 Avril 2025',
        status: 'upcoming',
      },
      {
        step: 3,
        title: 'Étude des dossiers',
        description: 'Examen par nos commissions d\'admission',
        deadline: 'Avril-Mai 2025',
        status: 'upcoming',
      },
      {
        step: 4,
        title: 'Résultats d\'admission',
        description: 'Publication des résultats',
        deadline: '30 Mai 2025',
        status: 'upcoming',
      },
      {
        step: 5,
        title: 'Inscription administrative',
        description: 'Finalisation de votre inscription',
        deadline: 'Juin-Juillet 2025',
        status: 'upcoming',
      },
    ],
    master: [
      {
        step: 1,
        title: 'Candidature en ligne',
        description: 'Dossier sur notre plateforme dédiée',
        deadline: '15 Avril 2025',
        status: 'open',
      },
      {
        step: 2,
        title: 'Entretien de motivation',
        description: 'Entretien avec le jury d\'admission',
        deadline: 'Mai 2025',
        status: 'upcoming',
      },
      {
        step: 3,
        title: 'Résultats d\'admission',
        description: 'Notification par email',
        deadline: '15 Juin 2025',
        status: 'upcoming',
      },
      {
        step: 4,
        title: 'Inscription administrative',
        description: 'Confirmation de votre place',
        deadline: 'Juillet 2025',
        status: 'upcoming',
      },
    ],
    doctorat: [
      {
        step: 1,
        title: 'Contact avec un directeur',
        description: 'Identification d\'un directeur de thèse',
        deadline: 'Toute l\'année',
        status: 'open',
      },
      {
        step: 2,
        title: 'Projet de recherche',
        description: 'Élaboration du projet de thèse',
        deadline: 'Variable',
        status: 'upcoming',
      },
      {
        step: 3,
        title: 'Financement',
        description: 'Recherche de financement',
        deadline: 'Variable',
        status: 'upcoming',
      },
      {
        step: 4,
        title: 'Inscription en doctorat',
        description: 'Inscription administrative',
        deadline: 'Septembre 2025',
        status: 'upcoming',
      },
    ],
  };

  const requirements = {
    licence: [
      'Baccalauréat ou équivalent',
      'Dossier scolaire (notes de 1ère et Terminale)',
      'Lettre de motivation',
      'CV détaillé',
      'Certificat de niveau de langue (si applicable)',
    ],
    master: [
      'Licence ou équivalent (180 ECTS)',
      'Relevés de notes de Licence',
      'Lettre de motivation personnalisée',
      'CV détaillé',
      'Lettres de recommandation (2)',
      'Projet professionnel',
      'Certificat de langue anglaise (B2 minimum)',
    ],
    doctorat: [
      'Master ou équivalent (300 ECTS)',
      'Projet de recherche détaillé',
      'CV académique',
      'Lettres de recommandation (3)',
      'Publications (si applicable)',
      'Preuve de financement',
      'Niveau d\'anglais C1',
    ],
  };

  const programs = [
    {
      level: 'Licence',
      name: 'Sciences et Technologies',
      duration: '3 ans',
      places: 120,
      tuition: '170€/an',
      specializations: ['Informatique', 'Sciences', 'Mathématiques'],
    },
    {
      level: 'Master',
      name: 'Intelligence Artificielle',
      duration: '2 ans',
      places: 40,
      tuition: '243€/an',
      specializations: ['Machine Learning', 'Deep Learning', 'IA Explicable'],
    },
    {
      level: 'Master',
      name: 'Biotechnologies',
      duration: '2 ans',
      places: 30,
      tuition: '243€/an',
      specializations: ['Thérapie génique', 'Diagnostic', 'Bioingénierie'],
    },
    {
      level: 'Master',
      name: 'Énergies Renouvelables',
      duration: '2 ans',
      places: 25,
      tuition: '243€/an',
      specializations: ['Solaire', 'Éolien', 'Stockage'],
    },
    {
      level: 'Doctorat',
      name: 'Sciences et Technologies',
      duration: '3 ans',
      places: 15,
      tuition: 'Financé',
      specializations: ['Tous domaines de recherche'],
    },
  ];

  const importantDates = [
    {
      date: '11 Mars 2025',
      event: 'Ouverture Parcoursup (Licence)',
      type: 'licence',
    },
    {
      date: '15 Avril 2025',
      event: 'Date limite candidatures Master',
      type: 'master',
    },
    {
      date: '30 Mai 2025',
      event: 'Résultats Licence',
      type: 'licence',
    },
    {
      date: '15 Juin 2025',
      event: 'Résultats Master',
      type: 'master',
    },
    {
      date: '1 Juillet 2025',
      event: 'Début inscriptions administratives',
      type: 'all',
    },
    {
      date: '15 Septembre 2025',
      event: 'Rentrée académique',
      type: 'all',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-success-100 text-success-800';
      case 'upcoming': return 'bg-accent-100 text-accent-800';
      case 'closed': return 'bg-neutral-100 text-neutral-800';
      default: return 'bg-neutral-100 text-neutral-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'open': return 'Ouvert';
      case 'upcoming': return 'À venir';
      case 'closed': return 'Fermé';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Admission & Inscription</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Rejoignez l'ESST et donnez une nouvelle dimension à votre avenir académique et professionnel
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto">
                  <FileText size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Candidater</h3>
                  <p className="text-neutral-600">Déposez votre candidature en ligne</p>
                </div>
                <Button className="w-full">
                  <Link to="/register">Commencer ma candidature</Link>
                </Button>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-secondary-900 rounded-full flex items-center justify-center mx-auto">
                  <Download size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Brochures</h3>
                  <p className="text-neutral-600">Téléchargez nos documents</p>
                </div>
                <Button variant="outline" className="w-full">
                  Télécharger
                </Button>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-success-900 rounded-full flex items-center justify-center mx-auto">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Contact</h3>
                  <p className="text-neutral-600">Besoin d'aide ? Contactez-nous</p>
                </div>
                <Button variant="outline" className="w-full">
                  <Link to="/contact">Nous contacter</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Processus d'Admission
            </h2>
            <p className="text-xl text-neutral-600">
              Suivez les étapes pour rejoindre l'ESST
            </p>
          </div>

          {/* Level Selector */}
          <div className="flex justify-center gap-4 mb-12">
            {['licence', 'master', 'doctorat'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 capitalize ${
                  selectedLevel === level
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Process Steps */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {admissionProcess[selectedLevel as keyof typeof admissionProcess].map((step, index) => (
                <Card key={step.step} className="hover:shadow-lg transition-all duration-300" hover>
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900 mb-1">
                            {step.title}
                          </h3>
                          <p className="text-neutral-700 mb-2">{step.description}</p>
                          <div className="flex items-center space-x-2 text-sm text-neutral-600">
                            <Calendar size={16} />
                            <span>{step.deadline}</span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(step.status)}`}>
                          {getStatusLabel(step.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Pièces Requises
            </h2>
            <p className="text-xl text-neutral-600">
              Documents nécessaires pour votre candidature
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-neutral-900 capitalize">
                  Candidature {selectedLevel}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requirements[selectedLevel as keyof typeof requirements].map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-success-900 flex-shrink-0" />
                      <span className="text-neutral-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Nos Formations
            </h2>
            <p className="text-xl text-neutral-600">
              Découvrez nos programmes d'excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300" hover>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full font-medium">
                          {program.level}
                        </span>
                        <span className="text-sm text-neutral-600">{program.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        {program.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary-900">{program.tuition}</div>
                      <div className="text-sm text-neutral-600">Frais de scolarité</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-secondary-900">{program.places}</div>
                      <div className="text-sm text-neutral-600">Places disponibles</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-success-900">{program.specializations.length}</div>
                      <div className="text-sm text-neutral-600">Spécialisations</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Spécialisations</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.specializations.map((spec, idx) => (
                        <span 
                          key={idx}
                          className="bg-neutral-100 text-neutral-700 text-sm px-3 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      <Link to="/formations">En savoir plus</Link>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Link to="/register">Candidater</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Dates Importantes
            </h2>
            <p className="text-xl text-neutral-600">
              Calendrier des admissions 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300" hover>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center">
                        <Calendar size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900">{item.event}</h3>
                        <p className="text-sm text-neutral-600">{item.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-neutral-400" />
                      <span className="text-sm text-neutral-600 capitalize">
                        {item.type === 'all' ? 'Tous niveaux' : item.type}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Admission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center" padding="lg">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto">
                <Users size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                  Service des Admissions
                </h2>
                <p className="text-neutral-700">
                  Notre équipe est là pour vous accompagner dans votre candidature
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Mail size={16} className="text-primary-900" />
                  <span>admissions@esst.edu</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone size={16} className="text-primary-900" />
                  <span>+33 1 23 45 67 88</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin size={16} className="text-primary-900" />
                  <span>Bureau A101</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Link to="/contact">Prendre rendez-vous</Link>
                </Button>
                <Button variant="outline" size="lg">
                  FAQ Admissions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Admission;