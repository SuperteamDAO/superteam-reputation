import { dashboardDataType } from '../components/Dashboard/Row/interfaces/dashboardStore';

export function filteredData(data: dashboardDataType[]) {
  const ContributorsData = data.map((item) => {
    if (item.personType === 'Contributor') {
      return item.overallXP.details;
    }
  });

  const filteredContributorsData = ContributorsData.filter(
    (item) => item !== undefined
  );

  const MembersData = data.map((item) => {
    if (item.personType === 'Member') {
      return item.overallXP.details;
    }
  });

  const filteredMembersData = MembersData.filter((item) => item !== undefined);

  const ProjectWorkXPData = data.map((item) => {
    if (item.projectWorkXP) {
      return item.projectWorkXP;
    }
  });

  // filter the undefined values from the projectworkxp array
  const filteredProjectWorkXPData = ProjectWorkXPData.filter(
    (item) => item !== undefined
  );

  const IndieWorkXPData = data.map((item) => {
    if (item.indieWorkXP) {
      return item.indieWorkXP;
    }
  });

  const filteredIndieWorkXPData = IndieWorkXPData.filter(
    (item) => item !== undefined
  );

  const workingGroupXPData = data.map((item) => {
    if (item.workingGroupsXP) {
      return item.workingGroupsXP;
    }
  });

  const filteredWorkingGroupXPData = workingGroupXPData.filter(
    (item) => item !== undefined
  );

  const internalOperationsXPData = data.map((item) => {
    if (item.internalOpsXP) {
      return item.internalOpsXP;
    }
  });
  const filteredInternalOperationsXPData = internalOperationsXPData.filter(
    (item) => item !== undefined
  );

  const stackExchangeXPData = data.map((item) => {
    if (item.stackExchangeXP) {
      return item.stackExchangeXP;
    }
  });
  const filteredStackExchangeXPData = stackExchangeXPData.filter(
    (item) => item !== undefined
  );

  const bountiesXPData = data.map((item) => {
    if (item.stackExchangeXP) {
      return item.stackExchangeXP;
    }
  });
  const filteredBountiesXPData = bountiesXPData.filter(
    (item) => item !== undefined
  );

  const allXPData_data = data.map((item) => {
    if (item.overallXP.details) {
      return item.overallXP.details;
    }
  });

  // filter total xp if it is undefined remove that field from the array
  const allXPData = allXPData_data.filter(
    (item) => item?.total_amount !== undefined
  );

  return {
    allXPData,
    filteredMembersData,
    filteredBountiesXPData,
    filteredIndieWorkXPData,
    filteredContributorsData,
    filteredProjectWorkXPData,
    filteredWorkingGroupXPData,
    filteredStackExchangeXPData,
    filteredInternalOperationsXPData,
  };
}
