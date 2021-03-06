import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import Hero from '../components/Home/Hero.js'
import About from '../components/Home/About.js'
import Speakers from '../components/Home/Speakers.js'
import Venue from '../components/Home/Venue.js'
import Map from '../components/Home/Map.js'
import Contact from '../components/Home/Contact.js'
import Livestream from '../components/Home/Livestream.js'

const Home = () => (
  <Page path="/">
    <Hero/>
    <About/>
    <Livestream/>
    <Speakers />
    <Venue/>
    <Map/>
    <Contact/>
  </Page>
);

export default Home


