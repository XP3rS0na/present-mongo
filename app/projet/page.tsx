import Link from 'next/link';
import Image from 'next/image';

<script>
    
</script>


export default function Projet () {
    return ( 
        <section className="sm:p-20 mt-0 sm:items-center block justify-center">
            <h2 className='flex mb-5 sm:align-items  justify-center'>Projets</h2>

            <div id="projetGlobal" className='m-auto resize w-[461px]  h-[260px] block sm:justify-center sm:items-center'>
                <div id="animRotate" className=' sm:items-center resize w-[461px] h-[260px] '>
                    <div id="projet" >
                        <Image  
                                
                                className="resize w-[461px] h-[260px] "
                                src="/mu2.png" 
                                alt="Photo de profil" 
                                width={922}
                                height={519}
                        />
                    </div>

                    <div className=' w-[461px] h-[260px]' id="projet_hid">
                        <div className="space-y-2 items-center mt-[70px]  justify-center">
                            <Link className=" text-center  m-2 block focus:bg-[#a5b4fc] focus:opacity-20 hover:opacity-70 rounded-md bg-[#a5b4fc] opacity-85 py-3 px-8 text-base font-semibold text-white outline-none" href="http://localhost:3000/" target='blank'>Accès à la page</Link>
                            <Link className=" text-center  m-2 block focus:bg-[#a5b4fc] focus:opacity-20 hover:opacity-70 rounded-md bg-[#a5b4fc] opacity-85 py-3 px-8 text-base font-semibold text-white outline-none"   href="https://github.com/XP3rS0na" target='blank'>Accès au projet Github</Link>
                            <div className="text-[2em] pr-0 ml-[150px] sm:hidden"><button  id="buttonLeave" type="button"><b>X</b></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}