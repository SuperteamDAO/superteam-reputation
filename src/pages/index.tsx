import { Container } from '@chakra-ui/react';
import axios from 'axios';
import config from '../../config/general.config';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import LeaderBoardWrapper from '../components/Dashboard/LeaderBoardWrapper';
import SEO from '../components/SEO/SEO';
import { dashboardDataType } from '../interfaces/dashboardStore';

export default function Home(props: {
  dashboardData: dashboardDataType[];
  bountyDataJson: any;
}) {
  const { dashboardData } = props;
  console.log('dash data - ', dashboardData.length);
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
  // fetch personData, bountyDataJson from process.env.BACKEND_URL using axios
  return axios
    .get(`${process.env.BACKEND_URL}/xp`)
    .then(async (res) => { 
      const personData = res.data.personData;
      const bountyDataJson = res.data.bountyDataJson;
      return {
        props: {
          bountyDataJson,
          dashboardData: personData,
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
        },
        revalidate: 10,
      };
    });
}
