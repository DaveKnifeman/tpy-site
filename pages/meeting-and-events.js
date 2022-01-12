import Head from 'next/head';
import React from "react";
import dynamic from "next/dynamic";

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const ImageBanner = dynamic(() => import('../components/image-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const FullWidthImage = dynamic(() => import('../components/full-width-image.js'));
const MeetingSpaceBlock = dynamic(() => import('../components/meeting-space-block.js'));

function meetingAndEvents() {
    return <div className="root">
        <Head>
            <title key="title">Meeting & Events | Technology Park Ypenburg</title>
            <meta key="og:title" property="og:title" content="Meeting & Events | Technology Park Ypenburg" />
            <meta key="og:description" property="og:description" content="Build your network, build your business, and build your friendships all within our passionate community." />
            <meta key="description" name="description" content="Build your network, build your business, and build your friendships all within our passionate community." />
        </Head>
        <Navigation />
        <PageHeader
            smallCapsTitle=""
            title="Meeting & Events"
            image="/static/pages/meeting-events/omslag.jpg"
        />
        <IntroText>
            Technology Park Ypenburg is the place to meet and collaborate.
            At TPY’s Community Center and Scale-Up & Innovation Center, we
            offer a wide range of meeting rooms and event spaces in different
            sizes suitable to host presentations, workshops, business meetings,
            brainstorms, co-working sessions, lectures and seminars. The rooms
            are provided with WIFI, whiteboards and power supplies. Catering
            can be provided as an add-on, with options ranging from coffee
            and tea, to a lunch or snacks. You can rent the rooms based on an
            hourly, half-day (4 hours) or full day rate (8 hours). We are
            looking forward to hosting your meeting or event!
        </IntroText>
        <div>
            <TextAndImage
                image="/static/pages/meeting-events/amelia-earhart.jpg"
                category=""
                title="Amelia Earhart"
                text='<p>Amelia Earhart was the first woman to fly across the Atlantic solo. This is a bright, spacious meeting room which can comfortably accommodate up to 14 people and is located at the TPY Community Center. It is the perfect room for a full day training, a business meeting or a workshop.</p>

        <p><b>Pricing*: </b><br/>
        Full Day: &euro; 300,- <br/>
        Half Day: &euro; 160,- <br/>
        Hour: &euro; 45,- </p>
        <p>
            Reach out to us via <a href="mailto:events@technologyparkypenburg.com">events@technologyparkypenburg.com</a>
            and we will happily answer any questions you might have or help you out with your preferred booking.
        </p>
        <p>
        <i>
            * A member discount is applicable for Technology Park
            Ypenburg & The Hague Tech members. Tailor-made catering
            options such as coffee/tea packages and lunches are
            available upon request.
        </i>
    </p>
         '
            />
        </div>
        <div>
            <TextAndImage
                image="/static/pages/meeting-events/herman-staudinger.jpg"
                category=""
                title="Herman Staudinger"
                text='<p>Hermann Staudinger was a German chemist who discovered the existence of polymers and is considered the "father of polymer chemistry". This meeting space is optimal for small groups up to 8 people and is located at the TPY Community Center. This is the perfect space for you to have an intimate meeting with your colleagues or clients.</p>

        <p><b>Pricing*: </b><br/>
        Full Day: &euro; 275,- <br/>
        Half Day: &euro; 145,- <br/>
        Hour: &euro; 40,- </p>

         <p>
            Reach out to us via <a href="mailto:events@technologyparkypenburg.com">events@technologyparkypenburg.com</a>
            and we will happily answer any questions you might have or help you out with your preferred booking.
        </p>
        <p>
        <i>
            * A member discount is applicable for Technology Park
            Ypenburg & The Hague Tech members. Tailor-made catering
            options such as coffee/tea packages and lunches are
            available upon request.
        </i>
    </p>
         '
            />
        </div>

        <div>
            <TextAndImage
                image="/static/pages/meeting-events/chiaki-mukai.jpg"
                category=""
                title="Chiaki Mukai"
                text='<p>Chiaki Mukai is a Japanese physician and JAXA astronaut and the first Asian woman to have been to space. This meeting space is optimal for small groups up to 8 people and is located at the TPY Community Center. This is the perfect space for you to have an intimate meeting with your colleagues or clients.</p>

        <p><b>Pricing*: </b><br/>
        Full Day: &euro; 275,- <br/>
        Half Day: &euro; 145,- <br/>
        Hour: &euro; 40,- </p>

          <p>
            Reach out to us via <a href="mailto:events@technologyparkypenburg.com">events@technologyparkypenburg.com</a>
            and we will happily answer any questions you might have or help you out with your preferred booking.
        </p>
        <p>
        <i>
            * A member discount is applicable for Technology Park
            Ypenburg & The Hague Tech members. Tailor-made catering
            options such as coffee/tea packages and lunches are
            available upon request.
        </i>
    </p>
         '
            />
        </div>

        <div>
            <TextAndImage
                image="/static/pages/meeting-events/anthony-fokker.jpg"
                category=""
                title="Anthony Fokker"
                text='<p>Anthony Fokker was a Dutch aviation pioneer who is well known for manufacturing and designing aircrafts. This meeting space is located at our Scale-Up & Innovation Center, and optimal for small groups up to 6 people. This is the perfect space for you to have an intimate meeting with your colleagues or clients.</p>

        <p><b>Pricing*: </b><br/>
        Full Day: &euro; 210,- <br/>
        Half Day: &euro; 115,- <br/>
        Hour: &euro; 35,- </p>

         <p>
            Reach out to us via <a href="mailto:events@technologyparkypenburg.com">events@technologyparkypenburg.com</a>
            and we will happily answer any questions you might have or help you out with your preferred booking.
        </p>
        <p>
        <i>
            * A member discount is applicable for Technology Park
            Ypenburg & The Hague Tech members. Tailor-made catering
            options such as coffee/tea packages and lunches are
            available upon request.
        </i>
    </p>
         '
            />
        </div>

        <div>
            <TextAndImage
                image="/static/pages/meeting-events/wilhelmina-cornelia-ruitman.jpg"
                category=""
                title="Wilhelmina Cornelia Ruitman"
                text='<p>Wilhelmina Cornelia Ruitman was a Dutch balloonist and first female parachutist from the Netherlands who jumped out of a balloon. This is a large and open event space with plenty of daylight located at the Community Center. It is suitable for larger presentations, lectures, and borrels. This space is equipped with a beamer and speakers and comfortably accommodates up to 80 people.</p>
        <p>
            <b>Available set-ups and capacity</b><br/>
            U- Shape - 20<br/>
            Theater - 50<br/>
            Circle - 30<br/>
            Half Circle - 20<br/>
            Reception - 80<br/>
            Block - 20<br/>
            Classroom - 25
        </p>
        <p><b>Pricing*: </b><br/>
        Full Day: &euro; 480,- <br/>
        Half Day: &euro; 240,- <br/>
        Hour: &euro; 60,- </p>

         <p>
            Reach out to us via <a href="mailto:events@technologyparkypenburg.com">events@technologyparkypenburg.com</a>
            and we will happily answer any questions you might have or help you out with your preferred booking.
        </p>
        <p>
        <i>
            * A member discount is applicable for Technology Park
            Ypenburg & The Hague Tech members. Tailor-made catering
            options such as coffee/tea packages and lunches are
            available upon request.
        </i>
    </p>
         '
    />
        </div>

        <Footer />
    </div>
}

export default meetingAndEvents;
