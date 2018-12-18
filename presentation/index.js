/* eslint-disable global-require */
import React from 'react';

import { Appear, Deck, Image, Link, List, ListItem, Slide, Heading, Text } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import Hooks from '../assets/hooks.jpg';
import ReactLogo from '../assets/react.png';

require('normalize.css');


const theme = createTheme({
    primary: '#000',
    secondary: '#999999',
    tertiary: '#FFFFFF',
    quaternary: '#00D8FF',
}, {
    primary: 'Montserrat',
    secondary: 'Helvetica',
});


const Presentation = () => (
    <Deck transition={['zoom', 'slide']} theme={theme} transitionDuration={500} progress="none">
        <Slide textColor="secondary">
            <Image src={ReactLogo} />
            <Heading size={1} fit lineHeight={1}>
                React Hooks
            </Heading>
            <Text textSize="1em" marginTop="20px" textColor="secondary">
                Jorgen Ader
            </Text>
            <Text textSize="1em" textColor="secondary">
                18.12.2018
            </Text>
        </Slide>
        <Slide textColor="secondary">
            <Heading size={1} fit>
                Problems with React today
            </Heading>
            <Appear>
                <Text textColor="quaternary">Hard to share logic</Text>
            </Appear>
            <Appear>
                <Text textColor="quaternary">Huge components</Text>
            </Appear>
            <Appear>
                <Text textColor="quaternary">Classes are hard</Text>
            </Appear>
        </Slide>
        <Slide textColor="secondary">
            <Image src={Hooks} height={200} width={300} />
            <Heading size={1}>
                Hooks proposal
            </Heading>
            <Appear>
                <Text textColor="tertiary">Better primitives</Text>
            </Appear>
            <Appear>
                <Text textColor="tertiary">Easy to follow</Text>
            </Appear>
            <Appear>
                <List>
                    <ListItem>Only Call Hooks at the Top Level</ListItem>
                    <ListItem>Only Call Hooks from React Functions</ListItem>
                </List>
            </Appear>
        </Slide>
        <Slide textColor="secondary">
            <Heading size={1}>
                References
            </Heading>
            <List>
                <ListItem>
                    <Link href="https://reactjs.org/docs/hooks-intro.html">Hooks proposal</Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.youtube.com/watch?v=dpw9EHDh2bM">React Conf 2018 keynote</Link>
                </ListItem>
                <ListItem>
                    <Link href="https://formidable.com/open-source/spectacle/about/">Spectacle</Link>
                </ListItem>
            </List>
        </Slide>
    </Deck>
);

export default Presentation;
