import React from 'react'
import Navigation from '../components/Navigation'
import ShareComponent from '../components/ShareComponent'
import AuthModel from '../components/AuthModel'
import HamBurgerMenu from '../components/HamBurgerMenu'

export default function About() {
  return (
    <div>
        <Navigation/>
        <ShareComponent/>
     <div className='w-full'>

     </div>
        <AuthModel/>
        <HamBurgerMenu/>
    </div>
  )
}
