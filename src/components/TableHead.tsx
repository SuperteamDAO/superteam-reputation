const TableHeading = ({ _children, ...props }: any) => {
  return (
    <div>
      <p>{JSON.stringify(props.rows)}</p>
      <table>
        <thead>
          <tr>
            {props.rows.map((row: any, index: any) => {
              return <th key={index}>{typeof row.total_points}</th>;
            })}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default TableHeading;
