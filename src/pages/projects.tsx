import { Container, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import config from '../../config/general.config';
import { ProjectsTable } from '../components/Dashboard/Leaderboard';
import SEO from '../components/SEO/SEO';
import { getProjectsFunction, getProjectXPFunction } from '../lib/airtable';

export type memberDetailsType = {
  name: string;
  totalXp: number;
  type: string;
  skill: string;
  project: string;
};

export type projectDataType = {
  title: string;
  url: string;
  description: string;
  multiplier: number;
  leadName: string;
  totalXp: number;
  members: string[];
};

type propsType = {
  projectsData: projectDataType[];
  membersData: memberDetailsType[];
};

export default function Projects({ projectsData, membersData }: propsType) {
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
      return value.title
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    setData(newFilter);
  };

  // for (let i = 0; i < data.length; i++) {
  //   if (data[i].members != null) {
  //     for (let j = 0; j < data[i].members!.length; j++) {
  //       if (data[i].members![j].skill === "Ops")
  //         data[i].members![j].skill = "Operations";
  //     }
  //   }
  // }

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
            members={membersData}
          />
        </Container>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const projectsData = await getProjectsFunction();
  const membersData = await getProjectXPFunction();

  return {
    props: {
      projectsData,
      membersData
    }
  };
}
