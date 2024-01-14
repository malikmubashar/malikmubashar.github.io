"use client";
import { AccountCircleTwoTone } from '@mui/icons-material';
import ProfileContent from './content';
import ShowLoading from '../show-loading';
import { useState } from 'react';

export default function ProfileButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className='relative'>
      <AccountCircleTwoTone role="button" className='text-bd/80 scale-125 hover:opacity-80' onClick={() => setOpen(x => !x)} />
      <div className={'absolute right-0 translate-y-4 translate-x-3 sm:translate-x-0 bg-py shadow-md rounded-2xl flex flex-col w-60 border transition-all origin-top-right ' + (open ? "scale-100" : "scale-0")}>
        <div className='absolute w-full flex justify-end -translate-y-3 px-4 sm:px-[9px] top-0'>
          <div className='bg-sy w-3 h-3' style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>
          <div className='bg-py translate-y-0.5 w-3 h-3 absolute' style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>
        </div>
        <div className='overflow-hidden rounded-[inherit]'>
          <ShowLoading show={open} fallback={<ProfileContent />} />
        </div>
      </div>
    </div>
  )
}
