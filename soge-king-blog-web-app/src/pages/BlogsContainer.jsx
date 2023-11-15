import React from 'react'
import Navigation from '../components/Navigation'
import ShareComponent from '../components/ShareComponent'
import { Outlet } from 'react-router-dom'
import AuthModel from '../components/AuthModel'
import HamBurgerMenu from '../components/HamBurgerMenu'

export default function BlogsContainer() {
  return (
    <div>
        <Navigation/>
        <ShareComponent/>
        <Outlet/>
        <AuthModel/>
        <HamBurgerMenu/>
    </div>
  )
}
