import { Container, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import config from '../../config/general.config';
import { ProjectsTable } from '../components/Dashboard/Leaderboard';
import SEO from '../components/SEO/SEO';

export type memberDetailsType = {
  id: string;
  name: string;
  xp: number;
  skill: string;
  project_name: string;
};
export type projectDataType = {
  id: string;
  project_name: string;
  total_xp: number;
  lead_name: string;
  members: memberDetailsType[] | null;
};

type propsType = {
  projectsData: projectDataType[];
};

export default function Projects({ projectsData }: propsType) {
  const [data, setData] = React.useState(projectsData);
  const [wordEntered, setWordEntered] = React.useState('');
  const [searchResult, setSearchResult] = React.useState(false);
  const handleSearch = (event: { target: { value: any } }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    if (searchWord === '') {
      setSearchResult(false);
      return setData(projectsData);
    }

    if (searchWord !== '') {
      setSearchResult(true);
    }

    const newFilter = projectsData.filter((value) => {
      return value.project_name
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    setData(newFilter);
  };

  for (let i = 0; i < data.length; i++) {
    if (data[i].members != null) {
      for (let j = 0; j < data[i].members!.length; j++) {
        if (data[i].members![j].skill === "Ops")
          data[i].members![j].skill = "Operations";
      }
    }
  }

  return (
    <>
      <SEO
        title={`${config.general.name} - Projects`}
        description={`${config.general.name} Projects for SuperteamDAO`}
        image={`https://res.cloudinary.com/demonicirfan/image/upload/v1669216518/Frame_910_ofy3nr.png`}
      />
      <main>
        <Container
          m="0"
          p="0"
          maxW={'full'}
          backgroundColor={useColorModeValue(
            'superteamWhite.100',
            'superteamGreyDT.1000'
          )}
        >
          <ProjectsTable
            row={data}
            sortOrder={'none'}
            searchResult={searchResult}
          />
        </Container>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return axios
    .get(`${process.env.PROJECTS_URL}`)
    .then(async (res) => {
      const projectsData = res.data.data;
      return {
        props: {
          projectsData,
        },
        revalidate: 10,
      };
    })
    .catch((err) => {
      console.log('err -> ', err);
      return {
        props: {
          projectsData: {},
        },
        revalidate: 10,
      };
    });
}
