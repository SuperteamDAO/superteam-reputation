import { Container } from '@chakra-ui/react';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import LeaderBoardWrapper from '../components/Dashboard/LeaderBoardWrapper';
import { xpTableType } from '../interfaces/xpTable';
import {
  getBountiesRecordsFunction,
  getXPRecordFunction,
} from '../lib/airtable';
export default function Home(props: {
  bountyDataJson: any;
  xpDataJson: xpTableType[];
}) {
  const { bountyDataJson, xpDataJson } = props;

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
  const xpDataJson = await getXPRecordFunction();
  const bountyDataJson = await getBountiesRecordsFunction();

  return {
    props: {
      bountyDataJson,
      xpDataJson: xpDataJson,
    },
    revalidate: 10,
  };
}
