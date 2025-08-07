// EmailJS Configuration
// Follow these steps to set up email functionality:

// 1. Sign up at https://www.emailjs.com/
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with the following variables:
//    - to_email, customer_email, destination, camp_name, travel_style
//    - selected_season, group_size, total_cost, booking_date, subject
// 4. Get your Public Key, Service ID, and Template ID
// 5. Replace the values below:

export const EMAIL_CONFIG = {
  PUBLIC_KEY: 'eGSCiYnt9Kf2sdSqp',
  SERVICE_ID: 'service_g2ppidq', 
  TEMPLATE_ID: 'template_1n5xxlr',
  COMPANY_EMAIL: 'info@botswanasafari.com'
};

// Note: For production, consider using environment variables
// But since this is a frontend-only app, these can stay here