function SectionBorder({
  id,
  selSection,
  children,
  header,
  orientation,
  appColor,
}) {
  let animateBorder =
    orientation === 'left'
      ? 'motion-safe:animate-fadeBorderLeft'
      : 'motion-safe:animate-fadeBorderRight';

  return (
    <div className='text-left justify-center mx-8'>
      <div className='flex flex-row'>
        <div className='my-auto text-justify grow'>
          <div
            className={`flex flex-row py-2 lg:py-0 ${
              id === selSection ? animateBorder : ``
            } ${orientation === 'right' && `justify-end`}`}
          >
            <div
              className={`flex flex-col justify-center ${
                orientation === 'right' && ` order-2`
              }`}
            >
              <h2
                className={`font-bold opacity-0 ${
                  id === selSection ? animateBorder : ``
                }`}
              >
                {header}
              </h2>
            </div>
            <div
              className={`grow lg:w-1/2 ${
                orientation === 'right' && `order-1`
              }`}
            >
              <hr
                className={`my-3 mx-3 opacity-0 ${id === selSection} ${
                  id === selSection ? animateBorder : ``
                } ${appColor[id].borderColor}`}
              />
            </div>
          </div>
          <div className='flex flex-row w-full'>
            <div
              className={
                `opacity-0 animation-delay-300 lg:w-1 ${
                  appColor[id].borderColor
                } ${
                  id === selSection ? `motion-safe:animate-fadeBorderUp` : ``
                } ` + (orientation === `left` ? `lg:border-l` : `lg:border-r`)
              }
            ></div>
            <div
              className={`flex flex-col gap-8 w-full opacity-0 animation-delay-600 lg:my-1 md:p-8 ${
                id === selSection ? `motion-safe:animate-fadeIn` : ``
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionBorder;
