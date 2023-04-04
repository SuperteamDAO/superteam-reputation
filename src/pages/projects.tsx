import { Container, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { ProjectsTable } from '../components/Dashboard/Leaderboard';

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
  return (
    <Container
      m="0"
      p="0"
      maxW={'full'}
      backgroundColor={useColorModeValue(
        'superteamSurfacePrimaryLM',
        'superteamSurfacePrimaryDM'
      )}
    >
      <ProjectsTable
        row={data}
        sortOrder={'none'}
        searchResult={searchResult}
      />
    </Container>
  );
}

export async function getStaticProps() {
  return axios
    .get(
      'https://reputation-backend-production-1e2d.up.railway.app/api/v1/xp/projects'
    )
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
