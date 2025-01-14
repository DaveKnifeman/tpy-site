import { Component } from 'react';
import {Container} from "next/app";
import dynamic from "next/dynamic";
import React from "react";

const Navigation = dynamic(() => import('../components/navigation.jsx'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const HappeningItemComponent = dynamic(() => import('../components/happening-item.js'));

class HappeningItem extends Component {
    static async getInitialProps({ query }) {
        return { slug: query.slug }
    }

    render() {
        return <Container>
            <div className="HappeningItemPage">
                <Navigation />
                <div style={{height: '132px'}} />
                <div>
                    <HappeningItemComponent slug={this.props.slug} />
                </div>
                <div>
                    <BookATourBanner />
                </div>
                <div>
                    <FooterBanner
                        title="Come and see for yourself what Technology Park Ypenburg has to offer you!"
                        buttonText="book a tour"
                        buttonLink="/contact"
                        target="_top"
                    />
                </div>
                <Footer />
            </div>
        </Container>
    }
}

export default HappeningItem;
