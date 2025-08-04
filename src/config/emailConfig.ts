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
  // Replace these with your actual EmailJS credentials
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',
  SERVICE_ID: 'YOUR_SERVICE_ID', 
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  COMPANY_EMAIL: 'info@botswanasafari.com' // Replace with your company email
};

// Note: For production, consider using environment variables
// But since this is a frontend-only app, these can stay here