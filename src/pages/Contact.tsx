import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Building } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import Textarea from '../components/UI/Textarea';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    department: '',
    message: '',
    userType: 'visitor',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['123 Avenue de l\'Innovation', '75001 Paris, France'],
      color: 'bg-primary-900',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+33 1 23 45 67 89', 'Lun-Ven: 8h00-18h00'],
      color: 'bg-secondary-900',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@esst.edu', 'Réponse sous 24h'],
      color: 'bg-success-900',
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun-Ven: 8h00-18h00', 'Sam: 9h00-12h00'],
      color: 'bg-accent-900',
    },
  ];

  const departments = [
    { value: 'general', label: 'Renseignements généraux' },
    { value: 'admissions', label: 'Service des admissions' },
    { value: 'international', label: 'Relations internationales' },
    { value: 'research', label: 'Recherche et innovation' },
    { value: 'student-life', label: 'Vie étudiante' },
    { value: 'alumni', label: 'Réseau des anciens' },
    { value: 'partnerships', label: 'Partenariats entreprises' },
    { value: 'technical', label: 'Support technique' },
  ];

  const subjects = [
    'Demande d\'information sur les formations',
    'Candidature et admission',
    'Programmes d\'échange international',
    'Partenariats et collaborations',
    'Visite du campus',
    'Événements et conférences',
    'Support technique',
    'Autre',
  ];

  const userTypes = [
    { value: 'visitor', label: 'Visiteur' },
    { value: 'prospective-student', label: 'Futur étudiant' },
    { value: 'current-student', label: 'Étudiant actuel' },
    { value: 'alumni', label: 'Ancien étudiant' },
    { value: 'parent', label: 'Parent' },
    { value: 'company', label: 'Entreprise' },
    { value: 'researcher', label: 'Chercheur' },
    { value: 'media', label: 'Média' },
  ];

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Contact form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        department: '',
        message: '',
        userType: 'visitor',
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4">
        <Card className="max-w-md w-full text-center" padding="lg">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-success-900 rounded-full flex items-center justify-center mx-auto">
              <Send size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Message envoyé !
              </h2>
              <p className="text-neutral-700">
                Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
              </p>
            </div>
            <Button onClick={() => setIsSubmitted(false)} className="w-full">
              Envoyer un autre message
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Contactez-nous</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300" hover>
                  <div className="space-y-4">
                    <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-neutral-700 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-neutral-700">
                    Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Prénom *"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      placeholder="Votre prénom"
                      icon={<User size={20} />}
                      required
                    />
                    <Input
                      label="Nom *"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      placeholder="Votre nom"
                      icon={<User size={20} />}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Email *"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="votre.email@exemple.com"
                      icon={<Mail size={20} />}
                      required
                    />
                    <Input
                      label="Téléphone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+33 1 23 45 67 89"
                      icon={<Phone size={20} />}
                    />
                  </div>

                  {/* User Type */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Vous êtes *
                    </label>
                    <select
                      value={formData.userType}
                      onChange={(e) => handleChange('userType', e.target.value)}
                      className="block w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      {userTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Service concerné *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                      <select
                        value={formData.department}
                        onChange={(e) => handleChange('department', e.target.value)}
                        className="block w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="">Sélectionner un service</option>
                        {departments.map(dept => (
                          <option key={dept.value} value={dept.value}>
                            {dept.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      className="block w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      <option value="">Sélectionner un sujet</option>
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <Textarea
                    label="Message *"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Décrivez votre demande en détail..."
                    rows={6}
                    required
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                  </Button>

                  <p className="text-xs text-neutral-600 text-center">
                    En envoyant ce formulaire, vous acceptez que vos données soient utilisées 
                    pour traiter votre demande conformément à notre politique de confidentialité.
                  </p>
                </form>
              </div>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card padding="none">
                <div className="h-64 bg-neutral-200 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin size={48} className="text-neutral-400 mx-auto" />
                    <p className="text-neutral-600">Carte interactive</p>
                    <p className="text-sm text-neutral-500">123 Avenue de l'Innovation, Paris</p>
                  </div>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">Contact Rapide</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                      <Phone size={20} className="text-primary-900" />
                      <div>
                        <p className="font-medium text-neutral-900">Accueil général</p>
                        <p className="text-sm text-neutral-600">+33 1 23 45 67 89</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                      <Mail size={20} className="text-secondary-900" />
                      <div>
                        <p className="font-medium text-neutral-900">Email général</p>
                        <p className="text-sm text-neutral-600">contact@esst.edu</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                      <MessageSquare size={20} className="text-success-900" />
                      <div>
                        <p className="font-medium text-neutral-900">Chat en ligne</p>
                        <p className="text-sm text-neutral-600">Disponible 9h-17h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Office Hours */}
              <Card>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">Horaires d'ouverture</h3>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Lundi - Vendredi</span>
                      <span className="font-medium text-neutral-900">8h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Samedi</span>
                      <span className="font-medium text-neutral-900">9h00 - 12h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-700">Dimanche</span>
                      <span className="font-medium text-neutral-900">Fermé</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-neutral-200">
                    <p className="text-xs text-neutral-600">
                      * Horaires susceptibles de changer pendant les vacances scolaires
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-neutral-600">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Comment puis-je candidater à l\'ESST ?',
                answer: 'Les candidatures se font en ligne via Parcoursup pour les licences et sur notre plateforme dédiée pour les masters. Consultez notre page admission pour plus de détails.',
              },
              {
                question: 'Quels sont les frais de scolarité ?',
                answer: 'Les frais de scolarité sont de 170€/an pour les licences et 243€/an pour les masters (tarifs 2025). Des bourses sont disponibles selon les critères sociaux.',
              },
              {
                question: 'Proposez-vous des programmes d\'échange international ?',
                answer: 'Oui, nous avons des partenariats avec plus de 50 universités dans le monde. Consultez notre page relations internationales pour découvrir les opportunités.',
              },
              {
                question: 'Comment visiter le campus ?',
                answer: 'Nous organisons des journées portes ouvertes et des visites guidées. Contactez-nous pour planifier votre visite ou participer à nos événements.',
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300" hover>
                <div className="space-y-2">
                  <h3 className="font-bold text-neutral-900">{faq.question}</h3>
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Voir toutes les FAQ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;