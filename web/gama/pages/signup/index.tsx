import React from 'react'

import Footer from '../../components/layout/footer'
import HomeHeader from '../../components/layout/homeHeader';
import Content from '../../components/ui/content'
import SignupForm from '../../components/signup/signup-form'

export default function LoginPage() {
  return (
    <div>
      <HomeHeader/>
      <Content>
        <SignupForm/>
      </Content>
      <Footer/>
    </div>
  )
}
