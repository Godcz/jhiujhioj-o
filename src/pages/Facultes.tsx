import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Award, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Facultes: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState('all');

  const faculties = [
    {
      id: 'informatique',
      name: 'Faculté d\'Informatique',
      description: 'Formation et recherche en informatique, intelligence artificielle et cybersécurité',
      dean: 'Prof. Michel Dubois',
      students: 850,
      teachers: 45,
      programs: 8,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      departments: [
        {
          name: 'Informatique Fondamentale',
          head: 'Dr. Sarah Chen',
          specialties: ['Algorithmique', 'Structures de données', 'Théorie des graphes'],
        },
        {
          name: 'Intelligence Artificielle',
          head: 'Prof. Jean Martin',
          specialties: ['Machine Learning', 'Deep Learning', 'Vision par ordinateur'],
        },
        {
          name: 'Cybersécurité',
          head: 'Dr. Pierre Durand',
          specialties: ['Sécurité réseau', 'Cryptographie', 'Audit sécurité'],
        },
      ],
    },
    {
      id: 'sciences',
      name: 'Faculté des Sciences',
      description: 'Mathématiques, physique, chimie et sciences de la vie',
      dean: 'Prof. Marie Laurent',
      students: 650,
      teachers: 38,
      programs: 6,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      departments: [
        {
          name: 'Mathématiques',
          head: 'Prof. Antoine Moreau',
          specialties: ['Analyse', 'Algèbre', 'Probabilités'],
        },
        {
          name: 'Physique',
          head: 'Dr. Claire Rousseau',
          specialties: ['Physique quantique', 'Optique', 'Matériaux'],
        },
        {
          name: 'Chimie',
          head: 'Prof. David Bernard',
          specialties: ['Chimie organique', 'Chimie analytique', 'Biochimie'],
        },
      ],
    },
    {
      id: 'ingenierie',
      name: 'Faculté d\'Ingénierie',
      description: 'Génie civil, mécanique, électrique et énergétique',
      dean: 'Prof. Robert Leroy',
      students: 720,
      teachers: 42,
      programs: 7,
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      departments: [
        {
          name: 'Génie Civil',
          head: 'Prof. Sophie Blanc',
          specialties: ['Structures', 'Géotechnique', 'Hydraulique'],
        },
        {
          name: 'Génie Mécanique',
          head: 'Dr. Marc Petit',
          specialties: ['Mécanique des fluides', 'Thermodynamique', 'Robotique'],
        },
        {
          name: 'Génie Électrique',
          head: 'Prof. Anne Dubois',
          specialties: ['Électronique', 'Automatique', 'Énergies renouvelables'],
        },
      ],
    },
    {
      id: 'biotechnologies',
      name: 'Faculté de Biotechnologies',
      description: 'Biotechnologies, bioinformatique et sciences biomédicales',
      dean: 'Prof. Isabelle Martin',
      students: 420,
      teachers: 28,
      programs: 5,
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      departments: [
        {
          name: 'Biotechnologies Médicales',
          head: 'Dr. Thomas Roux',
          specialties: ['Thérapie génique', 'Diagnostic moléculaire', 'Biomarqueurs'],
        },
        {
          name: 'Bioinformatique',
          head: 'Prof. Julie Moreau',
          specialties: ['Génomique', 'Protéomique', 'Bio-informatique'],
        },
      ],
    },
  ];

  const filteredFaculties = selectedFaculty === 'all' 
    ? faculties 
    : faculties.filter(f => f.id === selectedFaculty);

  const totalStats = faculties.reduce((acc, faculty) => ({
    students: acc.students + faculty.students,
    teachers: acc.teachers + faculty.teachers,
    programs: acc.programs + faculty.programs,
  }), { students: 0, teachers: 0, programs: 0 });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Facultés & Départements</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Découvrez notre organisation académique et nos domaines d'expertise
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-900">{faculties.length}</div>
                <div className="text-neutral-600">Facultés</div>
              </div>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-900">{totalStats.students}</div>
                <div className="text-neutral-600">Étudiants</div>
              </div>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-900">{totalStats.teachers}</div>
                <div className="text-neutral-600">Enseignants</div>
              </div>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-900">{totalStats.programs}</div>
                <div className="text-neutral-600">Programmes</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedFaculty('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedFaculty === 'all'
                  ? 'bg-primary-900 text-white shadow-lg'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Toutes les facultés
            </button>
            {faculties.map((faculty) => (
              <button
                key={faculty.id}
                onClick={() => setSelectedFaculty(faculty.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedFaculty === faculty.id
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {faculty.name.split(' ')[2] || faculty.name.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculties */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredFaculties.map((faculty) => (
              <Card key={faculty.id} className="overflow-hidden" padding="none">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Faculty Image */}
                  <div className="relative">
                    <img 
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Faculty Info */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                        {faculty.name}
                      </h2>
                      <p className="text-lg text-neutral-700 leading-relaxed">
                        {faculty.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mx-auto mb-2">
                          <Users size={20} className="text-primary-900" />
                        </div>
                        <div className="text-2xl font-bold text-primary-900">{faculty.students}</div>
                        <div className="text-sm text-neutral-600">Étudiants</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-secondary-100 rounded-full mx-auto mb-2">
                          <BookOpen size={20} className="text-secondary-900" />
                        </div>
                        <div className="text-2xl font-bold text-secondary-900">{faculty.teachers}</div>
                        <div className="text-sm text-neutral-600">Enseignants</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-success-100 rounded-full mx-auto mb-2">
                          <Award size={20} className="text-success-900" />
                        </div>
                        <div className="text-2xl font-bold text-success-900">{faculty.programs}</div>
                        <div className="text-sm text-neutral-600">Programmes</div>
                      </div>
                    </div>

                    {/* Dean */}
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-neutral-900 mb-1">Doyen de la Faculté</h4>
                      <p className="text-neutral-700">{faculty.dean}</p>
                    </div>

                    {/* Departments */}
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-4">Départements</h4>
                      <div className="space-y-4">
                        {faculty.departments.map((dept, index) => (
                          <div key={index} className="border border-neutral-200 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="font-medium text-neutral-900">{dept.name}</h5>
                              <span className="text-sm text-neutral-600">Chef: {dept.head}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {dept.specialties.map((specialty, idx) => (
                                <span 
                                  key={idx}
                                  className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex-1">
                        <Link to="/formations" className="flex items-center justify-center space-x-2">
                          <span>Voir les formations</span>
                          <ExternalLink size={16} />
                        </Link>
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Link to="/contact" className="flex items-center justify-center space-x-2">
                          <span>Contacter la faculté</span>
                          <Mail size={16} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Contactez nos Facultés
            </h2>
            <p className="text-xl text-neutral-600">
              Nos équipes sont à votre disposition pour répondre à vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Téléphone</h3>
                  <p className="text-neutral-700">+33 1 23 45 67 89</p>
                </div>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-secondary-900 rounded-full flex items-center justify-center mx-auto">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Email</h3>
                  <p className="text-neutral-700">facultes@esst.edu</p>
                </div>
              </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-success-900 rounded-full flex items-center justify-center mx-auto">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Adresse</h3>
                  <p className="text-neutral-700">123 Avenue de l'Innovation<br />75001 Paris</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facultes;