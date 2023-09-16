export default function AboutUs() {
  window.scroll(0, 0);

  return (
    <div className="pt-20 pb-10 bg-accent min-h-[70vh] text-neutral">
      <div className="w-[95%] xl:w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h6 className="text-4xl font-bold">Welcome</h6>
            <h6 className="py-2">Start and do your work for a better future</h6>
            <div className="w-48 h-1 bg-primary rounded-xl mt-2"></div>

            <div className="mt-6 text-neutral/90">
              <p>
                <strong>InstantKaj</strong> is an online platform which acts
                like a bridge between the students and the officials or
                corporates of Bangladesh. Moreover, <strong>InstantKaj</strong>{" "}
                allows people to post services that they are expert on .
                Students or any kind of people can simply open an account and
                after verification he/she can post a service like Graphics
                designing, programming or any kind of specialised work which may
                help CTOs of different companies , owners of small startups and
                as well as the students who want help in their projects.
                Furthermore, owners of different companies can easily contact
                the freelancer through a chatbox developed by
                <strong>InstantKaj</strong>. After chatting with the freelancer
                the job provider (owner of a project or company) will appoint
                that freelancer for his job. And pay the money through Bkash to{" "}
                <strong>InstantKaj</strong> . When the freelancer will be able
                to satisfy the customer with the project,{" "}
                <strong>instantKaj</strong> will pay the freelancer with the
                money after deducting the commission fee of{" "}
                <strong>instantKaj</strong> which will not be more than 12%. The
                customer can give review to the freelancer and comment on
                his/her works.
              </p>
            </div>
          </div>

          <div>
            <iframe
              width="100%"
              height="370"
              src="https://www.youtube.com/embed/sWFgj7N8ZRY"
              title="YouTube video player"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
