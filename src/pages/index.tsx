import { Container } from '@chakra-ui/react';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import LeaderBoardWrapper from '../components/Dashboard/LeaderBoardWrapper';
import { ProjectsXPType } from '../interfaces/projectsXP';
import { xpTableType } from '../interfaces/xpTable';
import {
  getBountiesRecordsFunction,
  getXPFromAllViews,
  getXPRecordFunction,
} from '../lib/airtable';
export default function Home(props: {
  bountyDataJson: any;
  xpDataJson: xpTableType[];
  xpDataWithDate: ProjectsXPType[];
}) {
  const { bountyDataJson, xpDataJson, xpDataWithDate } = props;
  console.log('total xp with date - ', xpDataWithDate.length);
  return (
    <main>
      <Container maxW={'full'} p="0">
        <DashboardHeader />
        <LeaderBoardWrapper xpData={xpDataJson} />
      </Container>
    </main>
  );
}

export async function getStaticProps() {
  const xpDataWithDate = await getXPFromAllViews();
  const xpDataJson = await getXPRecordFunction();
  const bountyDataJson = await getBountiesRecordsFunction();

  return {
    props: {
      bountyDataJson,
      xpDataJson: xpDataJson,
      xpDataWithDate,
    },
    revalidate: 10,
  };
}
