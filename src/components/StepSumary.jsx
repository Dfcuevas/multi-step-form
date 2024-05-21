import fondo_mobile from '/bg-sidebar-mobile.svg'
import fondo_desktop from '/bg-sidebar-desktop.svg'

const StepSumary = ({dataArray, step}) => {
    return (
        <div className='w-full h-[172px] sm:h-screen sm:p-4 sm:w-auto relative'>
        <div className='absolute flex gap-4 sm:gap-6 justify-center left-[calc(50%-88px)] top-10 sm:top-24 sm:flex-col'>
          {
            dataArray.map((data) => (
              <div key={data.id} className={`sm:flex sm:gap-4 sm:items-center `}>
                <span className={`rounded-[50%] border border-White w-8 h-8 flex items-center justify-center ${step === data.id ? 'bg-Light-blue text-Marine-blue' : 'text-White'}`}>
                  {data.id}
                </span>
                <div className='hidden sm:block'>
                  <span className='text-Cool-gray'>{data.name}</span>
                  <p className='font-bold text-White'>{data.content}</p>
                </div>
              </div>
            ))
          }
        </div>
      <img src={fondo_mobile} alt="bg mobile" className='prueba w-full sm:hidden' />
      <img src={fondo_desktop} alt='bg desktop' className='hidden sm:block sm:h-full sm:object-cover sm:rounded-2xl'/> 
      </div> 
    )
}

export default StepSumary