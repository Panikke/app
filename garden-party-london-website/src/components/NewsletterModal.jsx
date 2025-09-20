import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setIsOpen(false);
      localStorage.setItem('newsletterSubscribed', 'true');
    }
  };

  if (!isOpen || localStorage.getItem('newsletterSubscribed')) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-0 overflow-hidden relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex">
          {/* Left side with image */}
          <div className="w-1/2 bg-cover bg-center" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1447434108058-49f9248d09a5')`
          }}></div>
          
          {/* Right side with form */}
          <div className="w-1/2 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Subscribe to our newsletter for 15% off!
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Join the Garden Party London community for exclusive event tips, seasonal inspiration, and special offers.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Sign up now
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 mt-3">
              We value your privacy and will never send unsolicited information. 
              Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;