import { useAppDispatch, useAppSelector } from '../app/hooks';
import { services } from '../data';
import { NameServices } from '../types/services';
import RadioButtons from './RadioButtons';
import { useEffect, useState } from 'react';
import { getBlazePrice, getBunnyPrice, getScaleWayPrice, getVultrPrice, getMinPrice} from '../features/serviceValues';
import CharDesktop from './ChartDesktop';
import ChartMobile from './ChartMobile';

type Props = {
  storage: number,
  transfer: number,
};

export default function StorageServices({ storage, transfer }: Props) {
  const {  
    scalewayStorage, 
    bunnyStorage,
  } = useAppSelector((state) => state.values);
  const dispatch = useAppDispatch();

   const [mobileView, setMobileView] = useState(false); 
  const resize = () => {
    if (window.innerWidth < 640) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resize)
  }, []);
  


  useEffect(() => {
    dispatch(getBlazePrice({ storage, transfer }));
    dispatch(getBunnyPrice({ storage, transfer }));
    dispatch(getScaleWayPrice({ storage, transfer }));
    dispatch(getVultrPrice({ storage, transfer }));
    dispatch(getMinPrice());
  }, [storage, transfer, scalewayStorage, bunnyStorage, dispatch]);

  
  return (
    <div className='flex justify-center sm:justify-start flex-col-reverse sm:flex-row'>
      <div className='flex flex-row sm:flex-col gap-2 sm:gap-2 py-2'>
        {services.map(service => (
          <div key={service.title} className='flex flex-col-reverse items-center justify-end sm:flex-row w-full sm:items-center'>
            <div className='sm:w-36'>
              <p className='font-bold text-gray-700 text-center sm:text-left'>
                {service.title.toUpperCase()}
              </p>
              {service.title === NameServices.Bunny && (
                <RadioButtons 
                  values={["HDD", "SDD"]}
                  name="bunnyStorage"
                />
              )}
              {service.title === NameServices.Scaleway && (
                <RadioButtons 
                  values={["Multi", "Single"]}
                  name="scalewayStorage"
                />
              )}
            </div>
            <div className='w-8 border p-1'>
              <img 
                src={service.img} 
                alt={service.title} 
                className='w-full h-full'
              />
            </div>
          </div>
        ))}
      </div>
      {!mobileView ? (
        <CharDesktop />
      ):(
        <ChartMobile />
      )}
    </div>
  )
}
