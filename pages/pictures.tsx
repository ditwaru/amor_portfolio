import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { pictureLinks } from "../lib/media_links";

const Pictures: NextPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPicture, setSelectedPicture] = useState(pictureLinks[0])
    if (typeof window !== 'undefined') {
        document.body.style.overflow = modalOpen ? "hidden" : "auto";
    }
    return (
        <>
        <NextSeo title="Amor Nuñez Portfolio - Pictures" />
            <Navbar goTo="Videos" />
            <main className="my-16 w-11/12 mx-auto px-1">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full">
                    {pictureLinks.map((pic, i) => <div key={i} className="w-full h-[24rem] relative lg:hover:border-4 rounded-2xl border-white hover:cursor-pointer lg:hover:scale-105 hover:z-10 duration-150" onClick={(e) => {
                            e.stopPropagation();
                            setModalOpen(true);
                            setSelectedPicture(pictureLinks[i])
                        }}><Image className="rounded-xl" src={pic.url} layout="fill" objectFit="cover" objectPosition='center' alt="" /></div>)}
                </div>
            </main>
            {modalOpen && <>
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 max-w-2xl z-30 flex items-center justify-center">
                    <Image src={selectedPicture.url} height={selectedPicture.height} width={selectedPicture.width} alt="" />
                </div>
                <div className="top-0 left-0 bg-black w-screen h-screen fixed z-20 opacity-90" onClick={() => setModalOpen(false)}></div>
            </>}
        </>
        )
}

export default Pictures;