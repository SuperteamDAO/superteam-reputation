import Link from 'next/link';
import useSWR from 'swr';
import Image from 'next/image';
import {
  Box,
  Button,
  Collapse,
  Container,
  List,
  ListItem,  
} from '@chakra-ui/react';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Navbar() {
  const { data, error } = useSWR('/api/airtableData/?query=title', fetcher);
  if (!data) return 'Loading..';
  if (error) return 'Failed to load';

  const { cabs, projects } = data;
  const projectIds = projects || [];

  const cabIds = cabs || [];

  return (
    <Container>
      <Box>
        <Link href="https://superteam.fun">
          <Image
            className="navbar-brand"
            src="/favicon.ico"
            width={48}
            height={50}
            alt="superteam logo"
            style={{ borderRadius: '50%', cursor: 'pointer' }}
          />
        </Link>
      </Box>
      <Button>
        <Box as="span"></Box>
      </Button>

      <Collapse>
        <List>
          <List>
            <ListItem>
              <a>Leaderboard</a>
            </ListItem>
          </List>
          <ListItem>
            <Link href="/indie">
              <a>Indie Work</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/bounties">
              <a>Bounties</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/braintrust">
              <a>Braintrust</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/stackxp">
              <a>StackEx XP</a>
            </Link>
          </ListItem>
          <ListItem>
            <a>Projects</a>
            <Box>
              {projectIds.map((id: any) => (
                <Link
                  key={id}
                  href={`/project/${id.replace(/ /g, '_').toLowerCase()}`}
                >
                  <a>{id}</a>
                </Link>
              ))}
            </Box>
          </ListItem>
          <Box>
            <a>CAB & SubDAO</a>
            <Box>
              {cabIds.map((id: any) => (
                <Link
                  key={id}
                  href={`/cab/${id.replace(/ /g, '_').toLowerCase()}`}
                >
                  <a>{id}</a>
                </Link>
              ))}
            </Box>
          </Box>
          <List>
            <Link href="/claimxp">
              <a>Claim XP Form</a>
            </Link>
          </List>
        </List>
      </Collapse>
    </Container>
  );
}
