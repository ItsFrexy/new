import { useTranslation } from 'react-i18next';
import SliderMenu from "../components/SliderMenu"


function Technologiai() {

  const { t, i18n } = useTranslation();

  return (
    <>

      <div className="bg-projektmenedzsmentImg h-[200px] w-full sm:bg-auto bg-contain sm:bg-[position:100%_23%] bg-no-repeat bg-right relative">
        <h1 className="text-3xl font-bold md:mx-[10%] mx-[5%] h-full flex items-center absolute z-10">{t('Services.Projektmenedzsment.banner-text')}</h1>
        <div className="h-[201px]  w-full bg-gradient-to-r  from-black xl:from-50%  from-40% to-transparent relative">
        </div>
      </div>

      <div className="xl:w-1/2 md:w-2/3 md:mx-[10%] mx-[5%] mt-10 flex flex-col gap-5">
        <div data-aos="fade-up" data-aos-delay="0">
          <h2 data-aos="fade-up" data-aos-delay="0" className="text-xl font-medium">{t('Services.Projektmenedzsment.title')}</h2>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col gap-5">
          <p className="">{t('Services.Projektmenedzsment.desc-1')}</p>
          <p className="">{t('Services.Projektmenedzsment.desc-2')}</p>
          <p className="">{t('Services.Projektmenedzsment.desc-3')}</p>
          <p className="">{t('Services.Projektmenedzsment.desc-4')}</p>
        </div>
      </div>


      <SliderMenu />





    </>
  )

}

export default Technologiai