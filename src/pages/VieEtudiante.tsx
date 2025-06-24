import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, MapPin, Heart, Trophy, Music, Camera, Code, Palette, Coffee, Utensils, Home, Wifi, Car } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const VieEtudiante: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const associations = [
    {
      id: 'bde',
      name: 'Bureau des Étudiants (BDE)',
      category: 'administration',
      description: 'Organisation d\'événements et représentation étudiante',
      members: 150,
      icon: Users,
      contact: 'bde@esst.edu',
      activities: ['Soirées étudiantes', 'Événements culturels', 'Représentation étudiante'],
    },
    {
      id: 'robotique',
      name: 'Club Robotique ESST',
      category: 'technique',
      description: 'Conception et programmation de robots',
      members: 45,
      icon: Code,
      contact: 'robotique@esst.edu',
      activities: ['Compétitions robotique', 'Ateliers techniques', 'Projets collaboratifs'],
    },
    {
      id: 'musique',
      name: 'Orchestre ESST',
      category: 'culturel',
      description: 'Ensemble musical de l\'école',
      members: 30,
      icon: Music,
      contact: 'musique@esst.edu',
      activities: ['Concerts', 'Répétitions hebdomadaires', 'Festivals'],
    },
    {
      id: 'photo',
      name: 'Club Photo',
      category: 'culturel',
      description: 'Photographie et arts visuels',
      members: 25,
      icon: Camera,
      contact: 'photo@esst.edu',
      activities: ['Expositions', 'Sorties photo', 'Ateliers retouche'],
    },
    {
      id: 'sport',
      name: 'Association Sportive',
      category: 'sport',
      description: 'Sports et activités physiques',
      members: 120,
      icon: Trophy,
      contact: 'sport@esst.edu',
      activities: ['Tournois inter-écoles', 'Cours de fitness', 'Randonnées'],
    },
    {
      id: 'art',
      name: 'Atelier Arts Plastiques',
      category: 'culturel',
      description: 'Création artistique et expression',
      members: 20,
      icon: Palette,
      contact: 'art@esst.edu',
      activities: ['Ateliers peinture', 'Sculptures', 'Expositions'],
    },
  ];

  const events = [
    {
      title: 'Soirée d\'Intégration 2025',
      date: '15 Février 2025',
      time: '19h00',
      location: 'Grand Amphithéâtre',
      organizer: 'Bureau des Étudiants',
      description: 'Soirée de bienvenue pour les nouveaux étudiants',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Hackathon IA 2025',
      date: '22-24 Février 2025',
      time: '48h non-stop',
      location: 'Laboratoires Informatique',
      organizer: 'Club Robotique',
      description: 'Compétition de programmation sur l\'intelligence artificielle',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Concert de Printemps',
      date: '15 Mars 2025',
      time: '20h00',
      location: 'Auditorium ESST',
      organizer: 'Orchestre ESST',
      description: 'Concert annuel de l\'orchestre de l\'école',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const services = [
    {
      name: 'Restaurant Universitaire',
      description: 'Repas équilibrés à prix étudiants',
      icon: Utensils,
      hours: 'Lun-Ven: 11h30-14h00, 18h30-20h00',
      location: 'Bâtiment Central, RDC',
    },
    {
      name: 'Résidence Étudiante',
      description: 'Logements sur le campus',
      icon: Home,
      hours: 'Accueil: 8h00-18h00',
      location: 'Campus Nord',
    },
    {
      name: 'Bibliothèque',
      description: 'Espaces d\'étude et ressources documentaires',
      icon: Coffee,
      hours: 'Lun-Sam: 8h00-22h00, Dim: 10h00-18h00',
      location: 'Bâtiment Bibliothèque',
    },
    {
      name: 'Centre Informatique',
      description: 'Accès internet et support technique',
      icon: Wifi,
      hours: 'Lun-Ven: 8h00-20h00',
      location: 'Bâtiment Informatique',
    },
    {
      name: 'Parking Étudiant',
      description: 'Stationnement gratuit pour les étudiants',
      icon: Car,
      hours: '24h/24',
      location: 'Entrée principale',
    },
  ];

  const categories = [
    { id: 'all', label: 'Toutes' },
    { id: 'administration', label: 'Administration' },
    { id: 'technique', label: 'Technique' },
    { id: 'culturel', label: 'Culturel' },
    { id: 'sport', label: 'Sport' },
  ];

  const filteredAssociations = selectedCategory === 'all' 
    ? associations 
    : associations.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Vie Étudiante</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Découvrez la richesse de la vie étudiante à l'ESST : associations, événements et services
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-900">{associations.length}</div>
                <div className="text-neutral-600">Associations</div>
              </div>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary-900">
                  {associations.reduce((sum, a) => sum + a.members, 0)}
                </div>
                <div className="text-neutral-600">Membres actifs</div>
              </div>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success-900">50+</div>
                <div className="text-neutral-600">Événements/an</div>
              </div>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent-900">{services.length}</div>
                <div className="text-neutral-600">Services campus</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Associations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Associations Étudiantes
            </h2>
            <p className="text-xl text-neutral-600">
              Rejoignez nos associations et enrichissez votre expérience étudiante
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAssociations.map((association) => {
              const Icon = association.icon;
              return (
                <Card key={association.id} className="hover:shadow-lg transition-all duration-300" hover>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-neutral-900">{association.name}</h3>
                        <p className="text-sm text-neutral-600">{association.members} membres</p>
                      </div>
                    </div>

                    <p className="text-neutral-700">{association.description}</p>

                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Activités</h4>
                      <div className="space-y-1">
                        {association.activities.map((activity, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-neutral-700">
                            <div className="w-1.5 h-1.5 bg-primary-900 rounded-full"></div>
                            <span>{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                      <span className="text-sm text-neutral-600">{association.contact}</span>
                      <Button size="sm">
                        Rejoindre
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Événements à Venir
            </h2>
            <p className="text-xl text-neutral-600">
              Ne manquez pas les prochains événements de la vie étudiante
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300" hover padding="none">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{event.title}</h3>
                    <p className="text-neutral-700 text-sm">{event.description}</p>
                  </div>

                  <div className="space-y-2 text-sm text-neutral-600">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{event.date} à {event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} />
                      <span>Organisé par {event.organizer}</span>
                    </div>
                  </div>

                  <Button className="w-full">
                    S'inscrire
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Link to="/actualites">Voir tous les événements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Campus Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Services du Campus
            </h2>
            <p className="text-xl text-neutral-600">
              Tous les services pour faciliter votre vie étudiante
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300" hover>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary-900 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-neutral-900">{service.name}</h3>
                      </div>
                    </div>

                    <p className="text-neutral-700">{service.description}</p>

                    <div className="space-y-2 text-sm text-neutral-600">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{service.hours}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{service.location}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Témoignages Étudiants
            </h2>
            <p className="text-xl text-neutral-600">
              Ce que disent nos étudiants de la vie à l'ESST
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sophie Martin',
                year: 'Master 2 IA',
                quote: 'La vie associative à l\'ESST m\'a permis de développer mes compétences en leadership tout en m\'amusant.',
                image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
              },
              {
                name: 'Thomas Dubois',
                year: 'Licence 3 Informatique',
                quote: 'Les événements organisés par le BDE créent une vraie cohésion entre les étudiants de toutes les promotions.',
                image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
              },
              {
                name: 'Marie Laurent',
                year: 'Master 1 Biotechnologies',
                quote: 'Le club robotique m\'a ouvert de nouveaux horizons et m\'a aidée à découvrir ma passion pour l\'innovation.',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300" hover>
                <div className="space-y-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-neutral-900">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.year}</p>
                  </div>
                  <p className="text-neutral-700 italic">"{testimonial.quote}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Rejoignez la Communauté ESST
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Participez à la vie étudiante et créez des souvenirs inoubliables 
            tout en développant vos compétences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent-900 hover:bg-accent-800 text-primary-900">
              <Link to="/register">Devenir étudiant</Link>
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

export default VieEtudiante;