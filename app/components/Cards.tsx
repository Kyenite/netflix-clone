type CardProps = {
  imgUrl: Array<string>;
};

export default function Cards({ imgUrl }: CardProps) {
  if (imgUrl && imgUrl.length > 0) {
    return (
      <>
        {imgUrl.map((url: string, index: number) => (
          <div key={index} className="relative h-50 w-30">
            <img className="w-full h-full object-cover" src={url} alt={`Card ${index}`} />
            <span className="text-white absolute bottom-0 left-0 bg-opacity-50 px-1 text-lg">
              {index + 1}
            </span>
          </div>
        ))}
      </>
    );
  } else {
    return null;
  }
}