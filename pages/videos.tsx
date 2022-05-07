import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { videoLinks } from "../lib/media_links";
const Videos: NextPage = () => {

    return (
        <>
            <NextSeo title="Amor Nuñez Portfolio - Videos" />
            <Navbar goTo="Pictures" />
            <main className="py-16 w-11/12 mx-auto px-1 flex justify-center items-center min-h-screen">
                <div className="flex flex-col items-center space-y-5 w-10/12 mx-auto">
                    {videoLinks.map((video, i) =>
                        <div key={i} className="w-full max-w-2xl">
                            <iframe width="100%" height="360" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    )}
                </div>
            </main>
        </>
        )
}

export default Videos;