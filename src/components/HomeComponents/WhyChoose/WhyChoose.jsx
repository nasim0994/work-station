import { BsCheckCircle } from "react-icons/bs";

export default function WhyChoose() {
  return (
    <section className="why_choose text-base-100">
      <div className="container">
        <h2 className="text-center text-4xl sm:text-5xl font-medium">
          Why Choose WorkStation
        </h2>

        <div className="mt-16">
          <div className="grid md:grid-cols-2 md:gap-32 lg:gap-96">
            <div className="flex flex-col gap-6 md:text-end">
              <div className="flex flex-row-reverse md:flex-row md:items-center gap-4">
                <div>
                  <h6 className="text-lg font-medium mb-1">
                    Money back guarantee and anti-fraud protection
                  </h6>
                  <p className="text-sm opacity-90">
                    Always know what you&aposll pay upfront. Your payment
                    isn&apost released until you approve the work.
                  </p>
                </div>
                <p className="text-2xl text-primary">
                  <BsCheckCircle />
                </p>
              </div>

              <div className="flex flex-row-reverse md:flex-row md:items-center gap-4">
                <div>
                  <h6 className="text-lg font-medium mb-1">
                    Money back guarantee and anti-fraud protection
                  </h6>
                  <p className="text-sm opacity-90">
                    Always know what you&aposll pay upfront. Your payment
                    isn&apost released until you approve the work.
                  </p>
                </div>
                <p className="text-2xl text-primary">
                  <BsCheckCircle />
                </p>
              </div>

              <div className="flex flex-row-reverse md:flex-row md:items-center gap-4">
                <div>
                  <h6 className="text-lg font-medium mb-1">
                    Money back guarantee and anti-fraud protection
                  </h6>
                  <p className="text-sm opacity-90">
                    Always know what you&aposll pay upfront. Your payment
                    isn&apost released until you approve the work.
                  </p>
                </div>
                <p className="text-2xl text-primary">
                  <BsCheckCircle />
                </p>
              </div>

              <div className="flex flex-row-reverse md:flex-row md:items-center gap-4">
                <div>
                  <h6 className="text-lg font-medium mb-1">
                    Money back guarantee and anti-fraud protection
                  </h6>
                  <p className="text-sm opacity-90">
                    Always know what you&aposll pay upfront. Your payment
                    isn&apost released until you approve the work.
                  </p>
                </div>
                <p className="text-2xl text-primary">
                  <BsCheckCircle />
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <p className="text-2xl text-primary">
                  <BsCheckCircle />
                </p>
                <div>
                  <h6 className="text-lg font-medium mb-1">24/7 support.</h6>
                  <p className="text-sm opacity-90">
                    Questions? Our round-the-clock support team is available to
                    help anytime, anywhere.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-2xl text-primary">
                  <BsCheckCircle />
                </p>
                <div>
                  <h6 className="text-lg font-medium mb-1">
                    Work in a Flexible Environment
                  </h6>
                  <p className="text-sm opacity-90">
                    Use WorkRooms to manage multiple Freelancers working on the
                    same job.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-2xl text-primary">
                  <BsCheckCircle />
                </p>
                <div>
                  <h6 className="text-lg font-medium mb-1">Pay Lowest Fee</h6>
                  <p className="text-sm opacity-90">
                    Pay an invoice using eCheck or wire transfer and receive
                    100% cashback on the 2.9% handling fee.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-2xl text-primary">
                  <BsCheckCircle />
                </p>
                <div>
                  <h6 className="text-lg font-medium mb-1">
                    Find and apply for jobs
                  </h6>
                  <p className="text-sm opacity-90">
                    Search for jobs that match the skills and services in your
                    profile. Bid using Premium Quotes to stand out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
