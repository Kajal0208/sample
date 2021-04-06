import React from 'react'
import Featuredcollection from '../featured-collection/Featuredcollection'
import Hero from '../Hero/Hero'
import MainSection from '../MainSection/MainSection'
import Layout from './Layout'

function HomePage() {
    return (
        <>
            <Layout >
            <Hero />
            <MainSection/>
            <Featuredcollection/>
            </Layout>
        </>
    )
}

export default HomePage
