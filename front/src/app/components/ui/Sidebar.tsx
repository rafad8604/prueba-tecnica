"use client";
import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import Title from './Title';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="bg-orange-100 h-screen w-70 pt-6 ">
      <div>
        <div className="text-center my-5 ml-6 mr-6 grid grid-cols-1 gap-4">
          <UserIcon className="w-20 h-60 text-black-400 mx-auto" />
          <Title title="Usuario interno" className="justify-center"/>
        <Button text="Cerrar sesión" className="h-10 mt-1 px-3 rounded-md"/>
        <Title title="Gestor de recaudo" className="justify-center"/>
        <Button text="Identificacion de usuarios" className="h-10 mt-1 px-3 rounded-md" onClick={() => router.push('/module_info_user')}/>
        <Button text="Listado de usuarios" className="h-10 mt-1 px-3 rounded-md" onClick={() => router.push('/module_list_user')}/>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;