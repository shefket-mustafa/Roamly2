
type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  intention: string;
  description?: string;
  descriptionClassname?: string;
};

export default function LandingExploreCard({
  src,
  alt,
  width,
  height,
  description,
  intention,
  descriptionClassname,
}: Props) {
  return (
    <div className="flex flex-col w-72 flex-1">
      <img
        src={src}
        alt={`${alt}`}
        width={width}
        height={height}
        className="h-80 rounded-2xl object-cover w-full"
      />
      <p className={`font-bold ${descriptionClassname}`}>{description}</p>
      <p>{intention}</p>
    </div>
  );
}
