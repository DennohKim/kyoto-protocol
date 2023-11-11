"use client"
import useAppDataContext from '@/hooks/useAppDataContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react'

const InfoTab = () => {
	  const { setShowInfoTab, infoTabAsset, showInfoTab } = useAppDataContext();

	  console.log(infoTabAsset)

  return (
    <div className="">
      <XMarkIcon
        className='absolute right-4 w-8 h-8'
        onClick={() => setShowInfoTab(false)}
      />

      {infoTabAsset &&  (
        <>
          <hr
           
            className=""
          />

          <h1 className='text-2xl text-secondary m-0 mb-2 capitalize'>
            {/* {infoTabAsset?.name ?? `${infoTabAsset?.species_common_name}`} */}
          </h1>

          <div className='flex'>
            <p className='capitalize text-base text-secondary'>
              {/* {infoTabAsset?.type} */}
            </p>
            {
              <p className='text-base m-0 text-secondary'>
                {' '}
                {/* &#9679; Last Interaction:{' '}
                {format(
                  parseISO(getLastInteractionTimestamp(infoTabAsset)),
                  'MM/dd/yy'
                )} */}
              </p>
            }
          </div>
          <hr className="" />

          <section className="">

        
           

            {/* Add potential social section here */}
          </section>

          {(
            <section className="">
              <Image
                src=""
                width={40}
                height={40}
                color='#8cc63f'
                alt='owner-icon'
              />{' '}
            </section>
          )}

          <h2 className="">User Information</h2>
          <hr className="" />
          <section className="">
            <div className="">
              <Image
                src=""
                width={40}
                height={40}
                color='#8cc63f'
                alt='owner-icon'
              />
             
            </div>

            
          </section>

          <h2 className="">Properties</h2>
          <hr className="" />
          <section className="">
            <p className='m-0 text-gray-500'>
              Species:{' '}
              <span className='text-secondary m-0'>
                {/* {infoTabAsset.species_common_name ?? '--'} */}
              </span>
            </p>
            <p className='m-0 text-gray-500'>
              Name/ID:{' '}
              <span className='text-secondary m-0'>
                {/* {infoTabAsset.id ?? '--'} */}
              </span>
            </p>
            <p className='m-0 text-gray-500'>
              Stage of Life:{' '}
              <span className='text-secondary m-0'>
                {/* {infoTabAsset.start_stage ?? 'Tree Planting'} */}
              </span>
            </p>
            <p className='m-0 text-gray-500'>
              Coordinates:{' '}
              {/* <span className='text-secondary m-0'>
                {`${infoTabAsset?.coord?.lat.toFixed(
                  5
                )}, ${infoTabAsset?.coord?.lon.toFixed(5)}` ?? '--'}
              </span> */}
            </p>
            
            <p className='m-0 text-gray-500'>
              Total Interactions:{' '}
              <span className='text-secondary m-0'>
                {/* {infoTabAsset.interactions?.length} */}
              </span>
            </p>
          </section>

          <h2 className="">Environment</h2>
          <hr className=""/>
          <section className="">
            <p className='m-0 text-gray-500'>
              Height:{' '}
              <span className='text-secondary m-0'>
                {/* {infoTabAsset.height ?? '0'} {infoTabAsset.height_unit ?? 'm'} */}
              </span>
            </p>
          </section>
        </>
      )}
    </div>
  );
}

export default InfoTab
