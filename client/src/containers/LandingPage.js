import React, { Component } from 'react'

import Layout from '../components/layout';
import LandingTopNavigation from '../components/navigation/blogTopNavigation';
import Section from '../components/layout/section';

export default class LandingPage extends Component {
  render() {
    return (
      <Layout>
        <LandingTopNavigation />
        <Section 
            type="left"
            header="This is my header"
            subheader="This is my subheader"
            img="https://placehold.it/250x150"
            imgAlt="A better place to be at home">
            <p>
                This section can hold any text i want it to hold. i can directly 
                put my text in here or i can paste a given information right into it.
            </p>
        </Section>
        <Section 
            type="right"
            header="This is my header"
            subheader="This is my subheader"
            img="https://placehold.it/250x150"
            imgAlt="A better place to be at home">
            <p>
                My second section has more information right in it as well.
            </p>
        </Section>
        <Section 
            type="left"
            header="This is my header"
            subheader="This is my subheader"
            img="https://placehold.it/250x150"
            imgAlt="A better place to be at home">
            <p>
                My second section has more information right in it as well.
            </p>
        </Section>
      </Layout>
    )
  }
}
