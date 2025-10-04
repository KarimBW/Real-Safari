import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FooterSection from '@/components/Destination/FooterSection';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-safari-cream">
      {/* Header */}
      <header className="bg-safari-dark-grey text-white py-6 px-8">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-safari-gold transition-colors mb-4">
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          <p className="text-lg mt-2 text-safari-sand">Blue Zebra Adventures Sdn. Bhd. t/a Real Safari</p>
          <p className="text-sm mt-1 text-safari-gold">License Number: MOTAC L/N/12103</p>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-8 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-safari-dark-grey mb-8">
            Please read the following information to ensure that you fully understand all booking terms and conditions, 
            how payments are made, our cancellation policy and our insurance waiver.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {/* Section 1: How to Book */}
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">1. How to Book</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-safari-dark-grey">
                  <p>
                    <strong>a)</strong> A 20% deposit is required and made payable to Blue Zebra Adventures Sdn. Bhd to book your trip 
                    based on your selected dates. On receipt of your deposit, we will, subject to availability, make reservations. 
                    Alternative dates will be given if there are no availability on your selected dates. Once the trip dates are 
                    confirmed you will receive your confirmation notice, your reservation is confirmed and accepted by us.
                  </p>
                  <p>
                    <strong>b)</strong> Final payment is due to Blue Zebra Adventures Sdn. Bhd. not later than 8 weeks prior to departure. 
                    On receipt of your full payment, we will send information required for your trip. Please ensure that you receive 
                    the information before you leave for your trip.
                  </p>
                  <p>
                    <strong>c)</strong> Rates are quoted in Malaysian Ringgit. We accept payment by cash, cheque, credit card or online banking.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 2: Cancellation */}
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">2. Cancellation</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-safari-dark-grey">
                  <p>
                    Cancellations are only effective on receipt of written notification. If cancellation is prior to 8 weeks 
                    before departure your deposit is forfeited. If your cancellation is made after the due date for full payment 
                    of your tour fare, charges will be levied. The scale of charges, expressed as a percentage of the tour prices, 
                    is as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>More than 8 weeks notice ~ Deposit forfeited</li>
                    <li>Less than 8 weeks notice ~ Deposit plus 25%</li>
                    <li>Less than 4 weeks notice ~ 50%</li>
                    <li>Less than 3 weeks notice ~ 60%</li>
                    <li>Less than 2 weeks notice ~ 100%</li>
                  </ul>
                  <p>
                    As for no show or starting the trip after the reserved date or leaving the trip prior to its completion, 
                    no refunds can be made.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 3: If You Change Your Booking */}
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">3. If You Change Your Booking</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  After your booking has been confirmed, should you wish to make any changes to your itinerary or wish an 
                  earlier departure date, we will make every effort to accommodate your requests based on availability. 
                  However, there may be extra costs involved to accommodate to your request. These costs are in addition 
                  to the fee quoted to you for your initial safari. Normal cancellation fees apply if you wish to postpone 
                  your departure.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 4: Insurance */}
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">4. Insurance</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-safari-dark-grey">
                  <p>
                    It is a condition of booking, that the sole responsibility lies with the guest to ensure that they carry 
                    the correct comprehensive travel and medical insurance to cover themselves, as well as any dependants/travelling 
                    companions for the duration of their trip to Africa. This insurance should include cover in respect of, but 
                    not limited to, the following eventualities: cancellation or curtailment of the safari, emergency evacuation 
                    expenses, medical expenses, repatriation expenses, damage/theft/loss of personal baggage, money and goods.
                  </p>
                  <p>
                    Blue Zebra Adventures Sdn. Bhd., including their representatives, employees and agents will take no responsibility 
                    for any costs, losses incurred or suffered by the guest, or guest's dependants or travelling companions, with 
                    regards to, but not limited to, any of the above mentioned eventualities. Guests will be charged directly by 
                    the relevant service providers for any emergency services they may require, and may find themselves in a position 
                    unable to access such services should they not be carrying the relevant insurance cover.
                  </p>
                  <p>
                    Guests not wishing to purchase comprehensive travel and medical insurance, will be asked to sign a liability 
                    release form.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 5: Baggage */}
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">5. Baggage</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  For safety and because space is restricted, baggage in the camper is restricted to a maximum of 15 kg per person 
                  in soft bags. Backpacks are the ideal kind of baggage. This includes camera equipment and carry-on baggage. 
                  Should guests arrive with excess baggage without prior warning their baggage could be delayed, as we may have 
                  to transfer the baggage to your last place of accommodation of your safari itinerary at a later stage at a 
                  considerable extra cost to you.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 6: Wild Animals */}
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">6. Wild Animals</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  Please be aware that these safaris may take you into close contact with wild animals. Attacks by wild animals 
                  are rare, but no safari into the African wilderness can guarantee that this will not occur. Neither Blue Zebra, 
                  nor their employees or contractors, can be held responsible for any injury or incident on the safari. Please 
                  note that most campsites are not fenced.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 7: Immigration & Health */}
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">7. Immigration & Health</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  The onus is upon the guest to ensure that passports and visas are valid for the countries visited. Blue Zebra 
                  and their staff cannot be held liable for any visas, etc. not held by the guests, nor the cost of visas.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 8: Not Included */}
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">8. Not Included</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-safari-dark-grey">
                  <p className="italic">(This varies from itinerary to itinerary)</p>
                  <p>
                    Insurance to cover for cancellation and curtailment, medical, diesel fuel and water for the camper, 
                    emergency evacuation back home, beverages in certain areas, personal laundry at certain camps, gratuities 
                    to guides, porters and to staff; any excursion not related to the safari; meals that are not mentioned as 
                    per the itinerary, scheduled airfares, transfers and departure taxes.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 9: Responsibility */}
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">9. Responsibility</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  Neither Blue Zebra Adventures Sdn. Bhd. nor any person or agent acting for, through or on behalf of Blue Zebra 
                  Adventures Sdn. Bhd. shall be liable for any loss or damage whatsoever arising from any cause whatsoever and 
                  without restricting the generality of the afore-going shall particularly not be responsible for loss or damage 
                  arising from any errors or omissions contained in its brochure or other literature, loss or damage caused by 
                  delays, sickness, theft, injury or death.
                  <br /><br />
                  In addition Blue Zebra shall have the right at any time at its discretion to cancel any safari or the remainder 
                  thereof or make any alteration in route, accommodation, price or other details and, in the event of any safari 
                  being rendered impossible, illegal or inadvisable by weather, strike, war, government or interference or any 
                  other cause whatsoever, the extra expenses incurred as a result thereof shall be the responsibility of the passenger. 
                  Blue Zebra may at its discretion and without liability or cost to itself at any time cancel or terminate the guest's 
                  booking and in particular without limiting the generality of the afore-going it shall be entitled to do so in the 
                  event of the illness or the illegal or incompatible behaviour of the guest, who shall in such circumstances not be 
                  entitled to any refund. The person making any booking will, by the making of such booking, warrant that he or she 
                  has authority to enter into a contract on behalf of the other person included in such a booking and in the event of 
                  the failure of any or all of the other persons so included to make payment, the person making the booking shall by 
                  his/her signature thereof assume personal liability for the total price of all bookings made by him/her.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 10: Changes to Schedules */}
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left">10. Changes to Schedules</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  Although every effort is made to adhere to schedules it should be borne in mind that Blue Zebra reserves the 
                  right and in fact is obliged to occasionally change routes and camps on safaris as dictated by changing conditions. 
                  Such conditions may be brought about by seasonal rainfall on bush tracks and in game areas, by game migrations 
                  from one region to another, or airline or other booking problems, etc.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 11: Refunds */}
            <AccordionItem value="item-11">
              <AccordionTrigger className="text-left">11. Refunds</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  Whilst Blue Zebra uses its best endeavours to ensure that all anticipated accommodation is available as planned, 
                  there shall be no claim of any nature whatsoever against Blue Zebra for a refund either in the whole or part, 
                  if any accommodation or excursion is unavailable and a reasonable alternative is not found. If the guest is 
                  unable to use any service provided in the itinerary, then there are no refunds due.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 12: Guides */}
            <AccordionItem value="item-12">
              <AccordionTrigger className="text-left">12. Guides</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  For Active Safaris, the guide's main role is to guide and assist. Any request for the guide to drive will be 
                  subjected to the guide's discretion. If one of our guides is unable to carry out his duties due to illness, etc. 
                  we reserve the right to substitute with another guide.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 13: Governing Law */}
            <AccordionItem value="item-13">
              <AccordionTrigger className="text-left">13. Governing Law</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  This agreement is made subject to and shall be governed by and construed according to the laws of the country 
                  in which the safari takes place. The company only makes your travel arrangements and acts merely as an agent 
                  for the operating companies.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 14: Consent */}
            <AccordionItem value="item-14">
              <AccordionTrigger className="text-left">14. Consent</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  The payment of the deposit OR any other partial payment for a reservation on a safari constitutes consent by 
                  all guests covered by that payment to all provisions of the conditions and general information contained in 
                  this document. The terms, under which you agree to take these safaris, cannot be changed or amended except 
                  in writing signed by an authorized director of the Company.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 15: Age limits */}
            <AccordionItem value="item-15">
              <AccordionTrigger className="text-left">15. Age Limits in Camps and Lodges</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  There is no upper age limits, but we respectfully request that only physically active people join these safaris! 
                  Certain excursion activities have minimum age requirements. We will be able to advise which properties and 
                  operators allow younger children. Walking Safaris have a lower age limit of 12 and a maximum of 65, 70 or 75, 
                  depending on the level of difficulty of the activity. Minimum driving age is 21 and maximum is 85.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Section 16: Driving Licence */}
            <AccordionItem value="item-16">
              <AccordionTrigger className="text-left">16. Driving Licence</AccordionTrigger>
              <AccordionContent>
                <p className="text-safari-dark-grey">
                  A valid Driving License equivalent to Botswana Driving Licence Category B is required with a minimum age of 18.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Key Highlights Box */}
        <div className="bg-safari-gold/10 border-l-4 border-safari-gold rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-safari-dark-grey mb-4">Key Points to Remember</h2>
          <ul className="space-y-2 text-safari-dark-grey">
            <li>✓ 20% deposit required to confirm booking</li>
            <li>✓ Full payment due 8 weeks before departure</li>
            <li>✓ Comprehensive travel insurance is mandatory</li>
            <li>✓ Maximum baggage: 15kg per person in soft bags</li>
            <li>✓ Cancellation within 2 weeks = 100% charge</li>
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
