import { Container } from '@chakra-ui/react';
import axios from 'axios';
import config from '../../config/general.config';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import LeaderBoardWrapper from '../components/Dashboard/LeaderBoardWrapper';
import SEO from '../components/SEO/SEO';
import { receivedXPFromAirtableType } from '../interfaces/airtableRecievedXP';
import { dashboardDataType } from '../interfaces/dashboardStore';

export default function Home(props: {
  dashboardData: dashboardDataType[];
  bountyDataJson: any;
  lastSevenDaysData: receivedXPFromAirtableType[];
}) {
  const { dashboardData, lastSevenDaysData } = props;
  console.log('dash data - ', dashboardData.length);
  // console.log('last seven days data - ', lastSevenDaysData);

  return (
    <>
      <SEO
        title={`${config.general.name}`}
        description={`${config.general.name} System Dashboard for SuperteamDAO`}
        image={`https://res.cloudinary.com/demonicirfan/image/upload/v1669216518/Frame_910_ofy3nr.png`}
      />
      <main>
        <Container maxW="full" p="0">
          <DashboardHeader lastSevenDaysData={lastSevenDaysData} />
          <LeaderBoardWrapper dashboardData={dashboardData} />
        </Container>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return axios
    .get(`${process.env.BACKEND_URL}/xp`)
    .then(async (res) => {
      const personData = res.data.personData;
      const bountyDataJson = res.data.bountyDataJson;
      const lastSevenDaysData = res.data.lastSevenDaysData;
      return {
        props: {
          bountyDataJson,
          dashboardData: personData,
          lastSevenDaysData,
        },
        revalidate: 10,
      };
    })
    .catch((err) => {
      console.log('err -> ', err);
      return {
        props: {
          bountyDataJson: {},
          dashboardData: {},
          lastSevenDaysData: {},
        },
        revalidate: 10,
      };
    });
}
