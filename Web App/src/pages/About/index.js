import React from 'react';
import {
    Layout,
    SubHeader,
    Section,
    Heading
} from '../../components/';

const About = () => (
    <Layout subHeader={<SubHeader>About Page</SubHeader>}>  
        <div className="inner-content"> 
            <Section>
                <Heading size={2}>About</Heading>            
                    <div>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</div>
                    <div>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</div>
                    <div>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</div>
                    <div>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</div>
                    <div>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</div>
                    <div>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</div>
                    <div>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</div>
                    <div>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</div>
                    <div>Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.</div>
                </Section>
        </div>
    </Layout>
);

export default About;
