import React from "react";
import { useTheme } from "react-jss";
import FooterCards from "../../Components/Cards/Layouts/FooterCards";
import Column from "../../Components/Containers/Columns/Column";
import Container from "../../Components/Containers/Container";
import DragFramelessFive from "../../Components/Devices/Layouts/DragFramelessFive";
import GroupedMobileDesktop from "../../Components/Devices/Layouts/GroupedMobileDesktop";
import Vignettes from "../../Components/Vignettes/Vignettes";
import ExternalLink from "../../UI/Links/ExternalLink/ExternalLink";
import Font from "../../Utils/Font/Font";
import NumberedList from "../../Utils/Font/NumberedList/NumberedList";
import Spacer from "../../Utils/Spacer/Spacer";
import SpacerEightyHalf from "../../Utils/Spacer/Variations/SpacerEightyHalf";

const DashIntroduction = () => {
  return (
    <>
      <SpacerEightyHalf />
      <Container>
        <Font type='h4'>Head of Design</Font>
        <Font type='h1'>
          US Mobile PWA <br />
          Dashboard use case
        </Font>
        <Spacer height={32} />
        <Font type='h5'>Illustrations - Interface - Design systems</Font>
        <Column spacer third>
          <Font type='text'>
            US Mobile is a telecom company that sells T-Mobile and Verizon
            networks. We focus on highly customizable and affordable plans for
            your devices.
          </Font>
          <Font type='text'>
            As the Lead Product Designer and Head of Design at US Mobile, I am
            directly involved in defining the product strategy, responsible for
            designing the UI and product usability. Finally, I am supervising
            our front-end team to ensure the quality of the result.
          </Font>
        </Column>
      </Container>
    </>
  );
};

const DashContext = () => {
  return (
    <>
      <Container>
        <Spacer height={64} />
        <Font type='h4'>Context</Font>
        <Column spacer third>
          <Font type='text'>
            ile’s legacy dashboard is old, unresponsive, and it is very
            laborious to add new features and customer requirements to it.
          </Font>
        </Column>
        <Spacer height={32} />
      </Container>
      <Vignettes src='' alt='Legacy version of the dashboard' />
      <Container>
        <Spacer height={40} />
        <Column spacer third>
          <Font type='text'>
            How can we modernize our dashboard solution to new design standards?
            cross-platform compatible (desktop to smartphone stores) and st –no
            connectivity required?With our limited resources ~8 employees in
            total.
          </Font>
          <Font type='text'>
            irely reinvented our designs and processes, genuinely focused
            -platform components with a brand new graphic style- randing.Our
            Design System Library is made of React compone n be improved with
            the addition of new features.
          </Font>
        </Column>
        <Spacer height={24} />
      </Container>
      <Vignettes src='' alt='Legacy version of the dashboard' />
    </>
  );
};

const DashProcess = () => {
  return (
    <Container>
      <Spacer height={64} />
      <Font type='h4'>Design process</Font>
      <Column spacer third>
        <Font type='text'>
          As a tiny team, we do not have the resources to facilitate customer
          interviews within the design process.
        </Font>
        <Font type='text'>
          Therefore, I’m adapting design thinking processes to what’s feasible.
          I extensively draft sketches and concepts to challenge our
          assumptions. I unfold the iterative and testings loops internally,
          among all company stakeholders.
        </Font>
        <Font type='text'>
          When finally satisfied, I use video recording tools like Hotjar,
          Google Analytics data, and customer feedback from forms and emails. It
          serves to track problems, misunderstandings and to gather new
          hypotheses and suggestions.
        </Font>
      </Column>
    </Container>
  );
};

const DashRequierements = () => {
  return (
    <Container>
      <Spacer height={64} />
      <Font type='h4'>Business requirements</Font>
      <Column spacer third>
        <NumberedList number='1'>
          <Font type='text'>
            A dashboard that can easily support new features and future business
            requirements, both technically and visually (think family plans,
            usage history, IoT…).
          </Font>
        </NumberedList>
        <NumberedList number='2'>
          <Font type='text'>
            Updated with the latest branded UI components.
          </Font>
        </NumberedList>
        <NumberedList number='3'>
          <Font type='text'>
            Designed as a standalone product: everything needed to be a US
            Mobile customer–from ordering your Starter Kit, activating it, to
            managing your phone line– should be included. That way, it can be
            deployed to the Android and App Stores.
          </Font>
        </NumberedList>
        <NumberedList number='4'>
          <Font type='text'>
            Built to work with no connectivity–so the customer can always keep
            track of what’s left.We decided to go with PWA technology.
          </Font>
        </NumberedList>
      </Column>
    </Container>
  );
};

const DashProduction = () => {
  return (
    <>
      <Container>
        <Spacer height={64} />
        <Font type='h4'>Production steps</Font>
        <Column spacer third>
          <Font type='h5'>Dashboard MVP 1</Font>
          <Font type='text'>
            Release the same amount of features available in the legacy
            dashboard so it can be quickly replaced and tested rapidly.
          </Font>
          <Font type='h5'>Dashboard MVP 2</Font>
          <Font type='text'>
            Release enough features to get a standalone app available on the App
            Store.
          </Font>
        </Column>
        <Spacer height={24} />
      </Container>
      <Vignettes
        src=''
        alt='Each user story and design specs are always documented (here, in Notion).'
      />
    </>
  );
};

const DashDesigns = () => {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Spacer height={64} />
        <Column spacer third>
          <Font type='h4'>Design and Details</Font>
          <Font type='text'>
            Some detail of screens designed for the dashboard, shown on both
            desktop and mobile mediums.
          </Font>
        </Column>
        <Spacer height={24} />
      </Container>
      <GroupedMobileDesktop srcDesktop={[]} srcMobile={[]} />
      <Container>
        <Spacer height={32} />
        <Column spacer third>
          <Font type='h5'>
            e.g. of design decision to help solve a business problem
          </Font>
          <Font type='text'>
            To allow future customer line features, without changing the design
            again intensely, we decided to use horizontal navigation rather than
            a side one. It would be more comfortable at first to display no
            navigation/features and add them up horizontally rather than having
            empty side navigation that would expend only slowly in the future.
          </Font>
        </Column>
        <Spacer height={24} />
      </Container>
      <GroupedMobileDesktop srcDesktop={[]} srcMobile={[]} />
      <Container>
        <Spacer height={80} />
        <Font type='h5'>Play with a prototype</Font>
        <ExternalLink
          path='/'
          color={theme.text}
          value='Prototype of the activation flow'
        />
      </Container>
    </>
  );
};

const DashLibrary = () => {
  return (
    <>
      <Container>
        <Spacer height={104} />
        <Column spacer third>
          <Font type='h4'>Design library system for desktop & mobile</Font>
          <Font type='text'>
            I created a Design Library of fully responsive components for US
            Mobile to improve the pace of front-end and design deployment.
          </Font>
        </Column>
        <Spacer height={24} />
      </Container>
      <Vignettes
        src=''
        alt='Regularly updated and documented design library, constantly updated'
      />
      <Spacer c height={40} />
      <Vignettes src='' alt='Guidelines applied to the mobile profiles' />
      <Spacer c height={64} />
      <Container>
        <Font type='h4'>A standalone app for the App Store</Font>
      </Container>
      <Spacer c height={40} />
      <DragFramelessFive src={[]} />
      <Container>
        <Spacer height={80} />
        <Column spacer third>
          <Font type='text'>
            We are only half-way through the deployment of our solution, but
            already, the team is more excited to develop new features onto it,
            using these new technologies that work.˝
          </Font>
          <Font type='text'>
            Customers are very responsive and pleased by the newly gained
            clarity of their dashboard, the new features, and the level of
            customization they can add to it.
          </Font>
          <Font type='text'>Thanks for reading.</Font>
        </Column>
      </Container>
    </>
  );
};

const Dashboard = () => {
  const theme = useTheme();

  return (
    <>
      <Vignettes hero src={[]} background={theme.usmobile.background} />
      <DashIntroduction />
      <DashContext />
      <DashProcess />
      <DashRequierements />
      <DashProduction />
      <Spacer c height={64} />
      <Vignettes
        big
        alt='Example of a user journey for the Starter Kit activation feature, with its backend and business rules'
        background={theme.usmobile.background}
      />
      <DashDesigns />
      <DashLibrary />

      {/* /// Footer */}
      <Spacer c height={80} />
      <FooterCards
        footer
        title={{
          color: [theme.text, theme.text, theme.text],
          value: ["Previous", "Random", "Next"],
        }}
        background={{
          color: [theme.grey, theme.grey, theme.grey],
          hover: [theme.hover, theme.hover, theme.hover],
        }}
        status={["loading", "loading", "stop"]}
        src={["", "", ""]}
        alt={["", "", ""]}
      />
    </>
  );
};

export default Dashboard;
