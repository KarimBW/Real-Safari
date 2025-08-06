import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '@/config/emailConfig';

interface BookingData {
  customerName: string;
  customerEmail: string;
  countryOfResidence: string;
  destination?: string;
  campName?: string;
  travelStyle?: string;
  selectedSeason?: string;
  groupSize?: number;
  totalCost?: number;
  vehicleConfiguration?: string;
}

export const sendBookingEmail = async (bookingData: BookingData): Promise<boolean> => {
  try {
    // Initialize EmailJS if not already done
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

    const templateParams = {
      to_email: EMAIL_CONFIG.COMPANY_EMAIL,
      customer_name: bookingData.customerName,
      customer_email: bookingData.customerEmail,
      country_of_residence: bookingData.countryOfResidence,
      destination: bookingData.destination || 'Botswana Safari',
      camp_name: bookingData.campName || 'Not selected',
      travel_style: bookingData.travelStyle === 'guided' ? 'Guided & Glorious' : 'Lone & Wild',
      selected_season: bookingData.selectedSeason === 'brown' ? 'Brown Season (High Season)' : 'Green Season (Low Season)',
      group_size: bookingData.groupSize || 2,
      vehicle_configuration: bookingData.vehicleConfiguration || 'Not specified',
      total_cost: bookingData.totalCost ? `RM ${bookingData.totalCost.toLocaleString()}` : 'Not calculated',
      booking_date: new Date().toLocaleDateString(),
      subject: 'New Safari Booking Request',
    };

    const result = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Email template for EmailJS:
/*
Subject: New Safari Booking Request - {{selected_season}}

Dear Team,

A new safari booking request has been submitted:

CUSTOMER DETAILS:
Email: {{customer_email}}

BOOKING DETAILS:
Destination: {{destination}}
Camp: {{camp_name}}
Travel Style: {{travel_style}}
Season: {{selected_season}}
Group Size: {{group_size}} people
Total Cost: {{total_cost}}

Booking Date: {{booking_date}}

Please contact the customer within 24 hours to confirm their booking.

Best regards,
Safari Booking System
*/