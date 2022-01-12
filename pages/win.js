import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const ImageBanner = dynamic(() => import('../components/image-banner.js'));
const VideoBanner = dynamic(() => import('../components/video-banner.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const FullWidthImage = dynamic(() => import('../components/full-width-image.js'));
const MeetingSpaceBlock = dynamic(() => import('../components/meeting-space-block.js'));

const socialImage = '/static/pages/win/og-image.png';

function Campus() {
  return <div className="root">
    <Head>
      <title key="title">Prototype Center Voucher Campaign | Technology Park Ypenburg</title>
      
      <meta key="twitter:title" property="twitter:title" content={"Prototype Center Voucher Campaign | Technology Park Ypenburg"} />

      <meta key="og:title" property="og:title" content="Prototype Center Voucher Campaign | Technology Park Ypenburg" />
      <meta key="og:description" property="og:description" content="We invite innovative thinkers and builders to use our space to bring their ideas to life." />
      <meta key="twitter:description" property="twitter:description" content="We invite innovative thinkers and builders to use our space to bring their ideas to life." />
      <meta key="description" name="description" content="We invite innovative thinkers and builders to use our space to bring their ideas to life." />

      <meta key="og:image" property="og:image" content={socialImage} />
      <meta key="twitter:image" property="twitter:image" content={socialImage} />
    </Head>
    <Navigation />
    <VideoBanner
      title={' '}
      subTitle={' '}
      video={'https://blockbar.nl/upload/tpy/TPY_prototyping%20center_final_V2.mp4'}
      />

    <IntroText>
      <p>
        TPY is hosting a pitch contest to win free use of the TPY Prototyping Center.
        Join the contest today so you can make your prototype a reality in our
        facilities! We have a dream that our prototyping center will help create
        sustainable solutions for the future thanks to the bright minds of our region.
        What is your dream?
      </p>
      <Title
        align="center"
        style={{
          padding: '0 30px',
          marginTop: '-50px',
          marginBottom: '60px'
        }}
        data-sal-duration="400"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease-in-out"
      >
        Prototype Center Voucher Campaign
      </Title>

      <p>
        TPY strives to drive innovation in the high-tech manufacturing industry in the Rotterdam-The Hague metropolitan region (MRDH). The Economic Business Climate Management Committee awarded TPY a subsidy to strengthen the regional economy. This enables the flexible use of our production space “The Prototyping Center”. We want to use this opportunity to invite innovative thinkers and builders to use our space to bring their ideas to life.
      </p>
      <p>
        Our “Prototyping Center” is equipped with machines to develop lightweight materials. We offer vouchers for individual companies to use equipment in our production facility. TYP allows innovators to manufacture within the Netherlands instead of moving abroad as we stand for sustainable solutions, new employment opportunities, and regional growth.
      </p>
      <p>
        To win a voucher send a 1 minute pitch to <a href="mailto:info@technologyparkypenburg.nl" className="font-bold">info@technologyparkypenburg.nl</a> about your idea to build a prototype using the Prototyping Center. The only requirement is developing hardware using metal, plastic, or composite components, structures or assemblies.
      </p>
      <p>
        This is your chance to take the leap towards building your dream prototype. We have a dream that our prototyping center will help create sustainable solutions for the future thanks to the bright minds of our region. What’s your dream?
      </p>

      <Title
        align="center"
        style={{
          marginTop: '50px',
        }}
      >
        Entry Requirements
      </Title>

      <p>
        To enter the competition your prototype should be producing hardware using metal, plastic or composite. You can enter by submitting a 1-minute pitch explaining:
      </p>

      <ul>
        <li>
          How much time do you think you'll need to develop your prototype?
        </li>

        <li>
          What are you planning to build?
        </li>

        <li>
          What makes your prototype unique?
        </li>

        <li>
          How do you see the future of your product?
        </li>
      </ul>

      <p>
        There is no deadline, however, there are a limited number of vouchers
        which are handed out on a first come first served basis.
      </p>

      <p>
        If you would like to see the Prototype Center before applying and check
        out the machines, please contact <a href="mailto:info@technologyparkypenburg.com">info@technologyparkypenburg.com</a> to
        schedule a tour.
      </p>

      <Title
        align="center"
        style={{
          marginTop: '50px',
        }}
      >
        The Prizes
      </Title>

      <p>
        There are a limited number of vouchers which are handed out on a
        first come first serve basis, so please apply as soon as you can.
        Through the pitch contest, winners will be selected who have the
        opportunity to win a voucher for 1 day, 1 week, and/or 1 month.
        There is the possibility to apply for multiple vouchers and to
        use them together or separately, whatever suits your prototype
        idea!
      </p>

      <div align="center">

        <Title size="small">Month Voucher</Title>

        <p>
          <img alt="1st prize image" src="/static/pages/win/prize-1.png" />
        </p>

        <Title size="small">Week Voucher</Title>

        <p>
          <img alt="2st prize image" src="/static/pages/win/prize-2.jpg" />
        </p>

        
        <Title size="small">Day Voucher</Title>

        <p>
          <img alt="3st prize image" src="/static/pages/win/prize-3.jpg" />
        </p>

      </div>

      <br />
      <p align="center">
        Send your 1 minute pitch to <a href="mailto:info@technologyparkypenburg.com" className="font-bold">info@technologyparkypenburg.com</a> explaining what you would like to prototype in our Prototype Center and you might win one of the prizes!
      </p>

      <Title
          align="center"
          style={{
            marginTop: '50px',
          }}
      >
        Machines at the Prototype Center
      </Title>

      <div align="center">
        <Title size="small">Belt Sander</Title>

        <p>
          <img alt="belt-sander" src="/static/pages/win/belt-sander.JPG" />
        </p>

        <Title size="small">Bending Machine</Title>

        <p>
          <img alt="belt-sander" src="/static/pages/win/bending-machine.JPG" />
        </p>

        <Title size="small">Band Saw</Title>

        <p>
          <img alt="belt-sander" src="/static/pages/win/band-saw.JPG" />
        </p>

        <Title size="small">Drill Press</Title>

        <p>
          <img alt="belt-sander" src="/static/pages/win/drill-press.JPG" />
        </p>

        <Title size="small">Lathe</Title>

        <p>
          <img alt="belt-sander" src="/static/pages/win/lathe.JPG" />
        </p>

        <Title size="small">Plate Roll</Title>

        <p>
          <img alt="belt-sander" src="/static/pages/win/plate-roll.JPG" />
        </p>

      </div>

    </IntroText>

    <NewsletterSubscribe />
    <Footer />
      <style jsx>{`
      .pricing-blocks-wrapper {
        text-align: center;
      }
      .pricing-blocks-wrapper.meeting-spaces {
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 1160px;
      }
      @media(max-width: 1340px) {
        .pricing-blocks-wrapper {
          width: 1000px;
          max-width: 100%;
          margin: 0 auto;
        }
      }
    `}</style>    
  </div>
}

export default Campus;
