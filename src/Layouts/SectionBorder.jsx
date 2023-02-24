function SectionBorder({ children, header, orientation, border }) {
  return (
    <div className='h-min my-auto'>
      <div className='text-left w-full my-auto'>
        <div>
          <div className='flex flex-row'>
            <div className='my-auto mx-4 w-full text-justify'>
              <div
                className={
                  `flex flex-row` + (orientation === 'right' && ` justify-end`)
                }
              >
                {orientation === 'right' && (
                  <div className='w-1/2'>
                    <hr className={'my-3 mx-3 ' + border} />
                  </div>
                )}
                <h2 className='font-bold'>{header}</h2>
                {orientation === 'left' && (
                  <div className='w-1/2'>
                    <hr className={'my-3 mx-3 ' + border} />
                  </div>
                )}
              </div>
              <div
                className={
                  `my-2 p-8 ` +
                  border +
                  ' ' +
                  (orientation === 'left' ? ` border-l` : ` border-r`)
                }
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionBorder;
