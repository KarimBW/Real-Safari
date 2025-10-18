import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FooterSection from '@/components/Destination/FooterSection';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-safari-cream">
      {/* Header */}
      <header className="bg-safari-dark-grey text-white py-6 px-8">
        <div className="container mx-auto">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 text-white hover:text-safari-gold transition-colors mb-4"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Previous Page
          </button>
          <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          <p className="text-lg mt-2 text-safari-sand">Blue Zebra Adventures Sdn. Bhd. t/a Real Safari</p>
          <p className="text-sm mt-1 text-safari-gold">License Number: MOTAC L/N/12103</p>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-8 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-safari-dark-grey mb-8">
            These Terms and Conditions set out the contractual agreement between Blue Zebra Adventures Sdn. Bhd. and the guest 
            for all bookings made with us. Please read them carefully to ensure you fully understand our booking, payment, 
            cancellation, and liability policies. By paying a deposit or any part of the total booking cost, you confirm that 
            you have read, understood, and agreed to these Terms and Conditions.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {/* Section 1: Introduction */}
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">1. Introduction</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  These Terms and Conditions set out the contractual agreement between Blue Zebra Adventures Sdn. Bhd. 
                  ("Blue Zebra," "the Company," "we," or "us") and the guest ("you," "your," or "the guest") for all bookings 
                  made with us. Please read them carefully to ensure you fully understand our booking, payment, cancellation, 
                  and liability policies. By paying a deposit or any part of the total booking cost, you confirm that you have 
                  read, understood, and agreed to these Terms and Conditions.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 2: How to Book */}
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">2. How to Book</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-safari-dark-grey">
                  <p>
                    A <strong>30% deposit</strong> is required and payable to Blue Zebra Adventures Sdn. Bhd. to secure 
                    your booking based on your preferred travel dates.
                  </p>
                  <p>
                    Upon receipt of your deposit, and subject to availability, we will confirm your reservation. If your 
                    selected dates are unavailable, alternative dates will be proposed. Once dates are confirmed, a 
                    <strong> Booking Confirmation Notice</strong> will be issued, signifying acceptance of your reservation.
                  </p>
                  <p>
                    The balance of payment is due <strong>no later than 10 weeks (70 days) prior to departure</strong>. 
                    Failure to make payment by this date may result in automatic cancellation of the booking and forfeiture 
                    of the deposit.
                  </p>
                  <p>
                    Bookings made less than 10 weeks prior to intended date of travel shall be subject to alternative payment 
                    arrangement as seen fit by the company and disclosed to the guest.
                  </p>
                  <p>
                    All rates are quoted in <strong>Malaysian Ringgit (MYR)</strong>. Prices are subject to change without 
                    prior notice due to exchange rate fluctuations, changes in government taxes, park fees, or fuel surcharges.
                  </p>
                  <p>
                    We accept payment by cash, credit card, or online bank transfer.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 3: Cancellations */}
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">3. Cancellations</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-safari-dark-grey">
                  <p>
                    All cancellations must be made in writing and are only effective upon acknowledgement of receipt of such 
                    notification by Blue Zebra. Refunds will be processed according to the following schedule:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-safari-sand/30 my-4">
                      <thead>
                        <tr className="bg-safari-sand/20">
                          <th className="border border-safari-sand/30 p-3 text-left font-semibold">
                            Notice Period Before Departure
                          </th>
                          <th className="border border-safari-sand/30 p-3 text-left font-semibold">
                            Refund Entitlement
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-safari-sand/30 p-3">More than 10 weeks</td>
                          <td className="border border-safari-sand/30 p-3">75% of deposit refunded</td>
                        </tr>
                        <tr className="bg-safari-sand/10">
                          <td className="border border-safari-sand/30 p-3">10 – 8 weeks</td>
                          <td className="border border-safari-sand/30 p-3">50% of deposit refunded</td>
                        </tr>
                        <tr>
                          <td className="border border-safari-sand/30 p-3">8 – 4 weeks</td>
                          <td className="border border-safari-sand/30 p-3">25% of deposit refunded</td>
                        </tr>
                        <tr className="bg-safari-sand/10">
                          <td className="border border-safari-sand/30 p-3">Less than 4 weeks</td>
                          <td className="border border-safari-sand/30 p-3">No refund</td>
                        </tr>
                        <tr>
                          <td className="border border-safari-sand/30 p-3">After full payment</td>
                          <td className="border border-safari-sand/30 p-3">
                            Refunds subject to supplier policies and non-refundable costs already incurred
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    No refunds are provided for no-shows, late arrivals, early departures, or unused services once travel 
                    has commenced.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 4: Changes to Bookings */}
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">4. Changes to Bookings</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  If you wish to modify your booking after confirmation (including travel dates, itinerary, or participant 
                  numbers), we will make every reasonable effort to accommodate your request, subject to availability. 
                  Any additional costs or third-party fees incurred as a result of changes will be your responsibility. 
                  Should you wish to postpone your departure, our standard cancellation terms will apply.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 5: Travel Insurance */}
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">5. Travel Insurance</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-safari-dark-grey">
                  <p>
                    It is a <strong>mandatory condition of booking</strong> that all guests hold valid, comprehensive travel 
                    and medical insurance for the duration of their trip. Your insurance must include, but is not limited to, 
                    coverage for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Trip cancellation or curtailment</li>
                    <li>Emergency evacuation and repatriation</li>
                    <li>Medical expenses</li>
                    <li>Damage, theft, or loss of personal belongings and money</li>
                  </ul>
                  <p>
                    Blue Zebra, its representatives, employees, and agents accept no responsibility for any costs, losses, 
                    or damages arising from events that could have been covered by travel insurance. Proof of valid insurance 
                    may be required before departure. Guests declining insurance coverage will be required to sign a liability 
                    release form prior to travel.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 6: Baggage */}
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">6. Baggage</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  Due to safety and space limitations, baggage per person is limited to <strong>15 kg (33 lbs)</strong> in 
                  soft bags, including camera equipment and carry-on luggage. Backpacks are recommended. Excess baggage may 
                  be delayed and transferred to your final destination at your cost. Blue Zebra accepts no liability for 
                  delayed baggage delivery.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 7: Wildlife and Safety */}
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">7. Wildlife and Safety</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  Safaris often take place in areas inhabited by wild animals. While incidents are rare, no safari can 
                  guarantee complete safety from wildlife encounters. Blue Zebra, its employees, and contractors cannot be 
                  held responsible for any injury, loss, or damage caused by wild animals. Guests participate at their own 
                  risk, and most safari camps are unfenced.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 8: Immigration and Health Requirements */}
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">8. Immigration and Health Requirements</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  It is the sole responsibility of each guest to ensure they possess valid passports, visas, vaccination 
                  certificates, and other travel documents required for the countries visited. Blue Zebra will not be held 
                  liable for costs incurred due to failure to obtain such documentation.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 9: Services Not Included */}
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">9. Services Not Included</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-safari-dark-grey">
                  <p>Unless otherwise stated in your itinerary, the following are not included in your tour price:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Travel and medical insurance</li>
                    <li>Diesel fuel and water for the camper</li>
                    <li>Emergency evacuation or repatriation</li>
                    <li>Certain beverages and laundry services</li>
                    <li>Gratuities to staff, porters, and guides</li>
                    <li>Optional excursions not listed in your itinerary</li>
                    <li>Meals not specified in the itinerary</li>
                    <li>Scheduled airfares, transfers, and departure taxes</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 10: Company Responsibility and Liability */}
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left">10. Company Responsibility and Liability</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-safari-dark-grey">
                  <p>
                    To the maximum extent permitted by law, Blue Zebra Adventures Sdn. Bhd. shall not be held liable for 
                    any loss, injury, death, damage, delay, or expense arising from any cause whatsoever, including but 
                    not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Force majeure events (weather, war, strikes, government action, pandemics, etc.)</li>
                    <li>Acts or omissions of third-party service providers</li>
                    <li>Errors in brochures or printed materials</li>
                    <li>Delays, sickness, theft, or changes to itineraries</li>
                  </ul>
                  <p className="font-semibold mt-4">Blue Zebra reserves the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Alter or cancel any safari or portion thereof due to conditions beyond its control</li>
                    <li>Substitute accommodations, vehicles, or guides when necessary</li>
                    <li>Decline or terminate a booking due to illness, illegal conduct, or behavior deemed incompatible 
                        with the interests of other guests</li>
                  </ul>
                  <p>In such cases, no refund or compensation will be made.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 11: Force Majeure */}
            <AccordionItem value="item-11">
              <AccordionTrigger className="text-left">11. Force Majeure</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  In the event of circumstances beyond our reasonable control (including natural disasters, war, epidemics, 
                  strikes, or government restrictions), Blue Zebra shall not be held responsible for any resulting loss or 
                  change in travel arrangements. We will make every reasonable effort to reschedule affected bookings or 
                  provide a credit for future travel, subject to supplier policies.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 12: Itinerary and Schedule Changes */}
            <AccordionItem value="item-12">
              <AccordionTrigger className="text-left">12. Itinerary and Schedule Changes</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  Every effort will be made to adhere to the confirmed itinerary; however, changes may occur due to weather, 
                  road conditions, animal movements, or logistical reasons. Blue Zebra reserves the right to vary routes, 
                  accommodation, and schedules without notice.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 13: Refund Policy */}
            <AccordionItem value="item-13">
              <AccordionTrigger className="text-left">13. Refund Policy</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  No refunds are available for unused services, missed excursions, or late arrivals. If a particular 
                  accommodation or activity is unavailable, Blue Zebra will endeavor to arrange a suitable alternative but 
                  cannot guarantee this. Failure to use any service does not entitle the guest to any refund.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 14: Guides */}
            <AccordionItem value="item-14">
              <AccordionTrigger className="text-left">14. Guides</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  On Guided Safaris, guides are responsible primarily for navigation, safety, and assistance. Driving 
                  requests are at the guide's discretion. If a guide becomes unavailable due to illness or emergency, 
                  Blue Zebra reserves the right to substitute with another qualified guide without liability.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 15: Age and Fitness Requirements */}
            <AccordionItem value="item-15">
              <AccordionTrigger className="text-left">15. Age and Fitness Requirements</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-safari-dark-grey">
                  <p>
                    There is no upper age limit for participation; however, safaris require a reasonable level of physical 
                    fitness. Certain activities may have age restrictions:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Walking Safaris:</strong> Minimum age 12; maximum 65–75 depending on difficulty</li>
                    <li><strong>Driving Safaris:</strong> Minimum driving age 21; maximum 85</li>
                  </ul>
                  <p>
                    Guests are responsible for ensuring they meet the physical and legal requirements of each activity.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 16: Driving Licence */}
            <AccordionItem value="item-16">
              <AccordionTrigger className="text-left">16. Driving Licence</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  Drivers must hold a valid driving licence equivalent to Botswana Category B, with a minimum age of 18 years.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 17: Governing Law */}
            <AccordionItem value="item-17">
              <AccordionTrigger className="text-left">17. Governing Law</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  This agreement shall be governed by and construed in accordance with the laws of the Republic of Botswana 
                  (or the primary jurisdiction in which the safari takes place). Any disputes arising shall be subject to the 
                  exclusive jurisdiction of the competent courts in that jurisdiction.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 18: Consent */}
            <AccordionItem value="item-18">
              <AccordionTrigger className="text-left">18. Consent</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  Payment of a deposit or any portion of the total tour price constitutes acknowledgment and acceptance of 
                  all terms and conditions stated herein. No variation to these Terms shall be valid unless made in writing 
                  and signed by an authorized representative of Blue Zebra Adventures Sdn. Bhd.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Key Highlights Box */}
        <div className="bg-safari-gold/10 border-l-4 border-safari-gold rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-safari-dark-grey mb-4">Key Points to Remember</h2>
          <ul className="space-y-2 text-safari-dark-grey">
            <li>✓ 30% deposit required to confirm booking</li>
            <li>✓ Full payment due 10 weeks (70 days) before departure</li>
            <li>✓ Comprehensive travel and medical insurance is mandatory</li>
            <li>✓ Maximum baggage: 15kg (33 lbs) per person in soft bags</li>
            <li>✓ Valid passport, visas, and health documentation required</li>
            <li>✓ No refunds for no-shows, late arrivals, or unused services</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-safari-dark-grey text-white rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
          <p className="mb-4">We're here to help clarify any concerns you may have.</p>
          <div className="space-y-2">
            <p>
              <a href="mailto:bluezebraadventures@gmail.com" className="text-safari-gold hover:underline">
                bluezebraadventures@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+60186311330" className="text-safari-gold hover:underline">
                +60 186 3113 30
              </a>
            </p>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default TermsAndConditions;
