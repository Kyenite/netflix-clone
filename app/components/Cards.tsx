type CardProps = {
  imgUrl: Array<string>;
};

export default function Cards({ imgUrl }: CardProps) {
  if (imgUrl && imgUrl.length > 0) {
    return (
      <>
        {imgUrl.map((url: string, index: number) => (
          <div key={index} className="relative min-h-50 h-50 min-w-40 w-30">
            <img className="w-full h-full object-cover rounded-md shadow-md shadow-gray-500" src={url} alt={`Card ${index}`} />
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