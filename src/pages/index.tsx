import { Container } from '@chakra-ui/react';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import LeaderBoardWrapper from '../components/Dashboard/LeaderBoardWrapper';
import { xpTableType } from '../interfaces/xpTable';
import { getXPRecordFunction } from '../lib/airtable';
export default function Home(props: {
  xpDataJson: xpTableType[];
}) {
  const { xpDataJson } = props;
  console.log('xp data in index - ', xpDataJson);

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
  console.log('xp data on server -', xpDataJson);

  return {
    props: {
      xpDataJson: xpDataJson,
    },
    revalidate: 10,
  };
}
