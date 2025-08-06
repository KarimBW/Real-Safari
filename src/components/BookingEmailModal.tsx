import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Loader2, Mail, CheckCircle, XCircle } from 'lucide-react';
import { sendBookingEmail } from '@/lib/emailService';
import { useTravelStyle } from '@/contexts/TravelStyleContext';

interface BookingEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  seasonTitle: string;
  groupSize: number;
  totalCost: number;
}

export const BookingEmailModal: React.FC<BookingEmailModalProps> = ({
  isOpen,
  onClose,
  seasonTitle,
  groupSize,
  totalCost
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const { bookingSelection, travelStyle, clearBookingSelection } = useTravelStyle();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email || !email.includes('@') || !country.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await sendBookingEmail({
        customerName: name,
        customerEmail: email,
        countryOfResidence: country,
        destination: 'Botswana Wild: Kalahari & Makgadikgadi Safari',
        campName: 'Multi-destination Safari Package',
        travelStyle: travelStyle,
        selectedSeason: bookingSelection.selectedSeason,
        groupSize: groupSize,
        totalCost: totalCost
      });

      if (success) {
        setShowSuccess(true);
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    clearBookingSelection();
    setName('');
    setEmail('');
    setCountry('');
    onClose();
  };

  const handleErrorClose = () => {
    setShowError(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-safari-gold" />
              Complete Your Booking
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Booking Summary */}
            <div className="bg-safari-cream rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-safari-dark-grey">Safari Package Summary</h3>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Package:</span>
                  <span className="font-medium">Botswana Wild: Kalahari & Makgadikgadi Safari</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">9 days, 8 nights</span>
                </div>
                <div className="flex justify-between">
                  <span>Travel Style:</span>
                  <span className="font-medium">
                    {travelStyle === 'guided' ? 'Guided & Glorious' : 'Lone & Wild'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Season:</span>
                  <span className="font-medium">{seasonTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span>Group Size:</span>
                  <span className="font-medium">{groupSize} people</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">Total Cost:</span>
                  <span className="font-bold text-safari-gold">RM {totalCost.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Customer Details Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="country">Country of Residence</Label>
                <Input
                  id="country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Enter your country"
                  required
                  disabled={isSubmitting}
                />
                <p className="text-xs text-safari-dark-grey mt-1">
                  We'll send your booking confirmation and contact you within 24 hours
                </p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !email || !country.trim()}
                  className="flex-1 bg-safari-gold hover:bg-safari-light-brown"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Booking Request'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Booking Request Sent!
            </AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for your booking request, {name}! We've received your details and will contact you within 24 hours to confirm your safari adventure.
              <br /><br />
              A confirmation email has been sent to <strong>{email}</strong>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleSuccessClose}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Error Dialog */}
      <AlertDialog open={showError} onOpenChange={setShowError}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              Booking Failed
            </AlertDialogTitle>
            <AlertDialogDescription>
              We're sorry, but there was an issue sending your booking request. Please try again or contact us directly at:
              <br /><br />
              <strong>Email:</strong> info@botswanasafari.com<br />
              <strong>Phone:</strong> +267 123 4567
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleErrorClose}>
              Try Again
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};