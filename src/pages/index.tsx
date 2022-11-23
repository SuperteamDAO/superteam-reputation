import { Container } from '@chakra-ui/react';
import config from '../../config/general.config';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import LeaderBoardWrapper from '../components/Dashboard/LeaderBoardWrapper';
import { dashboardDataType } from '../components/Dashboard/Row/interfaces/dashboardStore';
import SEO from '../components/SEO/SEO';
import { dataCalculator } from '../util/dataCalculator';

export default function Home(props: {
  dashboardData: dashboardDataType[];
  bountyDataJson: any;
}) {
  const { dashboardData } = props;

  return (
    <>
      <SEO
        title={`${config.general.name}`}
        description={`${config.general.name} System Dashboard`}
        image={`https://res.cloudinary.com/demonicirfan/image/upload/v1669216518/Frame_910_ofy3nr.png`}
      />
      <main>
        <Container maxW="full" p="0">
          <DashboardHeader />
          <LeaderBoardWrapper dashboardData={dashboardData} />
        </Container>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { personData, bountyDataJson } = await dataCalculator();

  return {
    props: {
      bountyDataJson,
      dashboardData: personData,
    },
    revalidate: 10,
  };
}
