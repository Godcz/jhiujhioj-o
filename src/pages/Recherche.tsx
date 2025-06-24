import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Award, BookOpen, ExternalLink, Download, Calendar, Tag } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Recherche: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const researchDomains = [
    {
      id: 'ia',
      name: 'Intelligence Artificielle',
      description: 'Recherche en machine learning, deep learning et IA explicable',
      projects: 15,
      publications: 45,
      researchers: 12,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'biotech',
      name: 'Biotechnologies',
      description: 'Thérapies innovantes, diagnostic moléculaire et bioingénierie',
      projects: 12,
      publications: 38,
      researchers: 10,
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'energie',
      name: 'Énergies Renouvelables',
      description: 'Solutions énergétiques durables et stockage d\'énergie',
      projects: 8,
      publications: 28,
      researchers: 8,
      image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'materiaux',
      name: 'Matériaux Avancés',
      description: 'Nanomatériaux, composites et matériaux intelligents',
      projects: 10,
      publications: 32,
      researchers: 9,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const laboratories = [
    {
      name: 'Laboratoire d\'Intelligence Artificielle Appliquée (LIAA)',
      director: 'Prof. Jean Martin',
      domain: 'Intelligence Artificielle',
      members: 25,
      description: 'Recherche en IA pour la santé, l\'industrie et l\'environnement',
      equipment: ['Cluster GPU', 'Serveurs de calcul', 'Stations de travail IA'],
      partnerships: ['Google Research', 'Microsoft Research', 'INRIA'],
    },
    {
      name: 'Centre de Biotechnologies Médicales (CBM)',
      director: 'Dr. Sophie Laurent',
      domain: 'Biotechnologies',
      members: 20,
      description: 'Développement de thérapies géniques et cellulaires innovantes',
      equipment: ['Séquenceurs ADN', 'Microscopes confocaux', 'Bioréacteurs'],
      partnerships: ['Institut Pasteur', 'Sanofi', 'Roche'],
    },
    {
      name: 'Institut des Énergies Durables (IED)',
      director: 'Prof. Marie Dubois',
      domain: 'Énergies Renouvelables',
      members: 18,
      description: 'Recherche sur les technologies solaires et éoliennes de nouvelle génération',
      equipment: ['Simulateurs solaires', 'Bancs d\'essai éoliens', 'Analyseurs de réseau'],
      partnerships: ['EDF', 'Total Énergies', 'CEA'],
    },
  ];

  const publications = [
    {
      title: 'Deep Learning for Medical Image Analysis: A Comprehensive Review',
      authors: 'Martin, J., Dubois, M., Laurent, S.',
      journal: 'Nature Machine Intelligence',
      year: 2024,
      citations: 156,
      domain: 'Intelligence Artificielle',
      type: 'Article de revue',
    },
    {
      title: 'Novel Gene Therapy Approaches for Rare Diseases',
      authors: 'Laurent, S., Chen, L., Moreau, P.',
      journal: 'Cell Therapy',
      year: 2024,
      citations: 89,
      domain: 'Biotechnologies',
      type: 'Article de recherche',
    },
    {
      title: 'Perovskite Solar Cells: Efficiency and Stability Improvements',
      authors: 'Dubois, M., Roux, T., Bernard, A.',
      journal: 'Advanced Energy Materials',
      year: 2023,
      citations: 234,
      domain: 'Énergies Renouvelables',
      type: 'Article de recherche',
    },
  ];

  const filteredDomains = selectedDomain === 'all' 
    ? researchDomains 
    : researchDomains.filter(d => d.id === selectedDomain);

  const filteredPublications = publications.filter(pub => 
    (selectedDomain === 'all' || pub.domain.toLowerCase().includes(selectedDomain)) &&
    (searchQuery === '' || 
     pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     pub.authors.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Recherche & Laboratoires</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Découvrez nos activités de recherche de pointe et nos laboratoires d'excellence
            </p>
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-900">45</div>
                <div className="text-neutral-600">Projets de recherche</div>
              </div>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary-900">143</div>
                <div className="text-neutral-600">Publications</div>
              </div>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success-900">39</div>
                <div className="text-neutral-600">Chercheurs</div>
              </div>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300" hover>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent-900">15</div>
                <div className="text-neutral-600">Partenaires industriels</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Domaines de Recherche
            </h2>
            <p className="text-xl text-neutral-600">
              Nos axes de recherche prioritaires
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedDomain('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedDomain === 'all'
                  ? 'bg-primary-900 text-white shadow-lg'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Tous les domaines
            </button>
            {researchDomains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedDomain === domain.id
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {domain.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredDomains.map((domain) => (
              <Card key={domain.id} className="overflow-hidden hover:shadow-lg transition-all duration-300" hover padding="none">
                <img 
                  src={domain.image}
                  alt={domain.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-neutral-900">{domain.name}</h3>
                  <p className="text-neutral-700">{domain.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary-900">{domain.projects}</div>
                      <div className="text-sm text-neutral-600">Projets</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary-900">{domain.publications}</div>
                      <div className="text-sm text-neutral-600">Publications</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-success-900">{domain.researchers}</div>
                      <div className="text-sm text-neutral-600">Chercheurs</div>
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

      {/* Laboratories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Nos Laboratoires
            </h2>
            <p className="text-xl text-neutral-600">
              Des infrastructures de recherche de pointe
            </p>
          </div>

          <div className="space-y-8">
            {laboratories.map((lab, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300" hover>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">{lab.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-3">
                        <span>Directeur: {lab.director}</span>
                        <span>•</span>
                        <span>{lab.members} membres</span>
                        <span>•</span>
                        <span>{lab.domain}</span>
                      </div>
                      <p className="text-neutral-700">{lab.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Équipements principaux</h4>
                      <div className="flex flex-wrap gap-2">
                        {lab.equipment.map((item, idx) => (
                          <span 
                            key={idx}
                            className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Partenariats</h4>
                      <div className="flex flex-wrap gap-2">
                        {lab.partnerships.map((partner, idx) => (
                          <span 
                            key={idx}
                            className="bg-secondary-100 text-secondary-800 text-sm px-3 py-1 rounded-full"
                          >
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-neutral-50 p-4 rounded-lg text-center">
                      <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users size={24} className="text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary-900">{lab.members}</div>
                      <div className="text-neutral-600">Membres</div>
                    </div>
                    
                    <Button className="w-full">
                      <Link to="/contact" className="flex items-center justify-center space-x-2">
                        <span>Contacter le laboratoire</span>
                        <ExternalLink size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Publications Récentes
            </h2>
            <p className="text-xl text-neutral-600">
              Nos dernières contributions scientifiques
            </p>
          </div>

          {/* Search */}
          <Card className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher dans les publications..."
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </Card>

          <div className="space-y-6">
            {filteredPublications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300" hover>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">{pub.title}</h3>
                      <p className="text-neutral-700 mb-2">{pub.authors}</p>
                      <div className="flex items-center space-x-4 text-sm text-neutral-600">
                        <span className="flex items-center space-x-1">
                          <BookOpen size={16} />
                          <span>{pub.journal}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{pub.year}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Award size={16} />
                          <span>{pub.citations} citations</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                        {pub.type}
                      </span>
                      <span className="bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded-full">
                        {pub.domain}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                    <div className="flex items-center space-x-2 text-sm text-neutral-600">
                      <Tag size={16} />
                      <span>Impact Factor: 8.5</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download size={16} className="mr-2" />
                      Télécharger PDF
                    </Button>
                  </div>
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
            Rejoignez nos Équipes de Recherche
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Participez à des projets de recherche innovants et contribuez 
            aux avancées scientifiques de demain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent-900 hover:bg-accent-800 text-primary-900">
              <Link to="/contact">Collaborer avec nous</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
              <Link to="/formations">Formations doctorales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recherche;