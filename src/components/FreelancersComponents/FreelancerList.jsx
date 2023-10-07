import FreelancerCard from "./FreelancerCard";

export default function FreelancerList({ freelancers }) {
  return (
    <div className="lists">
      {freelancers?.data?.length > 0 &&
        freelancers?.data?.map((freelancer, i) => (
          <FreelancerCard key={i} freelancer={freelancer} />
        ))}
    </div>
  );
}
