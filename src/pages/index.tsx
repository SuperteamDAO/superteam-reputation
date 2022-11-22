import { Container } from '@chakra-ui/react';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import LeaderBoardWrapper from '../components/Dashboard/LeaderBoardWrapper';
import { dashboardDataType } from '../components/Dashboard/Row/interfaces/dashboardStore';
import { dataCalculator } from '../util/dataCalculator';
export default function Home(props: {
  dashboardData: dashboardDataType[];
  bountyDataJson: any;
}) {
  const { dashboardData } = props;
  return (
    <main>
      <Container maxW={'full'} p="0">
        <DashboardHeader />
        <LeaderBoardWrapper dashboardData={dashboardData} />
      </Container>
    </main>
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
