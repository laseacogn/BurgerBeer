import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { Link } from "react-router-dom";

const CustomerServicee = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div class="w-full mt-[10px] mb-[20px] bg-[#FFFEFE] shadow-md rounded-lg">
        <div className="w-[90%] border-b border-zinc-400 ml-[60px]">
          <p className="font-sans font-extrabold text-2xl text-black pb-[20px] text-center ">
            FREQUENTLY ASKED QUESTION
          </p>
        </div>
        <div className="w-[90%] mx-auto ">
          <Accordion>
            <AccordionPanel>
              <AccordionTitle className="font-sans font-semibold text-[18px] text-gray-900">
                Can change or cancel order?{" "}
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 font-sans font-medium text-[16px] text-gray-700">
                  Please contact to  <Link to="/homee">
                    <span className=" underline hover:text-red-600">
                      Burger N' Beer{" "}
                    </span>
                  </Link>{" "} Customer service team
                  immediatly our message board or call international number
                  phone: (+84) 564751400. Please be advised that some orders are
                  shipped very soon after completions, and it may not always be
                  possible to cancel.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="font-sans font-semibold text-[18px] text-gray-900">
                Free shipping offer?{" "}
              </AccordionTitle>
              <AccordionContent>
                <Table className="w-[95%] mx-auto">
                  <TableHead>
                    <TableHeadCell className="whitespace-nowrap text-[16px] font-medium text-gray-900 text-center border-r border-l border-t border-b">
                      Shipping Method
                    </TableHeadCell>
                    <TableHeadCell className="whitespace-nowrap text-[16px] font-medium text-gray-900 text-center border-r border-l border-t border-b">
                      Minimum Purchase
                    </TableHeadCell>
                    <TableHeadCell className="whitespace-nowrap text-[16px] font-medium text-gray-900 text-center border-r border-l border-t border-b">
                      Maximum Distance
                    </TableHeadCell>
                    <TableHeadCell className="whitespace-nowrap text-[16px] font-medium text-gray-900 text-center border-r border-l border-t border-b">
                      Eligible Regions
                    </TableHeadCell>
                  </TableHead>
                  <TableBody className="divide-y">
                    <TableRow className="bg-white dark:border-gray-900 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap text-[16px] font-medium text-gray-700 dark:text-white text-center border-r border-l border-t border-b">
                        {"Delivery"}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-[16px] font-medium text-gray-700 dark:text-white text-center border-r border-l border-t border-b">
                        100.000 VND
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-[16px] font-medium text-gray-700 dark:text-white text-center border-r border-l border-t border-b">
                        3.00 KM
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-[16px] font-medium text-gray-700 dark:text-white text-center border-r border-l border-t border-b">
                        Da Nang
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-900 dark:bg-gray-800 border-b">
                      <TableCell className="whitespace-nowrap text-[16px] font-medium text-gray-700 dark:text-white text-center border-r border-l border-t border-b">
                        Self Pick-up
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-[16px] font-medium text-gray-700 dark:text-white text-center border-r border-l border-t border-b">
                        All Purchase
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-[16px] font-medium text-gray-700 dark:text-white text-center border-r border-l border-t border-b">
                        All Distance
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-[16px] font-medium text-gray-700 dark:text-white text-center border-r border-l border-t border-b">
                        Da Nang
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="mb-2 font-sans font-medium text-[16px] text-gray-700">
                  Free shipping events are often run for other occasion, so
                  please visit our homepage{" "}
                  <Link to="/home">
                    <span className=" underline hover:text-red-600">
                      Burger N' Beer{" "}
                    </span>
                  </Link>{" "}
                  to see advertised free shipping events.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="font-sans font-semibold text-[18px] text-gray-900">
                When will my credit card be charged?{" "}
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 font-sans font-medium text-[16px] text-gray-700">
                  If you pay using your credit card directly on our website,
                  your credit card will be charged upon approval of the total
                  order amount. Prior to approval, your order is in the
                  "Verification" or "On Hold" stage, during which you will not
                  be charged. After approval, your credit card will be charged
                  and the order will enter the "Processing" stage.
                  <br />
                  If you use a third-party payment platform, e.g., PayPal, your
                  credit card may be charged at order placement or another time.
                </p>
              </AccordionContent>
            </AccordionPanel>

            <AccordionPanel>
              <AccordionTitle className="font-sans font-semibold text-[18px] text-gray-900">
                What currency will you use when charging my credit card?{" "}
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 font-sans font-medium text-[16px] text-gray-700">
                  All credit card transactions will be charged using VND.
                </p>
              </AccordionContent>
            </AccordionPanel>

            <AccordionPanel>
              <AccordionTitle className="font-sans font-semibold text-[18px] text-gray-900">
                Which payment methods can be accepted?{" "}
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 font-sans font-medium text-[16px] text-gray-700">
                  <Link to="/home">
                    <span className=" underline hover:text-red-600">
                      Burger N' Beer{" "}
                    </span>
                  </Link>
                  currently accepts various Credit Cards, Debit Cards, Visa,
                  MasterCard, JCB, and American Express for all orders. At
                  checkout, simply choose Paypal, Eximbay, Doku (Indonesia),
                  Molpay (only Malaysia), or PaysBuy (only Thailand) to process
                  your payment. Paypal and Eximbay do not require accounts, so
                  checkout is fast and easy
                </p>
              </AccordionContent>
            </AccordionPanel>

            <AccordionPanel>
              <AccordionTitle className="font-sans font-semibold text-[18px] text-gray-900">
                Payent currencies?{" "}
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 font-sans font-medium text-[16px] text-gray-700">
                  For current exchange rates, refer to the Currency Conversion
                  Table. <br />
                  All charges for other countries are in Viet Nam Dong for now,
                  but we hope shortly that all card companies will accept
                  payment in all destination currencies, and charge us in our
                  currency.
                </p>
              </AccordionContent>
            </AccordionPanel>

            <AccordionPanel>
              <AccordionTitle className="font-sans font-semibold text-[18px] text-gray-900">
                Will I have to pay customs taxes on my shipment?{" "}
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 font-sans font-medium text-[16px] text-gray-700">
                  When ordering from{" "}
                  <Link to="/home">
                    <span className=" underline hover:text-red-600">
                      Burger N' Beer{" "}
                    </span>
                  </Link>{" "}
                  , the customer is considered the importer of the purchased
                  products and will be responsible for any customs tax, import
                  duties, goods and services tax (GST), valued-added tax (VAT),
                  or any similar customs-related charges. Customs policies vary
                  by country and{" "}
                  <Link to="/home">
                    <span className=" underline hover:text-red-600">
                      Burger N' Beer{" "}
                    </span>
                  </Link>{" "}
                  cannot make any guarantees as to whether or not shipments will
                  be subject to customs-related fees. Please contact your local
                  customs office for more information. <br />
                  In addition to customs fees, customers may also incur other
                  charges, such as administration or brokerage fees. These are
                  handling charges incurred due to customs processing and
                  clearance of your shipment. Customers are required to pay the
                  relevant courier service upon delivery of the shipment.
                </p>
              </AccordionContent>
            </AccordionPanel>

            <AccordionPanel>
              <AccordionTitle className="font-sans font-semibold text-[18px] text-gray-900">
                Can I check my order history?{" "}
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 font-sans font-medium text-[16px] text-gray-700">
                  You can check your orders under "My Account" below the 'Order
                  History" tab. <br />
                  The account summary displays your last orders and allows you
                  to check your complete order history by clicking on the order
                  number.
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default CustomerServicee;
