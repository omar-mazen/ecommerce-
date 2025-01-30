import PromoCodeCard from "./PromoCodeCard";

export default function PromoCodesList({ buttonType }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
      {Array.from({ length: 2 }, (_, i) => (
        <PromoCodeCard
          key={i}
          img={"/../src/images.jpeg"}
          buttonType={buttonType}
        />
      ))}
      {Array.from({ length: 2 }, (_, i) => (
        <PromoCodeCard key={i} buttonType={buttonType} />
      ))}
    </ul>
  );
}
