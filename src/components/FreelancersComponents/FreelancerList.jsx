import FreelancerCard from "./FreelancerCard";

export default function FreelancerList({ freelancers }) {
  return (
    <div className="lists">
      {freelancers?.length > 0 &&
        freelancers?.map((freelancer, i) => (
          <FreelancerCard key={i} freelancer={freelancer} />
        ))}
    </div>
  );
}
