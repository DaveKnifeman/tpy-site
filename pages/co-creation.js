import dynamic from 'next/dynamic';
import Head from 'next/head';

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
const MembersOverview = dynamic(() => import('../components/members-overview.js'));

function Cocreation() {
  return <div className="root">
    <Head>
      <title key="title">Cocreation | Technology Park Ypenburg</title>
      <meta key="og:title" property="og:title" content="Cocreation | Technology Park Ypenburg" />
      <meta key="og:description" property="og:description" content="Build your network, build your business, and build your friendships all within our passionate community." />
      <meta key="description" name="description" content="Build your network, build your business, and build your friendships all within our passionate community." />
    </Head>

    <Navigation />

    <PageHeader
      smallCapsTitle="Co-creation"
      smallCapsTitleColor="white"
      title="TPY Co-creation"
      imageBk="/static/pages/community/community.jpg"
      image="/static/pages/co-creation/tpy-co-creation-header-image.jpg"
      style={{backgroundPosition: '68% 50%'}}
    />

    <IntroText>
      <p>
        In life together you are stronger and that is the same for business. Co-creation is a big pillar within our EcoSystem. We facilitate in various dimensions, to make sure our members have everything they need to improve and achieve common goals. 
      </p>
      <p>
        We drive events which are educational in content or challenging through events like “Hackathons” and “Makethons”. In addition, we set up innovation projects for products and processes and help find the appropriate local, regional, national and european funding initiatives to help accelerate your development.
      </p>
      <p>
        Our open community thrives to connect with the best of the best. Our community members focus on developing innovative solutions in the field of high-tech manufacturing through collaboration. Through collaboration and co-creation, innovative solutions have been developed in our community. Interested in what has been co-created so far by our members? Please visit our [/acceleration](testimonial page).
      </p>
    </IntroText>

    <MembersOverview />

    <div>
      <FooterBanner
        title="Come and see for yourself what Technology Park Ypenburg has to offer you!"
        buttonText="book a tour"
        buttonLink="/contact"
      />
    </div>

    <NewsletterSubscribe />

    <Footer />

  </div>
}

export default Cocreation;
