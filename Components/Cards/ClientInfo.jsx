function ClientInfo({
  img,
  title,
  description,
  name,
  position,
  style,
  imgstyle,
  descriptionstyle,
  namestyle,
  positionstyle,
}) {
  let styleimg = [
    {
      style: "m-auto",
    },
    {
      style: "m-auto",
    },
    {
      style: "ml-auto",
    },
    {
      style: "mr-auto",
    },
  ];
  return (
    <>
      <div className={` ${style} space-y-4`}>
        <div
          className={`${imgstyle} border-white border-2 rounded-[32%] w-fit  ${
            styleimg[imgstyle - 1].style
          } `}
        >
          <picture>
            <img
              className="w-[80px] saturate-0 mix-blend-luminosity rounded-[32%] "
              src={img}
              alt="img"
            />
          </picture>
        </div>

        <h5
          className="text-secondary text-xl font-super font-semibold"
          style={{ textAlign: imgstyle === 1 || imgstyle === 3 ? "right" : "" }}
        >
          {title}
        </h5>
        <p
          className={`text-light text-lg font-super font-normal ${descriptionstyle}`}
          style={{ textAlign: imgstyle === 1 || imgstyle === 3 ? "right" : "" }}
        >
          {description}
        </p>
        <p
          className={`text-light font-Geomanist font-bold leading-4 tracking-[4px] text-xs ${namestyle}`}
          style={{ textAlign: imgstyle === 1 || imgstyle === 3 ? "right" : "" }}
        >
          {name}
        </p>
        <p
          className={`text-light font-Geomanist font-normal leading-4 text-xs ${positionstyle}`}
          style={{ textAlign: imgstyle === 1 || imgstyle === 3 ? "right" : "" }}
        >
          {position}
        </p>
      </div>
    </>
  );
}
export default ClientInfo;
