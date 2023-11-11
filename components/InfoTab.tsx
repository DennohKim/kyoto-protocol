"use client"
import useAppDataContext from '@/hooks/useAppDataContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react'

const InfoTab = () => {
	  const { setShowInfoTab, infoTabAsset, showInfoTab } = useAppDataContext();

	  console.log(infoTabAsset)

  return (
    <div className='flex flex-col flex-shrink w-96 sm:w-96 h-full p-2 z-50 cursor-pointer overflow-y-auto bg-white border-l border-black absolute bottom-0 max-h-[50%] transition-all duration-500 ease-in-out rounded-tl-lg rounded-tr-lg sm:relative sm:bottom-auto sm:max-h-full sm:z-10 sm:border-l'>
      <section className='flex flex-wrap'>
        <XMarkIcon
          className='absolute right-4 w-8 h-8'
          onClick={() => setShowInfoTab(false)}
        />

        {infoTabAsset && (
          <>
            <hr className='border-t-2 mt-1 mb-2' />

            <div className='flex flex-col'>
              <h1 className='text-2xl font-semibold text-secondary m-0 mb-4 capitalize'>
                {infoTabAsset?.client ?? `${infoTabAsset?.client_name}`}
              </h1>

              <p className='text-base m-0 text-secondary'>
                {' '}
                &#9679; Request time: {infoTabAsset.request_date ?? '--'}
              </p>
            </div>
            <hr className='border-t-2 mt-1 mb-2' />
            {
              //   <section className=''>
              //     <Image
              //       src={infoTabAsset?.logo ?? ''}
              //       width={40}
              //       height={40}
              //       color='#8cc63f'
              //       alt='owner-icon'
              //     />{' '}
              //   </section>
            }
            <h2 className='font-bold text-md my-4'>
              Tree planting Information
            </h2>
            <hr className='' />

            <hr className='border-t-2 mt-1 mb-2' />
            <section className='flex flex-col space-y-2'>
              <p className='m-0 text-gray-700'>
                Client Name:{' '}
                <span className='text-secondary text-gray-500 m-0'>
                  {infoTabAsset.client_name ?? '--'}
                </span>
              </p>

              <p className='m-0 text-gray-700'>
                Number of Propagules:{' '}
                <span className='text-secondary text-gray-500 m-0'>
                  {infoTabAsset.number_of_propagules ?? '--'}
                </span>
              </p>

              <p className='m-0 text-gray-700 '>
                Total Planted:{' '}
                <span className='text-secondary text-gray-500 m-0'>
                  {infoTabAsset.total_planted ?? '--'}
                </span>
              </p>
              <p className='m-0 text-gray-700'>
                Coordinates:{' '}
                <span className='text-secondary text-gray-500 m-0'>
                  {`${infoTabAsset?.latitude.toFixed(
                    5
                  )}, ${infoTabAsset?.longitude.toFixed(5)}` ?? '--'}
                </span>
              </p>
            </section>
          </>
        )}
      </section>
    </div>
  );
}

export default InfoTab
