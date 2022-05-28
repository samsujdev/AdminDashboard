import React from 'react';
import DataTable from 'react-data-table-component';

function UserList() {
  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
      name: 'Year',
      selector: row => row.year,
  },{
    name: 'Id',
    selector: row => row.id,
},
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
},{
  id: 2,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 3,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 4,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 5,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 6,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 7,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 8,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 9,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 10,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 11,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 12,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 13,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 14,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 15,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 16,
  title: 'Beetlejuice',
  year: '1988',
},{
  id: 17,
  title: 'Beetlejuice',
  year: '1988',
},
    {
        id: 18,
        title: 'Ghostbusters',
        year: '1984',
    },
];

  return (
    <React.Fragment>
    <div className="test">
    <DataTable
            columns={columns}
            data={data}
            pagination 
        />
    </div>
    </React.Fragment>
  );
}

export default UserList;
