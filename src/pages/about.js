// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me AKA Matte8">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
    
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage