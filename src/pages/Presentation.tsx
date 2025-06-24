import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Globe, BookOpen, Target, Heart, Star, ArrowRight, CheckCircle } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Presentation: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence Académique',
      description: 'Nous visons l\'excellence dans tous nos programmes d\'enseignement et de recherche.',
    },
    {
      icon: Heart,
      title: 'Innovation',
      description: 'Nous encourageons la créativité et l\'innovation dans toutes nos activités.',
    },
    {
      icon: Globe,
      title: 'Ouverture Internationale',
      description: 'Nous cultivons une perspective globale et des partenariats internationaux.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous favorisons le travail d\'équipe et la collaboration interdisciplinaire.',
    },
  ];

  const achievements = [
    { number: '50+', label: 'Années d\'Excellence' },
    { number: '15,000+', label: 'Diplômés' },
    { number: '200+', label: 'Enseignants-Chercheurs' },
    { number: '50+', label: 'Partenaires Internationaux' },
  ];

  const leadership = [
    {
      name: 'Dr. Marie Dubois',
      position: 'Directrice Générale',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Docteure en Sciences de l\'Ingénieur, 20 ans d\'expérience en direction d\'établissements d\'enseignement supérieur.',
    },
    {
      name: 'Prof. Jean Martin',
      position: 'Directeur Académique',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Professeur en Informatique, expert en intelligence artificielle et innovation pédagogique.',
    },
    {
      name: 'Dr. Sophie Laurent',
      position: 'Directrice de la Recherche',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Docteure en Sciences, spécialisée en biotechnologies et transfert de technologie.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              École Supérieure des Sciences et Technologies
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Depuis 1975, l'ESST forme les leaders de demain dans les domaines des sciences, 
              technologies et innovation. Notre mission est de développer l'excellence académique 
              et la recherche de pointe.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">Notre Mission</h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  L'ESST a pour mission de former des professionnels hautement qualifiés dans les domaines 
                  des sciences et technologies, de conduire des recherches innovantes et de contribuer 
                  au développement économique et social par le transfert de connaissances.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">Notre Vision</h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Être reconnue comme une institution d'excellence en sciences et technologies, 
                  leader dans l'innovation pédagogique et la recherche appliquée, formant les 
                  acteurs du changement pour un avenir durable.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bibliothèque ESST"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Les valeurs qui guident notre action quotidienne et définissent notre identité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300" hover>
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{value.title}</h3>
                    <p className="text-neutral-700 leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-neutral-600">
              Des chiffres qui témoignent de notre excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-neutral-700 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Notre Direction
            </h2>
            <p className="text-xl text-neutral-600">
              Une équipe dirigeante expérimentée et visionnaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300" hover>
                <div className="space-y-4">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">{leader.name}</h3>
                    <p className="text-primary-900 font-medium">{leader.position}</p>
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Campus historique ESST"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">Notre Histoire</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">1975 - Fondation</h4>
                    <p className="text-neutral-700">Création de l'ESST avec 3 départements et 200 étudiants.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">1990 - Expansion</h4>
                    <p className="text-neutral-700">Ouverture de nouveaux laboratoires de recherche et partenariats internationaux.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">2010 - Innovation</h4>
                    <p className="text-neutral-700">Lancement des programmes en intelligence artificielle et biotechnologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">2020 - Transformation Digitale</h4>
                    <p className="text-neutral-700">Mise en place de la plateforme collaborative et des cours hybrides.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Rejoignez l'Excellence ESST
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Découvrez comment l'ESST peut transformer votre avenir professionnel 
            et vous préparer aux défis de demain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent-900 hover:bg-accent-800 text-primary-900">
              <Link to="/formations" className="flex items-center space-x-2">
                <span>Découvrir nos formations</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;