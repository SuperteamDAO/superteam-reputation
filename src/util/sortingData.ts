import { dashboardDataType } from '../interfaces/dashboardStore';
export enum SortByXp {
  lowToHighXp = 'Xp Low to High',
  highToLowXp = 'Xp High to Low',
}
const sortingXpDataUtil = (data: dashboardDataType[], order: SortByXp) => {
  switch (order) {
    case SortByXp.lowToHighXp:
      return data.sort((a, b) => {
        return (
          a.overallXP.details.total_amount - b.overallXP.details.total_amount
        );
      });
    case SortByXp.highToLowXp:
      return data.sort((a, b) => {
        return (
          b.overallXP.details.total_amount - a.overallXP.details.total_amount
        );
      });
    default:
      return data;
  }
};

export default sortingXpDataUtil;
