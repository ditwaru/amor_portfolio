import type { NextPage } from 'next'
import Link from 'next/link'
import StyledAnchorTags from '../components/StyledAnchorTags'

const Home: NextPage = () => {
  return (
    <>
      <main className='flex flex-col justify-center items-center min-h-screen w-11/12 max-w-lg mx-auto space-y-5 py-5 text-blue-900'>
          <h1 className='text-4xl font-righteous'>Amor Nuñez</h1>
          <h2 className='text-3xl font-bold text-center'>Stage Manager Portfolio</h2>
          <StyledAnchorTags href='https://docs.google.com/document/d/11tC0RPoHwDbIvfnfaw6w6hTkwOShZK3d07B2BK1XvC0/edit' text='Rehearsal Reports' />
          <StyledAnchorTags href='https://docs.google.com/spreadsheets/d/1rcTiMSpdgpX6CJFXLomh_IoG_KYl89cdPZztSaSbDv4/edit?usp=sharing' text='Set Change Assignments' />
          <StyledAnchorTags href='https://docs.google.com/document/d/1EmuBUPor2RxwMdhgwifHNrY643-XafGtR7T2qP77yVo/edit?usp=sharing' text='Bulleted List of Duties' />
          <StyledAnchorTags href='https://docs.google.com/document/d/1RxvZHDwPSwhfk9glbruYg6C_88qLhtA0MfTjw9wJzxM/edit' text='Rehearsal Calendar' />
          <StyledAnchorTags href='https://docs.google.com/document/d/1GYaOXB7zR85dSikoJVNraiGm8BQroNca2aIFPSdJlJM/edit' text='Props List' />
          <StyledAnchorTags href='https://docs.google.com/forms/d/1l2j3CNAyDqfiwKUS-oI2D_5rwg6bYa62bCs59DH4q4E/edit' text='Cast Superlatives' />
          <StyledAnchorTags href='https://docs.google.com/document/d/10MgQjMq9KlVbZ_01jAm1xdsYpYhGN8hsfewS2a2cIm4/edit' text='Scene-by-Scene' />
          <StyledAnchorTags href='https://docs.google.com/document/d/16OzjMR62jcWkoR2iU4xU7T5BNHFPTMVXvEi89D-FHgA/edit' text='Tech Crew Form' />
          <StyledAnchorTags href='https://drive.google.com/file/d/1JvjW9LsYS9Ciy7gCXP3MWnbTjc_TiUl-/view?usp=sharing' text='PDF Full Promptbook' />
          <StyledAnchorTags href='https://drive.google.com/file/d/1JTPOxX2Mph0HZ0d374lAbenCcTFiDjfl/view?usp=sharing' text='PDF Set Drawings' />
          <StyledAnchorTags href='https://docs.google.com/document/d/1PQ5tWslshsZO6EbhkROEUWwCAQjQRzl2BcAuiRVGmNk/edit?usp=sharing' text="Emma's Transitions" />
          <Link href="/pictures"><a className='w-full max-w-sm bg-white border rounded-lg px-3 py-2 hover:scale-110 duration-150 font-semibold'>Pictures</a></Link>
          <Link href="/videos"><a className='w-full max-w-sm bg-white border rounded-lg px-3 py-2 hover:scale-110 duration-150 font-semibold'>Videos</a></Link>
      </main>
    </>
  )
}

export default Home
