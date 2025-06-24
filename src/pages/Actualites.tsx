import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, Eye, ArrowRight, Filter } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { mockNews } from '../data/mockData';

const Actualites: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  // Extended news data for demonstration
  const extendedNews = [
    ...mockNews,
    {
      id: '3',
      title: 'Hackathon Étudiant 2025 : Innovation et Créativité',
      excerpt: 'Plus de 200 étudiants participent au plus grand hackathon de l\'année à l\'ESST.',
      content: 'Contenu complet...',
      author: 'Sophie Martin',
      publishedAt: new Date(Date.now() - 86400000),
      category: 'Événement',
      imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Hackathon', 'Innovation', 'Étudiants'],
    },
    {
      id: '4',
      title: 'Nouveau Laboratoire de Biotechnologies',
      excerpt: 'Inauguration d\'un laboratoire de pointe pour la recherche en thérapies géniques.',
      content: 'Contenu complet...',
      author: 'Dr. Claire Rousseau',
      publishedAt: new Date(Date.now() - 432000000),
      category: 'Recherche',
      imageUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Recherche', 'Biotechnologies', 'Laboratoire'],
    },
    {
      id: '5',
      title: 'Conférence sur l\'Avenir des Énergies Renouvelables',
      excerpt: 'Experts internationaux réunis pour discuter des défis énergétiques de demain.',
      content: 'Contenu complet...',
      author: 'Prof. Marie Dubois',
      publishedAt: new Date(Date.now() - 518400000),
      category: 'Conférence',
      imageUrl: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Énergie', 'Environnement', 'Conférence'],
    },
    {
      id: '6',
      title: 'Prix d\'Excellence pour nos Étudiants en IA',
      excerpt: 'Trois étudiants de Master IA remportent le concours national d\'intelligence artificielle.',
      content: 'Contenu complet...',
      author: 'Prof. Jean Martin',
      publishedAt: new Date(Date.now() - 604800000),
      category: 'Récompense',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['IA', 'Étudiants', 'Prix'],
    },
  ];

  const categories = ['all', 'Formation', 'International', 'Recherche', 'Événement', 'Conférence', 'Récompense'];
  const allTags = Array.from(new Set(extendedNews.flatMap(news => news.tags)));
  const tags = ['all', ...allTags];

  const filteredNews = extendedNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || news.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const featuredNews = extendedNews[0];
  const recentNews = extendedNews.slice(1, 4);
  const olderNews = extendedNews.slice(4);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Actualités ESST</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Restez informé des dernières nouvelles, événements et réalisations de notre communauté
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher dans les actualités..."
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'Toutes les catégories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tag Filter */}
              <div>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full px-3 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {tags.map(tag => (
                    <option key={tag} value={tag}>
                      {tag === 'all' ? 'Tous les tags' : tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured News */}
      {!searchQuery && selectedCategory === 'all' && selectedTag === 'all' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">À la Une</h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300" hover padding="none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredNews.imageUrl}
                    alt={featuredNews.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredNews.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-neutral-600">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{featuredNews.publishedAt.toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span>{featuredNews.author}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 leading-tight">
                    {featuredNews.title}
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredNews.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-neutral-100 text-neutral-700 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="self-start">
                    <Link to={`/actualites/${featuredNews.id}`} className="flex items-center space-x-2">
                      <span>Lire l'article</span>
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!searchQuery && selectedCategory === 'all' && selectedTag === 'all' && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">Actualités Récentes</h2>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-all duration-300" hover padding="none">
                <img 
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full font-medium">
                      {news.category}
                    </span>
                    <div className="flex items-center space-x-1 text-sm text-neutral-500">
                      <Eye size={14} />
                      <span>245</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2 hover:text-primary-900 transition-colors duration-200">
                      <Link to={`/actualites/${news.id}`}>
                        {news.title}
                      </Link>
                    </h3>
                    <p className="text-neutral-700 text-sm line-clamp-3 leading-relaxed">
                      {news.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {news.tags.slice(0, 2).map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {news.tags.length > 2 && (
                      <span className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">
                        +{news.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                    <div className="flex items-center space-x-2 text-sm text-neutral-600">
                      <User size={14} />
                      <span>{news.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-neutral-600">
                      <Calendar size={14} />
                      <span>{news.publishedAt.toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="w-full">
                    <Link to={`/actualites/${news.id}`} className="flex items-center justify-center space-x-2">
                      <span>Lire la suite</span>
                      <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredNews.length === 0 && (
            <Card className="text-center py-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto">
                  <Search size={32} className="text-neutral-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">
                    Aucune actualité trouvée
                  </h3>
                  <p className="text-neutral-600">
                    Aucune actualité ne correspond à vos critères de recherche.
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedTag('all');
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center" padding="lg">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto">
                <Tag size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                  Newsletter ESST
                </h2>
                <p className="text-neutral-700">
                  Recevez les dernières actualités directement dans votre boîte mail
                </p>
              </div>
              <div className="max-w-md mx-auto">
                <div className="flex space-x-4">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <Button>
                    S'abonner
                  </Button>
                </div>
                <p className="text-xs text-neutral-500 mt-2">
                  Vous pouvez vous désabonner à tout moment
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Archive Link */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button variant="outline" size="lg">
            <Link to="/actualites/archives" className="flex items-center space-x-2">
              <span>Consulter les archives</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Actualites;