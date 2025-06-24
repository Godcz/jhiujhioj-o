import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Input from '../components/UI/Input';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the reset email
      console.log('Password reset requested for:', email);
      setIsSubmitted(true);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-accent-900 rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle size={32} className="text-primary-900" />
              </div>
            </div>
            <h1 className="mt-6 text-3xl font-bold text-white">
              Email envoyé !
            </h1>
            <p className="mt-2 text-white opacity-80">
              Vérifiez votre boîte mail
            </p>
          </div>

          <Card className="bg-white shadow-2xl">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto">
                  <Mail size={24} className="text-success-900" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-neutral-900 mb-2">
                    Instructions envoyées
                  </h2>
                  <p className="text-neutral-700 leading-relaxed">
                    Nous avons envoyé un lien de réinitialisation à <strong>{email}</strong>.
                    Cliquez sur le lien dans l'email pour créer un nouveau mot de passe.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Que faire ensuite ?</h3>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary-900 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Vérifiez votre boîte de réception</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary-900 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Regardez aussi dans vos spams</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary-900 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Cliquez sur le lien de réinitialisation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary-900 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Créez votre nouveau mot de passe</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-sm text-neutral-600">
                    Vous n'avez pas reçu l'email ?
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                    className="w-full"
                  >
                    Renvoyer l'email
                  </Button>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-neutral-200">
                <Link 
                  to="/login" 
                  className="text-primary-900 hover:text-primary-700 font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <ArrowLeft size={16} />
                  <span>Retour à la connexion</span>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-accent-900 rounded-2xl flex items-center justify-center shadow-lg">
              <Mail size={32} className="text-primary-900" />
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-white">
            Mot de passe oublié
          </h1>
          <p className="mt-2 text-white opacity-80">
            Saisissez votre email pour recevoir un lien de réinitialisation
          </p>
        </div>

        {/* Reset Form */}
        <Card className="bg-white shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <Input
                label="Adresse email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre.email@esst.edu"
                icon={<Mail size={20} />}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              isLoading={isLoading}
              className="w-full"
              disabled={!email}
            >
              {isLoading ? 'Envoi en cours...' : 'Envoyer le lien de réinitialisation'}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-neutral-200">
            <div className="text-center space-y-4">
              <p className="text-sm text-neutral-600">
                Vous vous souvenez de votre mot de passe ?
              </p>
              <Link 
                to="/login" 
                className="text-primary-900 hover:text-primary-700 font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ArrowLeft size={16} />
                <span>Retour à la connexion</span>
              </Link>
            </div>
          </div>
        </Card>

        {/* Help */}
        <Card className="bg-white bg-opacity-95">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900">Besoin d'aide ?</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-900 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-neutral-900">Email non reçu ?</p>
                  <p className="text-neutral-600">Vérifiez vos spams ou contactez le support technique</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-900 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-neutral-900">Compte bloqué ?</p>
                  <p className="text-neutral-600">Contactez l'administration à admin@esst.edu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-900 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-neutral-900">Problème technique ?</p>
                  <p className="text-neutral-600">Appelez le +33 1 23 45 67 90</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;